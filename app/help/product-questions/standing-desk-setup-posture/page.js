import { Metadata } from 'next'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Standing Desk Setup for Posture - Prevent Neck Hump & Forward Head',
  description: 'Complete guide to setting up your standing desk for optimal posture. Learn correct desk height, monitor placement, and ergonomic tips to prevent neck hump and forward head posture.',
  keywords: ['standing desk setup', 'standing desk ergonomics', 'standing desk posture', 'prevent neck hump standing desk', 'ergonomic standing desk height'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/product-questions/standing-desk-setup-posture',
  },
  openGraph: {
    title: 'Standing Desk Setup for Posture - Prevent Neck Hump & Forward Head',
    description: 'Complete guide to setting up your standing desk for optimal posture. Learn correct desk height, monitor placement, and ergonomic tips to prevent neck hump and forward head posture.',
    url: 'https://www.neckhump.com/help/product-questions/standing-desk-setup-posture',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
}

export default function StandingDeskSetupPage() {
  const shortAnswer = "Set your standing desk at elbow height (typically 38-46 inches for most people). Position your monitor at arm's length with the top third at eye level to maintain neutral neck alignment. Keep feet flat on the floor, shoulders relaxed, and elbows at 90 degrees. Alternate between sitting and standing every 30-60 minutes to prevent fatigue while correcting forward head posture."

  const content = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Standing Desk Setup Matters for Neck Posture</h2>
      <p className="mb-4">
        Standing desks have become popular as a solution to combat the negative effects of prolonged sitting. 
        However, an incorrectly set up standing desk can actually worsen neck hump and forward head posture. 
        The key is proper ergonomic configuration that maintains neutral spine alignment throughout your workday.
      </p>
      
      <p className="mb-4">
        Research shows that standing desk users often make critical setup mistakes, particularly with monitor height 
        and viewing distance. These errors can lead to the same postural problems they're trying to prevent: 
        forward head posture, rounded shoulders, and increased neck strain.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimal Standing Desk Height</h3>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">The Elbow Rule</h4>
        <p className="mb-3">
          Your standing desk should be at elbow height when standing with relaxed shoulders. For most people, 
          this is between 38-46 inches from the floor, depending on your height:
        </p>
        
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li><strong>5'0" - 5'4":</strong> 36-38 inches desk height</li>
          <li><strong>5'5" - 5'9":</strong> 39-42 inches desk height</li>
          <li><strong>5'10" - 6'2":</strong> 43-46 inches desk height</li>
          <li><strong>6'3" and taller:</strong> 47-50 inches desk height</li>
        </ul>

        <p className="text-sm text-gray-700">
          <strong>Note:</strong> These are starting points. Fine-tune based on your arm length and comfortable typing position.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitor Placement for Neck Health</h3>
      
      <p className="mb-4">
        Incorrect monitor placement is the #1 cause of neck problems at standing desks. Many people place 
        their monitors too low, forcing them to look down and recreating the same forward head posture 
        they experience while sitting.
      </p>

      <div className="bg-green-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Perfect Monitor Position</h4>
        <ul className="space-y-3">
          <li><strong>Height:</strong> Top third of the screen at eye level (center of screen slightly below eye level)</li>
          <li><strong>Distance:</strong> Arm's length away (20-26 inches from your eyes)</li>
          <li><strong>Angle:</strong> Screen tilted slightly upward (10-20 degrees)</li>
          <li><strong>Position:</strong> Directly in front of you, not off to the side</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Standing Desk Setup Mistakes</h3>
      
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">❌ Monitor Too Low</h4>
          <p className="text-red-800 text-sm">
            Forcing you to look down, creating forward head posture and neck strain. Most common mistake with laptop users.
          </p>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">❌ Desk Too High</h4>
          <p className="text-red-800 text-sm">
            Causes shoulder elevation and tension. Elbows should be at 90 degrees, not lifted.
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">❌ Standing All Day</h4>
          <p className="text-red-800 text-sm">
            Standing for 8 hours straight causes fatigue and poor posture. Alternate sitting and standing every 30-60 minutes.
          </p>
        </div>

        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">❌ Wrong Footwear</h4>
          <p className="text-red-800 text-sm">
            High heels or unsupportive shoes at a standing desk lead to poor posture throughout the body, including the neck.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Additional Ergonomic Considerations</h3>
      
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li><strong>Anti-Fatigue Mat:</strong> Reduces foot and leg fatigue, helping maintain good posture longer</li>
        <li><strong>Keyboard Position:</strong> Flat or slightly negative tilt to keep wrists neutral</li>
        <li><strong>Mouse Placement:</strong> Close to keyboard to avoid reaching and shoulder strain</li>
        <li><strong>Lighting:</strong> Avoid glare on screen that causes you to crane your neck</li>
        <li><strong>Footrest:</strong> Optional for shorter users to relieve leg pressure</li>
      </ul>

      <h3 className="text-xl font-semibold text-gray-900 mb-3">Laptop Users: Special Considerations</h3>
      
      <p className="mb-4">
        If you're using a laptop at a standing desk, you <strong>must</strong> use an external monitor or laptop stand. 
        Looking down at a laptop screen on the desk surface will cause severe forward head posture within weeks.
      </p>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
        <p className="text-yellow-900">
          <strong>Best Setup for Laptops:</strong> Use a laptop stand to raise the screen to eye level, 
          then add an external keyboard and mouse for typing. This prevents neck strain from looking down.
        </p>
      </div>
    </div>
  )

  const keyConsiderations = [
    "Measure desk height when standing with relaxed shoulders - elbows should be at 90 degrees",
    "Position monitor at arm's length with top third at eye level, not center of screen at eye level",
    "Alternate between sitting and standing every 30-60 minutes to prevent fatigue",
    "Use a monitor riser or laptop stand - never work with screen below eye level",
    "Keep keyboard and mouse close to prevent reaching and shoulder strain",
    "Stand on an anti-fatigue mat to reduce leg fatigue and maintain better posture",
    "Wear supportive footwear, not high heels or unsupportive shoes"
  ]

  const steps = [
    {
      title: "Adjust Desk Height",
      description: "Stand with relaxed shoulders. Raise desk until your elbows are at 90 degrees when typing. Your wrists should be flat and neutral."
    },
    {
      title: "Position Your Monitor",
      description: "Place monitor at arm's length (20-26 inches). The top third of the screen should be at eye level when looking straight ahead."
    },
    {
      title: "Add Monitor Riser if Needed",
      description: "If your monitor is too low, use a monitor stand or laptop stand. Books or boxes work temporarily to test the right height."
    },
    {
      title: "Arrange Keyboard and Mouse",
      description: "Position keyboard directly in front of you with mouse close beside it. Both should be at desk surface level, not on a raised platform."
    },
    {
      title: "Use an Anti-Fatigue Mat",
      description: "Place a cushioned anti-fatigue mat under your feet to reduce leg fatigue and encourage subtle movement."
    },
    {
      title: "Test and Fine-Tune",
      description: "Stand for 20-30 minutes and assess comfort. Your neck should be neutral, shoulders relaxed, and no reaching required. Adjust as needed."
    },
    {
      title: "Set Standing/Sitting Schedule",
      description: "Program reminders to alternate positions every 30-60 minutes. Start with 20 minutes standing, then gradually increase."
    }
  ]

  const whenToSeeDoctor = [
    "Persistent neck pain that worsens with standing desk use",
    "Numbness or tingling in hands or arms while standing",
    "Severe lower back pain that doesn't improve with posture adjustments",
    "Dizziness or balance problems while standing at your desk",
    "Pain that radiates from neck to shoulders or arms",
    "Existing neck conditions that might be affected by standing desk use"
  ]

  const relatedQuestions = [
    {
      text: "Best laptop stands for better posture?",
      link: "/help/product-questions/laptop-stands-better-posture"
    },
    {
      text: "Best ergonomic chairs for neck hump?",
      link: "/help/product-questions/best-ergonomic-chairs-neck-hump"
    },
    {
      text: "Neck hump exercises for office workers?",
      link: "/help/specific-situations/neck-hump-exercises-office-workers"
    },
    {
      text: "Complete desk setup guide for neck hump?",
      link: "/desk-setup-guide"
    },
    {
      text: "Forward head posture causes and fixes?",
      link: "/neck-hump-causes"
    }
  ]

  const faqQuestions = [
    {
      question: "What is the correct standing desk height?",
      answer: "Your standing desk should be at elbow height when standing with relaxed shoulders, typically 38-46 inches from the floor depending on your height. Your elbows should be at 90 degrees and wrists neutral when typing."
    },
    {
      question: "How high should my monitor be at a standing desk?",
      answer: "Position your monitor so the top third of the screen is at eye level when looking straight ahead. The monitor should be at arm's length (20-26 inches) from your eyes. Many people make the mistake of positioning the monitor too low."
    },
    {
      question: "Should I stand all day at my standing desk?",
      answer: "No, standing all day can cause fatigue and poor posture. Alternate between sitting and standing every 30-60 minutes. Start with 20-minute standing intervals and gradually increase as you build tolerance."
    },
    {
      question: "Can I use my laptop at a standing desk?",
      answer: "You can use a laptop, but you must elevate it with a laptop stand to bring the screen to eye level. Then use an external keyboard and mouse for typing. Looking down at a laptop on the desk surface will cause forward head posture."
    },
    {
      question: "Will a standing desk fix my neck hump?",
      answer: "A standing desk alone won't fix neck hump, but proper setup can help prevent worsening and support corrective exercises. You still need to do specific neck exercises like chin tucks and maintain good posture while standing."
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Product Questions', href: '/help/product-questions' },
    { name: 'Standing Desk Setup for Posture', href: '/help/product-questions/standing-desk-setup-posture' }
  ]

  return (
    <HelpArticle
      title="Standing Desk Setup for Posture - Prevent Neck Hump"
      description="Complete guide to ergonomic standing desk setup for optimal neck posture and preventing forward head posture."
      shortAnswer={shortAnswer}
      content={content}
      keyConsiderations={keyConsiderations}
      steps={steps}
      whenToSeeDoctor={whenToSeeDoctor}
      relatedQuestions={relatedQuestions}
      faqQuestions={faqQuestions}
      breadcrumbs={breadcrumbs}
      lastUpdated="January 15, 2025"
    />
  )
}

