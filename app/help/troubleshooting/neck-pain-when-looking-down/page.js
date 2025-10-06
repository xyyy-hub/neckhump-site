import { Metadata } from 'next'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Neck Pain When Looking Down: Causes and Solutions',
  description: 'Why looking down causes neck pain and how to prevent it. Learn about forward head posture, muscle imbalances, and exercises to strengthen your neck.',
  keywords: ['neck pain when looking down', 'forward head posture pain', 'looking down neck strain', 'neck pain phone use', 'text neck exercises'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/troubleshooting/neck-pain-when-looking-down',
  },
  openGraph: {
    title: 'Neck Pain When Looking Down: Causes and Solutions',
    description: 'Why looking down causes neck pain and how to prevent it. Learn about forward head posture, muscle imbalances, and exercises to strengthen your neck.',
    url: 'https://www.neckhump.com/help/troubleshooting/neck-pain-when-looking-down',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
}

export default function NeckPainWhenLookingDownPage() {
  const shortAnswer = "Neck pain when looking down is usually caused by forward head posture and weak neck muscles. To fix it: 1) Strengthen your deep neck flexors with chin tucks, 2) Improve your posture when using devices, 3) Hold your phone at eye level, 4) Do neck strengthening exercises, 5) Take frequent breaks from looking down, 6) Use ergonomic adjustments. If pain is severe or persistent, see a doctor."

  const content = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Looking Down Causes Neck Pain</h2>
      <p className="mb-4">
        Neck pain when looking down is a common problem in our modern, device-heavy world. This pain occurs because your head weighs 
        about 10-12 pounds, and when you tilt it forward to look down, the weight your neck muscles must support increases dramatically. 
        At a 15-degree forward tilt, your head effectively weighs 27 pounds; at 30 degrees, it's 40 pounds; and at 60 degrees, it's 60 pounds.
      </p>
      
      <p className="mb-4">
        This increased load puts tremendous strain on your neck muscles, particularly the deep neck flexors and upper trapezius muscles. 
        Over time, this can lead to muscle imbalances, forward head posture, and chronic neck pain. Understanding the mechanics behind 
        this pain is the first step toward finding effective solutions.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Causes of Neck Pain When Looking Down</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">1. Forward Head Posture</h4>
          <p className="text-red-800 text-sm">
            When your head is positioned forward of your shoulders, it creates an unnatural curve in your cervical spine. 
            This forward head posture puts constant strain on your neck muscles and can lead to chronic pain when looking down.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">2. Weak Deep Neck Flexors</h4>
          <p className="text-red-800 text-sm">
            The deep neck flexors (longus colli and longus capitis) are responsible for maintaining proper head position. 
            When these muscles are weak, your head tends to fall forward, increasing the strain when you look down.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">3. Tight Upper Trapezius Muscles</h4>
          <p className="text-red-800 text-sm">
            The upper trapezius muscles often become tight and overactive when compensating for weak deep neck flexors. 
            This creates a muscle imbalance that can cause pain when looking down or moving your head.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">4. Poor Ergonomics</h4>
          <p className="text-red-800 text-sm">
            Looking down at phones, tablets, or computer screens that are positioned too low forces your head into an 
            awkward position for extended periods, leading to muscle fatigue and pain.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">5. Muscle Imbalances</h4>
          <p className="text-red-800 text-sm">
            Imbalances between the front and back neck muscles, or between the left and right sides, can cause uneven 
            stress distribution and pain when looking down or in certain directions.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">The "Text Neck" Problem</h3>
      
      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-yellow-900 mb-3">Understanding Text Neck</h4>
        <p className="text-yellow-800 text-sm mb-3">
          "Text neck" is a modern condition caused by repeatedly looking down at mobile devices. The average person spends 
          2-4 hours daily looking down at their phone, which can lead to:
        </p>
        <ul className="space-y-1 text-yellow-800 text-sm">
          <li>• Forward head posture and neck hump development</li>
          <li>• Muscle imbalances and chronic neck pain</li>
          <li>• Reduced range of motion in the neck</li>
          <li>• Headaches and upper back pain</li>
          <li>• Increased risk of disc degeneration</li>
        </ul>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Exercises to Strengthen Your Neck</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">1. Chin Tucks (Most Important)</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Sit or stand with your back straight. Gently nod your head forward as if saying "yes" to a small child. 
            Hold for 3-5 seconds, repeat 10-15 times. Do this 3-4 times daily.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Benefits:</strong> Strengthens deep neck flexors, improves cervical alignment, reduces forward head posture.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">2. Neck Strengthening Exercises</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Place your hand against your forehead and gently push while resisting with your neck muscles. 
            Hold for 5 seconds, then repeat with your hand on the back of your head and each side.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Benefits:</strong> Builds neck strength in all directions, improves muscle balance, reduces pain when looking down.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">3. Upper Trapezius Stretches</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Gently tilt your head to one side, bringing your ear toward your shoulder. 
            Hold for 15-20 seconds, then repeat on the other side. Do 3-5 repetitions.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Benefits:</strong> Relieves tension in upper trapezius muscles, improves range of motion, reduces muscle imbalances.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">4. Wall Angels</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Stand with your back against a wall, arms at 90-degree angles. Slowly slide your arms up and down, 
            keeping contact with the wall. Do 10-15 repetitions.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Benefits:</strong> Strengthens upper back muscles, improves posture, reduces forward head posture.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Ergonomic Solutions</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
          <div>
            <h5 className="font-medium text-gray-900">Hold Your Phone at Eye Level</h5>
            <p className="text-gray-700 text-sm">When using your phone, hold it at eye level instead of looking down. This prevents your head from tilting forward and reduces neck strain.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
          <div>
            <h5 className="font-medium text-gray-900">Use a Laptop Stand</h5>
            <p className="text-gray-700 text-sm">Raise your laptop screen to eye level using a laptop stand or books. This prevents you from looking down at your screen for extended periods.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
          <div>
            <h5 className="font-medium text-gray-900">Take Frequent Breaks</h5>
            <p className="text-gray-700 text-sm">Set reminders to take breaks every 30-60 minutes when working on devices. Use these breaks to do neck stretches and chin tucks.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
          <div>
            <h5 className="font-medium text-gray-900">Use Voice Commands</h5>
            <p className="text-gray-700 text-sm">When possible, use voice commands or dictation instead of typing. This reduces the time you spend looking down at your device.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Prevention Strategies</h3>
      
      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-green-400 pl-4">
          <h4 className="font-semibold text-gray-900">Maintain Good Posture</h4>
          <p className="text-gray-700 text-sm">Keep your head balanced over your shoulders, not forward. Imagine a string pulling your head up from the top of your skull.</p>
        </div>
        
        <div className="border-l-4 border-green-400 pl-4">
          <h4 className="font-semibold text-gray-900">Strengthen Your Neck Muscles</h4>
          <p className="text-gray-700 text-sm">Regular chin tucks and neck strengthening exercises help maintain proper head position and reduce strain when looking down.</p>
        </div>
        
        <div className="border-l-4 border-green-400 pl-4">
          <h4 className="font-semibold text-gray-900">Limit Device Use</h4>
          <p className="text-gray-700 text-sm">Be mindful of how much time you spend looking down at devices. Take breaks and use ergonomic adjustments to reduce strain.</p>
        </div>
        
        <div className="border-l-4 border-green-400 pl-4">
          <h4 className="font-semibold text-gray-900">Stretch Regularly</h4>
          <p className="text-gray-700 text-sm">Incorporate neck stretches into your daily routine to maintain flexibility and reduce muscle tension.</p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">When to See a Doctor</h3>
      
      <div className="bg-yellow-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-yellow-900 mb-3">Seek Medical Attention If:</h4>
        <ul className="space-y-2 text-yellow-800 text-sm">
          <li>• Neck pain is severe or persistent (lasting more than a few days)</li>
          <li>• Pain radiates down your arms or into your shoulders</li>
          <li>• You experience numbness or tingling in your arms or hands</li>
          <li>• You have difficulty moving your neck or turning your head</li>
          <li>• Pain is accompanied by headaches, dizziness, or nausea</li>
          <li>• You have a history of neck injuries or conditions</li>
          <li>• Pain worsens over time instead of improving</li>
        </ul>
      </div>
    </div>
  )

  const keyConsiderations = [
    "Strengthen your deep neck flexors with regular chin tucks to improve head position and reduce strain",
    "Hold your phone and other devices at eye level to prevent your head from tilting forward",
    "Take frequent breaks from looking down and use these breaks to do neck stretches and exercises",
    "Use ergonomic adjustments like laptop stands to position screens at eye level",
    "Focus on maintaining good posture with your head balanced over your shoulders",
    "Incorporate neck strengthening exercises into your daily routine to build muscle endurance",
    "If pain is severe or persistent, seek medical attention to rule out underlying conditions"
  ]

  const steps = [
    {
      title: "Assess Your Current Posture",
      description: "Evaluate how you hold your head when using devices and identify areas where you're looking down for extended periods."
    },
    {
      title: "Start with Chin Tucks",
      description: "Begin with regular chin tucks to strengthen your deep neck flexors. Do 10-15 repetitions, 3-4 times daily."
    },
    {
      title: "Improve Your Ergonomics",
      description: "Adjust your workspace to position screens at eye level. Use laptop stands, phone holders, or books to raise devices."
    },
    {
      title: "Add Neck Strengthening",
      description: "Incorporate neck strengthening exercises and stretches into your daily routine to build muscle endurance and flexibility."
    },
    {
      title: "Take Regular Breaks",
      description: "Set reminders to take breaks every 30-60 minutes when using devices. Use these breaks to do neck exercises and stretches."
    },
    {
      title: "Monitor Your Progress",
      description: "Pay attention to how your neck feels when looking down. Adjust your routine as needed and seek medical attention if pain persists."
    }
  ]

  const whenToSeeDoctor = [
    "Severe or persistent neck pain that lasts more than a few days",
    "Pain that radiates down your arms or into your shoulders",
    "Numbness or tingling in your arms or hands",
    "Difficulty moving your neck or turning your head",
    "Pain accompanied by headaches, dizziness, or nausea",
    "History of neck injuries or conditions that might be aggravated by looking down",
    "Pain that worsens over time instead of improving with exercises and ergonomic adjustments"
  ]

  const relatedQuestions = [
    {
      text: "Chin tucks causing dizziness?",
      link: "/help/troubleshooting/chin-tucks-causing-dizziness"
    },
    {
      text: "Neck stiffness after exercises?",
      link: "/help/troubleshooting/neck-stiffness-after-exercises"
    },
    {
      text: "Complete chin tucks guide for beginners",
      link: "/exercises/chin-tucks"
    },
    {
      text: "How to fix posture at home",
      link: "/how-to-fix-posture-at-home"
    },
    {
      text: "Neck hump exercises for different conditions",
      link: "/neck-hump-exercises"
    },
    {
      text: "Desk setup guide for neck hump",
      link: "/desk-setup-guide"
    }
  ]

  const faqQuestions = [
    {
      question: "Why does looking down cause neck pain?",
      answer: "Looking down causes neck pain because your head weighs about 10-12 pounds, and when you tilt it forward, the weight your neck muscles must support increases dramatically. At a 15-degree forward tilt, your head effectively weighs 27 pounds; at 30 degrees, it's 40 pounds; and at 60 degrees, it's 60 pounds."
    },
    {
      question: "How can I prevent neck pain when looking down?",
      answer: "Prevent neck pain by holding your phone and other devices at eye level, using ergonomic adjustments like laptop stands, taking frequent breaks from looking down, doing regular chin tucks to strengthen your neck muscles, and maintaining good posture with your head balanced over your shoulders."
    },
    {
      question: "What exercises help with neck pain when looking down?",
      answer: "Chin tucks are the most important exercise as they strengthen your deep neck flexors. Also do neck strengthening exercises, upper trapezius stretches, and wall angels. These exercises help improve muscle balance and reduce strain when looking down."
    },
    {
      question: "How often should I do neck exercises?",
      answer: "Do chin tucks 10-15 repetitions, 3-4 times daily. Incorporate other neck exercises and stretches into your daily routine. Take breaks every 30-60 minutes when using devices to do neck exercises and stretches."
    },
    {
      question: "When should I see a doctor for neck pain when looking down?",
      answer: "See a doctor if neck pain is severe or persistent (lasting more than a few days), radiates down your arms, is accompanied by numbness or tingling, or if you have difficulty moving your neck. Also seek medical attention if pain worsens over time or is accompanied by other symptoms like headaches or dizziness."
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Troubleshooting', href: '/help/troubleshooting' },
    { name: 'Neck Pain When Looking Down', href: '/help/troubleshooting/neck-pain-when-looking-down' }
  ]

  return (
    <HelpArticle
      title="Neck Pain When Looking Down: Causes and Solutions"
      description="Why looking down causes neck pain and how to prevent it. Learn about forward head posture, muscle imbalances, and exercises to strengthen your neck."
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
