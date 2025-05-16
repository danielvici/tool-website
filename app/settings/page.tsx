'use client'
import { useState, useEffect } from 'react'

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode))
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
    // Apply dark mode to document
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <main className="min-h-screen p-8 pt-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Settings</h1>
        
        <div className="bg-zinc-800 rounded-lg shadow-md p-6 space-y-8">
          <div className="space-y-6">
            <p className="text-gray-300">
              Currently, there are no settings available.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
} 