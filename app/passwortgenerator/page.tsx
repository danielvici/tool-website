'use client'
import { useState } from 'react'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(12)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const generatePassword = () => {
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    let chars = letters
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)]
    }

    setPassword(newPassword)
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Passwort Generator</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Passwortlänge: {length}
              </label>
              <input
                type="range"
                min="8"
                max="32"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full mt-2"
              />
            </div>

            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 mr-2"
                />
                Zahlen
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 mr-2"
                />
                Sonderzeichen
              </label>
            </div>

            <button
              onClick={generatePassword}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Passwort generieren
            </button>

            {password && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Generiertes Passwort:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={password}
                    className="flex-1 border rounded-l-md p-2"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(password)}
                    className="bg-gray-100 px-4 rounded-r-md border-t border-r border-b hover:bg-gray-200"
                  >
                    Kopieren
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
} 