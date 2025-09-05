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
                      <div className="hidden md:flex space-x-6">
              <Link href="/neck-hump-causes" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Neck Hump
              </Link>
              <Link href="/neck-hump-exercises" className="text-gray-700 hover:text-blue-600 transition-colors">
                Exercises
              </Link>
              <Link href="/best-pillow-for-neck-hump" className="text-gray-700 hover:text-blue-600 transition-colors">
                Best Pillows
              </Link>
              <Link href="/how-to-sleep-with-neck-hump" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sleep Tips
              </Link>
              <Link href="/text-neck-syndrome" className="text-gray-700 hover:text-blue-600 transition-colors">
                Text Neck
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
