'use client'
import { useState, useRef } from 'react'
import QRCode from 'qrcode'

export default function QRGenerator() {
  const [text, setText] = useState('')
  const [qrDataUrl, setQrDataUrl] = useState('')
  const [size, setSize] = useState(300)
  const [darkColor, setDarkColor] = useState('#000000')
  const [lightColor, setLightColor] = useState('#FFFFFF')
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const generateQR = async () => {
    if (!text) return

    try {
      const canvas = canvasRef.current
      if (!canvas) return

      await QRCode.toCanvas(canvas, text, {
        width: size,
        margin: 2,
        color: {
          dark: darkColor,
          light: lightColor
        }
      })

      setQrDataUrl(canvas.toDataURL('image/png'))
    } catch (err) {
      console.error('Error generating QR code:', err)
    }
  }

  const downloadQR = () => {
    if (!qrDataUrl) return

    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = qrDataUrl
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">QR Code Generator</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-gray-300">
              Generate QR codes for text, URLs, or any other content. Customize the size and colors,
              then download the QR code as a PNG image.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Text or URL
              </label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text or URL"
                className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Size: {size}x{size} pixels
              </label>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  QR Code Color
                </label>
                <input
                  type="color"
                  value={darkColor}
                  onChange={(e) => setDarkColor(e.target.value)}
                  className="w-full h-10 rounded-md cursor-pointer bg-zinc-700 p-1"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Background Color
                </label>
                <input
                  type="color"
                  value={lightColor}
                  onChange={(e) => setLightColor(e.target.value)}
                  className="w-full h-10 rounded-md cursor-pointer bg-zinc-700 p-1"
                />
              </div>
            </div>

            <button
              onClick={generateQR}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Generate QR Code
            </button>

            <div className="flex justify-center">
              <canvas ref={canvasRef} className="hidden" />
              {qrDataUrl && (
                <div className="space-y-4">
                  <img
                    src={qrDataUrl}
                    alt="Generated QR Code"
                    className="mx-auto border-4 border-white rounded-lg"
                  />
                  <button
                    onClick={downloadQR}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
                  >
                    Download QR Code
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 