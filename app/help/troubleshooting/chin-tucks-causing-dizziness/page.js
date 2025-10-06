import { Metadata } from 'next'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Chin Tucks Causing Dizziness: How to Fix It',
  description: 'Why do chin tucks cause dizziness? Common causes include cervical vertigo, blood pressure changes, and inner ear issues. Learn safe modifications and when to see a doctor.',
  keywords: ['chin tucks dizziness', 'cervical vertigo chin tucks', 'neck exercises causing dizziness', 'chin tucks vertigo', 'dizziness neck exercises'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/troubleshooting/chin-tucks-causing-dizziness',
  },
  openGraph: {
    title: 'Chin Tucks Causing Dizziness: How to Fix It',
    description: 'Why do chin tucks cause dizziness? Common causes include cervical vertigo, blood pressure changes, and inner ear issues. Learn safe modifications and when to see a doctor.',
    url: 'https://www.neckhump.com/help/troubleshooting/chin-tucks-causing-dizziness',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
}

export default function ChinTucksDizzinessPage() {
  const shortAnswer = "Chin tucks can cause dizziness due to cervical vertigo, blood pressure changes, or inner ear issues. To fix it: 1) Start with very gentle movements, 2) Keep your eyes open and focus on a fixed point, 3) Avoid holding the position too long, 4) Stop immediately if dizzy. If dizziness persists, see a doctor to rule out serious conditions."

  const content = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Chin Tucks Cause Dizziness</h2>
      <p className="mb-4">
        Dizziness during chin tucks is surprisingly common and usually not dangerous, but it can be concerning. The most common 
        causes are related to how the exercise affects your cervical spine, blood flow, and inner ear balance systems.
      </p>
      
      <p className="mb-4">
        When you perform a chin tuck, you're compressing the cervical spine and potentially affecting the vertebral arteries 
        that supply blood to your brain. This can cause a temporary reduction in blood flow, leading to dizziness or lightheadedness. 
        Additionally, the movement can stimulate the inner ear's balance organs, causing vertigo-like sensations.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Causes of Dizziness During Chin Tucks</h3>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">1. Cervical Vertigo</h4>
        <p className="mb-3">
          Cervical vertigo occurs when neck movements affect the inner ear or blood vessels. This is the most common cause 
          of dizziness during chin tucks, especially in people with existing neck problems or poor posture.
        </p>
        
        <h4 className="font-semibold text-gray-900 mb-3">2. Blood Pressure Changes</h4>
        <p className="mb-3">
          Chin tucks can temporarily compress the vertebral arteries, reducing blood flow to the brain. This is usually 
          harmless but can cause dizziness, especially if you hold the position too long.
        </p>
        
        <h4 className="font-semibold text-gray-900 mb-3">3. Inner Ear Stimulation</h4>
        <p className="mb-3">
          The movement of your head during chin tucks can stimulate the semicircular canals in your inner ear, causing 
          temporary balance disturbances.
        </p>
        
        <h4 className="font-semibold text-gray-900 mb-3">4. Muscle Tension</h4>
        <p className="mb-3">
          Tight neck muscles can compress nerves and blood vessels, making you more susceptible to dizziness during 
          neck movements.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Factors</h3>
      <p className="mb-4">
        You're more likely to experience dizziness during chin tucks if you have:
      </p>
      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>Existing neck problems or cervical spine issues</li>
        <li>Poor posture or forward head posture</li>
        <li>History of vertigo or balance problems</li>
        <li>High blood pressure or cardiovascular issues</li>
        <li>Dehydration or low blood sugar</li>
        <li>Inner ear problems or Meniere's disease</li>
      </ul>
    </div>
  )

  const keyConsiderations = [
    "Stop immediately if you feel dizzy - never push through dizziness",
    "Start with very gentle, small movements (1/2 inch range of motion)",
    "Keep your eyes open and focus on a fixed point in front of you",
    "Avoid holding the chin tuck position for more than 3-5 seconds initially",
    "Perform chin tucks sitting down initially, not standing",
    "Breathe normally throughout the exercise - don't hold your breath",
    "If dizziness persists, see a doctor to rule out serious conditions"
  ]

  const steps = [
    {
      title: "Safe Starting Position",
      description: "Sit in a comfortable chair with your back supported. Place your feet flat on the floor and keep your eyes open, focusing on a fixed point across the room."
    },
    {
      title: "Gentle Movement",
      description: "Very slowly and gently nod your head forward, moving only about 1/2 inch. Think of it as a tiny 'yes' nod, not a full chin tuck."
    },
    {
      title: "Short Hold",
      description: "Hold this gentle position for only 2-3 seconds maximum. If you feel any dizziness, stop immediately and return to neutral."
    },
    {
      title: "Slow Return",
      description: "Very slowly return to your starting position. Rest for 10-15 seconds before attempting another repetition."
    },
    {
      title: "Monitor Symptoms",
      description: "Pay attention to how you feel. If you experience dizziness, lightheadedness, or nausea, stop the exercise completely."
    },
    {
      title: "Gradual Progression",
      description: "Only increase the range of motion or hold time if you can perform 5 repetitions without any dizziness for 3 consecutive days."
    }
  ]

  const whenToSeeDoctor = [
    "Dizziness that persists for more than a few minutes after stopping the exercise",
    "Severe dizziness or vertigo that makes you feel like you might fall",
    "Nausea or vomiting associated with the dizziness",
    "Hearing changes or ringing in your ears",
    "Vision problems or double vision",
    "Weakness or numbness in your arms or legs",
    "Difficulty speaking or confusion",
    "Dizziness that occurs with other neck movements, not just chin tucks"
  ]

  const relatedQuestions = [
    {
      text: "What other neck exercises are safe if chin tucks cause dizziness?",
      link: "/help/exercises-safety/neck-exercises-alternatives-dizziness"
    },
    {
      text: "How to do chin tucks safely for beginners?",
      link: "/exercises/chin-tucks"
    },
    {
      text: "Neck exercises safe during pregnancy?",
      link: "/help/exercises-safety/exercises-safe-during-pregnancy"
    },
    {
      text: "Can I do chin tucks with herniated disc?",
      link: "/help/exercises-safety/can-i-do-chin-tucks-with-herniated-disc"
    },
    {
      text: "Headaches after posture exercises?",
      link: "/help/troubleshooting/headaches-after-posture-exercises"
    },
    {
      text: "Complete neck hump exercise guide",
      link: "/neck-hump-exercises"
    }
  ]

  const faqQuestions = [
    {
      question: "Why do chin tucks make me dizzy?",
      answer: "Chin tucks can cause dizziness due to cervical vertigo, blood pressure changes, or inner ear stimulation. The movement compresses your cervical spine and can temporarily affect blood flow to your brain or stimulate balance organs in your inner ear."
    },
    {
      question: "Is it safe to continue chin tucks if they cause dizziness?",
      answer: "No, you should stop immediately if chin tucks cause dizziness. Dizziness can indicate that the exercise is affecting your blood flow or balance systems in a way that could be dangerous. Try gentler modifications or alternative exercises instead."
    },
    {
      question: "How can I prevent dizziness during chin tucks?",
      answer: "Start with very gentle movements (1/2 inch range), keep your eyes open and focused on a fixed point, avoid holding the position too long (2-3 seconds max), and perform the exercise sitting down initially. Breathe normally throughout."
    },
    {
      question: "When should I see a doctor about dizziness during chin tucks?",
      answer: "See a doctor if dizziness persists for more than a few minutes, is severe, or is accompanied by other symptoms like nausea, hearing changes, vision problems, weakness, or numbness. These could indicate a more serious condition."
    },
    {
      question: "Are there alternative exercises if chin tucks cause dizziness?",
      answer: "Yes, try gentle neck stretches, wall angels, or isometric neck exercises instead. These provide similar benefits without the head movement that can cause dizziness. A physical therapist can recommend specific alternatives."
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Troubleshooting', href: '/help/troubleshooting' },
    { name: 'Chin Tucks Causing Dizziness', href: '/help/troubleshooting/chin-tucks-causing-dizziness' }
  ]

  return (
    <HelpArticle
      title="Chin Tucks Causing Dizziness: How to Fix It"
      description="Why chin tucks cause dizziness and how to fix it. Learn safe modifications, common causes, and when to see a doctor for cervical vertigo."
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
