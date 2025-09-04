import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
            NeckHump.com
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/neck-hump-causes" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Neck Hump Guide
            </Link>
            <Link href="/posture-exercises" className="text-gray-700 hover:text-blue-600 transition-colors">
              Exercises
            </Link>
            <Link href="/desk-setup-guide" className="text-gray-700 hover:text-blue-600 transition-colors">
              Tech Neck Prevention
            </Link>
            <Link href="/how-to-fix-posture-at-home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Recovery System
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
