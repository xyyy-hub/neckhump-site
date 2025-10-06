import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'
import ReadingProgress from './ReadingProgress'

export default function HelpArticle({ 
  title, 
  description, 
  shortAnswer, 
  content, 
  keyConsiderations = [], 
  steps = [], 
  whenToSeeDoctor = [], 
  relatedQuestions = [], 
  faqQuestions = [],
  breadcrumbs = [],
  lastUpdated = null 
}) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <ReadingProgress />
      
      <Breadcrumbs items={breadcrumbs} />
      
      {/* Short Answer Block */}
      <div className="bg-emerald-50 border-l-4 border-emerald-400 p-6 mb-8 rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-emerald-900" id="short-answer">
          Short Answer
        </h2>
        <p className="text-emerald-800 text-lg leading-relaxed">
          {shortAnswer}
        </p>
      </div>

      {/* Main Content */}
      <article className="prose lg:prose-lg max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{title}</h1>
        
        {description && (
          <p className="text-lg text-gray-600 mb-8">{description}</p>
        )}
        
        {/* Last Updated */}
        {lastUpdated && (
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-sm text-blue-800">
              <strong>Last updated:</strong> {lastUpdated}
            </p>
          </div>
        )}

        {/* Detailed Explanation */}
        <div className="mb-8">
          {content}
        </div>
        
        {/* Key Considerations */}
        {keyConsiderations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Considerations</h2>
            <ul className="space-y-3">
              {keyConsiderations.map((consideration, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{consideration}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {/* Step-by-Step Guidance */}
        {steps.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Guidance</h2>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    {step.title && (
                      <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    )}
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        )}
        
        {/* When to See a Doctor */}
        {whenToSeeDoctor.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When to See a Doctor</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <p className="text-yellow-800 font-medium mb-3">Seek immediate medical attention if you experience:</p>
              <ul className="space-y-2">
                {whenToSeeDoctor.map((warning, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-yellow-600 mr-2">⚠️</span>
                    <span className="text-yellow-800">{warning}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {/* Related Questions */}
        {relatedQuestions.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Questions</h2>
            <ul className="space-y-3">
              {relatedQuestions.map((question, index) => (
                <li key={index}>
                  <Link 
                    href={question.link} 
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {question.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {/* FAQ Schema */}
      {faqQuestions.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqQuestions.map(question => ({
                "@type": "Question",
                "name": question.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": question.answer
                }
              }))
            })
          }}
        />
      )}

      {/* Medical Disclaimer */}
      <div className="text-sm text-gray-600 mt-12 p-4 bg-gray-50 rounded-lg">
        <p><strong>Medical Disclaimer:</strong> This information is for educational purposes only and is not intended as medical advice. Always consult with a licensed healthcare provider before starting any exercise program, especially if you have medical conditions, injuries, or concerns about your health. The information provided should not be used to diagnose, treat, cure, or prevent any medical condition.</p>
      </div>
    </div>
  )
}
