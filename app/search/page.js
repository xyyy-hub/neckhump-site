'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchIndex, setSearchIndex] = useState([])

  // Load search index
  useEffect(() => {
    fetch('/search-index.json')
      .then(res => res.json())
      .then(data => {
        setSearchIndex(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error loading search index:', error)
        setLoading(false)
      })
  }, [])

  // Perform search when query changes
  useEffect(() => {
    if (!query || searchIndex.length === 0) {
      setResults([])
      return
    }

    const searchTerm = query.toLowerCase()
    const searchResults = searchIndex.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(searchTerm)
      const descMatch = item.description.toLowerCase().includes(searchTerm)
      const keywordMatch = item.keywords.some(keyword => 
        keyword.toLowerCase().includes(searchTerm)
      )
      
      return titleMatch || descMatch || keywordMatch
    })

    // Sort by relevance (title matches first)
    searchResults.sort((a, b) => {
      const aTitleMatch = a.title.toLowerCase().includes(searchTerm)
      const bTitleMatch = b.title.toLowerCase().includes(searchTerm)
      if (aTitleMatch && !bTitleMatch) return -1
      if (!aTitleMatch && bTitleMatch) return 1
      return 0
    })

    setResults(searchResults)
  }, [query, searchIndex])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading search...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Search Results</h1>
        {query && (
          <p className="text-lg text-gray-600">
            Showing results for: <span className="font-semibold text-gray-900">"{query}"</span>
          </p>
        )}
      </header>

      {/* Results */}
      {!query ? (
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Enter a search query</h2>
          <p className="text-blue-800">
            Use the search box above to find articles about neck hump, exercises, ergonomics, and more.
          </p>
        </div>
      ) : results.length === 0 ? (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-yellow-900 mb-2">No results found</h2>
          <p className="text-yellow-800 mb-4">
            We couldn't find any pages matching "{query}". Try:
          </p>
          <ul className="list-disc list-inside text-yellow-800 space-y-2">
            <li>Using different keywords</li>
            <li>Checking your spelling</li>
            <li>Using more general terms</li>
          </ul>
          
          <div className="mt-6">
            <h3 className="font-semibold text-yellow-900 mb-3">Popular pages:</h3>
            <div className="space-y-2">
              <Link href="/neck-hump-guide" className="block text-blue-600 hover:underline">
                → Complete Neck Hump Guide
              </Link>
              <Link href="/neck-hump-exercises" className="block text-blue-600 hover:underline">
                → Neck Hump Exercises
              </Link>
              <Link href="/help" className="block text-blue-600 hover:underline">
                → Help Center
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            Found <span className="font-semibold">{results.length}</span> result{results.length !== 1 ? 's' : ''}
          </p>
          
          <div className="space-y-6">
            {results.map((result, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <Link href={result.url} className="group">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
                    {result.title}
                  </h2>
                  <p className="text-gray-600 mb-3">{result.description}</p>
                  <div className="flex items-center text-sm text-blue-600">
                    <span>www.neckhump.com{result.url}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </>
      )}

      {/* Additional Help */}
      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse by category</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/learn" className="text-blue-600 hover:underline">
            → Learn About Neck Hump
          </Link>
          <Link href="/exercises/chin-tucks" className="text-blue-600 hover:underline">
            → Exercise Guides
          </Link>
          <Link href="/help" className="text-blue-600 hover:underline">
            → Help Center
          </Link>
          <Link href="/best-pillow-for-neck-hump" className="text-blue-600 hover:underline">
            → Product Recommendations
          </Link>
          <Link href="/ergonomic-workspace-neck-hump" className="text-blue-600 hover:underline">
            → Ergonomics & Prevention
          </Link>
          <Link href="/help/troubleshooting" className="text-blue-600 hover:underline">
            → Troubleshooting
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading search...</p>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}

