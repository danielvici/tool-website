'use client'
import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export default function ImageConverter() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [convertTo, setConvertTo] = useState('png')
  const [isConverting, setIsConverting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null)
    if (acceptedFiles[0]) {
      setSelectedFile(acceptedFiles[0])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    multiple: false
  })

  const handleConvert = async () => {
    if (!selectedFile) return
    setError(null)
    setIsConverting(true)

    try {
      const formData = new FormData()
      formData.append('file', selectedFile)
      formData.append('format', convertTo)

      const response = await fetch('/api/convert', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Conversion failed')
      }

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `picture_converted_to.${convertTo}`
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsConverting(false)
    }
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Image Converter</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* Drag & Drop Zone */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
                ${isDragActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-600 hover:border-blue-500'}
              `}
            >
              <input {...getInputProps()} />
              <p className="text-gray-300">
                {isDragActive
                  ? 'Drop the image here...'
                  : 'Drag & drop an image here, or click to select'}
              </p>
              {selectedFile && (
                <p className="mt-2 text-blue-400">
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            {/* Format Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Target Format
              </label>
              <select
                value={convertTo}
                onChange={(e) => setConvertTo(e.target.value)}
                className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2"
              >
                <option value="png">PNG</option>
                <option value="jpg">JPG</option>
                <option value="webp">WebP</option>
                <option value="gif">GIF</option>
              </select>
            </div>

            {/* Error Message */}
            {error && (
              <div className="text-red-500 text-sm p-3 bg-red-500/10 rounded-md border border-red-500/20">
                {error}
              </div>
            )}

            {/* Convert Button */}
            <button
              onClick={handleConvert}
              disabled={!selectedFile || isConverting}
              className={`w-full py-2 px-4 rounded-md text-white transition-colors
                ${!selectedFile || isConverting
                  ? 'bg-blue-500/50 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'}
              `}
            >
              {isConverting ? 'Converting...' : 'Convert'}
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 