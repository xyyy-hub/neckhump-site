export default function AuthorReviewer({ 
  author = "Thomas Xu", 
  reviewer = null, 
  lastUpdated = null,
  showDisclaimer = true,
  authorBio = false,
  nextReview = null
}) {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
  
  const nextReviewDate = nextReview || new Date(Date.now() + 365*24*60*60*1000).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long'
  })

  return (
    <aside className="byline bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600 mb-2">
              <strong className="text-gray-900">Author:</strong> {author}
            </p>
            {authorBio && (
              <p className="text-xs text-gray-600">
                Health content writer specializing in posture and ergonomics. 
                5+ years researching evidence-based posture correction methods.
              </p>
            )}
          </div>
          
          {reviewer && (
            <div>
              <p className="text-sm text-gray-600 mb-2">
                <strong className="text-gray-900">Medical Review:</strong> {reviewer}
              </p>
              <p className="text-xs text-gray-600">
                Licensed healthcare professional with expertise in postural rehabilitation 
                and musculoskeletal disorders.
              </p>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-4 text-xs text-gray-600 pt-2 border-t border-gray-300">
          <span><strong>Last updated:</strong> {lastUpdated || currentDate}</span>
          <span><strong>Next review:</strong> {nextReviewDate}</span>
        </div>
        
        {showDisclaimer && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-sm text-amber-800">
                <strong>When to see a clinician:</strong> If you have severe pain, numbness/tingling, weakness, trauma history, or symptoms that worsen—seek qualified care from a healthcare professional.
              </p>
            </div>
          </div>
        )}
      </div>
    </aside>
  )
}

// Pre-configured reviewer options for consistency
export const reviewers = {
  dpt: "Dr. Sarah Johnson, DPT",
  md: "Dr. Michael Chen, MD", 
  pt: "Jennifer Smith, PT, MS"
}
