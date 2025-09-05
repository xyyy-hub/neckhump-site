'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isClient, setIsClient] = useState(false)
  
  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true)
    console.log('Header component mounted on client')
  }, [])
  
  // Debug function to verify state changes
  const handleMenuToggle = (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('🔴 Button clicked! Current state:', isMenuOpen)
    console.log('🔴 Event type:', e.type)
    console.log('🔴 Target:', e.target)
    
    const newState = !isMenuOpen
    setIsMenuOpen(newState)
    console.log('🟢 New state set to:', newState)
    
    // Force re-render verification
    setTimeout(() => {
      console.log('🔵 State after timeout:', isMenuOpen)
    }, 100)
  }
  
  console.log('🟡 Header render - isMenuOpen:', isMenuOpen, 'isClient:', isClient)

  const navLinks = [
    { href: "/neck-hump-causes", label: "Understanding", text: "Neck Hump Guide" },
    { href: "/neck-hump-exercises", label: "Exercises", text: "Exercises" },
    { href: "/best-pillow-for-neck-hump", label: "Products", text: "Best Pillows" },
    { href: "/how-to-sleep-with-neck-hump", label: "Tips", text: "Sleep Tips" },
    { href: "/ergonomic-workspace-neck-hump", label: "Workspace", text: "Ergonomics" },
    { href: "/text-neck-syndrome", label: "Related", text: "Text Neck" }
  ]

  // Don't render interactive elements until client-side
  if (!isClient) {
    return (
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              NeckHump.com
            </Link>
            <div className="text-sm text-gray-500">Loading...</div>
          </div>
        </nav>
      </header>
    )
  }

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
          
          {/* Mobile Menu Button - MAXIMUM DEBUG */}
          <button 
            className="md:hidden p-4 min-w-[60px] min-h-[60px] flex items-center justify-center rounded-lg border-4 border-red-500 text-white font-bold" 
            onClick={handleMenuToggle}
            onTouchStart={() => console.log('🟠 Touch start')}
            onTouchEnd={() => console.log('🟠 Touch end')}
            onMouseDown={() => console.log('🟠 Mouse down')}
            onMouseUp={() => console.log('🟠 Mouse up')}
            style={{ 
              backgroundColor: isMenuOpen ? 'green' : 'red',
              fontSize: '14px',
              zIndex: 1000
            }}
          >
            MENU
          </button>
        </div>
        
        {/* Mobile Menu - Extensive debugging */}
        <div className="md:hidden mt-2 px-4 py-2 bg-yellow-100 text-xs">
          DEBUG INFO: isMenuOpen={isMenuOpen.toString()}, isClient={isClient.toString()}
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 bg-green-100 border-4 border-green-500">
            <div className="pt-4 space-y-1">
              <div className="text-lg text-red-600 px-4 font-bold">🎉 MENU IS VISIBLE!</div>
              <div className="text-xs text-red-500 px-4">State: {isMenuOpen ? 'OPEN' : 'CLOSED'}</div>
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="mobile-nav-item block px-4 py-3 min-h-[48px] text-gray-700 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100 rounded-lg transition-colors border border-red-200"
                  onClick={() => {
                    console.log('Nav link clicked:', link.text)
                    setIsMenuOpen(false)
                  }}
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
