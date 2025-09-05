'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/neck-hump-causes", label: "Understanding", text: "Neck Hump Guide" },
    { href: "/neck-hump-exercises", label: "Exercises", text: "Exercises" },
    { href: "/best-pillow-for-neck-hump", label: "Products", text: "Best Pillows" },
    { href: "/how-to-sleep-with-neck-hump", label: "Tips", text: "Sleep Tips" },
    { href: "/ergonomic-workspace-neck-hump", label: "Workspace", text: "Ergonomics" },
    { href: "/text-neck-syndrome", label: "Related", text: "Text Neck" }
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            NeckHump.com
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium relative group"
              >
                <span className="text-xs text-gray-400 block">{link.label}</span>
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button - 44px touch target */}
          <button 
            className="md:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors" 
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu - Enhanced for touch */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="pt-4 space-y-2">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 min-h-[44px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="text-xs text-gray-400 block">{link.label}</span>
                  <span className="font-medium text-base">{link.text}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
