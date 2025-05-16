'use client'
import { useState } from 'react'

export default function PasswordGenerator() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(16)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)
  const [includeLetters, setIncludeLetters] = useState(true)

  const getStrengthDescription = (len: number) => {
    if (len < 8) return { text: 'Very Weak - Not recommended for security', color: 'text-red-500' }
    if (len < 12) return { text: 'Weak - Only for low-security needs', color: 'text-orange-500' }
    if (len < 16) return { text: 'Moderate - Good for most purposes', color: 'text-yellow-500' }
    if (len < 20) return { text: 'Strong - Recommended for sensitive data', color: 'text-green-500' }
    return { text: 'Very Strong - Excellent for critical security', color: 'text-emerald-500' }
  }

  const generatePassword = () => {
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    // Ensure at least one type is selected
    if (!includeLetters && !includeNumbers && !includeSymbols) {
      setIncludeLetters(true)
      return
    }

    let chars = ''
    if (includeLetters) chars += letters
    if (includeNumbers) chars += numbers
    if (includeSymbols) chars += symbols

    let newPassword = ''
    for (let i = 0; i < length; i++) {
      newPassword += chars[Math.floor(Math.random() * chars.length)]
    }

    setPassword(newPassword)
  }

  const strength = getStrengthDescription(length)

  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Password Generator</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-gray-300">
              Generate secure passwords with customizable options. For maximum security, we recommend:
            </p>
            <ul className="list-disc pl-6 text-gray-300 space-y-1">
              <li>Use at least 16 characters for sensitive accounts</li>
              <li>Include a mix of letters, numbers, and special characters</li>
              <li>Use different passwords for each account</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password Length: {length}
              </label>
              <input
                type="range"
                min="4"
                max="64"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full mt-2"
              />
              <p className={`text-sm mt-2 ${strength.color}`}>
                {strength.text}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={includeLetters}
                  onChange={(e) => setIncludeLetters(e.target.checked)}
                  className="rounded border-gray-600 bg-zinc-700 text-blue-500 mr-2 focus:ring-blue-500 focus:ring-offset-zinc-800"
                />
                <span className="text-gray-300">Letters</span>
              </label>

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