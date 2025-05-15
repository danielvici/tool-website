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
        <h1 className="text-4xl font-bold mb-8 text-white">Password Generator</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password Length: {length}
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
                  className="rounded border-gray-600 bg-zinc-700 text-blue-500 mr-2 focus:ring-blue-500 focus:ring-offset-zinc-800"
                />
                <span className="text-gray-300">Numbers</span>
              </label>

              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="rounded border-gray-600 bg-zinc-700 text-blue-500 mr-2 focus:ring-blue-500 focus:ring-offset-zinc-800"
                />
                <span className="text-gray-300">Special Characters</span>
              </label>
            </div>

            <button
              onClick={generatePassword}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Generate Password
            </button>

            {password && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Generated Password:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    readOnly
                    value={password}
                    className="flex-1 bg-zinc-700 text-white rounded-l-md border border-gray-600 p-2"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(password)}
                    className="bg-zinc-700 px-4 rounded-r-md border-t border-r border-b border-gray-600 text-gray-300 hover:bg-zinc-600 transition-colors"
                  >
                    Copy
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