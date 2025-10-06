import { Metadata } from 'next'
import HelpArticle from '../../../components/HelpArticle'

export const metadata = {
  title: 'Can I Do Chin Tucks with Herniated Disc? Safety Guide',
  description: 'Can you do chin tucks with herniated disc? Yes, with modifications. Gentle chin tucks (5-second holds) are generally safe for C5-C7 herniations. Avoid if numbness/tingling.',
  keywords: ['chin tucks herniated disc', 'cervical disc herniation exercises', 'safe neck exercises herniated disc', 'C5-C6 disc exercises', 'C6-C7 disc exercises'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/exercises-safety/can-i-do-chin-tucks-with-herniated-disc',
  },
  openGraph: {
    title: 'Can I Do Chin Tucks with Herniated Disc? Safety Guide',
    description: 'Can you do chin tucks with herniated disc? Yes, with modifications. Gentle chin tucks (5-second holds) are generally safe for C5-C7 herniations. Avoid if numbness/tingling.',
    url: 'https://www.neckhump.com/help/exercises-safety/can-i-do-chin-tucks-with-herniated-disc',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
}

export default function ChinTucksHerniatedDiscPage() {
  const shortAnswer = "Yes, you can do chin tucks with a herniated disc, but with important modifications. Gentle chin tucks (5-second holds, 5-10 reps) are generally safe for C5-C6 and C6-C7 herniations. Avoid if you experience numbness, tingling, or shooting pain down your arms."

  const content = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Explanation</h2>
      <p className="mb-4">
        Chin tucks can be beneficial for herniated discs when performed correctly, as they help strengthen the deep neck flexors 
        and improve cervical alignment. However, the technique must be modified to avoid compression and irritation of the 
        affected disc.
      </p>
      
      <p className="mb-4">
        Research shows that gentle cervical retraction exercises can actually help reduce disc pressure and improve symptoms 
        in many cases. The key is using a very controlled, small range of motion and avoiding any positions that increase 
        your symptoms.
      </p>
      
      <p className="mb-4">
        For C5-C6 and C6-C7 herniations (the most common levels), chin tucks are generally well-tolerated when done with 
        proper modifications. However, if your herniation is at C4-C5 or higher, or if you have central canal stenosis, 
        you may need to be more cautious.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">How Herniated Discs Affect Chin Tucks</h3>
      <p className="mb-4">
        A herniated disc occurs when the gel-like center of a spinal disc pushes through the outer ring, potentially 
        compressing nearby nerves. Chin tucks work by strengthening the deep neck flexors and improving the natural 
        curve of your cervical spine.
      </p>
      
      <p className="mb-4">
        When done correctly, chin tucks can actually help by:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Reducing forward head posture that puts extra pressure on discs</li>
        <li>Strengthening supporting muscles to better stabilize the spine</li>
        <li>Improving blood flow to the affected area</li>
        <li>Creating more space between vertebrae</li>
      </ul>
    </div>
  )

  const keyConsiderations = [
    "Start with very gentle, small movements - think 'nodding yes' rather than 'pulling chin back'",
    "Hold for only 3-5 seconds initially, never longer than 10 seconds",
    "Stop immediately if you feel any numbness, tingling, or shooting pain down your arms",
    "Avoid chin tucks if you have central canal stenosis or severe disc compression",
    "Work with a physical therapist initially to ensure proper technique",
    "Progress very slowly - it may take weeks to build up to 10 repetitions"
  ]

  const steps = [
    {
      title: "Starting Position",
      description: "Sit or stand with good posture. Place your tongue on the roof of your mouth to help stabilize your neck."
    },
    {
      title: "Gentle Nod",
      description: "Very slowly and gently nod your head forward, as if saying 'yes' to a small child. Move only 1-2 inches."
    },
    {
      title: "Hold Gently",
      description: "Hold this position for 3-5 seconds maximum. You should feel a gentle stretch, not pain or pressure."
    },
    {
      title: "Return Slowly",
      description: "Slowly return to neutral position. Rest for 5-10 seconds between repetitions."
    },
    {
      title: "Progress Gradually",
      description: "Start with 3-5 repetitions, once daily. Only increase if you have no symptoms for 3 consecutive days."
    }
  ]

  const whenToSeeDoctor = [
    "Numbness or tingling in your arms, hands, or fingers",
    "Shooting pain down your arms during or after the exercise",
    "Weakness in your arms or hands",
    "Loss of bladder or bowel control",
    "Severe neck pain that worsens with movement",
    "Headaches that start after doing chin tucks"
  ]

  const relatedQuestions = [
    {
      text: "What other neck exercises are safe with herniated disc?",
      link: "/help/exercises-safety/safe-neck-exercises-herniated-disc"
    },
    {
      text: "How long does it take to recover from cervical disc herniation?",
      link: "/help/timeline-questions/recovery-time-cervical-herniation"
    },
    {
      text: "Can I do wall angels with herniated disc?",
      link: "/help/exercises-safety/wall-angels-herniated-disc"
    },
    {
      text: "What's the difference between disc bulge and herniation?",
      link: "/help/exercises-safety/disc-bulge-vs-herniation-exercises"
    },
    {
      text: "Complete chin tucks guide for beginners",
      link: "/exercises/chin-tucks"
    },
    {
      text: "Neck hump exercises for different conditions",
      link: "/neck-hump-exercises"
    }
  ]

  const faqQuestions = [
    {
      question: "Is it safe to do chin tucks with a herniated disc?",
      answer: "Yes, with modifications. Gentle chin tucks (5-second holds, small range of motion) are generally safe for C5-C6 and C6-C7 herniations. Avoid if you experience numbness, tingling, or shooting pain."
    },
    {
      question: "What modifications should I make for herniated disc?",
      answer: "Use very small movements (1-2 inches), hold for only 3-5 seconds, start with 3-5 repetitions, and stop immediately if you feel any nerve symptoms like numbness or tingling."
    },
    {
      question: "How often should I do chin tucks with herniated disc?",
      answer: "Start with once daily, 3-5 repetitions. Only increase frequency or repetitions if you have no symptoms for 3 consecutive days. Progress very slowly."
    },
    {
      question: "What are the warning signs to stop chin tucks?",
      answer: "Stop immediately if you experience numbness, tingling, shooting pain down your arms, weakness, or any new symptoms. These indicate nerve irritation."
    },
    {
      question: "Can chin tucks help heal a herniated disc?",
      answer: "Chin tucks can help by strengthening supporting muscles and improving posture, which reduces pressure on the disc. However, they don't directly heal the herniation - that requires time and proper medical care."
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Exercises & Safety', href: '/help/exercises-safety' },
    { name: 'Chin Tucks with Herniated Disc', href: '/help/exercises-safety/can-i-do-chin-tucks-with-herniated-disc' }
  ]

  return (
    <HelpArticle
      title="Can I Do Chin Tucks with Herniated Disc?"
      description="Safe modifications for chin tucks with cervical disc herniation. Learn proper technique, precautions, and when to avoid this exercise."
      shortAnswer={shortAnswer}
      content={content}
      keyConsiderations={keyConsiderations}
      steps={steps}
      whenToSeeDoctor={whenToSeeDoctor}
      relatedQuestions={relatedQuestions}
      faqQuestions={faqQuestions}
      breadcrumbs={breadcrumbs}
      lastUpdated="January 15, 2024"
    />
  )
}
