'use client'
import Link from 'next/link'

export default function Home() {
  const tools = [
    {
      category: 'Generators',
      items: [
        {
          name: 'Password Generator',
          file: '/generator/password',
          description: 'Create secure passwords with custom options',
        },
        {
          name: 'QR Code Generator',
          file: '/generator/qr',
          description: 'Generate and download QR codes for any text or URL',
        },
      ]
    },
    {
      category: 'Converters',
      items: [
        {
          name: 'Image Converter',
          file: '/converter/image',
          description: 'Convert images between different formats',
        },
        {
          name: 'Number Converter',
          file: '/converter/number',
          description: 'Convert numbers between binary, decimal, and hexadecimal',
        },
        {
          name: 'Color Converter',
          file: '/converter/color',
          description: 'Convert colors between RGB, HEX, HSL',
        },
        {
          name: 'Currency Converter',
          file: '/converter/currency',
          description: 'Convert between different currencies with live rates',
        },
      ]
    },
    {
      category: 'Calculators',
      items: [
        {
          name: 'Scientific Calculator',
          file: '/calculator/scientific',
          description: 'Advanced calculator with scientific functions',
        },
      ]
    },
  ]

  return (
    <main className="min-h-screen p-8 pt-24 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-6 text-white">Tools</h2>
          <div className="space-y-8">
            {tools.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((tool, toolIndex) => (
                    <Link 
                      key={toolIndex}
                      href={tool.file}
                      className="p-6 rounded-lg border border-gray-700 bg-zinc-800 transition-colors duration-200 hover:border-blue-500"
                    >   
                      <h2 className="text-xl font-semibold mb-2 text-white">{tool.name}</h2>
                      <p className="text-gray-400">{tool.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 