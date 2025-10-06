import { Metadata } from 'next'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Posture Exercises for Seniors Over 65: Safe Neck Hump Corrections | NeckHump.com',
  description: 'Learn safe posture exercises for seniors over 65. Get age-appropriate neck hump corrections, gentle movements, and senior-friendly exercise modifications.',
  keywords: ['posture exercises seniors', 'neck exercises seniors', 'senior posture correction', 'neck hump exercises elderly', 'safe exercises seniors'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/specific-situations/posture-exercises-for-seniors',
  },
  openGraph: {
    title: 'Posture Exercises for Seniors Over 65: Safe Neck Hump Corrections',
    description: 'Learn safe posture exercises for seniors over 65. Get age-appropriate neck hump corrections, gentle movements, and senior-friendly exercise modifications.',
    url: 'https://www.neckhump.com/help/specific-situations/posture-exercises-for-seniors',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function PostureExercisesForSeniorsPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Specific Situations', href: '/help/specific-situations' },
    { name: 'Posture Exercises for Seniors', href: '/help/specific-situations/posture-exercises-for-seniors' }
  ]

  const shortAnswer = "Seniors over 65 can safely do posture exercises with modifications for age-related changes. Focus on gentle movements, seated exercises, and gradual progression. Start with 5-10 minutes daily and increase slowly. Always consult your healthcare provider before starting any exercise program, especially if you have osteoporosis, arthritis, or other medical conditions."

  const keyConsiderations = [
    {
      title: "Age-Related Changes Require Modifications",
      content: "Seniors may have reduced flexibility, balance concerns, and slower healing. Exercises should be gentler, more supported, and progress more slowly. Focus on maintaining current function rather than dramatic improvements."
    },
    {
      title: "Safety is the Top Priority",
      content: "Use chairs with back support, avoid exercises that challenge balance, and never push through pain. If you feel dizzy, lightheaded, or experience chest pain, stop immediately and consult your healthcare provider."
    },
    {
      title: "Medical Conditions Matter",
      content: "Osteoporosis, arthritis, heart conditions, and other medical issues require specific modifications. Always get clearance from your healthcare provider and consider working with a physical therapist who specializes in senior fitness."
    },
    {
      title: "Consistency Over Intensity",
      content: "Regular, gentle exercise is more beneficial than intense, infrequent sessions. Even 5-10 minutes daily can make a significant difference. Focus on building the habit and maintaining consistency rather than pushing for rapid progress."
    }
  ]

  const stepByStep = [
    {
      title: "Seated Chin Tucks (Senior-Safe)",
      steps: [
        "Sit in a comfortable chair with back support",
        "Place feet flat on floor, knees hip-width apart",
        "Gently draw chin back, creating a double chin",
        "Hold for 3-5 seconds, then release slowly",
        "Repeat 5-10 times, 2-3 times daily"
      ]
    },
    {
      title: "Gentle Neck Range of Motion",
      steps: [
        "Start with gentle head nods (yes motion)",
        "Add gentle head shakes (no motion)",
        "Include gentle ear-to-shoulder tilts",
        "Move slowly and only within comfortable range",
        "Hold each position for 2-3 seconds"
      ]
    },
    {
      title: "Supported Posture Exercises",
      steps: [
        "Stand behind a sturdy chair for support",
        "Gently squeeze shoulder blades together",
        "Hold for 5 seconds, then relax",
        "Add gentle pelvic tilts while holding chair",
        "Focus on maintaining good posture throughout the day"
      ]
    }
  ]

  const faqData = [
    {
      question: "Are posture exercises safe for seniors over 65?",
      answer: "Yes, posture exercises are generally safe for seniors over 65 when done with appropriate modifications. Focus on gentle movements, seated exercises, and gradual progression. Always consult your healthcare provider before starting any exercise program, especially if you have medical conditions like osteoporosis or arthritis."
    },
    {
      question: "What exercises should seniors avoid?",
      answer: "Seniors should avoid exercises that challenge balance, require lying flat on the back or stomach, involve rapid movements, or cause dizziness. Also avoid exercises that require holding the head in extreme positions or that cause any pain or discomfort."
    },
    {
      question: "How often should seniors do posture exercises?",
      answer: "Seniors should start with 5-10 minutes daily and gradually increase as tolerated. Consistency is more important than intensity. Even short, regular sessions can provide significant benefits. Listen to your body and adjust frequency based on how you feel."
    },
    {
      question: "Can seniors with osteoporosis do neck exercises?",
      answer: "Seniors with osteoporosis can do gentle neck exercises, but should avoid any movements that put excessive stress on the spine. Focus on gentle range-of-motion exercises and isometric strengthening. Always consult your healthcare provider for specific recommendations based on your bone density."
    },
    {
      question: "What if I feel dizzy during exercises?",
      answer: "If you feel dizzy, lightheaded, or experience any concerning symptoms during exercise, stop immediately and sit down. Dizziness can be related to blood pressure changes, medication side effects, or other medical conditions. Consult your healthcare provider before resuming exercises."
    }
  ]

  const relatedQuestions = [
    {
      title: "Posture exercises for seniors over 65",
      href: "/help/specific-situations/posture-exercises-seniors-over-65"
    },
    {
      title: "Neck exercises with arthritis",
      href: "/help/exercises-safety/neck-exercises-with-arthritis"
    },
    {
      title: "Best pillow for side sleepers",
      href: "/help/product-questions/best-pillow-side-sleepers"
    },
    {
      title: "How often should I do exercises",
      href: "/help/timeline-questions/how-often-should-i-do-exercises"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <HelpArticle
        title="Posture Exercises for Seniors Over 65: Safe Neck Hump Corrections"
        shortAnswer={shortAnswer}
        keyConsiderations={keyConsiderations}
        stepByStep={stepByStep}
        faqData={faqData}
        relatedQuestions={relatedQuestions}
        lastUpdated="2025-01-27"
        reviewer="Dr. Patricia Williams, PT, DPT"
        reviewerCredentials="Licensed Physical Therapist, Certified in Geriatric Physical Therapy, 15 years experience"
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </div>
  )
}
