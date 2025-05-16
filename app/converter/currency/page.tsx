'use client'
import { useState, useEffect } from 'react'

type ExchangeRates = {
  [key: string]: number
}

const POPULAR_CURRENCIES = [
  { code: 'USD', name: 'US Dollar' },
  { code: 'EUR', name: 'Euro' },
  { code: 'GBP', name: 'British Pound' },
  { code: 'JPY', name: 'Japanese Yen' },
  { code: 'CHF', name: 'Swiss Franc' },
  { code: 'CAD', name: 'Canadian Dollar' },
  { code: 'AUD', name: 'Australian Dollar' },
  { code: 'CNY', name: 'Chinese Yuan' },
]

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('1')
  const [fromCurrency, setFromCurrency] = useState('EUR')
  const [toCurrency, setToCurrency] = useState('USD')
  const [rates, setRates] = useState<ExchangeRates>({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoading(true)
        setError('')
        
        // Using ExchangeRate-API (free tier)
        const response = await fetch('https://open.er-api.com/v6/latest/EUR')
        const data = await response.json()
        
        if (data.rates) {
          setRates(data.rates)
          setLastUpdated(new Date())
        } else {
          throw new Error('Failed to fetch exchange rates')
        }
      } catch (err) {
        setError('Failed to load exchange rates. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchRates()
  }, [])

  const convert = () => {
    if (!rates[fromCurrency] || !rates[toCurrency]) return '0.00'
    
    const amountNum = parseFloat(amount)
    if (isNaN(amountNum)) return '0.00'

    // Convert through EUR (base currency)
    const inEUR = amountNum / rates[fromCurrency]
    const result = inEUR * rates[toCurrency]
    
    return result.toFixed(2)
  }

  const handleSwap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }

  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Currency Converter</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-gray-300">
              Convert between different currencies using real-time exchange rates.
              {lastUpdated && (
                <span className="block text-sm text-gray-400 mt-1">
                  Last updated: {lastUpdated.toLocaleString()}
                </span>
              )}
            </p>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <div className="text-blue-400">Loading exchange rates...</div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-sm p-3 bg-red-500/10 rounded-md border border-red-500/20">
              {error}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Amount
                  </label>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2"
                  />
                </div>

                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      From
                    </label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2 text-sm"
                    >
                      {POPULAR_CURRENCIES.map(currency => (
                        <option key={currency.code} value={currency.code} className="text-sm">
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleSwap}
                    className="bg-zinc-700 text-white p-2 rounded-md hover:bg-zinc-600 transition-colors mb-0.5"
                  >
                    ⇄
                  </button>

                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      To
                    </label>
                    <select
                      value={toCurrency}
                      onChange={(e) => setToCurrency(e.target.value)}
                      className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2 text-sm"
                    >
                      {POPULAR_CURRENCIES.map(currency => (
                        <option key={currency.code} value={currency.code} className="text-sm">
                          {currency.code} - {currency.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 p-6 rounded-lg text-center">
                <div className="text-sm text-gray-400 mb-2">Result</div>
                <div className="text-2xl font-bold text-white">
                  {amount} {fromCurrency} = {convert()} {toCurrency}
                </div>
                <div className="text-sm text-gray-400 mt-2">
                  1 {fromCurrency} = {(rates[toCurrency] / rates[fromCurrency]).toFixed(4)} {toCurrency}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
} 