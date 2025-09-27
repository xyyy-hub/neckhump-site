import Link from 'next/link'

export const metadata = {
  title: 'Text Neck Syndrome: Causes, Symptoms & Complete Recovery Guide 2024',
  description: 'Learn about text neck syndrome from smartphone use. Discover causes, symptoms, exercises, and prevention strategies. Evidence-based guide for the digital age.',
  keywords: ['text neck', 'text neck syndrome', 'smartphone posture', 'phone neck', 'digital neck pain', 'tech neck prevention'],
  openGraph: {
    title: 'Text Neck Syndrome: Complete Recovery Guide 2024',
    description: 'Comprehensive guide to understanding and fixing text neck from smartphone and device use.',
    url: 'https://www.neckhump.com/text-neck-syndrome',
  },
}

export default function TextNeckPage() {
  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Text Neck Syndrome: The Hidden Epidemic of the Smartphone Era
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed max-w-3xl mx-auto">
          Text neck affects 95% of smartphone users, causing forward head posture and chronic pain. 
          Learn the causes, symptoms, and proven recovery strategies for this modern health crisis.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
          <span>Last updated: December 2024</span>
          <span>•</span>
          <span>7 min read</span>
          <span>•</span>
          <span>Evidence-based guide</span>
        </div>
      </header>

      <div className="article-content">
        {/* Introduction with alarming statistics */}
        <p className="text-lg text-gray-700 mb-6">
          If you're reading this on your phone right now, take a moment to notice your posture. 
          Is your head tilted down? Shoulders rounded forward? You might be experiencing 
          <strong> text neck syndrome</strong> – a condition that didn't exist 20 years ago but now 
          affects nearly every smartphone user on the planet.
        </p>

        {/* Quick self-assessment */}
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded mb-8">
          <h2 className="text-lg font-semibold text-red-800 mb-3">
            Do You Have Text Neck? Quick Assessment:
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2 text-red-700">
              <li>✓ Neck pain after phone use</li>
              <li>✓ Headaches at end of day</li>
              <li>✓ Rounded shoulders</li>
              <li>✓ Upper back stiffness</li>
            </ul>
            <ul className="space-y-2 text-red-700">
              <li>✓ Difficulty looking up</li>
              <li>✓ Numbness in arms/hands</li>
              <li>✓ Poor sleep quality</li>
              <li>✓ Visible "hump" at neck base</li>
            </ul>
          </div>
          <p className="text-red-800 mt-3 font-medium text-sm">
            If you checked 3+ symptoms, you likely have text neck syndrome.
          </p>
        </div>

        <h2>What Is Text Neck Syndrome?</h2>
        <p>
          Text neck syndrome, also called "phone neck" or "digital neck," is a modern repetitive 
          strain injury caused by prolonged use of handheld devices. The condition occurs when 
          we repeatedly tilt our heads forward and down to look at screens, creating abnormal 
          stress on the cervical spine.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            The Physics of Text Neck
          </h3>
          <p className="text-blue-800 mb-3">
            Your head weighs about 10-12 pounds in neutral position. But as you tilt it forward:
          </p>
          <ul className="text-blue-800 space-y-1">
            <li><strong>15° tilt:</strong> 27 pounds of pressure on your neck</li>
            <li><strong>30° tilt:</strong> 40 pounds of pressure</li>
            <li><strong>45° tilt:</strong> 49 pounds of pressure</li>
            <li><strong>60° tilt:</strong> 60 pounds of pressure (typical texting position)</li>
          </ul>
          <p className="text-blue-800 mt-3 text-sm">
            Source: Surgical Technology International, Spine Research
          </p>
        </div>

        <h2>The Alarming Statistics</h2>
        <p>
          Text neck has become a global health crisis with staggering prevalence:
        </p>
        <ul>
          <li><strong>95% of smartphone users</strong> show signs of text neck</li>
          <li><strong>Average person</strong> spends 4+ hours daily looking down at devices</li>
          <li><strong>Teenagers</strong> average 7+ hours daily in forward head posture</li>
          <li><strong>1,400 times per day</strong> – average number of times we check our phones</li>
          <li><strong>250% increase</strong> in neck pain cases since 2000</li>
        </ul>

        <h2>Primary Causes of Text Neck</h2>

        <h3>1. Smartphone and Tablet Use</h3>
        <p>
          The primary culprit is our addiction to handheld devices:
        </p>
        <ul>
          <li><strong>Texting position:</strong> Head tilted 45-60 degrees down</li>
          <li><strong>Reading position:</strong> Sustained forward head posture</li>
          <li><strong>Gaming position:</strong> Intense concentration with poor awareness</li>
          <li><strong>Social media scrolling:</strong> Hours of unconscious poor posture</li>
        </ul>

        <h3>2. Laptop and Computer Use</h3>
        <p>
          Portable devices create unique postural challenges:
        </p>
        <ul>
          <li><strong>Laptop screens:</strong> Typically too low, forcing head down</li>
          <li><strong>Small keyboards:</strong> Encourage hunched position</li>
          <li><strong>Portable workstations:</strong> Often lack ergonomic support</li>
          <li><strong>Couch/bed use:</strong> Create extreme forward head postures</li>
        </ul>

        <h3>3. Modern Lifestyle Factors</h3>
        <ul>
          <li><strong>Sedentary behavior:</strong> Weak postural muscles</li>
          <li><strong>Stress:</strong> Increases muscle tension and poor posture habits</li>
          <li><strong>Sleep deprivation:</strong> Reduces postural awareness</li>
          <li><strong>Multitasking:</strong> Distracted, unconscious posturing</li>
        </ul>

        <h2>Symptoms and Health Consequences</h2>

        <h3>Early Symptoms (Within weeks)</h3>
        <ul>
          <li><strong>Neck pain and stiffness</strong> after device use</li>
          <li><strong>Tension headaches</strong> at base of skull</li>
          <li><strong>Shoulder blade pain</strong> and upper back ache</li>
          <li><strong>Eye strain</strong> and difficulty focusing</li>
        </ul>

        <h3>Progressive Symptoms (Months to years)</h3>
        <ul>
          <li><strong>Chronic neck pain</strong> lasting throughout the day</li>
          <li><strong>Reduced neck mobility</strong> and range of motion</li>
          <li><strong>Nerve compression</strong> causing arm numbness</li>
          <li><strong>Postural changes</strong> visible in photos</li>
        </ul>

        <h3>Long-term Consequences</h3>
        <ul>
          <li><strong>Structural changes:</strong> Loss of cervical curve (military neck)</li>
          <li><strong>Disc degeneration:</strong> Premature wear of cervical discs</li>
          <li><strong>Breathing problems:</strong> Reduced lung capacity up to 30%</li>
          <li><strong>Psychological impact:</strong> Increased anxiety and depression</li>
        </ul>

        <h2>The Text Neck Recovery System</h2>

        <h3>Phase 1: Immediate Relief (Week 1-2)</h3>
        
        <h4>Posture Reset Exercises (Do every 30 minutes)</h4>
        <ul>
          <li><strong>Chin tucks:</strong> 10 reps, hold 5 seconds each</li>
          <li><strong>Neck retractions:</strong> Pull head back gently, 5 reps</li>
          <li><strong>Shoulder blade squeezes:</strong> 10 reps, hold 3 seconds</li>
          <li><strong>Upper trap stretch:</strong> 30 seconds each side</li>
        </ul>

        <h4>Device Position Changes</h4>
        <ul>
          <li><strong>Raise devices:</strong> Bring phone/tablet to eye level</li>
          <li><strong>Use both hands:</strong> Avoid single-hand texting</li>
          <li><strong>Take breaks:</strong> 2-minute break every 20 minutes</li>
          <li><strong>Voice commands:</strong> Use dictation instead of typing</li>
        </ul>

        <h3>Phase 2: Strengthening (Week 3-6)</h3>
        
        <h4>Deep Neck Flexor Strengthening</h4>
        <ul>
          <li><strong>Supine head lifts:</strong> Lie down, lift head 1 inch, hold 5 seconds</li>
          <li><strong>Resistance chin tucks:</strong> Hand resistance while tucking</li>
          <li><strong>Isometric holds:</strong> Maintain chin tuck for 10 seconds</li>
        </ul>

        <h4>Upper Back Strengthening</h4>
        <ul>
          <li><strong>Wall angels:</strong> 3 sets of 10 against wall</li>
          <li><strong>Prone Y-raises:</strong> Lie face down, lift arms in Y</li>
          <li><strong>Band pull-aparts:</strong> Resistance band or towel</li>
        </ul>

        <h3>Phase 3: Lifestyle Integration (Week 7+)</h3>
        
        <h4>Smart Device Habits</h4>
        <ul>
          <li><strong>Phone stands:</strong> Use desk stands for video calls</li>
          <li><strong>Voice-to-text:</strong> Reduce typing time</li>
          <li><strong>Reading apps:</strong> Larger text sizes</li>
          <li><strong>Blue light filters:</strong> Reduce eye strain</li>
        </ul>

        <h4>Workspace Optimization</h4>
        <ul>
          <li><strong>External monitors:</strong> For laptop users</li>
          <li><strong>Laptop stands:</strong> Raise screen to eye level</li>
          <li><strong>External keyboards:</strong> Allow proper screen height</li>
          <li><strong>Document holders:</strong> Reduce head turning</li>
        </ul>

        <h2>Prevention Strategies for the Digital Age</h2>

        <h3>The 20-20-20-20 Rule</h3>
        <p>
          Enhanced version of the classic eye rule:
        </p>
        <ul>
          <li><strong>Every 20 minutes:</strong> Look at something 20 feet away</li>
          <li><strong>For 20 seconds:</strong> While doing 20 neck rolls</li>
          <li><strong>Reset posture:</strong> Check head and shoulder position</li>
        </ul>

        <h3>Device Ergonomics</h3>
        <ul>
          <li><strong>Phone use:</strong> Hold at eye level, use voice commands</li>
          <li><strong>Tablet reading:</strong> Use stands, avoid lap reading</li>
          <li><strong>E-reader optimization:</strong> Adjust text size and lighting</li>
          <li><strong>Gaming setup:</strong> Monitor at eye level, regular breaks</li>
        </ul>

        <h3>Sleep and Recovery</h3>
        <ul>
          <li><strong>Cervical pillow:</strong> Maintains neck curve while sleeping</li>
          <li><strong>Sleep position:</strong> Back or side sleeping preferred</li>
          <li><strong>Morning routine:</strong> Gentle neck stretches before phone use</li>
          <li><strong>Evening routine:</strong> Device-free time before bed</li>
        </ul>

        <h2>When to Seek Professional Help</h2>
        <p>
          Consult a healthcare provider if you experience:
        </p>
        <ul>
          <li><strong>Severe pain</strong> that interferes with daily activities</li>
          <li><strong>Numbness or tingling</strong> in arms or hands</li>
          <li><strong>Persistent headaches</strong> not responsive to treatment</li>
          <li><strong>No improvement</strong> after 6 weeks of consistent self-treatment</li>
          <li><strong>Visible deformity</strong> or significant postural changes</li>
        </ul>

        <h2>The Future of Text Neck</h2>
        <p>
          As technology evolves, new solutions emerge:
        </p>
        <ul>
          <li><strong>Posture tracking apps:</strong> Real-time feedback</li>
          <li><strong>Wearable devices:</strong> Vibrate when posture is poor</li>
          <li><strong>Voice interfaces:</strong> Reduce screen dependence</li>
          <li><strong>AR/VR technology:</strong> May reduce forward head posture</li>
          <li><strong>AI assistants:</strong> Reduce manual device interaction</li>
        </ul>

        <div className="bg-green-50 p-6 rounded-lg my-8">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            Success Timeline for Text Neck Recovery
          </h3>
          <ul className="text-green-700 space-y-1">
            <li><strong>Week 1:</strong> Immediate relief with proper positioning</li>
            <li><strong>Week 2-4:</strong> Reduced daily pain and stiffness</li>
            <li><strong>Week 6-8:</strong> Improved strength and mobility</li>
            <li><strong>Week 12+:</strong> Significant postural improvements</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">
            Break Free from Text Neck Today
          </h3>
          <p className="text-blue-800 mb-6">
            Text neck is preventable and treatable. Start with small changes to your device habits 
            and gradually build strength. Your neck will thank you for taking action now.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/neck-hump-causes" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-blue-600 font-semibold mb-1">Understanding</div>
              <div className="text-sm text-gray-600">Complete Neck Hump Guide</div>
            </Link>
            <Link href="/posture-exercises" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-blue-600 font-semibold mb-1">Exercises</div>
              <div className="text-sm text-gray-600">Targeted Recovery Plan</div>
            </Link>
            <Link href="/desk-setup-guide" className="block text-center bg-white p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="text-blue-600 font-semibold mb-1">Prevention</div>
              <div className="text-sm text-gray-600">Ergonomic Workspace</div>
            </Link>
          </div>
        </div>
      </div>

      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Text Neck Syndrome: The Hidden Epidemic of the Smartphone Era",
            "description": "Comprehensive guide to text neck syndrome, its causes, symptoms, and evidence-based recovery strategies.",
            "author": {
              "@type": "Person",
              "name": "NeckHump.com Expert Team"
            },
            "publisher": {
              "@type": "Organization",
              "name": "NeckHump.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://neckhump.com/logo.png"
              }
            },
            "datePublished": "2024-12-01",
            "dateModified": "2024-12-01",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://neckhump.com/text-neck-syndrome"
            }
          })
        }}
      />
    </article>
  )
}
