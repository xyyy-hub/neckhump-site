'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [closeTimeout, setCloseTimeout] = useState(null)
  const router = useRouter()
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
    }
  }

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu)
  }

  const handleDropdownEnter = (label) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setActiveDropdown(label)
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
    setCloseTimeout(timeout)
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  const navStructure = [
    {
      label: "Learn",
      items: [
        { href: "/neck-hump-guide", text: "Complete Guide" },
        { href: "/neck-hump-causes", text: "Causes & Understanding" },
        { href: "/text-neck-syndrome", text: "Text Neck Syndrome" },
        { href: "/military-neck-cervical-lordosis", text: "Military Neck" }
      ]
    },
    {
      label: "Exercises",
      items: [
        { href: "/neck-hump-exercises", text: "Exercise Library" },
        { href: "/posture-exercises", text: "Quick Office Routine" },
        { href: "/exercise-library", text: "All Exercises" }
      ]
    },
    {
      label: "Solutions",
      items: [
        { href: "/best-pillow-for-neck-hump", text: "Best Pillows" },
        { href: "/ergonomic-workspace-neck-hump", text: "Workspace Ergonomics" },
        { href: "/desk-setup-guide", text: "Desk Setup Guide" }
      ]
    },
    {
      label: "Help Center",
      href: "/help",
      items: []
    }
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            NeckHump.com
          </Link>
          
          {/* Search Bar - Desktop */}
          <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                aria-label="Search"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                aria-label="Submit search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navStructure.map((nav, index) => (
              <div 
                key={index} 
                className="relative group"
                onMouseEnter={() => nav.items.length > 0 && handleDropdownEnter(nav.label)}
                onMouseLeave={() => nav.items.length > 0 && handleDropdownLeave()}
              >
                {nav.items.length > 0 ? (
                  <>
                    <button
                      className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50 flex items-center gap-1"
                    >
                      {nav.label}
                      <svg className="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === nav.label && (
                      <div 
                        className="absolute top-full left-0 pt-1 w-56 z-50"
                      >
                        <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                          {nav.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            >
                              {item.text}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={nav.href}
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium rounded-lg hover:bg-gray-50"
                  >
                    {nav.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors" 
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
            style={{ touchAction: 'manipulation' }}
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
        
        {/* Search Bar - Mobile (always visible below header) */}
        <form onSubmit={handleSearch} className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              aria-label="Search"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
              aria-label="Submit search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </form>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white">
            <div className="pt-4 space-y-2">
              {navStructure.map((nav, index) => (
                <div key={index}>
                  {nav.items.length > 0 ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(nav.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      >
                        {nav.label}
                        <svg 
                          className={`w-5 h-5 transition-transform ${activeDropdown === nav.label ? 'rotate-180' : ''}`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === nav.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {nav.items.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false)
                                setActiveDropdown(null)
                              }}
                            >
                              {item.text}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={nav.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {nav.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
