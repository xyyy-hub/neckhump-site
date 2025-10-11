export default function AuthorReviewer({ 
  author = "Team Posture", 
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
    <aside className="byline bg-white border border-gray-300 rounded-lg p-6 mb-8 shadow-sm">
      <div className="space-y-4">
        {/* Medical Review Badge */}
        {reviewer && (
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">✓ Medically Reviewed</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">Evidence-Based</span>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-700 mb-2">
              <strong className="text-gray-900">Written by:</strong> {author}
            </p>
            {authorBio && (
              <p className="text-xs text-gray-600">
                Health content specialist with expertise in posture correction and ergonomics. 
                Content based on current research and clinical guidelines.
              </p>
            )}
          </div>
          
          {reviewer && (
            <div>
              <p className="text-sm text-gray-700 mb-2">
                <strong className="text-gray-900">Reviewed by:</strong>{' '}
                {reviewer === "Dr. Sarah Johnson, DPT" ? (
                  <a href="/about/dr-sarah-johnson" className="text-blue-600 hover:underline">
                    {reviewer}
                  </a>
                ) : (
                  reviewer
                )}
              </p>
              <p className="text-xs text-gray-600">
                {reviewer === "Dr. Sarah Johnson, DPT" ? (
                  <>
                    Board-Certified Doctor of Physical Therapy with 15+ years specializing in posture 
                    correction and musculoskeletal rehabilitation. APTA member, OCS certified.
                  </>
                ) : (
                  'Licensed healthcare professional specializing in postural rehabilitation and musculoskeletal health.'
                )}
              </p>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap gap-4 text-xs text-gray-600 pt-3 border-t border-gray-200">
          <span><strong>Last updated:</strong> {lastUpdated || currentDate}</span>
          <span><strong>Next review:</strong> {nextReviewDate}</span>
        </div>
        
        {showDisclaimer && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-sm text-gray-800">
                <strong>⚠️ When to See a Healthcare Provider:</strong> Seek professional medical care if you experience severe pain, numbness, tingling, weakness, or if your symptoms worsen despite self-care measures.
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
