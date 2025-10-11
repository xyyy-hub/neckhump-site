import { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '../../../components/Breadcrumbs'

export const metadata = {
  title: 'Product Questions - Neck Hump Help Center',
  description: 'Equipment recommendations, alternatives, and budget options for neck hump and posture correction. Find the best pillows, ergonomic equipment, and affordable solutions.',
  keywords: ['neck hump products', 'best pillow neck hump', 'ergonomic equipment posture', 'budget posture products', 'cervical pillow recommendations'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/product-questions',
  },
  openGraph: {
    title: 'Product Questions - Neck Hump Help Center',
    description: 'Equipment recommendations, alternatives, and budget options for neck hump and posture correction. Find the best pillows, ergonomic equipment, and affordable solutions.',
    url: 'https://www.neckhump.com/help/product-questions',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'website',
  },
}

// Force dynamic rendering to avoid static generation issues

export default function ProductQuestionsPage() {
  const articles = [
    {
      title: 'Best Pillow Height for Side Sleepers',
      description: 'Optimal pillow height and firmness for side sleepers with neck hump. How to choose the right pillow thickness.',
      link: '/help/product-questions/best-pillow-height-side-sleepers',
      category: 'Sleep',
      priority: 'High'
    },
    {
      title: 'Best Pillow for Back Sleepers',
      description: 'Optimal pillow thickness and support for back sleepers with neck hump. How to maintain neutral neck alignment.',
      link: '/help/product-questions/best-pillow-back-sleepers',
      category: 'Sleep',
      priority: 'High'
    },
    {
      title: 'Memory Foam vs Cervical Pillow',
      description: 'Compare memory foam and cervical pillows for neck hump. Pros, cons, and which works better for different sleep positions.',
      link: '/help/product-questions/memory-foam-vs-cervical-pillow',
      category: 'Sleep',
      priority: 'High'
    },
    {
      title: 'Budget Pillow Alternatives Under $50',
      description: 'Affordable pillow options for neck hump correction. DIY solutions and budget-friendly alternatives that work.',
      link: '/help/product-questions/budget-pillow-alternatives-under-50',
      category: 'Budget',
      priority: 'High'
    },
    {
      title: 'Foam Roller Size Guide for Neck',
      description: 'Best foam roller sizes and densities for neck and upper back exercises. How to choose the right foam roller.',
      link: '/help/product-questions/foam-roller-size-guide-neck',
      category: 'Exercise Equipment',
      priority: 'Medium'
    },
    {
      title: 'Best Ergonomic Chairs for Neck Hump',
      description: 'Office chair features that help prevent and correct neck hump. What to look for in an ergonomic chair.',
      link: '/help/product-questions/best-ergonomic-chairs-neck-hump',
      category: 'Office Equipment',
      priority: 'High'
    },
    {
      title: 'Standing Desk Setup for Posture',
      description: 'How to set up a standing desk to prevent neck hump. Height, monitor placement, and ergonomic considerations.',
      link: '/help/product-questions/standing-desk-setup-posture',
      category: 'Office Equipment',
      priority: 'Medium'
    },
    {
      title: 'Cervical Traction Devices Comparison',
      description: 'Compare different cervical traction devices for neck hump. Home traction options and safety considerations.',
      link: '/help/product-questions/cervical-traction-devices-comparison',
      category: 'Medical Equipment',
      priority: 'Medium'
    },
    {
      title: 'Posture Correctors: Do They Work?',
      description: 'Review of posture corrector braces and devices. Do they help with neck hump, and what to look for.',
      link: '/help/product-questions/posture-correctors-do-they-work',
      category: 'Posture Aids',
      priority: 'High'
    },
    {
      title: 'Best Exercise Bands for Neck Exercises',
      description: 'Resistance band recommendations for neck and upper back strengthening. Light, medium, and heavy resistance options.',
      link: '/help/product-questions/best-exercise-bands-neck-exercises',
      category: 'Exercise Equipment',
      priority: 'Medium'
    },
    {
      title: 'Laptop Stands for Better Posture',
      description: 'Best laptop stands and risers to prevent neck hump. Adjustable height and ergonomic features to look for.',
      link: '/help/product-questions/laptop-stands-better-posture',
      category: 'Office Equipment',
      priority: 'Medium'
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Product Questions', href: '/help/product-questions' }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          🛒 Product Questions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Equipment recommendations, alternatives, and budget options for neck hump and posture correction. 
          Find the best products, compare options, and discover affordable solutions that actually work.
        </p>
      </div>

      {/* Popular Questions */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Popular Questions</h2>
        <ul className="space-y-2 text-blue-800">
          <li>• Best pillow height for side sleepers?</li>
          <li>• Memory foam vs cervical pillow?</li>
          <li>• Budget pillow alternatives under $50?</li>
          <li>• Foam roller size guide?</li>
        </ul>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={article.link}
            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200 hover:border-blue-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {article.category}
              </span>
              <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                article.priority === 'High' 
                  ? 'bg-red-100 text-red-800' 
                  : article.priority === 'Medium'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {article.priority}
              </span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600">
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {article.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Links */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Links</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Sleep Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/product-questions/best-pillow-height-side-sleepers" className="text-blue-600 hover:underline">Pillow height for side sleepers</Link></li>
              <li><Link href="/help/product-questions/best-pillow-back-sleepers" className="text-blue-600 hover:underline">Best pillow for back sleepers</Link></li>
              <li><Link href="/help/product-questions/memory-foam-vs-cervical-pillow" className="text-blue-600 hover:underline">Memory foam vs cervical pillow</Link></li>
              <li><Link href="/help/product-questions/budget-pillow-alternatives-under-50" className="text-blue-600 hover:underline">Budget pillow alternatives</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-3">Office Equipment</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/help/product-questions/best-ergonomic-chairs-neck-hump" className="text-blue-600 hover:underline">Ergonomic chairs</Link></li>
              <li><Link href="/help/product-questions/standing-desk-setup-posture" className="text-blue-600 hover:underline">Standing desk setup</Link></li>
              <li><Link href="/help/product-questions/laptop-stands-better-posture" className="text-blue-600 hover:underline">Laptop stands</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🛏️</div>
          <h3 className="font-medium text-gray-900 mb-2">Sleep Products</h3>
          <p className="text-sm text-gray-600">Pillows, mattresses, and sleep accessories</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">💺</div>
          <h3 className="font-medium text-gray-900 mb-2">Office Equipment</h3>
          <p className="text-sm text-gray-600">Chairs, desks, and workstation accessories</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🏋️</div>
          <h3 className="font-medium text-gray-900 mb-2">Exercise Equipment</h3>
          <p className="text-sm text-gray-600">Bands, rollers, and exercise tools</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">💰</div>
          <h3 className="font-medium text-gray-900 mb-2">Budget Options</h3>
          <p className="text-sm text-gray-600">Affordable alternatives and DIY solutions</p>
        </div>
      </div>

      {/* Medical Disclaimer */}
      <div className="text-sm text-gray-600 mt-8 p-4 bg-gray-50 rounded-lg">
        <p><strong>Medical Disclaimer:</strong> The information in this help center is for educational purposes only and is not intended as medical advice. Always consult with a licensed healthcare provider before starting any exercise program, especially if you have medical conditions, injuries, or concerns about your health.</p>
      </div>
    </div>
  )
}

// Force dynamic rendering to avoid static generation issues
