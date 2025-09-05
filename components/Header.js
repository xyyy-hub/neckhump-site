'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  
  // Aggressive debugging
  useEffect(() => {
    console.log('🚀 HEADER LOADED!!')
    alert('Header component loaded!')
    
    // Test if JavaScript is working at all
    const testDiv = document.createElement('div')
    testDiv.innerHTML = 'JS WORKS!'
    testDiv.style.cssText = 'position:fixed;top:100px;left:10px;background:red;color:white;padding:10px;z-index:9999;'
    document.body.appendChild(testDiv)
    
    return () => {
      if (document.body.contains(testDiv)) {
        document.body.removeChild(testDiv)
      }
    }
  }, [])
  
  const handleMenuToggle = () => {
    console.log('🔥 BUTTON CLICKED!!!')
    alert(`Button clicked! Count: ${clickCount + 1}`)
    setClickCount(prev => prev + 1)
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: "/neck-hump-causes", label: "Understanding", text: "Neck Hump Guide" },
    { href: "/neck-hump-exercises", label: "Exercises", text: "Exercises" },
    { href: "/best-pillow-for-neck-hump", label: "Products", text: "Best Pillows" },
    { href: "/how-to-sleep-with-neck-hump", label: "Tips", text: "Sleep Tips" },
    { href: "/ergonomic-workspace-neck-hump", label: "Workspace", text: "Ergonomics" },
    { href: "/text-neck-syndrome", label: "Related", text: "Text Neck" }
  ]

  // Remove SSR/CSR split - this was causing the issue!
  // The hamburger menu needs to render on both server and client

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
          
          {/* GIANT TEST BUTTON */}
          <div className="md:hidden">
            <button 
              onClick={handleMenuToggle}
              style={{
                position: 'fixed',
                top: '200px',
                right: '10px',
                width: '100px',
                height: '100px',
                backgroundColor: 'red',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                border: '5px solid black',
                borderRadius: '10px',
                zIndex: 99999,
                cursor: 'pointer'
              }}
            >
              CLICK ME
              <br/>
              {clickCount}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu - Extensive debugging */}
        <div className="md:hidden mt-2 px-4 py-2 bg-yellow-100 text-xs">
          DEBUG INFO: isMenuOpen={isMenuOpen.toString()}
        </div>
        
        {/* GIANT OBVIOUS MENU */}
        {isMenuOpen && (
          <div 
            style={{
              position: 'fixed',
              top: '50px',
              left: '10px',
              right: '10px',
              backgroundColor: 'lime',
              border: '10px solid black',
              padding: '20px',
              zIndex: 99998,
              fontSize: '20px',
              fontWeight: 'bold'
            }}
          >
            🎉 MENU IS OPEN! 🎉
            <br/>
            Click count: {clickCount}
            <br/>
            Menu state: {isMenuOpen.toString()}
          </div>
        )}
      </nav>
    </header>
  )
}
