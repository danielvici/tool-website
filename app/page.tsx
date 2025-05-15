'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { PinnedWebsite } from './types/types'
import AddWebsite from './components/AddWebsite'

export default function Home() {
  const [pinnedWebsites, setPinnedWebsites] = useState<PinnedWebsite[]>([])
  
  useEffect(() => {
    const saved = localStorage.getItem('pinnedWebsites')
    if (saved) {
      setPinnedWebsites(JSON.parse(saved))
    }
  }, [])

  const handleDelete = (id: string) => {
    const newWebsites = pinnedWebsites.filter(site => site.id !== id)
    localStorage.setItem('pinnedWebsites', JSON.stringify(newWebsites))
    setPinnedWebsites(newWebsites)
  }

  const tools = [
    {
      name: 'Password Generator',
      file: '/password',
      description: 'Create secure passwords with custom options',
    },
    {
      name: 'Image Converter',
      file: '/img_converter',
      description: 'Convert images between different formats',
    },
    {
      name: 'More Coming Soon',
      file: '/coming_soon',
      description: 'Erfahre mehr über zukünftige Features',
      isComingSoon: true
    }
  ]

  return (
    <main className="min-h-screen p-8 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Tools Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <Link 
                key={index}
                href={tool.file}
                className={`p-6 rounded-lg border border-gray-700 bg-zinc-800 transition-colors duration-200 cursor-pointer
                  ${tool.isComingSoon 
                    ? 'opacity-50 hover:opacity-75' 
                    : 'hover:border-blue-500'}`}
              >   
                <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
                <p className="text-gray-400">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Pinned Websites Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Bookmarked Websites</h2>
          <AddWebsite />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pinnedWebsites.map((website) => (
              <div
                key={website.id}
                className="group relative p-6 rounded-lg border border-gray-700 bg-zinc-800 hover:border-blue-500 transition-colors"
              >
                <a
                  href={website.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2">{website.title}</h3>
                  <p className="text-gray-400 truncate">{website.url}</p>
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    handleDelete(website.id)
                  }}
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
} 