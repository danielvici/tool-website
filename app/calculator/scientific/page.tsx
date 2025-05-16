'use client'
import { useState } from 'react'

export default function ScientificCalculator() {
  const [display, setDisplay] = useState('0')
  const [memory, setMemory] = useState<number>(0)
  const [lastOperation, setLastOperation] = useState<string | null>(null)
  const [newNumber, setNewNumber] = useState(true)

  const operations = {
    '+': (a: number, b: number) => a + b,
    '-': (a: number, b: number) => a - b,
    '×': (a: number, b: number) => a * b,
    '÷': (a: number, b: number) => a / b,
    'xⁿ': (a: number, b: number) => Math.pow(a, b),
    'ⁿ√x': (a: number, b: number) => Math.pow(a, 1/b),
  }

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num)
      setNewNumber(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const handleDecimal = () => {
    if (newNumber) {
      setDisplay('0.')
      setNewNumber(false)
    } else if (!display.includes('.')) {
      setDisplay(display + '.')
    }
  }

  const handleOperation = (op: string) => {
    setMemory(parseFloat(display))
    setLastOperation(op)
    setNewNumber(true)
  }

  const handleEquals = () => {
    if (lastOperation && !newNumber) {
      const current = parseFloat(display)
      const operation = operations[lastOperation as keyof typeof operations]
      const result = operation(memory, current)
      setDisplay(result.toString())
      setNewNumber(true)
      setLastOperation(null)
    }
  }

  const handleFunction = (func: string) => {
    const num = parseFloat(display)
    let result: number

    switch (func) {
      case 'sin':
        result = Math.sin(num * Math.PI / 180)
        break
      case 'cos':
        result = Math.cos(num * Math.PI / 180)
        break
      case 'tan':
        result = Math.tan(num * Math.PI / 180)
        break
      case 'log':
        result = Math.log10(num)
        break
      case 'ln':
        result = Math.log(num)
        break
      case '√':
        result = Math.sqrt(num)
        break
      case 'x²':
        result = num * num
        break
      case '1/x':
        result = 1 / num
        break
      default:
        return
    }

    setDisplay(result.toString())
    setNewNumber(true)
  }

  const handleClear = () => {
    setDisplay('0')
    setMemory(0)
    setLastOperation(null)
    setNewNumber(true)
  }

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
      setNewNumber(true)
    }
  }

  const handlePlusMinus = () => {
    setDisplay(display.startsWith('-') ? display.slice(1) : '-' + display)
  }

  const Button = ({ children, onClick, className = '' }: { children: React.ReactNode, onClick: () => void, className?: string }) => (
    <button
      onClick={onClick}
      className={`p-3 text-white rounded-md transition-colors ${className}`}
    >
      {children}
    </button>
  )

  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Scientific Calculator</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6">
          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-gray-300">
              A scientific calculator with advanced mathematical functions including trigonometry,
              logarithms, and exponential operations.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-zinc-900 p-4 rounded-lg">
              <input
                type="text"
                readOnly
                value={display}
                className="w-full bg-transparent text-right text-2xl text-white font-mono outline-none"
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {/* Scientific Functions */}
              <Button onClick={() => handleFunction('sin')} className="bg-zinc-700 hover:bg-zinc-600">sin</Button>
              <Button onClick={() => handleFunction('cos')} className="bg-zinc-700 hover:bg-zinc-600">cos</Button>
              <Button onClick={() => handleFunction('tan')} className="bg-zinc-700 hover:bg-zinc-600">tan</Button>
              <Button onClick={handleClear} className="bg-red-600 hover:bg-red-700">C</Button>

              <Button onClick={() => handleFunction('log')} className="bg-zinc-700 hover:bg-zinc-600">log</Button>
              <Button onClick={() => handleFunction('ln')} className="bg-zinc-700 hover:bg-zinc-600">ln</Button>
              <Button onClick={() => handleFunction('√')} className="bg-zinc-700 hover:bg-zinc-600">√</Button>
              <Button onClick={handleBackspace} className="bg-zinc-700 hover:bg-zinc-600">⌫</Button>

              <Button onClick={() => handleFunction('x²')} className="bg-zinc-700 hover:bg-zinc-600">x²</Button>
              <Button onClick={() => handleOperation('xⁿ')} className="bg-zinc-700 hover:bg-zinc-600">xⁿ</Button>
              <Button onClick={() => handleOperation('ⁿ√x')} className="bg-zinc-700 hover:bg-zinc-600">ⁿ√x</Button>
              <Button onClick={() => handleOperation('÷')} className="bg-blue-600 hover:bg-blue-700">÷</Button>

              {/* Numbers and Basic Operations */}
              <Button onClick={() => handleNumber('7')} className="bg-zinc-600 hover:bg-zinc-500">7</Button>
              <Button onClick={() => handleNumber('8')} className="bg-zinc-600 hover:bg-zinc-500">8</Button>
              <Button onClick={() => handleNumber('9')} className="bg-zinc-600 hover:bg-zinc-500">9</Button>
              <Button onClick={() => handleOperation('×')} className="bg-blue-600 hover:bg-blue-700">×</Button>

              <Button onClick={() => handleNumber('4')} className="bg-zinc-600 hover:bg-zinc-500">4</Button>
              <Button onClick={() => handleNumber('5')} className="bg-zinc-600 hover:bg-zinc-500">5</Button>
              <Button onClick={() => handleNumber('6')} className="bg-zinc-600 hover:bg-zinc-500">6</Button>
              <Button onClick={() => handleOperation('-')} className="bg-blue-600 hover:bg-blue-700">-</Button>

              <Button onClick={() => handleNumber('1')} className="bg-zinc-600 hover:bg-zinc-500">1</Button>
              <Button onClick={() => handleNumber('2')} className="bg-zinc-600 hover:bg-zinc-500">2</Button>
              <Button onClick={() => handleNumber('3')} className="bg-zinc-600 hover:bg-zinc-500">3</Button>
              <Button onClick={() => handleOperation('+')} className="bg-blue-600 hover:bg-blue-700">+</Button>

              <Button onClick={() => handlePlusMinus()} className="bg-zinc-600 hover:bg-zinc-500">±</Button>
              <Button onClick={() => handleNumber('0')} className="bg-zinc-600 hover:bg-zinc-500">0</Button>
              <Button onClick={() => handleDecimal()} className="bg-zinc-600 hover:bg-zinc-500">.</Button>
              <Button onClick={() => handleEquals()} className="bg-green-600 hover:bg-green-700">=</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 