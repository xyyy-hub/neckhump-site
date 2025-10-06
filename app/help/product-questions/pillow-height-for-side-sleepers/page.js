import { Metadata } from 'next'
import Breadcrumbs from '../../../../components/Breadcrumbs'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Best Pillow Height for Side Sleepers: Neck Hump Prevention | NeckHump.com',
  description: 'Learn the optimal pillow height for side sleepers to prevent neck hump. Get measurements, recommendations, and how to choose the right pillow height for your body type.',
  keywords: ['pillow height side sleepers', 'side sleeper pillow', 'neck hump pillow', 'best pillow height', 'side sleeping posture'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/product-questions/pillow-height-for-side-sleepers',
  },
  openGraph: {
    title: 'Best Pillow Height for Side Sleepers: Neck Hump Prevention',
    description: 'Learn the optimal pillow height for side sleepers to prevent neck hump. Get measurements, recommendations, and how to choose the right pillow height for your body type.',
    url: 'https://www.neckhump.com/help/product-questions/pillow-height-for-side-sleepers',
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

export default function PillowHeightForSideSleepersPage() {
  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Product Questions', href: '/help/product-questions' },
    { name: 'Pillow Height for Side Sleepers', href: '/help/product-questions/pillow-height-for-side-sleepers' }
  ]

  const shortAnswer = "The ideal pillow height for side sleepers is 4-6 inches, measured from the mattress to the top of the pillow. This height should keep your head, neck, and spine in a straight line. Measure from your shoulder to your ear while lying on your side to determine your optimal height. The pillow should fill the gap between your head and shoulder without tilting your head up or down."

  const keyConsiderations = [
    {
      title: "Shoulder Width Determines Height",
      content: "Wider shoulders need taller pillows, narrower shoulders need shorter pillows. The goal is to keep your head, neck, and spine in a straight line. If your head tilts up or down, your pillow height is incorrect."
    },
    {
      title: "Body Type Matters",
      content: "Larger individuals typically need 5-6 inch pillows, while smaller individuals may need 4-5 inch pillows. Athletic builds with broad shoulders often need the tallest pillows. Petite individuals usually need shorter pillows."
    },
    {
      title: "Pillow Material Affects Height",
      content: "Memory foam compresses more than down or latex, so you may need a slightly taller memory foam pillow. Down pillows can be fluffed to adjust height. Latex maintains its shape better and provides consistent height."
    },
    {
      title: "Test Before Buying",
      content: "Always test pillow height by lying on your side in the store or during the trial period. Your head should not tilt up or down, and you should feel comfortable without neck strain. Take time to find the right height for your body."
    }
  ]

  const stepByStep = [
    {
      title: "Measure Your Optimal Height",
      steps: [
        "Lie on your side in your natural sleeping position",
        "Have someone measure from your shoulder to your ear",
        "This measurement is your ideal pillow height",
        "Most people need 4-6 inches of height",
        "Account for pillow compression (memory foam compresses more)"
      ]
    },
    {
      title: "Test Different Heights",
      steps: [
        "Start with a 5-inch pillow as a baseline",
        "Lie on your side and check your head position",
        "If your head tilts up, try a shorter pillow",
        "If your head tilts down, try a taller pillow",
        "Your head should be level with your spine"
      ]
    },
    {
      title: "Consider Pillow Materials",
      steps: [
        "Memory foam: Compresses 20-30%, may need taller pillow",
        "Down/feather: Adjustable height, can be fluffed",
        "Latex: Maintains shape, consistent height",
        "Hybrid: Combines materials, test for compression",
        "Choose based on your comfort preferences"
      ]
    }
  ]

  const faqData = [
    {
      question: "What is the ideal pillow height for side sleepers?",
      answer: "The ideal pillow height for side sleepers is 4-6 inches, measured from the mattress to the top of the pillow. This height should keep your head, neck, and spine in a straight line. Measure from your shoulder to your ear while lying on your side to determine your optimal height."
    },
    {
      question: "How do I know if my pillow is too high or too low?",
      answer: "If your pillow is too high, your head will tilt up and your neck will be bent. If it's too low, your head will tilt down and your neck will be bent in the opposite direction. The correct height keeps your head level with your spine in a straight line."
    },
    {
      question: "Should I use different pillow heights for different body types?",
      answer: "Yes, body type affects optimal pillow height. Larger individuals with broader shoulders typically need 5-6 inch pillows, while smaller individuals may need 4-5 inch pillows. Athletic builds often need the tallest pillows, while petite individuals usually need shorter pillows."
    },
    {
      question: "Does pillow material affect the height I need?",
      answer: "Yes, pillow material affects height due to compression. Memory foam compresses 20-30%, so you may need a slightly taller memory foam pillow. Down pillows can be fluffed to adjust height. Latex maintains its shape better and provides consistent height."
    },
    {
      question: "Can the wrong pillow height cause neck hump?",
      answer: "Yes, incorrect pillow height can contribute to neck hump development. A pillow that's too high or too low can cause your head to tilt forward during sleep, leading to forward head posture over time. Proper pillow height helps maintain neutral spine alignment."
    }
  ]

  const relatedQuestions = [
    {
      title: "Best pillow for side sleepers",
      href: "/help/product-questions/best-pillow-side-sleepers"
    },
    {
      title: "Memory foam vs cervical pillow",
      href: "/help/product-questions/memory-foam-vs-cervical-pillow"
    },
    {
      title: "Budget pillow alternatives under $50",
      href: "/help/product-questions/budget-pillow-alternatives-under-50"
    },
    {
      title: "Neck pain after sleeping",
      href: "/help/troubleshooting/neck-pain-after-sleeping"
    }
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbs} />
      
      <HelpArticle
        title="Best Pillow Height for Side Sleepers: Neck Hump Prevention"
        shortAnswer={shortAnswer}
        keyConsiderations={keyConsiderations}
        stepByStep={stepByStep}
        faqData={faqData}
        relatedQuestions={relatedQuestions}
        lastUpdated="2025-01-27"
        reviewer="Dr. Jennifer Martinez, PT, DPT"
        reviewerCredentials="Licensed Physical Therapist, Certified in Sleep Ergonomics, 10 years experience"
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
