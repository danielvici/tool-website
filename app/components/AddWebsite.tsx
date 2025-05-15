'use client'
import { useState } from 'react'
import { PinnedWebsite } from '../types/types'

export default function AddWebsite() {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validiere URL
    try {
      new URL(url)
    } catch {
      alert('Please enter a valid URL')
      return
    }

    const newWebsite: PinnedWebsite = {
      id: Date.now().toString(),
      title: title || url,
      url: url.startsWith('http') ? url : `https://${url}`,
      addedAt: Date.now()
    }

    // Lade bestehende Websites
    const existingWebsites = JSON.parse(localStorage.getItem('pinnedWebsites') || '[]')
    
    // Füge neue Website hinzu
    localStorage.setItem('pinnedWebsites', JSON.stringify([...existingWebsites, newWebsite]))

    // Setze Formular zurück
    setUrl('')
    setTitle('')
    setIsAdding(false)

    // Lade die Seite neu um die neue Website anzuzeigen
    window.location.reload()
  }

  return (
    <div className="mb-6">
      {!isAdding ? (
        <button
          onClick={() => setIsAdding(true)}
          className="w-full p-4 border border-dashed border-gray-700 rounded-lg text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-colors"
        >
          + Add New Website
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="bg-zinc-800 p-4 rounded-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              URL
            </label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">
              Title (optional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="My Website"
              className="w-full bg-zinc-700 text-white rounded-md border border-gray-600 p-2"
            />
          </div>
          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="flex-1 bg-zinc-700 text-white py-2 px-4 rounded-md hover:bg-zinc-600 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
} 