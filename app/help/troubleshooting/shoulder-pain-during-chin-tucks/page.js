import { Metadata } from 'next'
import HelpArticle from '../../../../components/HelpArticle'

export const metadata = {
  title: 'Shoulder Pain During Chin Tucks: Common Form Mistakes & Fixes',
  description: 'Why chin tucks cause shoulder pain and how to fix your technique. Common form mistakes, muscle tension issues, and proper modifications.',
  keywords: ['shoulder pain chin tucks', 'chin tuck technique', 'shoulder tension exercises', 'chin tuck form mistakes', 'neck exercise shoulder pain'],
  alternates: {
    canonical: 'https://www.neckhump.com/help/troubleshooting/shoulder-pain-during-chin-tucks',
  },
  openGraph: {
    title: 'Shoulder Pain During Chin Tucks: Common Form Mistakes & Fixes',
    description: 'Why chin tucks cause shoulder pain and how to fix your technique. Common form mistakes, muscle tension issues, and proper modifications.',
    url: 'https://www.neckhump.com/help/troubleshooting/shoulder-pain-during-chin-tucks',
    siteName: 'NeckHump.com',
    locale: 'en_US',
    type: 'article',
  },
}

// Force dynamic rendering to avoid static generation issues
export const dynamic = 'force-dynamic'

