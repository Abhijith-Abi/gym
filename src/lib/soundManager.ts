/**
 * Centralized Sound & Audio Engine for ForgeFit.
 *
 * Uses Web Audio API synthesis for zero-dependency, ultra-low-latency,
 * offline-safe sound effects (no external mp3 files that can 404 or lag).
 * Also integrates Web Speech Synthesis for spoken workout motivation and count calls.
 */

export type WorkoutSoundType =
  | 'set-complete'
  | 'rest-start'
  | 'countdown-beep'
  | 'countdown-go'
  | 'timer-end'
  | 'pr'
  | 'workout-complete'
  | 'achievement'
  | 'button-click'

class SoundManager {
  private audioCtx: AudioContext | null = null
  private isMuted: boolean = false
  private volume: number = 0.8
  private voiceEnabled: boolean = true

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null
    try {
      if (!this.audioCtx) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
        if (AudioContextClass) {
          this.audioCtx = new AudioContextClass()
        }
      }
      if (this.audioCtx && this.audioCtx.state === 'suspended') {
        void this.audioCtx.resume()
      }
      return this.audioCtx
    } catch {
      return null
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol))
  }

  public setVoiceEnabled(enabled: boolean) {
    this.voiceEnabled = enabled
  }

  public play(type: WorkoutSoundType, customVolume?: number) {
    if (this.isMuted) return
    const ctx = this.getContext()
    if (!ctx) return

    const baseVol = (customVolume !== undefined ? customVolume : this.volume) * 0.25

    try {
      const now = ctx.currentTime

      switch (type) {
        case 'set-complete': {
          // Crisp high double chime: E6 (1318Hz) -> G#6 (1661Hz)
          this.playTone(ctx, 1318, now, 0.08, 'sine', baseVol)
          this.playTone(ctx, 1661, now + 0.09, 0.16, 'triangle', baseVol * 1.1)
          break
        }

        case 'rest-start': {
          // Soft transition tone: A4 (440Hz) -> E4 (329Hz)
          this.playTone(ctx, 440, now, 0.1, 'sine', baseVol * 0.7)
          this.playTone(ctx, 329, now + 0.1, 0.2, 'sine', baseVol * 0.6)
          break
        }

        case 'countdown-beep': {
          // Sharp short pip: 880Hz (A5)
          this.playTone(ctx, 880, now, 0.07, 'sine', baseVol * 0.9)
          break
        }

        case 'countdown-go': {
          // Energetic triumph chord: C5 -> E5 -> G5 -> C6
          this.playTone(ctx, 523.25, now, 0.25, 'triangle', baseVol)
          this.playTone(ctx, 659.25, now + 0.06, 0.25, 'triangle', baseVol)
          this.playTone(ctx, 783.99, now + 0.12, 0.25, 'triangle', baseVol)
          this.playTone(ctx, 1046.5, now + 0.18, 0.45, 'sine', baseVol * 1.3)
          break
        }

        case 'timer-end': {
          // Resonant chime bell: 587Hz (D5) -> 880Hz (A5)
          this.playTone(ctx, 587.33, now, 0.5, 'sine', baseVol)
          this.playTone(ctx, 880, now + 0.05, 0.6, 'sine', baseVol * 0.8)
          break
        }

        case 'pr': {
          // Triumphant rising fanfare: G4 -> C5 -> E5 -> G5 -> C6
          const notes = [392, 523.25, 659.25, 783.99, 1046.5]
          notes.forEach((freq, idx) => {
            this.playTone(ctx, freq, now + idx * 0.08, 0.35, 'triangle', baseVol * (1 + idx * 0.1))
          })
          break
        }

        case 'workout-complete': {
          // Big celebratory chord sequence
          const chord1 = [523.25, 659.25, 783.99] // C major
          const chord2 = [587.33, 739.99, 880.0] // D major
          const chord3 = [659.25, 830.61, 987.77] // E major
          const chord4 = [1046.5, 1318.5, 1567.98] // High C

          chord1.forEach((f) => this.playTone(ctx, f, now, 0.3, 'triangle', baseVol * 0.8))
          chord2.forEach((f) => this.playTone(ctx, f, now + 0.22, 0.3, 'triangle', baseVol * 0.8))
          chord3.forEach((f) => this.playTone(ctx, f, now + 0.44, 0.35, 'triangle', baseVol * 0.9))
          chord4.forEach((f) => this.playTone(ctx, f, now + 0.7, 0.7, 'sine', baseVol * 1.2))
          break
        }

        case 'achievement': {
          // Sparkle arpeggio: 880Hz -> 1174Hz -> 1396Hz -> 1760Hz
          const sparkle = [880, 1174.66, 1396.91, 1760]
          sparkle.forEach((f, idx) => {
            this.playTone(ctx, f, now + idx * 0.06, 0.25, 'sine', baseVol * 0.9)
          })
          break
        }

        case 'button-click': {
          // Subtle high mechanical tick
          this.playTone(ctx, 1200, now, 0.02, 'sine', baseVol * 0.4)
          break
        }
      }
    } catch {
      // Audio errors fail silently without breaking app state
    }
  }

  private playTone(
    ctx: AudioContext,
    frequency: number,
    startTime: number,
    duration: number,
    type: OscillatorType = 'sine',
    peakGain: number = 0.1,
  ) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.type = type
    osc.frequency.setValueAtTime(frequency, startTime)

    gain.gain.setValueAtTime(0.0001, startTime)
    gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, peakGain), startTime + 0.015)
    gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration)

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.start(startTime)
    osc.stop(startTime + duration + 0.05)
  }

  public speak(text: string) {
    if (this.isMuted || !this.voiceEnabled) return
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return

    try {
      window.speechSynthesis.cancel() // Cancel any pending utterance
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.volume = this.volume
      utterance.rate = 1.05
      utterance.pitch = 1.0
      window.speechSynthesis.speak(utterance)
    } catch {
      // Voice synthesis failure is gracefully ignored
    }
  }
}

export const soundManager = new SoundManager()
