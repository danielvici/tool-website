'use client'
import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-blue-900 p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl hover:text-blue-200">
            HOME
          </Link>
          <div className="flex gap-6">
            <Link href="/coming_soon" className="text-white hover:text-blue-200">
              Coming Soon
            </Link>
            <Link href="/changelog" className="text-white hover:text-blue-200">
              Changelog
            </Link>
            <Link href="/settings" className="text-white hover:text-blue-200">
              Settings
            </Link>
            <Link href="/about" className="text-white hover:text-blue-200">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 