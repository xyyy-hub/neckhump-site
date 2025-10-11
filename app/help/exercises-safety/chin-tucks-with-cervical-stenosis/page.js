import { Metadata } from 'next'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Chin Tucks with Cervical Stenosis: Safe Modifications Guide',
  description: 'Modified chin tucks for spinal stenosis. Avoiding compression and maintaining spinal alignment with cervical canal narrowing.',
  keywords: ['chin tucks cervical stenosis', 'spinal stenosis neck exercises', 'cervical canal narrowing exercises', 'stenosis safe chin tucks', 'neck compression exercises'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/exercises-safety/chin-tucks-with-cervical-stenosis',
  },
  openGraph: {
    title: 'Chin Tucks with Cervical Stenosis: Safe Modifications Guide',
    description: 'Modified chin tucks for spinal stenosis. Avoiding compression and maintaining spinal alignment with cervical canal narrowing.',
    url: 'https://www.neckhump.com/help/exercises-safety/chin-tucks-with-cervical-stenosis',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
}

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic'

export default function ChinTucksWithCervicalStenosisPage() {
  const shortAnswer = "Yes, you can do MODIFIED chin tucks with cervical stenosis, but with important restrictions: 1) Keep range of motion limited (30-50% of full movement), 2) Do them sitting or standing upright (never lying down), 3) Move slowly and gently, 4) Stop immediately if you feel numbness, tingling, or shooting pain, 5) Avoid excessive neck extension (looking up), 6) Get PT supervision initially. These modifications prevent increased spinal cord compression."

  const content = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Cervical Stenosis and Exercise Safety</h2>
      <p className="mb-4">
        Cervical stenosis is a narrowing of the spinal canal in your neck, which can compress the spinal cord and nerve 
        roots. This narrowing can be caused by age-related degenerative changes, herniated discs, bone spurs, or ligament 
        thickening. The condition creates a smaller space for your spinal cord, making certain movements potentially 
        dangerous because they can further compress already-crowded neural structures.
      </p>
      
      <p className="mb-4">
        Chin tucks are generally beneficial for neck posture and can actually help cervical stenosis patients by 
        maintaining proper cervical alignment. However, they must be performed with specific modifications to avoid 
        exacerbating symptoms. When done correctly, chin tucks can strengthen deep neck flexors, improve posture, and 
        potentially reduce pressure on compressed nerves.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Cervical Stenosis Requires Exercise Modifications</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">1. Spinal Cord Compression Risk</h4>
          <p className="text-red-800 text-sm">
            The spinal canal is already narrowed, so any movement that further reduces space can compress the spinal 
            cord. Extension (looking up) and extreme flexion (looking down) are particularly risky because they change 
            canal dimensions.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">2. Nerve Root Impingement</h4>
          <p className="text-red-800 text-sm">
            Nerve roots exit through openings (foramina) in the cervical spine. Stenosis often narrows these openings. 
            Certain head positions can close these spaces further, pinching nerves and causing arm pain, numbness, or weakness.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">3. Variable Symptom Presentation</h4>
          <p className="text-red-800 text-sm">
            Stenosis severity varies greatly. Some patients have significant narrowing with few symptoms, others have 
            moderate narrowing with severe symptoms. Exercise modifications must be individualized based on your specific 
            stenosis pattern and symptoms.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Modified Chin Tucks for Cervical Stenosis</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Safe Chin Tuck Technique for Stenosis</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>Starting Position:</strong> Sit upright in a supportive chair with your back against the backrest. 
            Keep your eyes looking straight ahead at eye level. Relax your shoulders.
          </p>
          <p className="text-green-800 text-sm mb-2">
            <strong>The Movement:</strong> Gently pull your chin straight back (not down), creating a subtle "double chin" 
            effect. Move only 30-50% of your full range - this should be a GENTLE retraction, not maximum effort. Your 
            head should move straight backward without tilting up or down.
          </p>
          <p className="text-green-800 text-sm mb-2">
            <strong>Hold Time:</strong> Hold for 3-5 seconds only. Do NOT hold for extended periods as this can increase 
            compression.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Repetitions:</strong> Start with 5-8 repetitions, 2-3 times daily. Can progress to 10 repetitions 
            if well-tolerated after 2 weeks.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Critical Safety Modifications</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
          <div>
            <h5 className="font-medium text-gray-900">Limited Range of Motion</h5>
            <p className="text-gray-700 text-sm">Only move 30-50% of your full range. This is the MOST important modification. Full-range chin tucks can increase stenosis symptoms by changing canal dimensions.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
          <div>
            <h5 className="font-medium text-gray-900">Upright Position Only</h5>
            <p className="text-gray-700 text-sm">NEVER do chin tucks lying down with cervical stenosis. Lying flat changes the position of the spinal cord within the canal and can worsen compression. Always sit or stand.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
          <div>
            <h5 className="font-medium text-gray-900">Avoid Neck Extension</h5>
            <p className="text-gray-700 text-sm">Do NOT look upward or tilt your head back during chin tucks. Extension (looking up) can significantly narrow the spinal canal and worsen stenosis symptoms.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
          <div>
            <h5 className="font-medium text-gray-900">Move Very Slowly</h5>
            <p className="text-gray-700 text-sm">Take 2-3 seconds to move into the chin tuck position and 2-3 seconds to return. Fast movements can cause sudden compression and symptoms.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</span>
          <div>
            <h5 className="font-medium text-gray-900">Monitor for Warning Signs</h5>
            <p className="text-gray-700 text-sm">Stop immediately if you experience numbness, tingling, shooting pain down arms, or weakness. These indicate nerve compression and require stopping the exercise.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Alternative Exercises for Stenosis Patients</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Isometric Neck Exercises (Often Safer)</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Place your palm on your forehead. Push your head forward INTO your hand while 
            resisting - your head shouldn't move. Hold 5 seconds. This builds strength without changing spinal canal dimensions.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Why it's safer:</strong> No movement means no change in canal space. Often better tolerated than chin 
            tucks for moderate-to-severe stenosis.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Scapular Retraction</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Sit upright. Gently squeeze shoulder blades together without moving your head. 
            Hold 5-6 seconds. Repeat 10-15 times.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Benefits:</strong> Improves upper back strength and posture without any risk to cervical stenosis. 
            This is completely safe for all stenosis patients.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Gentle Neck Flexion (Forward Looking)</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Sit upright. Gently tilt your chin DOWN toward your chest (NOT backward like 
            chin tucks). Move only 20-30 degrees. Hold 3-5 seconds.
          </p>
          <p className="text-green-800 text-sm">
            <strong>When it helps:</strong> For stenosis patients whose symptoms worsen with extension, gentle flexion 
            may actually provide relief by opening the posterior spinal canal.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">When Chin Tucks Should Be Avoided Entirely</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">Severe Stenosis with Myelopathy</h4>
          <p className="text-red-800 text-sm">
            If you have spinal cord compression causing balance problems, coordination issues, or weakness in legs, 
            DO NOT do chin tucks without neurosurgeon clearance. These symptoms indicate myelopathy (spinal cord damage).
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">Recent Stenosis Diagnosis</h4>
          <p className="text-red-800 text-sm">
            If you've been diagnosed with stenosis in the last 3 months, work with a physical therapist for your first 
            4-6 weeks of exercises. They can assess your specific stenosis pattern and guide safe exercises.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">Progressive Neurological Symptoms</h4>
          <p className="text-red-800 text-sm">
            If your stenosis symptoms are worsening despite conservative treatment (increasing numbness, weakness, or pain), 
            you may need surgical evaluation. Do not start any new exercises until evaluated.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitoring Your Response</h3>
      
      <div className="bg-blue-50 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-900 mb-3">Exercise Response Checklist</h4>
        
        <div className="space-y-3">
          <div>
            <h5 className="font-medium text-blue-900">✅ Good Signs (Continue Exercise)</h5>
            <ul className="text-blue-800 text-sm space-y-1 mt-2 ml-4">
              <li>• No increase in symptoms during or after exercise</li>
              <li>• Feeling of mild stretch or muscle activation in neck</li>
              <li>• Improved posture awareness throughout the day</li>
              <li>• Gradual reduction in baseline neck stiffness</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <h5 className="font-medium text-red-900">❌ Warning Signs (Stop Exercise)</h5>
            <ul className="text-red-800 text-sm space-y-1 mt-2 ml-4">
              <li>• Numbness or tingling in arms, hands, or fingers during exercise</li>
              <li>• Shooting or electric-shock sensations down arms</li>
              <li>• Increased neck pain lasting more than 1 hour after exercise</li>
              <li>• Weakness in arms or hands</li>
              <li>• Dizziness or balance problems during exercise</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const keyConsiderations = [
    "Modified chin tucks ARE safe for cervical stenosis if done with limited range (30-50% of full movement)",
    "NEVER do chin tucks lying down with stenosis - always sit or stand upright",
    "Avoid looking upward (extension) during chin tucks as this narrows the spinal canal",
    "Stop immediately if you experience numbness, tingling, or shooting pain - these indicate nerve compression",
    "Isometric neck exercises (no movement) may be safer than chin tucks for moderate-to-severe stenosis",
    "Work with a physical therapist initially if you've been diagnosed with stenosis in the last 3 months",
    "Move very slowly - take 2-3 seconds in each direction to avoid sudden compression",
    "If you have myelopathy symptoms (balance problems, leg weakness), get neurosurgeon clearance before any neck exercises"
  ]

  const steps = [
    {
      title: "Get Medical Assessment",
      description: "Have your doctor or neurosurgeon review your MRI and assess stenosis severity. Ask specifically if chin tucks are safe for your stenosis pattern."
    },
    {
      title: "Work with Physical Therapist",
      description: "Schedule 2-4 PT sessions to learn proper modified chin tuck technique. PT can assess your response and adjust range of motion based on your symptoms."
    },
    {
      title: "Start with Minimal Range",
      description: "Begin with only 20-30% of full chin tuck range. Sit upright with back support. Move very slowly - 2-3 seconds in each direction. Do 5 reps, twice daily."
    },
    {
      title: "Monitor Your Response",
      description: "Track symptoms immediately after exercise and for the next 2-3 hours. If no increase in numbness, tingling, or pain, continue. If symptoms worsen, stop and consult PT."
    },
    {
      title: "Progress Very Gradually",
      description: "After 2 weeks with no symptom increase, you may increase to 40-50% range and 8-10 reps. Never progress to full-range chin tucks with stenosis."
    },
    {
      title: "Consider Alternative Exercises",
      description: "If chin tucks cause any symptoms even with modifications, switch to isometric neck exercises or scapular retractions, which are safer for stenosis."
    }
  ]

  const whenToSeeDoctor = [
    "Any new numbness, tingling, or weakness in arms, hands, or legs",
    "Shooting or electric-shock sensations down your arms (L'hermitte's sign)",
    "Balance problems or difficulty with coordination and fine motor skills (indicates myelopathy)",
    "Bowel or bladder dysfunction (indicates severe spinal cord compression - seek emergency care)",
    "Progressive worsening of stenosis symptoms despite conservative treatment",
    "Increased neck pain that doesn't resolve within 24 hours after exercise",
    "Symptoms that worsen with chin tucks despite using modified technique"
  ]

  const relatedQuestions = [
    {
      text: "Can I do chin tucks with herniated disc?",
      link: "/help/exercises-safety/can-i-do-chin-tucks-with-herniated-disc"
    },
    {
      text: "Neck exercises for osteoporosis",
      link: "/help/exercises-safety/neck-exercises-for-osteoporosis"
    },
    {
      text: "Exercises after cervical fusion",
      link: "/help/exercises-safety/exercises-after-cervical-fusion"
    },
    {
      text: "Forward head posture with arthritis",
      link: "/help/exercises-safety/forward-head-posture-with-arthritis"
    },
    {
      text: "Chin tucks causing dizziness",
      link: "/help/troubleshooting/chin-tucks-causing-dizziness"
    },
    {
      text: "Complete chin tuck guide",
      link: "/exercises/chin-tucks"
    }
  ]

  const faqQuestions = [
    {
      question: "Will chin tucks make my cervical stenosis worse?",
      answer: "Modified chin tucks with limited range (30-50%) will NOT worsen stenosis if done correctly. They strengthen deep neck flexors and improve posture, which can help stenosis symptoms. However, full-range chin tucks or doing them lying down CAN increase compression. The key is proper modification."
    },
    {
      question: "Should I do chin tucks in flexion or extension for stenosis?",
      answer: "For stenosis, do gentle retraction (pulling chin straight back) without extension (looking up). Extension narrows the spinal canal and can worsen compression. Some stenosis patients actually benefit from slight flexion (chin down) which opens the posterior canal, but this depends on your stenosis pattern."
    },
    {
      question: "Are isometric neck exercises safer than chin tucks for stenosis?",
      answer: "Yes, often they are safer. Isometric exercises build strength without moving your head, so there's no change in spinal canal dimensions. If you have moderate-to-severe stenosis or any myelopathy symptoms, isometrics are usually a better choice than chin tucks."
    },
    {
      question: "How do I know if my stenosis is too severe for chin tucks?",
      answer: "If you have myelopathy symptoms (balance problems, coordination difficulties, leg weakness), severe stenosis (>70% canal narrowing), or worsening neurological symptoms, DO NOT do chin tucks without neurosurgeon clearance. Your MRI report will show stenosis severity - discuss with your doctor."
    },
    {
      question: "Can I do chin tucks if I'm waiting for cervical stenosis surgery?",
      answer: "This depends on your surgical indication and neurological status. If surgery is recommended due to progressive myelopathy or severe nerve compression, avoid chin tucks. If surgery is planned for persistent pain but you're neurologically stable, gentle modified chin tucks may be okay - ask your surgeon."
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Exercises & Safety', href: '/help/exercises-safety' },
    { name: 'Chin Tucks with Cervical Stenosis', href: '/help/exercises-safety/chin-tucks-with-cervical-stenosis' }
  ]

  return (
    <HelpArticle
      title="Chin Tucks with Cervical Stenosis: Safe Modifications Guide"
      description="Modified chin tucks for spinal stenosis. Avoiding compression and maintaining spinal alignment with cervical canal narrowing."
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

// Force dynamic rendering to avoid static generation issues

