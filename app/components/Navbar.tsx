'use client'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex-1" /> {/* Spacer */}
          <Link href="/" className="text-white font-bold text-xl hover:text-blue-100">
            START
          </Link>
          <div className="flex-1 flex justify-end">
            <Link href="/about" className="text-white hover:text-blue-100">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 