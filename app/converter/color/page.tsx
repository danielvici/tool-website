'use client'
import { useState, useEffect } from 'react'

type ColorFormats = {
  hex: string
  rgb: string
  hsl: string
}

export default function ColorConverter() {
  const [color, setColor] = useState('#000000')
  const [formats, setFormats] = useState<ColorFormats>({
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    hsl: 'hsl(0, 0%, 0%)'
  })

  const hexToRgb = (hex: string): number[] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      : [0, 0, 0]
  }

  const rgbToHsl = (r: number, g: number, b: number): number[] => {
    r /= 255
    g /= 255
    b /= 255

    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }

      h /= 6
    }

    return [
      Math.round(h * 360),
      Math.round(s * 100),
      Math.round(l * 100)
    ]
  }

  const updateFormats = (hex: string) => {
    const rgb = hexToRgb(hex)
    const hsl = rgbToHsl(rgb[0], rgb[1], rgb[2])

    setFormats({
      hex: hex,
      rgb: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
      hsl: `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`
    })
  }

  useEffect(() => {
    updateFormats(color)
  }, [color])

  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Color Converter</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-gray-300">
              Convert colors between different formats: HEX, RGB, and HSL.
              Use the color picker or enter values manually to see the conversions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Color Picker
                </label>
                <input
                  type="color"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className="w-full h-12 rounded-md cursor-pointer bg-zinc-700 p-1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Color Values</h2>
              
              <div className="grid gap-4">
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    HEX
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formats.hex}
                    className="w-full bg-zinc-800 text-white rounded-md border border-gray-700 p-2"
                  />
                </div>

                <div className="bg-zinc-900 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    RGB
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formats.rgb}
                    className="w-full bg-zinc-800 text-white rounded-md border border-gray-700 p-2"
                  />
                </div>

                <div className="bg-zinc-900 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    HSL
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formats.hsl}
                    className="w-full bg-zinc-800 text-white rounded-md border border-gray-700 p-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 