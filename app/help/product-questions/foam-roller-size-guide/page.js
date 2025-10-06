import { Metadata } from 'next'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Foam Roller Size Guide: Best Options for Neck and Upper Back | NeckHump.com',
  description: 'Complete foam roller size guide for neck and upper back exercises. Learn which sizes and densities work best for neck hump correction and upper back pain relief.',
  keywords: ['foam roller size guide', 'best foam roller neck exercises', 'foam roller upper back', 'foam roller density neck', 'foam roller neck hump'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/product-questions/foam-roller-size-guide',
  },
  openGraph: {
    title: 'Foam Roller Size Guide: Best Options for Neck and Upper Back',
    description: 'Complete foam roller size guide for neck and upper back exercises. Learn which sizes and densities work best for neck hump correction and upper back pain relief.',
    url: 'https://www.neckhump.com/help/product-questions/foam-roller-size-guide',
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

export default function FoamRollerSizeGuidePage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Product Questions', href: '/help/product-questions' },
    { name: 'Foam Roller Size Guide', href: '/help/product-questions/foam-roller-size-guide' }
  ]

  const shortAnswer = "For neck and upper back exercises, choose a 6-inch diameter foam roller in medium density. This size provides stability for upper back rolling while being manageable for beginners. Avoid large 12-inch rollers for neck work as they're too bulky. Start with medium density and progress to firm density as your tolerance increases."

  const keyConsiderations = [
    {
      title: "Size Matters for Safety",
      content: "Larger foam rollers (12-inch diameter) are too bulky for neck and upper back work and can cause injury. Stick to 6-inch diameter rollers for upper body exercises. The smaller size provides better control and safety."
    },
    {
      title: "Density Affects Intensity",
      content: "Soft foam rollers are gentler but less effective. Medium density provides a good balance of comfort and effectiveness. Firm density offers deeper tissue work but may be too intense for beginners or those with sensitive areas."
    },
    {
      title: "Length Considerations",
      content: "Standard 36-inch length works for most people. Shorter 18-inch rollers are more portable but less stable. Longer 48-inch rollers provide more stability but take up more space and cost more."
    },
    {
      title: "Surface Texture Options",
      content: "Smooth rollers are gentler and better for beginners. Textured rollers (with bumps or ridges) provide deeper massage but can be too intense for sensitive areas. Start smooth and progress to textured if desired."
    }
  ]

  const stepByStep = [
    {
      title: "Choose the Right Size",
      steps: [
        "Select 6-inch diameter for neck and upper back work",
        "Choose 36-inch length for stability and versatility",
        "Avoid 12-inch diameter rollers for upper body exercises",
        "Consider 18-inch length for portability if space is limited",
        "Ensure the roller feels stable when you lean on it"
      ]
    },
    {
      title: "Select Appropriate Density",
      steps: [
        "Start with medium density for most people",
        "Choose soft density if you're very sensitive or a beginner",
        "Progress to firm density as your tolerance increases",
        "Test the density by pressing your thumb into it",
        "Medium density should compress about 50% under pressure"
      ]
    },
    {
      title: "Consider Surface Texture",
      steps: [
        "Begin with smooth surface for gentler experience",
        "Try textured surface for deeper massage effect",
        "Test on a small area first to check sensitivity",
        "Smooth rollers are better for daily use",
        "Textured rollers are good for targeted deep work"
      ]
    }
  ]

  const faqData = [
    {
      question: "What size foam roller is best for neck and upper back exercises?",
      answer: "For neck and upper back exercises, choose a 6-inch diameter foam roller in medium density. This size provides stability for upper back rolling while being manageable for beginners. Avoid large 12-inch rollers for neck work as they're too bulky and can cause injury."
    },
    {
      question: "What density foam roller should I choose?",
      answer: "Start with medium density foam rollers for most people. Soft density is better for beginners or those with sensitive areas. Firm density offers deeper tissue work but may be too intense initially. Medium density provides a good balance of comfort and effectiveness."
    },
    {
      question: "Can I use a large foam roller for neck exercises?",
      answer: "No, large 12-inch diameter foam rollers are too bulky and potentially dangerous for neck exercises. They can cause injury due to lack of control and excessive pressure. Stick to 6-inch diameter rollers for upper body work."
    },
    {
      question: "What's the difference between smooth and textured foam rollers?",
      answer: "Smooth foam rollers are gentler and better for beginners or daily use. Textured rollers (with bumps or ridges) provide deeper massage and more intense pressure, but can be too aggressive for sensitive areas. Start with smooth and progress to textured if desired."
    },
    {
      question: "How long should my foam roller be?",
      answer: "Standard 36-inch length works for most people and provides good stability. Shorter 18-inch rollers are more portable but less stable. Longer 48-inch rollers offer maximum stability but take up more space and cost more. Choose based on your space and portability needs."
    }
  ]

  const relatedQuestions = [
    {
      title: "Foam roller size guide for neck",
      href: "/help/product-questions/foam-roller-size-guide-neck"
    },
    {
      title: "Best exercise bands for neck exercises",
      href: "/help/product-questions/best-exercise-bands-neck-exercises"
    },
    {
      title: "Upper back foam rolling exercises",
      href: "/exercises/upper-back-foam-rolling"
    },
    {
      title: "Neck stiffness after exercises",
      href: "/help/troubleshooting/neck-stiffness-after-exercises"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <HelpArticle
        title="Foam Roller Size Guide: Best Options for Neck and Upper Back"
        shortAnswer={shortAnswer}
        keyConsiderations={keyConsiderations}
        stepByStep={stepByStep}
        faqData={faqData}
        relatedQuestions={relatedQuestions}
        lastUpdated="2025-01-27"
        reviewer="Dr. Michael Rodriguez, PT, DPT"
        reviewerCredentials="Licensed Physical Therapist, Certified in Myofascial Release, 12 years experience"
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