export default function ShoulderPainDuringChinTucksPage() {
  const shortAnswer = "Shoulder pain during chin tucks usually means: 1) You're shrugging shoulders up (most common), 2) Using too much effort/straining, 3) Have excessive upper trapezius tension, 4) Poor starting posture (rounded shoulders), 5) Doing too many reps. FIX IT: Keep shoulders DOWN and relaxed, use only 30-40% effort, add shoulder blade squeezes before chin tucks, check posture in mirror, reduce reps to 5-8. If pain persists, do scapular exercises instead until shoulders relax."

  const content = (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Chin Tucks Cause Shoulder Pain</h2>
      <p className="mb-4">
        Chin tucks are a foundational neck exercise designed to strengthen deep neck flexors and improve cervical alignment. 
        When performed correctly, they should cause ZERO shoulder involvement or pain. If you're experiencing shoulder pain 
        during chin tucks, it indicates either technique errors or underlying muscle imbalances that need to be addressed 
        before continuing the exercise.
      </p>
      
      <p className="mb-4">
        The most common cause is unconscious shoulder elevation (shrugging) during the movement. This happens because many 
        people have overactive upper trapezius muscles and underd developed deep neck flexors. When trying to pull the chin 
        back, the body compensates by recruiting shoulder muscles it shouldn't be using. Understanding the specific cause 
        of YOUR shoulder pain is essential for fixing it.
      </p>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Causes of Shoulder Pain During Chin Tucks</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">1. Shoulder Shrugging (Most Common - 70% of Cases)</h4>
          <p className="text-red-800 text-sm mb-2">
            <strong>What happens:</strong> You unconsciously lift (shrug) your shoulders up toward your ears during the chin 
            tuck movement. This activates upper trapezius muscles excessively, causing tension and pain in the upper shoulder/neck junction.
          </p>
          <p className="text-red-800 text-sm">
            <strong>Why it happens:</strong> Overactive upper traps are extremely common in people with forward head posture. 
            These muscles compensate for weak deep neck flexors. When you try to engage neck muscles you're not used to using, 
            your body defaults to familiar (but wrong) shoulder movement patterns.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">2. Excessive Effort/Straining</h4>
          <p className="text-red-800 text-sm mb-2">
            <strong>What happens:</strong> You use 80-100% maximum effort to pull your chin back, treating chin tucks like 
            a strength exercise. This excessive effort radiates tension through your entire neck and shoulder region.
          </p>
          <p className="text-red-800 text-sm">
            <strong>Why it happens:</strong> Misunderstanding exercise intent. Chin tucks are about muscle activation and 
            motor control, not maximum strength. They should be done gently at 30-40% effort maximum.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">3. Pre-Existing Upper Trapezius Tension</h4>
          <p className="text-red-800 text-sm mb-2">
            <strong>What happens:</strong> You already have extremely tight, tender upper trapezius muscles (common "knots" 
            or trigger points). Any neck exercise causes these already-irritated muscles to become more painful.
          </p>
          <p className="text-red-800 text-sm">
            <strong>Why it happens:</strong> Forward head posture causes chronic upper trap overactivation. These muscles 
            work overtime to hold your head up when it's positioned forward. They're already at their limit before you even 
            start exercises.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">4. Poor Starting Posture (Rounded Shoulders)</h4>
          <p className="text-red-800 text-sm mb-2">
            <strong>What happens:</strong> You start chin tucks with shoulders already rounded forward. This mechanically 
            disadvantages your scapular stabilizers and forces upper traps to work harder during the movement.
          </p>
          <p className="text-red-800 text-sm">
            <strong>Why it happens:</strong> Not establishing proper shoulder position before starting neck exercises. Your 
            shoulder blade position directly affects neck mechanics.
          </p>
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <h4 className="font-semibold text-red-900 mb-2">5. Doing Too Many Repetitions</h4>
          <p className="text-red-800 text-sm mb-2">
            <strong>What happens:</strong> First 5-8 chin tucks feel fine, but by rep 15-20 your shoulders start hurting. 
            This indicates muscle fatigue and compensatory patterns emerging.
          </p>
          <p className="text-red-800 text-sm">
            <strong>Why it happens:</strong> Weak deep neck flexors fatigue quickly. Once they fatigue, your body recruits 
            shoulder muscles (wrong muscles) to continue the movement. High reps are inappropriate for beginning stages.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">How to Fix Shoulder Pain During Chin Tucks</h3>
      
      <div className="space-y-4 mb-6">
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Solution 1: Active Shoulder Depression Cue</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Before starting each chin tuck, consciously push your shoulders DOWN away from 
            your ears. Hold them down throughout the entire chin tuck movement. Think "long neck" - making space between 
            your ears and shoulders.
          </p>
          <p className="text-green-800 text-sm mb-2">
            <strong>Practice technique:</strong> Do 5 shoulder shrugs (lift up, then release down) before chin tucks. On 
            the last one, push shoulders down BELOW resting position and hold. This is where they should stay during chin tucks.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Why it works:</strong> Actively depressing shoulders inhibits upper trapezius activation, forcing deep 
            neck flexors to work (which is the goal). Most people need to consciously maintain this position initially.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Solution 2: Reduce Effort to 30-40% Maximum</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Think of chin tucks as "gentle" or "subtle" movements, not strength exercises. 
            If someone was watching, they should barely be able to tell you're doing an exercise. Use only 30-40% of what 
            you think is your maximum effort.
          </p>
          <p className="text-green-800 text-sm mb-2">
            <strong>Test it:</strong> Do a chin tuck at 30% effort - shoulders should stay completely relaxed. Now do one 
            at 80% effort - you'll feel shoulders tense immediately. The gentle version is correct.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Why it works:</strong> Excessive effort creates global tension throughout neck and shoulders. Gentle 
            effort allows selective activation of deep neck flexors without compensatory shoulder recruitment.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Solution 3: Do Scapular Squeezes First</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Before every chin tuck session, do 8-10 shoulder blade squeezes. Sit upright, 
            squeeze shoulder blades together gently, hold 5 seconds, release. This "primes" your scapular stabilizers.
          </p>
          <p className="text-green-800 text-sm mb-2">
            <strong>Progression:</strong> Then do chin tucks WITH shoulder blades squeezed together. This maintains good 
            shoulder position throughout the movement.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Why it works:</strong> Activating scapular stabilizers before chin tucks establishes proper shoulder 
            position and inhibits upper trap dominance. Creates a stable base for neck movement.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Solution 4: Use Mirror Feedback</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Do chin tucks in front of a mirror (side view is best). Watch your shoulders 
            throughout the movement. If you see them lift even slightly, stop and reset with shoulders down.
          </p>
          <p className="text-green-800 text-sm mb-2">
            <strong>Alternative:</strong> Place your hands lightly on top of your shoulders during chin tucks. If you feel 
            shoulders rising into your hands, you're shrugging. Reset and keep shoulders away from your hands.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Why it works:</strong> Visual or tactile feedback provides immediate correction. Many people don't 
            realize they're shrugging until they see or feel it. External feedback breaks unconscious patterns.
          </p>
        </div>
        
        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-lg">
          <h4 className="font-semibold text-green-900 mb-2">Solution 5: Reduce Repetitions Dramatically</h4>
          <p className="text-green-800 text-sm mb-2">
            <strong>How to do it:</strong> Drop from whatever you're doing now down to 5-8 reps MAXIMUM per session. Focus 
            on perfect form for these few reps rather than volume. Quality over quantity.
          </p>
          <p className="text-green-800 text-sm mb-2">
            <strong>When to progress:</strong> Only increase reps (by 1-2) after you can do current amount for 2 weeks with 
            ZERO shoulder pain or tension. Slow progression prevents compensatory patterns.
          </p>
          <p className="text-green-800 text-sm">
            <strong>Why it works:</strong> High reps cause neck muscle fatigue, forcing shoulder compensation. Low reps 
            maintain quality muscle activation patterns. Building endurance comes AFTER mastering technique.
          </p>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">Alternative Exercise if Shoulder Pain Persists</h3>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-6">
        <h4 className="font-semibold text-blue-900 mb-3">Temporarily Skip Chin Tucks, Focus on Shoulder Prep</h4>
        
        <p className="text-blue-800 text-sm mb-4">
          If you've tried all corrections and chin tucks still cause shoulder pain, your upper traps are too tight/overactive 
          to allow proper chin tuck technique yet. Take a 2-4 week break from chin tucks and focus on:
        </p>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
            <div>
              <h5 className="font-medium text-blue-900">Upper Trapezius Stretches</h5>
              <p className="text-blue-800 text-sm">Gently tilt head to one side (ear toward shoulder), hold 20-30 seconds. 
              Repeat 2-3x per side, twice daily. This reduces upper trap tension.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
            <div>
              <h5 className="font-medium text-blue-900">Shoulder Blade Squeezes</h5>
              <p className="text-blue-800 text-sm">Do 10-15 reps, 2-3x daily. This strengthens mid/lower trapezius and 
              balances upper trap dominance. Essential foundation for chin tucks.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
            <div>
              <h5 className="font-medium text-blue-900">Isometric Neck Exercises</h5>
              <p className="text-blue-800 text-sm">Place hand on forehead, push head INTO hand without moving (resistance only). 
              This strengthens neck without shoulder involvement. Better starting point for some people.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
            <div>
              <h5 className="font-medium text-blue-900">Heat and Self-Massage</h5>
              <p className="text-blue-800 text-sm">Apply heat to upper shoulders/neck for 15 minutes before exercises. 
              Gentle self-massage of upper traps can reduce trigger point sensitivity.</p>
            </div>
          </div>
        </div>
        
        <p className="text-blue-800 text-sm mt-4">
          <strong>Retest after 2-4 weeks:</strong> Try chin tucks again with perfect form. If shoulders still hurt, consider 
          working with a physical therapist to address underlying muscle imbalances.
        </p>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-3">When Shoulder Pain Indicates Deeper Issues</h3>
      
      <div className="space-y-4 mb-6">
        <div className="border-l-4 border-yellow-400 pl-4">
          <h4 className="font-semibold text-gray-900">Chronic Upper Crossed Syndrome</h4>
          <p className="text-gray-700 text-sm">If you have severe forward head posture with very rounded shoulders, you 
          likely have upper crossed syndrome (tight chest/upper traps, weak deep neck flexors/mid-back). This requires 
          comprehensive approach, not just chin tucks. Work with PT.</p>
        </div>
        
        <div className="border-l-4 border-yellow-400 pl-4">
          <h4 className="font-semibold text-gray-900">Shoulder Impingement or Rotator Cuff Issues</h4>
          <p className="text-gray-700 text-sm">If shoulder pain is sharp, shoots down arm, or occurs with overhead movements, 
          you may have shoulder pathology separate from neck issues. Get shoulder evaluated before continuing neck exercises.</p>
        </div>
        
        <div className="border-l-4 border-yellow-400 pl-4">
          <h4 className="font-semibold text-gray-900">Thoracic Outlet Syndrome</h4>
          <p className="text-gray-700 text-sm">If shoulder pain is accompanied by arm numbness, tingling, or weakness, 
          consider thoracic outlet syndrome (compression of nerves/vessels between neck and shoulder). Requires medical evaluation.</p>
        </div>
      </div>
    </div>
  )

  const keyConsiderations = [
    "Most common cause is unconscious shoulder shrugging - actively push shoulders DOWN away from ears during chin tucks",
    "Use only 30-40% effort for chin tucks, not maximum strength - excessive effort causes shoulder tension",
    "Do shoulder blade squeezes BEFORE chin tucks to prime scapular stabilizers and establish proper shoulder position",
    "Reduce reps to 5-8 maximum if experiencing shoulder pain - high reps cause fatigue and compensatory patterns",
    "Use mirror or hand feedback to catch shoulder elevation in real-time and correct immediately",
    "If pain persists despite corrections, take 2-4 week break from chin tucks and focus on upper trap stretches + scapular strengthening",
    "Isometric neck exercises (no movement) may be better starting point if shoulders are very tight/painful",
    "Sharp shoulder pain or pain with arm symptoms suggests shoulder pathology separate from technique issues - get evaluated"
  ]

  const steps = [
    {
      title: "Identify Your Shoulder Pain Cause",
      description: "Do chin tucks in front of mirror. Watch for: shoulder shrugging, rounded starting posture, excessive visible effort. Place hands on shoulders to feel if they're rising. This identifies your specific problem."
    },
    {
      title: "Reset Your Technique",
      description: "Stop doing chin tucks for 3-5 days. During this break, practice shoulder depression (pushing shoulders down) separately until it feels natural and you can hold it for 30+ seconds."
    },
    {
      title: "Add Scapular Prep Work",
      description: "Before every chin tuck session, do 8-10 shoulder blade squeezes. This establishes proper shoulder position and 'wakes up' your scapular stabilizers."
    },
    {
      title: "Relearn Chin Tucks with Corrections",
      description: "Start with 5 reps only, using 30% effort, shoulders actively depressed, in front of mirror. Perfect form for 5 reps, then stop. Do this 3-4x per week."
    },
    {
      title: "Progress Only When Pain-Free",
      description: "After 2 weeks with zero shoulder pain, add 1-2 reps. Continue gradual progression. Any shoulder pain means reduce reps and refocus on technique."
    },
    {
      title: "Consider PT if No Improvement",
      description: "If shoulder pain persists after 4 weeks of corrections, work with physical therapist. You likely have underlying muscle imbalances requiring comprehensive treatment."
    }
  ]

  const whenToSeeDoctor = [
    "Sharp, severe shoulder pain during chin tucks (not just tension or discomfort)",
    "Shoulder pain accompanied by arm numbness, tingling, or weakness",
    "Shoulder pain that persists for hours after exercises or worsens over days",
    "Pain with overhead shoulder movements unrelated to chin tucks (suggests shoulder pathology)",
    "Clicking, popping, or grinding sensations in shoulder during chin tucks",
    "Shoulder pain despite following all corrections for 4+ weeks",
    "New onset shoulder weakness or inability to lift arm"
  ]

  const relatedQuestions = [
    {
      text: "Chin tucks causing dizziness",
      link: "/help/troubleshooting/chin-tucks-causing-dizziness"
    },
    {
      text: "Exercises making neck pain worse",
      link: "/help/troubleshooting/exercises-making-neck-pain-worse"
    },
    {
      text: "Can't feel neck muscles working",
      link: "/help/troubleshooting/cant-feel-neck-muscles-working"
    },
    {
      text: "Headaches after posture exercises",
      link: "/help/troubleshooting/headaches-after-posture-exercises"
    },
    {
      text: "Complete chin tuck guide",
      link: "/exercises/chin-tucks"
    },
    {
      text: "How to fix posture at home",
      link: "/how-to-fix-posture-at-home"
    }
  ]

  const faqQuestions = [
    {
      question: "Is it normal to feel some shoulder tension during chin tucks?",
      answer: "No - properly performed chin tucks should cause ZERO shoulder involvement or tension. Any shoulder sensation indicates technique errors (usually shrugging) or underlying muscle imbalances that need addressing. Your shoulders should stay completely relaxed."
    },
    {
      question: "Why do my shoulders hurt on rep 15 but not rep 5?",
      answer: "This indicates weak deep neck flexors fatiguing quickly. Once they fatigue, your body recruits shoulder muscles (compensation) to continue the movement. Solution: reduce to 5-8 reps maximum. Build endurance slowly over months, not weeks. High reps are inappropriate initially."
    },
    {
      question: "Can I do chin tucks if I have tight upper trapezius muscles?",
      answer: "Yes, but you need extra attention to technique. Do upper trap stretches before chin tucks, actively push shoulders down during movement, and use only 30-40% effort. If pain persists, take 2-4 week break to work on upper trap stretches and scapular strengthening first."
    },
    {
      question: "Should I push through shoulder pain to build neck strength?",
      answer: "Absolutely not. Shoulder pain during chin tucks means you're using wrong muscles (compensation). 'Pushing through' reinforces bad movement patterns and worsens muscle imbalances. Stop, fix technique, reduce reps. Only progress when you can do exercises pain-free."
    },
    {
      question: "Are isometric neck exercises better if I have shoulder pain?",
      answer: "Often yes. Isometric exercises (pushing head into hand resistance without moving) allow neck strengthening without shoulder involvement. They're a better starting point if you have severe upper trap tightness or can't perform chin tucks without shoulder pain despite corrections."
    }
  ]

  const breadcrumbs = [
    { name: 'Home', href: '/' },
    { name: 'Help Center', href: '/help' },
    { name: 'Troubleshooting', href: '/help/troubleshooting' },
    { name: 'Shoulder Pain During Chin Tucks', href: '/help/troubleshooting/shoulder-pain-during-chin-tucks' }
  ]

  return (
    <HelpArticle
      title="Shoulder Pain During Chin Tucks: Common Form Mistakes & Fixes"
      description="Why chin tucks cause shoulder pain and how to fix your technique. Common form mistakes, muscle tension issues, and proper modifications."
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

