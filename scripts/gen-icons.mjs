// One-shot PNG icon generator for the ForgeFit PWA (FEAT-006).
// Pure Node (zlib) — no native image deps. Produces committed brand icons:
//   public/icons/icon-192.png, icon-512.png  (regular, with padding)
//   public/icons/maskable-192.png, maskable-512.png (full-bleed safe zone)
//   public/icons/apple-touch-icon.png (180)
// Palette: background #09090b, primary #22c55e. The glyph is a simple barbell.
// Idempotent: re-running overwrites the same bytes. Not part of the build.
import { deflateSync } from 'node:zlib'
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'icons')
mkdirSync(OUT, { recursive: true })

const BG = [0x09, 0x09, 0x0b]
const FG = [0x22, 0xc5, 0x5e]

function crc32(buf) {
  let c = ~0
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i]
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1))
  }
  return ~c >>> 0
}

function chunk(type, data) {
  const len = Buffer.alloc(4)
  len.writeUInt32BE(data.length, 0)
  const typeBuf = Buffer.from(type, 'ascii')
  const body = Buffer.concat([typeBuf, data])
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(body), 0)
  return Buffer.concat([len, body, crc])
}

function png(size, draw) {
  // RGBA raw image
  const px = Buffer.alloc(size * size * 4)
  const set = (x, y, [r, g, b], a = 255) => {
    if (x < 0 || y < 0 || x >= size || y >= size) return
    const o = (y * size + x) * 4
    px[o] = r
    px[o + 1] = g
    px[o + 2] = b
    px[o + 3] = a
  }
  draw(set, size)

  // filtered scanlines (filter byte 0 per row)
  const stride = size * 4
  const raw = Buffer.alloc((stride + 1) * size)
  for (let y = 0; y < size; y++) {
    raw[y * (stride + 1)] = 0
    px.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride)
  }

  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const ihdr = Buffer.alloc(13)
  ihdr.writeUInt32BE(size, 0)
  ihdr.writeUInt32BE(size, 4)
  ihdr[8] = 8 // bit depth
  ihdr[9] = 6 // colour type RGBA
  const idat = deflateSync(raw, { level: 9 })
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ])
}

// rounded-rect fill helper
function roundRect(set, x0, y0, w, h, r, color) {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      let inside = true
      // corner rounding
      const cx = x < r ? r - x : x >= w - r ? x - (w - r - 1) : 0
      const cy = y < r ? r - y : y >= h - r ? y - (h - r - 1) : 0
      if (cx > 0 && cy > 0 && cx * cx + cy * cy > r * r) inside = false
      if (inside) set(x0 + x, y0 + y, color)
    }
  }
}

function drawBarbell(set, size, pad) {
  const s = size - pad * 2
  const cy = Math.round(size / 2)
  const barH = Math.max(2, Math.round(s * 0.1))
  const barY = cy - Math.round(barH / 2)
  // center bar
  roundRect(set, pad + Math.round(s * 0.18), barY, Math.round(s * 0.64), barH, 1, FG)
  // plates (two each side)
  const plateW = Math.max(3, Math.round(s * 0.09))
  const plates = [
    { x: pad + Math.round(s * 0.08), h: s * 0.5 },
    { x: pad + Math.round(s * 0.2), h: s * 0.68 },
    { x: pad + s - Math.round(s * 0.08) - plateW, h: s * 0.5 },
    { x: pad + s - Math.round(s * 0.2) - plateW, h: s * 0.68 },
  ]
  for (const p of plates) {
    const h = Math.round(p.h)
    roundRect(set, p.x, cy - Math.round(h / 2), plateW, h, Math.round(plateW / 2), FG)
  }
}

function makeIcon(size, { maskable }) {
  // maskable: fill the whole canvas BG (safe zone), smaller glyph padding.
  // regular: BG rounded square card on transparent, glyph inside.
  return png(size, (set) => {
    if (maskable) {
      for (let y = 0; y < size; y++)
        for (let x = 0; x < size; x++) set(x, y, BG)
      drawBarbell(set, size, Math.round(size * 0.28))
    } else {
      // transparent background, rounded BG card
      roundRect(set, 0, 0, size, size, Math.round(size * 0.18), BG)
      drawBarbell(set, size, Math.round(size * 0.2))
    }
  })
}

const files = [
  ['icon-192.png', makeIcon(192, { maskable: false })],
  ['icon-512.png', makeIcon(512, { maskable: false })],
  ['maskable-192.png', makeIcon(192, { maskable: true })],
  ['maskable-512.png', makeIcon(512, { maskable: true })],
  ['apple-touch-icon.png', makeIcon(180, { maskable: true })],
]

for (const [name, buf] of files) {
  writeFileSync(join(OUT, name), buf)
  console.log('wrote', name, buf.length, 'bytes')
}
