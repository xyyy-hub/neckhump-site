import { Metadata } from 'next'
import Link from 'next/link'

export const metadata = {
  title: {
    template: '%s | Help Center - NeckHump.com',
    default: 'Help Center - NeckHump.com'
  },
  description: 'Get specific answers to neck hump and posture questions. Find help for medical conditions, special situations, equipment, timelines, and troubleshooting.',
  alternates: {
    canonical: 'https://www.neckhump.com/help',
  },
}

// Force dynamic rendering for all help center pages
export const dynamic = 'force-dynamic'

export default function HelpLayout({ children }) {
  const categories = [
    { name: 'Exercises & Safety', href: '/help/exercises-safety', icon: '🛡️' },
    { name: 'Specific Situations', href: '/help/specific-situations', icon: '👥' },
    { name: 'Product Questions', href: '/help/product-questions', icon: '🛒' },
    { name: 'Timeline Questions', href: '/help/timeline-questions', icon: '⏰' },
    { name: 'Troubleshooting', href: '/help/troubleshooting', icon: '🔧' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Help Center Navigation */}
      <nav className="bg-gray-50 border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/help" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-900">Help Center</span>
            </Link>
            
            {/* Category Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center space-x-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
            
            {/* Back to Main Site */}
            <Link 
              href="/" 
              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Main Site
            </Link>
          </div>
          
          {/* Mobile Category Navigation */}
          <div className="md:hidden pb-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="flex items-center space-x-1 px-3 py-1 text-xs bg-white border border-gray-200 rounded-full text-gray-600 hover:text-blue-600 hover:border-blue-300 transition-colors"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Help Center Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Help Center</h3>
              <p className="text-sm text-gray-600 mb-4">
                Get specific answers to your neck hump and posture questions with evidence-based guidance.
              </p>
              <Link href="/help" className="text-blue-600 hover:underline text-sm">
                Browse all help articles →
              </Link>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/help/exercises-safety" className="text-gray-600 hover:text-blue-600">Exercises & Safety</Link></li>
                <li><Link href="/help/specific-situations" className="text-gray-600 hover:text-blue-600">Specific Situations</Link></li>
                <li><Link href="/help/product-questions" className="text-gray-600 hover:text-blue-600">Product Questions</Link></li>
                <li><Link href="/help/troubleshooting" className="text-gray-600 hover:text-blue-600">Troubleshooting</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Main Site</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/neck-hump-exercises" className="text-gray-600 hover:text-blue-600">Neck Hump Exercises</Link></li>
                <li><Link href="/how-to-fix-posture-at-home" className="text-gray-600 hover:text-blue-600">Fix Posture at Home</Link></li>
                <li><Link href="/best-pillow-for-neck-hump" className="text-gray-600 hover:text-blue-600">Best Pillow Guide</Link></li>
                <li><Link href="/desk-setup-guide" className="text-gray-600 hover:text-blue-600">Desk Setup Guide</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © 2024 NeckHump.com. All help articles reviewed by licensed physical therapists.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-700">Privacy</Link>
                <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-700">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
