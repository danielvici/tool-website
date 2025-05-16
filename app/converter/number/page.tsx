'use client'
import { useState } from 'react'

export default function NumberConverter() {
  const [value, setValue] = useState('')
  const [fromBase, setFromBase] = useState('10')
  const [error, setError] = useState('')

  const isValidNumber = (num: string, base: string) => {
    const validChars = {
      '2': /^[01]+$/,
      '10': /^[0-9]+$/,
      '16': /^[0-9A-Fa-f]+$/
    }
    return validChars[base as keyof typeof validChars].test(num)
  }

  const convert = (input: string, from: string) => {
    if (!input) return { binary: '', decimal: '', hex: '' }
    
    try {
      if (!isValidNumber(input, from)) {
        throw new Error('Invalid number for selected base')
      }

      const decimal = parseInt(input, parseInt(from))
      if (isNaN(decimal)) throw new Error('Invalid number')

      return {
        binary: decimal.toString(2),
        decimal: decimal.toString(10),
        hex: decimal.toString(16).toUpperCase()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Invalid input')
      return { binary: '', decimal: '', hex: '' }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setError('')
  }

  const results = convert(value, fromBase)

  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Number Converter</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-gray-300">
              Convert numbers between binary (base 2), decimal (base 10), and hexadecimal (base 16) formats.
              Enter a number in any base and see its equivalent representations.
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Input Number
                </label>
                <input
                  type="text"
                  value={value}
                  onChange={handleInputChange}
                  placeholder="Enter a number"
                  className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Input Base
                </label>
                <select
                  value={fromBase}
                  onChange={(e) => setFromBase(e.target.value)}
                  className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2"
                >
                  <option value="2">Binary (Base 2)</option>
                  <option value="10">Decimal (Base 10)</option>
                  <option value="16">Hexadecimal (Base 16)</option>
                </select>
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm p-3 bg-red-500/10 rounded-md border border-red-500/20">
                {error}
              </div>
            )}

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-white">Results</h2>
              
              <div className="grid gap-4">
                <div className="bg-zinc-900 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Binary (Base 2)
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={results.binary}
                    className="w-full bg-zinc-800 text-white rounded-md border border-gray-700 p-2"
                  />
                </div>

                <div className="bg-zinc-900 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Decimal (Base 10)
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={results.decimal}
                    className="w-full bg-zinc-800 text-white rounded-md border border-gray-700 p-2"
                  />
                </div>

                <div className="bg-zinc-900 p-4 rounded-lg">
                  <label className="block text-sm font-medium text-gray-400 mb-1">
                    Hexadecimal (Base 16)
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={results.hex}
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