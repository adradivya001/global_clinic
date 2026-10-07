import type { Treatment, Condition, Article, Testimonial, DoctorInfo, ClinicMachine, ClinicService } from './types';

export const CLINIC_INFO = {
  name: "Global Physiotherapy Clinic",
  city: "Anantapur, Andhra Pradesh",
  doctor: "Dr. K. Bhavendra PT",
  address: "Housing Board Colony, Beside Punjab National Bank, Anantapur (515-001)",
  landmark: "Beside Punjab National Bank",
  phone: "+91 73308 85190",
  rawPhone: "73308 85190",
  hours: "9 AM – 9 PM (Mon – Sun)",
  positioning: "MOVEMENT • RECOVERY • STRENGTH • INDEPENDENCE",
  tagline: "Move Better. Live Stronger."
};

export const DOCTOR_INFO: DoctorInfo = {
  name: "Dr. K. Bhavendra",
  title: "Lead Consultant Physiotherapist",
  credentials: ["BPT", "MPT (Sports Medicine)", "CMT", "COCMT"],
  quote: "Helping you move, recover and build a stronger, healthier you.",
  features: [
    "Experienced & Approachable",
    "Focused on Your Recovery",
    "Personalised Treatment Approach",
    "Evidence Based Techniques",
    "Focus on Long Term Results",
    "Patient Centred Care"
  ]
};

export const CONDITIONS: Record<string, Condition> = {
  neck: {
    id: "neck",
    name: "Neck",
    title: "Neck Pain & Cervical Care",
    concerns: [
      "Stiffness and difficulty turning the head",
      "Sharp pain radiating into shoulders or arms",
      "Headaches triggered by neck tightness",
      "Postural fatigue from desk work"
    ],
    helpPoints: [
      "Comprehensive Cervical Spine Assessment",
      "Targeted Joint & Soft Tissue Mobilisation",
      "Ergonomic & Postural Re-education",
      "Custom Deep-Neck Flexor Strengthening"
    ]
  },
  shoulder: {
    id: "shoulder",
    name: "Shoulder",
    title: "Shoulder Rehabilitation & Rotator Cuff",
    concerns: [
      "Inability to lift arm overhead or behind back",
      "Pain sleeping on affected side",
      "Clicking, popping, or catching sensations",
      "Rotator cuff strain or frozen shoulder"
    ],
    helpPoints: [
      "Scapular Kinematic Analysis",
      "Manual Therapy & Capsular Release",
      "Progressive Rotator Cuff Conditioning",
      "Functional Return-to-Sport Drills"
    ]
  },
  back: {
    id: "back",
    name: "Back",
    title: "Lumbar Spine & Core Rehabilitation",
    concerns: [
      "Persistent lower back ache or acute spasm",
      "Pain while prolonged sitting or standing",
      "Sciatica or radiating leg tingling",
      "Weakness and instability during movement"
    ],
    helpPoints: [
      "Biomechanical Movement Assessment",
      "Lumbar Decompression & Manual Therapy",
      "Guided Core Stabilization Protocol",
      "Functional Lifting & Posture Retraining"
    ]
  },
  elbow: {
    id: "elbow",
    name: "Elbow",
    title: "Elbow & Forearm Tendinopathy",
    concerns: [
      "Pain on the outside of elbow (Tennis Elbow)",
      "Inner elbow soreness (Golfer's Elbow)",
      "Weakened grip strength during daily tasks",
      "Stiffness after prolonged flexed positions"
    ],
    helpPoints: [
      "Targeted Eccentric Tendon Loading",
      "Instrument-Assisted Soft Tissue Therapy",
      "Grip & Forearm Muscle Rebalancing",
      "Activity Modification & Ergonomic Guidance"
    ]
  },
  hip: {
    id: "hip",
    name: "Hip",
    title: "Hip Joint & Pelvic Stability",
    concerns: [
      "Groin or outer hip ache during walking",
      "Stiffness when getting out of a chair",
      "Gluteal tendinopathy or bursitis",
      "Imbalance affecting lower back alignment"
    ],
    helpPoints: [
      "Gait & Pelvic Alignment Screening",
      "Hip Capsule & Gluteal Mobilisation",
      "Pelvic Core & Hinge Biomechanics Training",
      "Load Management & Restoration"
    ]
  },
  knee: {
    id: "knee",
    name: "Knee",
    title: "Knee Rehabilitation & Ligament Care",
    concerns: [
      "Pain going up or down stairs",
      "Swelling, stiffness, or catching in joint",
      "Post-ACL surgery or meniscus rehab",
      "Arthritic wear and joint discomfort"
    ],
    helpPoints: [
      "Knee Kinematics & Tracking Assessment",
      "Quadriceps & Hamstring Balance Program",
      "Proprioception & Balance Training",
      "Joint Offloading & Exercise Prescription"
    ]
  },
  ankle: {
    id: "ankle",
    name: "Ankle",
    title: "Ankle Instability & Sprain Rehab",
    concerns: [
      "Frequent rolling or giving way of ankle",
      "Chronic swelling following an old sprain",
      "Stiffness reducing ankle dorsiflexion",
      "Pain during impact or running"
    ],
    helpPoints: [
      "Ligament Laxity & Balance Evaluation",
      "Joint Mobilisation for Range of Motion",
      "Neuromuscular Agility Retraining",
      "Foot & Ankle Dynamic Bracing Support"
    ]
  },
  foot: {
    id: "foot",
    name: "Foot",
    title: "Plantar Fasciitis & Foot Mechanics",
    concerns: [
      "Sharp morning heel pain upon taking first steps",
      "Arch pain after standing for long periods",
      "Achilles tendon stiffness or tenderness",
      "Overpronation causing biomechanical strain"
    ],
    helpPoints: [
      "Plantar Fascia Decompression Therapy",
      "Custom Footwear & Arch Guidance",
      "Achilles & Calf Kinetic Chain Rehab",
      "Shock-Absorption & Gait Re-education"
    ]
  }
};

export const TREATMENTS: Treatment[] = [
  {
    id: "back-neck",
    title: "Back & Neck Care",
    subtitle: "Spinal Health & Decompression",
    description: "Specialised manual therapy and spinal alignment protocols to alleviate acute disc pain, sciatica, and chronic neck stiffness.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    tags: ["Spine Rehab", "Manual Therapy", "Sciatica"]
  },
  {
    id: "shoulder-rehab",
    title: "Shoulder Rehabilitation",
    subtitle: "Rotator Cuff & Joint Mobility",
    description: "Restoring full pain-free overhead range of motion for frozen shoulders, rotator cuff tears, and impingement syndromes.",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
    tags: ["Rotator Cuff", "Frozen Shoulder", "Impingement"]
  },
  {
    id: "knee-rehab",
    title: "Knee Rehabilitation",
    subtitle: "ACL, Meniscus & Osteoarthritis",
    description: "Targeted quadriceps strengthening, joint offloading, and post-surgical protocols to restore stable leg function.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["ACL Surgery", "Joint Wear", "Strength"]
  },
  {
    id: "sports-injuries",
    title: "Sports Injuries",
    subtitle: "Biomechanics & Athletic Performance",
    description: "High-performance recovery for athletes, focusing on swift return-to-sport, strain prevention, and muscular power.",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
    tags: ["Athletics", "Tendonitis", "Return-to-Play"]
  },
  {
    id: "posture-correction",
    title: "Posture Correction",
    subtitle: "Ergonomics & Kinetic Realignment",
    description: "Re-educating spinal muscular imbalance caused by sedentary work, desk strain, and postural fatigue.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    tags: ["Ergonomics", "Spine Balance", "Core Control"]
  },
  {
    id: "elderly-care",
    title: "Elderly Mobility Care",
    subtitle: "Balance, Independence & Fall Prevention",
    description: "Gentle physical therapy aimed at boosting joint confidence, gait balance, and day-to-day functional independence.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    tags: ["Balance", "Active Aging", "Independence"]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "understanding-back-pain",
    title: "Understanding Back Pain & Modern Physiotherapy Approaches",
    category: "Spine Care",
    date: "Sep 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80",
    snippet: "Discover how targeted movement therapy treats lower back distress at its mechanical root rather than masking symptoms."
  },
  {
    id: "why-mobility-matters",
    title: "Why Mobility & Joint Health Matter for Long-term Independence",
    category: "Recovery & Wellness",
    date: "Aug 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    snippet: "Consistent mobility exercises maintain joint lubrication and prevent early degenerative changes as we age."
  },
  {
    id: "tips-better-posture",
    title: "Practical Tips for Desk Workers to Prevent Postural Fatigue",
    category: "Ergonomics",
    date: "Aug 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=80",
    snippet: "Simple micro-movements and screen positioning shifts that protect your cervical spine during long working hours."
  },
  {
    id: "knee-pain-causes",
    title: "Knee Pain: Causes, Non-Surgical Treatment & Rehabilitation",
    category: "Joint Rehabilitation",
    date: "Jul 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    snippet: "Learn how muscular imbalances impact patellar tracking and how exercise rehabilitation restores knee confidence."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Dr. Bhavendra's systematic approach helped me walk without knee pain within weeks. The personalised guidance made all the difference.",
    author: "Patient Case — Knee Rehabilitation",
    condition: "Post-Injury Recovery",
    rating: 5
  },
  {
    id: "2",
    quote: "I had severe neck stiffness from long working hours. The manual therapy and ergonomic plan completely resolved my headaches.",
    author: "Patient Case — Cervical Posture Care",
    condition: "Postural Rehabilitation",
    rating: 5
  },
  {
    id: "3",
    quote: "Professional, thorough, and highly focused on root-cause diagnosis. Global Physiotherapy Clinic gave me back my mobility.",
    author: "Patient Case — Lumbar Spine Care",
    condition: "Lower Back Recovery",
    rating: 5
  }
];

export const CLINIC_MACHINES: ClinicMachine[] = [
  {
    id: 'treadmill-training',
    number: '01',
    name: 'Treadmill Training',
    category: 'Gait & Cardio',
    tagline: 'Guided walking and movement training for better mobility, endurance, and confidence.',
    shortIntro: "Treadmill training is a supervised form of physiotherapy exercise that helps patients practice walking in a controlled environment. The speed, duration, incline, and level of support can be adjusted according to the patient's ability and rehabilitation goals.",
    whatItDoes: "The treadmill provides a consistent walking surface that allows patients to repeatedly practice their walking pattern. It can help train the muscles involved in walking while allowing the physiotherapist to observe posture, balance, foot placement, stride, and coordination.",
    howItWorks: "The patient walks at a controlled speed while the physiotherapist monitors movement and provides guidance when needed. As the patient's ability improves, the therapist can gradually increase walking duration or intensity, depending on the rehabilitation plan.",
    procedure: [
      { step: '01', title: 'Assessment', desc: 'The physiotherapist evaluates walking ability, balance, strength, joint movement, and endurance.' },
      { step: '02', title: 'Preparation', desc: 'The patient is positioned safely on the treadmill and instructed on how to use it.' },
      { step: '03', title: 'Initial Walking', desc: 'Walking begins at a comfortable speed appropriate to the patient\'s ability.' },
      { step: '04', title: 'Guided Training', desc: 'The physiotherapist monitors gait, posture, weight transfer, and coordination.' },
      { step: '05', title: 'Progression', desc: 'Speed, duration, incline, or support may be modified as appropriate.' },
      { step: '06', title: 'Completion', desc: 'The patient gradually slows down and the therapist reviews their response to the session.' }
    ],
    conditions: [
      'Gait difficulties',
      'Lower-limb weakness',
      'Reduced mobility',
      'Balance problems',
      'Neurological rehabilitation',
      'Post-operative rehabilitation',
      'Reduced cardiovascular endurance',
      'General deconditioning'
    ],
    patientExperience: 'Patients generally feel normal walking effort and may notice their leg muscles working. As the intensity increases, breathing and heart rate may rise and normal exercise-related fatigue can occur.',
    benefits: [
      'May improve walking endurance',
      'May support gait retraining',
      'May improve lower-limb strength',
      'May support balance and coordination',
      'May improve confidence during walking',
      'May improve functional mobility'
    ],
    sessionInfo: "Session duration varies depending on the patient's condition, endurance, and rehabilitation goals. Some patients may begin with short walking intervals and gradually progress. The patient may usually continue with other planned activities afterward, depending on their condition and therapist's recommendations.",
    safety: 'Treadmill training is not automatically suitable for every patient. Significant balance problems, acute pain, severe weakness, or certain medical conditions may require additional support or an alternative exercise approach.',
    afterCare: 'Patients may be advised to rest briefly, hydrate, and follow any stretching, strengthening, or home-exercise instructions provided by the physiotherapist.',
    ctaText: 'Talk to our physiotherapist to find out whether treadmill training is suitable for your rehabilitation goals.',
    iconType: 'Footprints',
    badge: 'Gait & Mobility',
    image: '/treadmill_training.png'
  },
  {
    id: 'elliptical-cycling',
    number: '02',
    name: 'Elliptical Cycling',
    category: 'Gait & Cardio',
    tagline: 'Low-impact movement designed to build endurance, coordination, and lower-limb strength.',
    shortIntro: 'Elliptical cycling provides a smooth, repetitive movement that combines lower-limb exercise with cardiovascular conditioning. It can be incorporated into physiotherapy programs when a patient needs controlled exercise with reduced impact compared with activities such as running.',
    whatItDoes: 'The elliptical machine allows the legs to move through a continuous gliding pattern while resistance can be adjusted. This provides an opportunity to work on endurance, muscle activity, coordination, and exercise tolerance.',
    howItWorks: 'The patient performs controlled forward or backward movements while standing on the pedals. The physiotherapist selects an appropriate resistance and monitors posture, movement quality, breathing, and fatigue.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Screening joint range, cardiovascular endurance, and tolerance.' },
      { step: '02', title: 'Machine Setup', desc: 'Positioning stride height, pedal placement, and console setup.' },
      { step: '03', title: 'Low-Resistance Movement', desc: 'Gentle warm-up gliding to establish reciprocal rhythm.' },
      { step: '04', title: 'Guided Exercise', desc: 'Therapist monitors posture, knee alignment, and breathing.' },
      { step: '05', title: 'Progression', desc: 'Resistance or duration adjusted according to ability.' },
      { step: '06', title: 'Cool Down', desc: 'Gradual cadence reduction and post-exercise check.' }
    ],
    conditions: [
      'Reduced cardiovascular endurance',
      'General deconditioning',
      'Lower-limb weakness',
      'Reduced exercise tolerance',
      'Selected musculoskeletal rehabilitation',
      'Functional conditioning'
    ],
    patientExperience: 'The patient may feel the leg and hip muscles working and may experience increased breathing and heart rate as exercise intensity increases.',
    benefits: [
      'May improve cardiovascular endurance',
      'May improve exercise tolerance',
      'May strengthen lower limbs',
      'May support coordination',
      'Provides controlled low-impact exercise'
    ],
    sessionInfo: 'Duration varies according to fitness level and rehabilitation goals. Patients may begin with short periods and gradually increase exercise time.',
    safety: 'Patients with significant balance problems, certain cardiovascular conditions, acute injuries, or difficulty using the machine safely may require an alternative form of exercise.',
    afterCare: 'The therapist may recommend a cool-down period, hydration, stretching, or additional rehabilitation exercises.',
    ctaText: 'Speak with our physiotherapist to determine whether elliptical training fits your rehabilitation program.',
    iconType: 'Bike',
    badge: 'Low-Impact Endurance',
    image: '/elliptical_cycling.png'
  },
  {
    id: 'harness-standing',
    number: '03',
    name: 'Harness Standing',
    category: 'Gait & Cardio',
    tagline: 'Supported standing and weight-bearing training for patients working toward better mobility.',
    shortIntro: 'Harness standing provides additional support while a patient practices standing and controlled movement. It can be particularly useful when a person is not yet able to stand safely or confidently without assistance.',
    whatItDoes: "The harness supports part of the patient's body weight and provides additional stability. This allows the physiotherapist to introduce upright posture, weight shifting, balance, and movement in a controlled environment.",
    howItWorks: "The patient is secured into a rehabilitation harness before being brought gradually into a standing position. The therapist can adjust the level of support according to the patient's ability.",
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Evaluating trunk control, lower limb strength, and standing safety.' },
      { step: '02', title: 'Harness Fitting', desc: 'Securing the clinical rehabilitation harness with exact comfort support.' },
      { step: '03', title: 'Supported Standing', desc: 'Bringing the patient into a stable, upright vertical position.' },
      { step: '04', title: 'Weight Shifting', desc: 'Practicing side-to-side and heel-to-toe weight transfer.' },
      { step: '05', title: 'Movement Practice', desc: 'Progressing to stepping and balance dynamic challenges.' },
      { step: '06', title: 'Progression', desc: 'Reducing overhead unweighting as patient stability improves.' }
    ],
    conditions: [
      'Significant lower-limb weakness',
      'Reduced standing ability',
      'Balance impairment',
      'Neurological rehabilitation',
      'Gait rehabilitation',
      'Reduced weight-bearing ability'
    ],
    patientExperience: 'The patient feels supported by the harness while still using their muscles to maintain an upright position. The amount of support can be adjusted.',
    benefits: [
      'May improve standing tolerance',
      'May encourage weight-bearing',
      'May support postural control',
      'May improve balance confidence',
      'May encourage lower-limb activation'
    ],
    sessionInfo: 'Duration is individualized according to strength, endurance, medical condition, and tolerance.',
    safety: 'Harness standing requires proper equipment fitting and professional supervision. Certain medical, orthopedic, cardiovascular, or skin conditions may require additional assessment.',
    afterCare: 'The therapist may assess fatigue, balance, standing tolerance, and movement before progressing to other exercises.',
    ctaText: 'Talk to our physiotherapist about supported standing and mobility rehabilitation.',
    iconType: 'ShieldAlert',
    badge: 'Advanced Neuro Station',
    image: '/harness_standing.png'
  },
  {
    id: 'multistation-gym',
    number: '04',
    name: 'Multistation Gym',
    category: 'Strength & Conditioning',
    tagline: 'Targeted resistance training to rebuild strength and functional capacity.',
    shortIntro: "A multistation gym provides different resistance-based exercises that can be selected according to the patient's rehabilitation needs. It allows physiotherapists to work on specific muscle groups in a controlled and progressive way.",
    whatItDoes: 'The equipment provides adjustable resistance that challenges muscles during controlled movement. Exercises can be selected to address weakness, reduced endurance, joint stability, or functional limitations.',
    howItWorks: 'The physiotherapist selects appropriate exercises and resistance levels. The patient performs controlled repetitions while maintaining proper posture and technique.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Evaluating baseline muscle strength, range, and kinetic imbalances.' },
      { step: '02', title: 'Exercise Selection', desc: 'Prescribing specific compound and isolated muscle stations.' },
      { step: '03', title: 'Resistance Setup', desc: 'Setting calibrated weight stack and ergonomically safe seat positions.' },
      { step: '04', title: 'Guided Repetitions', desc: 'Patient performs controlled repetitions with correct posture guidance.' },
      { step: '05', title: 'Monitoring', desc: 'Tracking muscle fatigue, joint alignment, and effort rating.' },
      { step: '06', title: 'Progression', desc: 'Gradually modifying resistance, sets, and tempo over sessions.' }
    ],
    conditions: [
      'Muscle weakness',
      'Sports rehabilitation',
      'Post-operative rehabilitation',
      'Joint rehabilitation',
      'Reduced muscular endurance',
      'General deconditioning'
    ],
    patientExperience: 'The patient will normally feel the targeted muscles working and may experience muscular fatigue during the exercise.',
    benefits: [
      'May improve muscle strength',
      'May improve muscular endurance',
      'May support joint stability',
      'May improve functional strength',
      'May support return to daily activities'
    ],
    sessionInfo: 'Duration depends on the number of exercises, muscle groups being trained, and overall rehabilitation program.',
    safety: 'Resistance must be appropriate for the patient\'s condition. Acute injuries, recent procedures, severe pain, or other medical considerations may require modified exercises.',
    afterCare: 'Patients may be advised to follow prescribed exercises, stretching, recovery, and activity recommendations.',
    ctaText: 'Let our physiotherapist create a strengthening program based on your needs.',
    iconType: 'Dumbbell',
    badge: 'Full Kinetic Station',
    image: '/multistation_gym.png'
  },
  {
    id: 'cpm-machine',
    number: '05',
    name: 'Continuous Passive Motion — CPM',
    category: 'Spine & Joint',
    tagline: 'Gentle, controlled joint movement to support mobility during rehabilitation.',
    shortIntro: 'CPM is a motorized device that gently moves a selected joint through a controlled range of motion. The machine performs the movement while the patient remains relaxed.',
    whatItDoes: 'The device repeatedly moves the joint through a predetermined range. This provides controlled passive movement when active movement may be difficult or limited.',
    howItWorks: "The patient's limb is positioned securely in the CPM device. The physiotherapist selects the appropriate movement range and speed before starting the machine.",
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Reviewing surgical guidelines, joint state, and post-op protocol.' },
      { step: '02', title: 'Limb Positioning', desc: 'Securing the leg/arm safely in padded anatomic cradles.' },
      { step: '03', title: 'Device Setup', desc: 'Calibrating flexion, extension degrees, and movement speed.' },
      { step: '04', title: 'Range Selection', desc: 'Setting safe initial degrees within comfortable threshold.' },
      { step: '05', title: 'Passive Movement', desc: 'Automated continuous movement while patient rests comfortably.' },
      { step: '06', title: 'Monitoring', desc: 'Therapist monitors joint relaxation and tissue tolerance.' },
      { step: '07', title: 'Completion', desc: 'Device stopped, limb released, and range gains documented.' }
    ],
    conditions: [
      'Post-operative rehabilitation',
      'Joint mobility programs',
      'Recovery involving restricted joint movement',
      'Rehabilitation where controlled passive movement is indicated'
    ],
    patientExperience: 'The patient feels the joint being moved slowly and repeatedly by the machine. The movement should remain within the prescribed range.',
    benefits: [
      'May support joint mobility',
      'May help manage stiffness',
      'Provides controlled repetitive movement',
      'May support selected post-operative rehabilitation'
    ],
    sessionInfo: "Duration and range of movement vary depending on the joint, procedure, condition, and physiotherapist's recommendation.",
    safety: 'CPM is not appropriate for every patient or every surgical procedure. Suitability should be determined by the treating healthcare professional.',
    afterCare: 'The therapist may reassess joint movement and continue with active exercises, stretching, strengthening, or other rehabilitation.',
    ctaText: 'Speak with our physiotherapist about whether CPM is appropriate for your joint rehabilitation.',
    iconType: 'RotateCcw',
    badge: 'Post-Op Joint Recovery',
    image: '/cpm_machine.png'
  },
  {
    id: 'steam-bath',
    number: '06',
    name: 'Steam Bath',
    category: 'Electro & Thermal',
    tagline: 'Controlled warmth designed to promote relaxation and prepare the body for selected therapy.',
    shortIntro: 'Steam therapy exposes the body to warm, humid air for a controlled period. It may be used as a complementary part of selected physiotherapy programs when warmth and relaxation are appropriate.',
    whatItDoes: 'The warm environment can create a relaxing sensation and may help patients feel less stiff before selected stretching, mobility, or exercise activities.',
    howItWorks: 'The patient is exposed to controlled steam while the therapist considers their comfort and tolerance.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Checking blood pressure, heat tolerance, and clinical indications.' },
      { step: '02', title: 'Preparation', desc: 'Preparing thermal chamber and reviewing hydration requirements.' },
      { step: '03', title: 'Controlled Steam Exposure', desc: 'Supervised warm moist exposure within safe therapeutic limits.' },
      { step: '04', title: 'Monitoring', desc: 'Continuous check on patient comfort and physiological response.' },
      { step: '05', title: 'Cooling Down', desc: 'Gradual thermal normalization and hydration rest.' },
      { step: '06', title: 'Follow-Up Therapy', desc: 'Transitioning to prescribed stretching, mobility, or exercise.' }
    ],
    conditions: [
      'Muscular tightness',
      'General stiffness',
      'Need for relaxation before selected therapy'
    ],
    patientExperience: 'The patient feels warmth and humidity and may sweat during the session.',
    benefits: [
      'May promote relaxation',
      'Provides a warming effect',
      'May temporarily ease feelings of stiffness',
      'May prepare the body for selected activities'
    ],
    sessionInfo: "Duration should be individualized according to the patient's tolerance and clinical requirements.",
    safety: 'Steam therapy may not be suitable for everyone, particularly individuals with certain cardiovascular, respiratory, blood-pressure, skin, or other medical conditions.',
    afterCare: 'Patients should cool down gradually and maintain appropriate hydration. Further instructions may be provided by the physiotherapist.',
    ctaText: 'Talk to our physiotherapist before adding steam therapy to your treatment plan.',
    iconType: 'CloudFog',
    badge: 'Thermal Relaxation',
    image: '/steam_bath.png'
  },
  {
    id: 'fire-cupping',
    number: '07',
    name: 'Fire Cupping',
    category: 'Specialized Interventions',
    tagline: 'Traditional cupping therapy used as a complementary approach to selected physiotherapy treatments.',
    shortIntro: 'Fire cupping uses specially designed cups placed on selected areas of the body to create controlled suction. It is commonly used as a complementary technique rather than as a replacement for exercise-based rehabilitation.',
    whatItDoes: 'The suction created by the cups gently lifts the skin and superficial tissues beneath the cup. This creates a pulling sensation and may provide a temporary therapeutic effect.',
    howItWorks: 'A brief heating process creates a pressure difference inside the cup. When the cup is placed on the skin, suction develops and keeps the cup attached.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Skin condition, contraindication check, and target area selection.' },
      { step: '02', title: 'Skin Preparation', desc: 'Sanitizing and preparing myofascial region for treatment.' },
      { step: '03', title: 'Cup Placement', desc: 'Applying sterile cups along targeted fascial vectors.' },
      { step: '04', title: 'Controlled Suction', desc: 'Gentle vacuum created to lift skin and superficial tissues.' },
      { step: '05', title: 'Monitoring', desc: 'Observing patient comfort and tissue response during suction.' },
      { step: '06', title: 'Cup Removal', desc: 'Careful release of vacuum pressure without skin discomfort.' },
      { step: '07', title: 'Skin Check', desc: 'Inspection of skin and soothing follow-up care.' }
    ],
    conditions: [
      'Muscular tightness',
      'Selected soft-tissue discomfort',
      'Muscle-related rehabilitation needs'
    ],
    patientExperience: 'Patients commonly experience pulling, tightness, or pressure beneath the cup. Temporary circular marks or discoloration can occur.',
    benefits: [
      'May help relax tight muscles',
      'May provide temporary comfort',
      'May complement soft-tissue treatment',
      'May be incorporated alongside exercise therapy'
    ],
    sessionInfo: 'Treatment time depends on the number of cups, treatment area, and overall treatment plan.',
    safety: 'Cupping may not be suitable for certain skin conditions, infections, bleeding risks, or other medical circumstances.',
    afterCare: "Temporary marks may remain for several days. Patients should follow the therapist's skin-care and activity recommendations.",
    ctaText: 'Talk to our physiotherapist to understand whether cupping is appropriate for your treatment plan.',
    iconType: 'Flame',
    badge: 'Myofascial Technique',
    image: '/fire_cupping.png'
  },
  {
    id: 'kinesiology-taping',
    number: '08',
    name: 'Kinesiology Taping',
    category: 'Specialized Interventions',
    tagline: 'Flexible therapeutic tape designed to support movement and provide sensory feedback.',
    shortIntro: 'Kinesiology tape is an elastic tape applied to selected areas of the body. It moves with the skin and can be used alongside exercise and rehabilitation to provide external support and movement awareness.',
    whatItDoes: 'The tape provides sensory input and light external support without completely restricting movement.',
    howItWorks: "The physiotherapist selects a taping technique based on the patient's movement, body region, and treatment objective.",
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Analyzing joint kinematics, pain vectors, and muscular tone.' },
      { step: '02', title: 'Skin Preparation', desc: 'Cleaning and drying skin surface to ensure optimal adhesion.' },
      { step: '03', title: 'Tape Selection', desc: 'Cutting tape with rounded edges and customized elasticity stretch.' },
      { step: '04', title: 'Application', desc: 'Applying tension over muscles, joints, or lymphatic channels.' },
      { step: '05', title: 'Movement Check', desc: 'Testing range of motion and comfort in active movement.' },
      { step: '06', title: 'Patient Instructions', desc: 'Guidance on tape maintenance, wear duration, and skin check.' }
    ],
    conditions: [
      'Sports injuries',
      'Muscle-related problems',
      'Movement-control difficulties',
      'Selected swelling-management needs',
      'Joint support requirements'
    ],
    patientExperience: 'The patient may feel mild tension or support from the tape while retaining normal movement.',
    benefits: [
      'May improve movement awareness',
      'May provide light support',
      'May provide proprioceptive feedback',
      'May complement exercise therapy',
      'May assist selected swelling-management strategies'
    ],
    sessionInfo: 'Application is generally brief, although duration depends on the body area and complexity of taping.',
    safety: 'Patients with adhesive allergies, fragile skin, active skin conditions, or irritation may require alternative approaches.',
    afterCare: 'Patients should monitor the skin and inform the therapist if they experience excessive itching, burning, irritation, or discomfort.',
    ctaText: 'Speak with our physiotherapist about whether kinesiology taping could complement your rehabilitation.',
    iconType: 'Layers',
    badge: 'Neuromuscular Support',
    image: '/kinesiology_taping.png'
  },
  {
    id: 'quadriceps-table',
    number: '09',
    name: 'Quadriceps Training',
    category: 'Strength & Conditioning',
    tagline: 'Targeted strengthening for stronger legs and better knee control.',
    shortIntro: 'Quadriceps training focuses on strengthening the muscles at the front of the thigh. These muscles play an important role in standing, walking, climbing stairs, and controlling knee movement.',
    whatItDoes: 'The equipment provides controlled resistance that allows the quadriceps to work through selected knee movements.',
    howItWorks: 'The patient performs controlled knee-extension movements against an appropriate level of resistance selected by the physiotherapist.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Evaluating knee range of motion, patellar glide, and quad torque.' },
      { step: '02', title: 'Positioning', desc: 'Comfortably seated with back supported and knee axis aligned.' },
      { step: '03', title: 'Resistance Setup', desc: 'Selecting calibrated starting weight safe for patellofemoral joint.' },
      { step: '04', title: 'Controlled Movement', desc: 'Guiding active extension and controlled eccentric lowering.' },
      { step: '05', title: 'Repetitions', desc: 'Supervising prescribed repetitions and sets.' },
      { step: '06', title: 'Progression', desc: 'Modifying resistance angle and load over subsequent visits.' }
    ],
    conditions: [
      'Knee rehabilitation',
      'Lower-limb weakness',
      'Selected sports injuries',
      'Post-operative rehabilitation',
      'Reduced muscular strength',
      'Functional mobility limitations'
    ],
    patientExperience: 'The patient will normally feel the quadriceps muscles contracting and may experience muscular fatigue.',
    benefits: [
      'May improve quadriceps strength',
      'May support knee stability',
      'May improve lower-limb control',
      'May improve functional strength'
    ],
    sessionInfo: "Duration depends on the patient's exercise program, repetitions, sets, and overall rehabilitation plan.",
    safety: 'Exercise range and resistance must be appropriate to the patient\'s condition, particularly following surgery or acute injury.',
    afterCare: 'The therapist may recommend stretching, strengthening, mobility exercises, or activity modifications.',
    ctaText: 'Talk to our physiotherapist about targeted knee and lower-limb strengthening.',
    iconType: 'Activity',
    badge: 'Knee & Quad Focus',
    image: '/quadriceps_table.png'
  },
  {
    id: 'balance-board',
    number: '10',
    name: 'Balance Board Training',
    category: 'Balance & Core',
    tagline: 'Progressive balance training to improve stability, coordination, and body awareness.',
    shortIntro: "Balance board training uses an unstable surface to challenge the body's ability to maintain stability. It can be incorporated into rehabilitation programs focusing on balance, coordination, proprioception, and functional movement.",
    whatItDoes: "The moving surface requires the body to continuously make small adjustments to maintain an upright position.",
    howItWorks: "The patient stands on the board while performing controlled balance exercises. The therapist can gradually increase the difficulty as the patient's control improves.",
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Testing static single-leg balance and postural sway.' },
      { step: '02', title: 'Safe Positioning', desc: 'Mounting wobble platform near support rail or therapist hand.' },
      { step: '03', title: 'Static Balance', desc: 'Maintaining center of gravity in level position.' },
      { step: '04', title: 'Weight Shifting', desc: 'Controlled anterior-posterior and lateral tilts.' },
      { step: '05', title: 'Dynamic Challenges', desc: 'Introducing ball catches, head turns, or squatting holds.' },
      { step: '06', title: 'Progression', desc: 'Progressing from double-leg to single-leg unstable balance.' }
    ],
    conditions: [
      'Balance difficulties',
      'Ankle instability',
      'Selected sports rehabilitation',
      'Coordination problems',
      'Neurological rehabilitation',
      'Proprioceptive training'
    ],
    patientExperience: 'The patient feels the board moving beneath their feet and must continuously adjust their posture.',
    benefits: [
      'May improve balance',
      'May improve proprioception',
      'May support coordination',
      'May improve postural control',
      'May improve movement confidence'
    ],
    sessionInfo: 'Exercises are generally performed in controlled intervals with rest as needed.',
    safety: 'Patients with significant balance impairment may require additional support or a more stable starting exercise.',
    afterCare: 'The therapist may progressively increase the difficulty or combine balance work with functional exercises.',
    ctaText: 'Speak with our physiotherapist about improving balance and movement confidence.',
    iconType: 'Compass',
    badge: 'Stability & Agility',
    image: '/balance_board.png'
  },
  {
    id: 'parallel-bar-training',
    number: '11',
    name: 'Parallel Bar Training',
    category: 'Gait & Cardio',
    tagline: 'A supported environment for practicing standing, stepping, and walking.',
    shortIntro: 'Parallel bars provide a stable support structure for patients who need assistance while learning or relearning walking skills.',
    whatItDoes: 'The bars provide external support while the patient practices weight shifting, stepping, posture, and walking under the guidance of a physiotherapist.',
    howItWorks: 'The patient holds the bars while the therapist guides movement and progressively challenges balance and walking ability.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Evaluating weight-bearing capacity, stance symmetry, and step confidence.' },
      { step: '02', title: 'Standing', desc: 'Practicing stable standing balance with bilateral hand rail grip.' },
      { step: '03', title: 'Weight Shifting', desc: 'Guiding pelvic weight shifts onto affected and unaffected sides.' },
      { step: '04', title: 'Stepping', desc: 'Practicing single-step forward, backward, and lateral foot placement.' },
      { step: '05', title: 'Walking', desc: 'Continuous forward walking between parallel rails with postural feedback.' },
      { step: '06', title: 'Progression', desc: 'Transitioning to single-hand support or independent walking aids.' }
    ],
    conditions: [
      'Gait difficulties',
      'Lower-limb weakness',
      'Balance impairment',
      'Neurological rehabilitation',
      'Post-operative mobility rehabilitation',
      'Reduced walking confidence'
    ],
    patientExperience: 'The patient feels supported by the bars while working on lower-limb movement and body control.',
    benefits: [
      'May improve gait',
      'May support balance',
      'May improve weight-bearing control',
      'May strengthen lower limbs',
      'May increase walking confidence'
    ],
    sessionInfo: "Duration depends on the patient's walking ability, endurance, and rehabilitation goals.",
    safety: 'The therapist determines the amount of support and assistance required.',
    afterCare: 'As walking ability improves, patients may progress toward walking with less support or an appropriate assistive device.',
    ctaText: 'Talk to our physiotherapist about guided gait and mobility rehabilitation.',
    iconType: 'MoveHorizontal',
    badge: 'Gait Re-education',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'swiss-ball-training',
    number: '12',
    name: 'Swiss Ball Training',
    category: 'Balance & Core',
    tagline: 'Dynamic exercise for core strength, balance, coordination, and functional movement.',
    shortIntro: 'Swiss ball training uses a large exercise ball to create an unstable surface for controlled therapeutic exercises. The instability encourages the body to continuously adjust and maintain balance.',
    whatItDoes: 'It challenges core and supporting muscles while performing controlled movements.',
    howItWorks: "The physiotherapist selects exercises based on the patient's ability. Exercises may involve sitting, lying, bridging, stretching, balancing, or controlled movement using the ball.",
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Assessing core motor control, spinal alignment, and flexibility.' },
      { step: '02', title: 'Exercise Selection', desc: 'Selecting suitable sitting, supine, or bridging ball movements.' },
      { step: '03', title: 'Positioning', desc: 'Ensuring correct ball sizing and safe body positioning.' },
      { step: '04', title: 'Controlled Exercise', desc: 'Performing pelvic tilts, abdominal bracing, and limb movements.' },
      { step: '05', title: 'Balance Challenge', desc: 'Progressively challenging equilibrium and deep stabilizer hold.' },
      { step: '06', title: 'Progression', desc: 'Adding dynamic resistance bands or challenging stability postures.' }
    ],
    conditions: [
      'Core weakness',
      'Balance difficulties',
      'Postural problems',
      'Musculoskeletal rehabilitation',
      'Sports rehabilitation',
      'Functional conditioning'
    ],
    patientExperience: 'The patient may feel their abdominal, back, hip, and leg muscles working to stabilize the body.',
    benefits: [
      'May improve core strength',
      'May improve balance',
      'May support coordination',
      'May improve postural control',
      'May build functional strength'
    ],
    sessionInfo: 'Duration varies according to exercise selection and patient tolerance.',
    safety: 'Exercise difficulty must be matched to the patient\'s balance and strength. Additional support may be required for some patients.',
    afterCare: 'Exercises can be progressed gradually by changing positions, repetitions, or movement difficulty.',
    ctaText: 'Talk to our physiotherapist about incorporating Swiss ball training into your rehabilitation.',
    iconType: 'CircleDot',
    badge: 'Core Stability',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'electrotherapy',
    number: '13',
    name: 'Electrotherapy',
    category: 'Electro & Thermal',
    tagline: 'Controlled electrical stimulation used as part of selected physiotherapy programs.',
    shortIntro: "Electrotherapy uses controlled electrical stimulation delivered through electrodes placed on the skin. Different forms of electrotherapy can be selected according to the patient's condition and rehabilitation goal.",
    whatItDoes: 'Depending on the modality, electrical stimulation can provide sensory stimulation, encourage selected muscle contractions, or support pain-management strategies.',
    howItWorks: 'Electrodes are placed over selected areas and the physiotherapist adjusts the stimulation settings, such as intensity, frequency, and duration.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Diagnosing pain generator, muscle inhibition, and checking skin integrity.' },
      { step: '02', title: 'Skin Preparation', desc: 'Cleansing treatment area for optimal electrode conductivity.' },
      { step: '03', title: 'Electrode Placement', desc: 'Positioning sterile conductive pads along nerve or muscle vectors.' },
      { step: '04', title: 'Settings Selection', desc: 'Selecting IFT, TENS, or EMS frequency and wave pattern.' },
      { step: '05', title: 'Stimulation', desc: 'Gradually increasing current to comfortable sensory or motor threshold.' },
      { step: '06', title: 'Monitoring', desc: 'Verifying comfort and continuous therapeutic current delivery.' },
      { step: '07', title: 'Removal', desc: 'Decreasing current to zero, removing pads, and inspecting skin.' }
    ],
    conditions: [
      'Selected pain-management needs',
      'Muscle weakness',
      'Muscle re-education',
      'Post-operative rehabilitation',
      'Selected neurological rehabilitation'
    ],
    patientExperience: 'Patients may feel tingling, pulsing, tapping, or rhythmic muscle contractions depending on the type of electrotherapy being used.',
    benefits: [
      'May support pain management',
      'May assist muscle activation',
      'May support muscle re-education',
      'May complement active rehabilitation'
    ],
    sessionInfo: 'Treatment duration depends on the specific electrotherapy modality and treatment objective.',
    safety: 'Certain implanted electronic devices, altered sensation, skin conditions, and other medical factors may affect suitability.',
    afterCare: 'Electrodes are removed and the skin is checked. The treatment may be followed by exercise, stretching, or other rehabilitation.',
    ctaText: 'Speak with our physiotherapist to determine which electrotherapy approach may be appropriate for you.',
    iconType: 'Zap',
    badge: 'Pain Gating & EMS',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'thermotherapy',
    number: '14',
    name: 'Thermotherapy',
    category: 'Electro & Thermal',
    tagline: 'Therapeutic heat used to support comfort, relaxation, and preparation for movement.',
    shortIntro: 'Thermotherapy uses controlled heat as part of physiotherapy treatment. It may be applied to selected areas when warmth is appropriate for the patient\'s condition.',
    whatItDoes: 'Heat provides a warming sensation and may help muscles feel more relaxed and areas of stiffness feel more comfortable before selected therapeutic activities.',
    howItWorks: 'A suitable heat application method is selected and applied to the treatment area for a controlled period.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Checking thermal sensation, circulation, and tissue tightness.' },
      { step: '02', title: 'Area Preparation', desc: 'Positioning patient comfortably with protective towel insulation.' },
      { step: '03', title: 'Heat Application', desc: 'Applying moist hydrocollator pack or therapeutic infrared warming.' },
      { step: '04', title: 'Monitoring', desc: 'Checking skin after 5 minutes to ensure comfortable warmth without overheating.' },
      { step: '05', title: 'Removal', desc: 'Gently removing heat pack after prescribed duration.' },
      { step: '06', title: 'Reassessment', desc: 'Evaluating joint mobility gains and beginning movement therapy.' }
    ],
    conditions: [
      'Muscular tightness',
      'Stiffness',
      'Selected musculoskeletal conditions',
      'Preparation before exercise'
    ],
    patientExperience: 'The patient should feel comfortable warmth. Excessive heat or burning should be reported immediately.',
    benefits: [
      'May help reduce feelings of stiffness',
      'May promote muscle relaxation',
      'May improve comfort',
      'May prepare the body for selected exercises'
    ],
    sessionInfo: "Duration varies according to the heat method, body area, and patient's condition.",
    safety: 'Heat may not be suitable for everyone, particularly in cases involving impaired sensation, certain circulation problems, acute conditions, or other medical considerations.',
    afterCare: 'The therapist may follow heat application with stretching, mobility work, exercise, or other treatment.',
    ctaText: 'Talk to our physiotherapist to find out whether therapeutic heat is appropriate for you.',
    iconType: 'Sun',
    badge: 'Deep Moist Heat',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cryotherapy',
    number: '15',
    name: 'Cryotherapy',
    category: 'Electro & Thermal',
    tagline: 'Controlled cold therapy for pain, swelling, and post-activity comfort.',
    shortIntro: 'Cryotherapy is the therapeutic application of controlled cold to a selected area of the body. It may be incorporated into rehabilitation when managing pain, swelling, or discomfort is an appropriate treatment goal.',
    whatItDoes: 'Cold creates a cooling and sometimes temporarily numbing sensation in the treated area.',
    howItWorks: "An appropriate cold application method is selected and applied for a controlled period while the patient's skin and response are monitored.",
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Evaluating acute injury, swelling extent, and cold tolerance.' },
      { step: '02', title: 'Skin Check', desc: 'Inspecting skin sensation and covering with protective barrier.' },
      { step: '03', title: 'Cold Application', desc: 'Applying clinical cold compress securely over target zone.' },
      { step: '04', title: 'Monitoring', desc: 'Monitoring cold sensation progression (cold, burn, ache, numbness).' },
      { step: '05', title: 'Removal', desc: 'Removing cold application before excessive chilling occurs.' },
      { step: '06', title: 'Reassessment', desc: 'Evaluating reduction in swelling and resting comfort level.' }
    ],
    conditions: [
      'Selected injuries',
      'Physical activity',
      'Musculoskeletal rehabilitation',
      'Situations involving localized pain or swelling'
    ],
    patientExperience: 'The area normally feels cold initially, followed by cooling and sometimes temporary numbness.',
    benefits: [
      'May help manage pain',
      'May help manage swelling',
      'Provides temporary cooling',
      'May improve comfort'
    ],
    sessionInfo: "Duration varies according to the treatment method, body area, and patient's condition.",
    safety: 'Cold therapy may not be appropriate for certain circulation problems, cold sensitivity, impaired sensation, or other medical conditions.',
    afterCare: 'The treated area is checked after the application. The therapist may then continue with exercise, mobility work, or other rehabilitation.',
    ctaText: 'Speak with our physiotherapist to find out whether cryotherapy is suitable for your recovery.',
    iconType: 'Snowflake',
    badge: 'Cold Compression',
    image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dry-needling',
    number: '16',
    name: 'Dry Needling',
    category: 'Specialized Interventions',
    tagline: 'A targeted technique used to address selected areas of muscular tension and discomfort.',
    shortIntro: 'Dry needling is a physiotherapy technique that uses fine sterile needles inserted into selected muscles or soft tissues. It is generally used as one component of a broader rehabilitation program.',
    whatItDoes: 'The technique targets specific muscular areas identified during clinical assessment. It may be used to address selected trigger points, muscular tension, and movement-related discomfort.',
    howItWorks: 'The physiotherapist identifies an appropriate treatment area before inserting a fine sterile needle using a suitable technique. The needle creates a localized therapeutic stimulus in the targeted tissue.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Palpating taut muscle bands and locating referral trigger points.' },
      { step: '02', title: 'Target Identification', desc: 'Marking exact anatomical trigger point landmarks safely.' },
      { step: '03', title: 'Skin Preparation', desc: 'Alcohol sanitization of skin and establishing clean field.' },
      { step: '04', title: 'Needle Placement', desc: 'Precise insertion of single-use, sterile filiform needle.' },
      { step: '05', title: 'Treatment', desc: 'Gentle pistoning or retention to elicit local twitch response.' },
      { step: '06', title: 'Needle Removal', desc: 'Safe needle withdrawal, hemostasis, and sharps disposal.' },
      { step: '07', title: 'Reassessment', desc: 'Testing muscle length restoration and immediate joint release.' }
    ],
    conditions: [
      'Muscular tension',
      'Trigger-point-related pain',
      'Selected sports injuries',
      'Movement restrictions',
      'Musculoskeletal pain'
    ],
    patientExperience: 'Patients may feel a brief prick during needle insertion. Some techniques may produce a short muscle twitch or temporary local soreness.',
    benefits: [
      'May help reduce muscular tension',
      'May support movement',
      'May help manage selected muscular pain',
      'May complement exercise-based rehabilitation'
    ],
    sessionInfo: 'The needling portion is generally relatively brief, although total appointment time depends on assessment and other treatment provided.',
    safety: 'Medical history, medications, bleeding risks, skin conditions, and other relevant factors should be reviewed before treatment.',
    afterCare: 'Some patients may experience temporary soreness. The therapist may recommend gentle movement, stretching, or specific exercises afterward.',
    ctaText: 'Talk to our physiotherapist to find out whether dry needling is appropriate for your condition.',
    iconType: 'Crosshair',
    badge: 'Trigger Point Release',
    image: 'https://images.unsplash.com/photo-1512290900672-1f023922df37?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'traction-therapy',
    number: '17',
    name: 'Traction Therapy',
    category: 'Spine & Joint',
    tagline: 'Controlled pulling forces used to support mobility in selected spinal and musculoskeletal conditions.',
    shortIntro: 'Traction therapy uses controlled pulling forces to unload selected areas of the spine or joints. It is individually prescribed and is not automatically suitable for every person experiencing back or neck pain.',
    whatItDoes: 'The equipment applies a controlled force that may create a gentle unloading or stretching effect in the targeted area.',
    howItWorks: 'The patient is positioned securely on the traction equipment. The physiotherapist selects appropriate settings and gradually applies the prescribed traction force.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Spinal mechanical assessment, neurological test, and contraindication check.' },
      { step: '02', title: 'Positioning', desc: 'Comfortable positioning on specialized traction table with harness belts.' },
      { step: '03', title: 'Equipment Setup', desc: 'Programming traction force, hold-rest ratio, and angle of pull.' },
      { step: '04', title: 'Gradual Traction', desc: 'Slow, progressive application of prescribed distraction force.' },
      { step: '05', title: 'Monitoring', desc: 'Continuous observation of patient comfort and nerve response.' },
      { step: '06', title: 'Release', desc: 'Gradual smooth release of traction force back to zero.' },
      { step: '07', title: 'Reassessment', desc: 'Rest period followed by spinal movement and symptoms review.' }
    ],
    conditions: [
      'Spinal pain conditions',
      'Musculoskeletal stiffness',
      'Restricted spinal movement',
      'Conditions where unloading is clinically appropriate'
    ],
    patientExperience: 'Patients generally feel a gentle pulling or stretching sensation. Significant or worsening symptoms should be reported immediately.',
    benefits: [
      'May support mobility',
      'May improve comfort',
      'May reduce feelings of compression',
      'May reduce stiffness',
      'May complement active rehabilitation'
    ],
    sessionInfo: 'Duration and intensity vary according to the body region, condition, patient response, and treatment plan.',
    safety: 'Traction requires proper clinical assessment. Certain spinal conditions, instability, fractures, severe neurological symptoms, or other medical factors may make it inappropriate.',
    afterCare: 'The therapist may reassess symptoms and movement and may follow traction with mobility exercises, strengthening, posture training, or other rehabilitation.',
    ctaText: 'Talk to our physiotherapist to find out whether traction therapy is suitable for your condition.',
    iconType: 'Split',
    badge: 'Spinal Decompression',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vibration-plate',
    number: '18',
    name: 'Vibration Plate Training',
    category: 'Strength & Conditioning',
    tagline: 'Controlled vibration to challenge muscle activation, balance, and stability.',
    shortIntro: 'A vibration plate is a platform that produces controlled mechanical vibrations while the patient stands or performs selected exercises. It can be incorporated into rehabilitation and exercise programs when appropriate.',
    whatItDoes: 'The vibration creates repeated small movements that require the body to make continuous muscular adjustments to maintain stability.',
    howItWorks: 'The physiotherapist selects an appropriate vibration setting and exercise position. The patient stands or performs a controlled movement while the therapist monitors balance, posture, and tolerance.',
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Evaluating balance, joint tolerance, and bone mineral health.' },
      { step: '02', title: 'Positioning', desc: 'Patient stands with soft knees or performs guided therapeutic holds.' },
      { step: '03', title: 'Vibration Setting', desc: 'Selecting appropriate frequency and amplitude for patient comfort.' },
      { step: '04', title: 'Controlled Exercise', desc: 'Performing squats, calf raises, or static balance holds.' },
      { step: '05', title: 'Monitoring', desc: 'Observing postural stability and neuromuscular fatigue.' },
      { step: '06', title: 'Progression', desc: 'Modifying duration and introducing dynamic movement challenges.' }
    ],
    conditions: [
      'Lower-limb weakness',
      'Balance training',
      'Coordination difficulties',
      'Functional conditioning',
      'Muscle activation',
      'Postural control'
    ],
    patientExperience: 'The patient feels a rapid vibrating sensation through the feet and legs. The intensity can be adjusted according to tolerance.',
    benefits: [
      'May support muscle activation',
      'May improve balance',
      'May support lower-limb strengthening',
      'May challenge coordination',
      'May improve postural control',
      'May complement functional exercise'
    ],
    sessionInfo: 'Vibration is generally delivered in controlled intervals. Duration depends on the exercise, setting, patient tolerance, and rehabilitation objective.',
    safety: 'Vibration training is not appropriate for everyone. Certain cardiovascular, neurological, orthopedic, or other medical conditions may require modification or avoidance.',
    afterCare: 'The therapist may reassess balance, muscle response, and exercise tolerance before progressing to other strengthening, balance, or functional exercises.',
    ctaText: 'Talk to our physiotherapist to find out whether vibration training is appropriate for your rehabilitation.',
    iconType: 'Waves',
    badge: 'Neuromuscular Platform',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
  }
];

export const CLINIC_SERVICES: ClinicService[] = [
  {
    id: 'orthopaedic-conditions',
    number: '01',
    name: 'Orthopaedic Conditions',
    badge: 'JOINT & SPINE',
    tagline: 'Restoring comfortable movement, strength, mobility, and everyday function',
    shortIntro: "Physiotherapy for orthopaedic conditions focuses on restoring comfortable movement, strength, mobility, and everyday function affected by injuries, joint problems, muscle conditions, or surgery. Treatment is planned around the patient's symptoms, physical limitations, and recovery goals.",
    whatItInvolves: "Orthopaedic rehabilitation addresses problems involving muscles, bones, joints, ligaments, tendons, and other structures that affect movement. The rehabilitation plan may focus on reducing movement-related discomfort, improving flexibility, rebuilding strength, restoring joint mobility, and helping the patient return to normal daily activities.",
    howRehabWorks: "Rehabilitation begins with an assessment of movement, strength, flexibility, joint function, posture, and the activities that are difficult for the patient. Based on the findings, the physiotherapist may use therapeutic exercises, strengthening, mobility training, stretching, balance work, manual techniques, electrotherapy, heat or cold therapy, and functional movement training as appropriate.",
    procedurePathway: [
      { step: '01', title: 'Assessment', desc: 'Initial evaluation of movement, strength, flexibility, posture, and daily limitations.' },
      { step: '02', title: 'Identify Movement Limitations', desc: 'Pinpointing specific structural restrictions, joint stiffness, and muscle imbalances.' },
      { step: '03', title: 'Individual Treatment Planning', desc: 'Formulating a tailored therapeutic plan based on symptoms and physical goals.' },
      { step: '04', title: 'Mobility & Pain-Management Strategies', desc: 'Gentle mobilization, thermal therapy, and electrotherapy to ease discomfort.' },
      { step: '05', title: 'Strength & Stability Training', desc: 'Targeted strengthening of supporting muscle groups and joint stabilisers.' },
      { step: '06', title: 'Functional Movement Practice', desc: 'Retraining everyday tasks, lifting mechanics, and natural body patterns.' },
      { step: '07', title: 'Progression', desc: 'Gradually advancing resistance, repetitions, and movement complexity.' },
      { step: '08', title: 'Reassessment', desc: 'Reviewing clinical response, range of motion gains, and updating functional milestones.' }
    ],
    conditionsAddressed: [
      'Back and neck pain',
      'Knee problems',
      'Shoulder conditions',
      'Arthritis-related movement difficulties',
      'Muscle strains',
      'Ligament injuries',
      'Tendon problems',
      'Joint stiffness',
      'Post-operative rehabilitation',
      'Fracture rehabilitation',
      'Musculoskeletal injuries',
      'Sports-related orthopaedic injuries'
    ],
    patientExperience: "Sessions may include guided exercises, stretching, strengthening, mobility work, balance activities, and functional movements. The therapist gradually adjusts the difficulty according to the patient's response and recovery stage. Some exercises may create normal muscle effort or fatigue, but activities should be performed within an appropriate and clinically guided range.",
    potentialBenefits: [
      'Improved joint mobility',
      'Better muscle strength',
      'Improved movement control',
      'Greater stability',
      'Improved flexibility',
      'Better functional movement',
      'Increased confidence during daily activities',
      'Support for returning to normal activity'
    ],
    sessionInfo: "The duration and frequency of rehabilitation sessions depend on the condition, severity of symptoms, recovery stage, treatment goals, and individual response to therapy. The physiotherapist will determine the appropriate rehabilitation plan after assessment.",
    safetyConsiderations: "Exercise intensity, movement range, and treatment techniques are selected according to the patient's condition. Recent surgery, acute injuries, severe pain, swelling, fractures, or other medical concerns may require specific precautions.",
    afterRehabGuidance: "Patients may receive individualized home exercises, mobility activities, strengthening exercises, posture guidance, or activity recommendations to continue their progress between sessions.",
    ctaText: "Talk to our physiotherapist for an assessment and understand the rehabilitation approach suitable for your orthopaedic condition.",
    iconType: 'Activity',
    image: '/orthopedic_conditions.png',
    overview: "Physiotherapy for orthopaedic conditions focuses on restoring comfortable movement, strength, mobility, and everyday function affected by injuries, joint problems, muscle conditions, or surgery.",
    keyConditions: [
      'Back and neck pain',
      'Knee problems',
      'Shoulder conditions',
      'Arthritis-related movement difficulties',
      'Muscle strains & ligament injuries',
      'Post-operative & fracture rehabilitation'
    ]
  },
  {
    id: 'neurological-conditions',
    number: '02',
    name: 'Neurological Conditions',
    badge: 'NEUROLOGICAL CARE',
    tagline: 'Targeted support for movement control, balance, coordination, and practical independence',
    shortIntro: "Neurological physiotherapy supports people whose movement, balance, coordination, strength, or everyday function has been affected by a neurological condition. Rehabilitation focuses on improving practical movement and helping patients participate more confidently in daily activities.",
    whatItInvolves: "Neurological conditions can affect walking, balance, coordination, posture, muscle control, strength, hand function, and independence. Physiotherapy focuses on the specific movement and functional difficulties experienced by each patient.",
    howRehabWorks: "The physiotherapist assesses movement patterns, muscle strength, balance, coordination, posture, walking ability, and functional activities. Rehabilitation may include gait training, balance exercises, strengthening, coordination activities, mobility training, supported standing, treadmill training, parallel bar training, and task-specific exercises depending on the patient's needs.",
    procedurePathway: [
      { step: '01', title: 'Assessment', desc: 'Comprehensive assessment of neurological movement, muscle tone, and coordination.' },
      { step: '02', title: 'Identify Movement & Functional Limitations', desc: 'Mapping deficits in balance, gait cadence, limb control, and everyday transfers.' },
      { step: '03', title: 'Individual Rehabilitation Planning', desc: 'Developing targeted motor learning and neuro-facilitation objectives.' },
      { step: '04', title: 'Movement Activation', desc: 'Sensory stimulation, muscle re-education, and activation of inhibited pathways.' },
      { step: '05', title: 'Balance & Coordination Training', desc: 'Equilibrium exercises, weight-shifting drills, and postural stabilizing.' },
      { step: '06', title: 'Strength & Gait Training', desc: 'Supported walking, parallel bars, and progressive limb strengthening.' },
      { step: '07', title: 'Functional Practice', desc: 'Practicing everyday tasks, transfers, and self-care mobility routines.' },
      { step: '08', title: 'Progression & Reassessment', desc: 'Reviewing functional gains and advancing task complexity safely.' }
    ],
    conditionsAddressed: [
      'Stroke-related movement difficulties',
      "Parkinson's disease",
      'Spinal cord-related movement impairments',
      'Multiple sclerosis',
      'Peripheral nerve conditions',
      'Neuromuscular conditions',
      'Balance and coordination difficulties',
      'Muscle weakness associated with neurological conditions',
      'Walking difficulties',
      'Postural control problems'
    ],
    patientExperience: "Sessions may involve repeated movement practice, balance activities, supported standing, walking exercises, strengthening, coordination tasks, and functional activities. Exercises are usually progressed gradually as the patient's control, strength, and confidence improve.",
    potentialBenefits: [
      'Improved movement control',
      'Better balance',
      'Improved coordination',
      'Increased muscle strength',
      'Improved walking ability',
      'Better posture and stability',
      'Greater confidence with movement',
      'Improved ability to perform everyday activities',
      'Support for greater functional independence'
    ],
    sessionInfo: "Neurological rehabilitation is individualized. Session content, intensity, duration, and frequency depend on the neurological condition, current functional ability, rehabilitation goals, and response to treatment.",
    safetyConsiderations: "Patients with neurological conditions may have different levels of strength, balance, sensation, coordination, and fatigue. Exercises should therefore be selected and progressed under appropriate professional guidance.",
    afterRehabGuidance: "The physiotherapist may recommend home movement practice, strengthening, balance exercises, positioning strategies, mobility activities, or functional exercises to support continued progress.",
    ctaText: "Talk to our physiotherapist to understand how neurological rehabilitation can support your movement and functional goals.",
    iconType: 'Zap',
    image: '/neuro_conditions.png',
    overview: "Neurological physiotherapy supports people whose movement, balance, coordination, strength, or everyday function has been affected by a neurological condition.",
    keyConditions: [
      'Stroke-related movement difficulties',
      "Parkinson's disease & tremor",
      'Spinal cord & nerve conditions',
      'Multiple sclerosis & neuropathy',
      'Balance & coordination difficulties',
      'Walking & postural control problems'
    ]
  },
  {
    id: 'sports-injuries',
    number: '03',
    name: 'Sports Injuries',
    badge: 'ATHLETIC REHAB',
    tagline: 'Recover stronger. Move better. Get back to the sport you love.',
    shortIntro: "Sports injuries can affect muscles, joints, ligaments, tendons, and bones. Physiotherapy focuses on reducing pain, restoring movement, rebuilding strength, improving stability, and gradually preparing you to return to your sport.",
    whatItInvolves: "Sports rehabilitation may address injuries affecting muscles, tendons, ligaments, joints, and other structures involved in physical activity. Rehabilitation is tailored to the sport, injury, activity level, and functional demands of the individual.",
    howRehabWorks: "Treatment begins with an assessment of pain, movement, strength, flexibility, balance, stability, and sport-specific requirements. Rehabilitation may then progress from controlled movement and mobility exercises to strengthening, balance training, movement retraining, functional exercises, and sport-specific conditioning.",
    procedurePathway: [
      { step: '01', title: 'Assessment', desc: 'Evaluating pain, tissue irritability, joint range, and sport-specific demands.' },
      { step: '02', title: 'Protect & Restore Movement', desc: 'Early symptom relief, gentle mobilization, and preventing joint stiffness.' },
      { step: '03', title: 'Mobility & Controlled Exercise', desc: 'Restoring full physiological range and progressive tissue loading.' },
      { step: '04', title: 'Strength Development', desc: 'Targeted muscular strengthening, eccentric control, and power reconditioning.' },
      { step: '05', title: 'Balance & Stability', desc: 'Proprioception, dynamic joint stabilization, and kinetic chain alignment.' },
      { step: '06', title: 'Movement Retraining', desc: 'Refining jumping, landing, pivoting, and biomechanical movement patterns.' },
      { step: '07', title: 'Sport-Specific Training', desc: 'Simulated drills and conditioning matching individual athletic goals.' },
      { step: '08', title: 'Return-to-Activity Preparation', desc: 'Graduated re-entry protocols and injury prevention guidance.' }
    ],
    conditionsAddressed: [
      'Muscle strains',
      'Ligament sprains',
      'Tendon injuries',
      'Knee injuries',
      'Shoulder injuries',
      'Ankle injuries',
      'Sports-related back pain',
      'Overuse injuries',
      'Joint injuries',
      'Post-operative sports rehabilitation',
      'Movement and performance-related limitations'
    ],
    patientExperience: "Rehabilitation usually progresses gradually. Early sessions may focus on controlled movement and mobility, followed by strengthening, balance, coordination, and functional exercises. As recovery progresses, exercises may become more dynamic and closer to the movements required in the patient's sport or activity.",
    potentialBenefits: [
      'Improved strength',
      'Better joint stability',
      'Improved mobility',
      'Better balance and coordination',
      'Improved movement mechanics',
      'Increased confidence during activity',
      'Improved physical conditioning',
      'Support for a gradual return to sport'
    ],
    sessionInfo: "Session duration and frequency depend on the injury, healing stage, sport, activity level, rehabilitation goals, and response to treatment. Return-to-sport progression should be individualized.",
    safetyConsiderations: "Exercises should match the current stage of healing. Returning to high-intensity activity too quickly may increase the risk of aggravating an injury, so progression should be guided by the physiotherapist.",
    afterRehabGuidance: "Patients may receive home exercises, stretching, strengthening, activity modifications, recovery recommendations, and sport-specific drills to continue rehabilitation outside the clinic.",
    ctaText: "Talk to our physiotherapist to create a structured rehabilitation plan for your sports injury and return-to-activity goals.",
    iconType: 'ShieldCheck',
    image: '/sports_injuries.png',
    overview: "Sports injury rehabilitation helps athletes and active individuals recover from injuries while rebuilding strength, mobility, coordination, and movement confidence.",
    keyConditions: [
      'Muscle strains & tendon tears',
      'Ligament sprains (ACL/MCL/Ankle)',
      'Knee, shoulder & joint injuries',
      'Overuse injuries & tennis elbow',
      'Post-operative athletic rehab',
      'Movement & performance limitations'
    ]
  },
  {
    id: 'pediatric-conditions',
    number: '04',
    name: 'Pediatric Conditions',
    badge: 'PEDIATRIC CARE',
    tagline: 'Helping children move, grow, play, and develop with confidence.',
    shortIntro: "Every child develops at their own pace. Pediatric physiotherapy uses age-appropriate, play-based activities to support movement, strength, balance, coordination, and physical development.",
    whatItInvolves: "Children may require physiotherapy support for movement difficulties, delayed motor skills, balance problems, muscle weakness, gait difficulties, coordination challenges, neurological conditions, postural concerns, or musculoskeletal problems.",
    howRehabWorks: "Assessment focuses on the child's movement patterns, posture, balance, strength, coordination, mobility, motor skills, and functional activities. Therapy may use age-appropriate exercises, movement games, balance activities, strengthening, coordination tasks, gait training, mobility work, and functional play.",
    procedurePathway: [
      { step: '01', title: 'Child & Parent Assessment', desc: 'Understanding parent observations, birth history, and child interaction.' },
      { step: '02', title: 'Identify Movement & Developmental Needs', desc: 'Evaluating motor milestones, tone, posture, and coordination patterns.' },
      { step: '03', title: 'Individual Rehabilitation Planning', desc: 'Creating fun, goal-oriented, age-specific milestones for development.' },
      { step: '04', title: 'Play-Based Movement Activities', desc: 'Engaging games and sensory-rich tasks encouraging natural movement.' },
      { step: '05', title: 'Strength & Motor-Skill Development', desc: 'Core activation, limb strengthening, crawling, sitting, and standing practice.' },
      { step: '06', title: 'Balance & Coordination Training', desc: 'Dynamic play, stepping challenges, and balance board stability drills.' },
      { step: '07', title: 'Functional Practice', desc: 'Rehearsing playground mobility, stair negotiation, and self-care skills.' },
      { step: '08', title: 'Progress Monitoring', desc: 'Regular review with parents to celebrate milestones and refine play routines.' }
    ],
    conditionsAddressed: [
      'Delayed motor milestones',
      'Motor development difficulties',
      'Balance and coordination difficulties',
      'Muscle weakness',
      'Walking and gait difficulties',
      'Neurological movement difficulties',
      'Postural problems',
      'Musculoskeletal conditions',
      'Recovery after injury',
      'Functional movement limitations'
    ],
    patientExperience: "Sessions are designed to be engaging and age-appropriate. Children may participate in movement games, balance activities, guided exercises, walking practice, coordination tasks, and functional play rather than following a conventional adult exercise routine.",
    potentialBenefits: [
      'Improved motor skills',
      'Better balance',
      'Improved coordination',
      'Increased strength',
      'Improved posture and movement control',
      'Better walking ability',
      'Greater confidence with physical activities',
      'Improved participation in age-appropriate activities'
    ],
    sessionInfo: "The duration, frequency, and activities used during pediatric physiotherapy depend on the child's age, condition, developmental level, attention, tolerance, and rehabilitation goals.",
    safetyConsiderations: "Children require age-appropriate assessment and supervision. Exercises and activities should be selected according to the child's developmental stage, physical abilities, medical history, and comfort.",
    afterRehabGuidance: "Parents or caregivers may receive simple activities and exercises that can be incorporated into the child's daily routine. The physiotherapist can guide parents on safe movement practice and home activities.",
    ctaText: "Talk to our physiotherapist to understand how pediatric physiotherapy can support your child's movement and physical development.",
    iconType: 'Heart',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80',
    overview: "Pediatric physiotherapy supports children who experience difficulties with movement, balance, strength, coordination, posture, or physical development.",
    keyConditions: [
      'Delayed motor milestones',
      'Motor development difficulties',
      'Balance & coordination challenges',
      'Walking & gait difficulties',
      'Pediatric neurological & posture concerns',
      'Recovery after pediatric injury'
    ]
  },
  {
    id: 'geriatric-conditions',
    number: '05',
    name: 'Geriatric Conditions',
    badge: 'SENIOR MOBILITY',
    tagline: 'Helping you stay strong, mobile, safe, and independent as you age.',
    shortIntro: "Getting older does not mean you have to stop moving. Physiotherapy can help older adults manage pain, maintain strength, improve balance, and continue doing the activities they enjoy.",
    whatItInvolves: "Older adults may experience reduced muscle strength, stiffness, balance difficulties, slower movement, reduced endurance, walking problems, or difficulty performing everyday activities. Physiotherapy focuses on maintaining or improving safe movement and functional independence.",
    howRehabWorks: "The physiotherapist assesses strength, balance, walking ability, mobility, flexibility, endurance, posture, and functional activities. Rehabilitation may include strengthening exercises, balance training, gait training, mobility exercises, flexibility work, functional exercises, and fall-risk reduction strategies.",
    procedurePathway: [
      { step: '01', title: 'Assessment', desc: 'Evaluating balance, gait stability, fall risk, and daily living mobility.' },
      { step: '02', title: 'Identify Mobility & Functional Limitations', desc: 'Pinpointing joint stiffness, muscle loss, and stance confidence challenges.' },
      { step: '03', title: 'Individual Rehabilitation Plan', desc: 'Tailoring gentle, progressive exercise matched to health profile.' },
      { step: '04', title: 'Strength & Mobility Training', desc: 'Anti-gravity leg strengthening, chair stands, and joint flexibility.' },
      { step: '05', title: 'Balance & Gait Training', desc: 'Static and dynamic equilibrium practice, parallel bars, and posture drills.' },
      { step: '06', title: 'Functional Activity Practice', desc: 'Simulating household transfers, turning, and safe stepping mechanics.' },
      { step: '07', title: 'Progression', desc: 'Gradually increasing endurance and functional task independence.' },
      { step: '08', title: 'Reassessment', desc: 'Reviewing balance confidence, fall risk reduction, and mobility gains.' }
    ],
    conditionsAddressed: [
      'Age-related muscle weakness',
      'Balance difficulties',
      'Walking difficulties',
      'Joint stiffness',
      'Arthritis-related movement limitations',
      'Reduced endurance',
      'Fall-risk concerns',
      'Post-operative recovery',
      'Reduced mobility',
      'Functional independence difficulties',
      'General deconditioning'
    ],
    patientExperience: "Sessions may include guided strengthening, walking practice, balance exercises, mobility work, stretching, and functional activities. Exercises are progressed according to the individual's tolerance, strength, balance, and confidence.",
    potentialBenefits: [
      'Improved strength',
      'Better balance',
      'Improved walking ability',
      'Increased mobility',
      'Better physical endurance',
      'Improved confidence with movement',
      'Support for fall-risk reduction',
      'Greater independence in daily activities'
    ],
    sessionInfo: "Session duration and frequency depend on the person's condition, physical capacity, rehabilitation goals, medical considerations, and response to exercise.",
    safetyConsiderations: "Older adults may have multiple medical conditions or medications that can influence exercise tolerance. Rehabilitation should therefore be individualized and progressed carefully under professional guidance.",
    afterRehabGuidance: "Patients may receive home exercises, walking recommendations, balance activities, strengthening routines, mobility exercises, and practical guidance for maintaining safe activity between sessions.",
    ctaText: "Talk to our physiotherapist to develop a safe rehabilitation approach focused on mobility, confidence, and independence.",
    iconType: 'Compass',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    overview: "Geriatric physiotherapy focuses on maintaining mobility, strength, balance, and independence as people age.",
    keyConditions: [
      'Age-related muscle weakness & sarcopenia',
      'Balance difficulties & fall-risk concerns',
      'Walking difficulties & reduced endurance',
      'Joint stiffness & arthritic limitations',
      'Post-operative recovery in seniors',
      'General deconditioning'
    ]
  },
  {
    id: 'neuro-rehabilitation',
    number: '06',
    name: 'Neuro Rehabilitation',
    badge: 'ADVANCED NEURO REHAB',
    tagline: 'Helping you regain movement, rebuild confidence, and live more independently.',
    shortIntro: "Neuro rehabilitation is a personalized physiotherapy approach for people recovering from neurological conditions or living with movement difficulties. We work on movement, strength, balance, coordination, walking, and everyday activities based on each person's individual needs.",
    whatItInvolves: "Neuro rehabilitation may address difficulties with walking, balance, muscle strength, coordination, posture, mobility, transfers, and everyday activities. The rehabilitation program is built around the individual's current abilities and functional goals.",
    howRehabWorks: "The physiotherapist assesses movement, strength, balance, coordination, posture, walking ability, and functional independence. Treatment may include supported standing, gait training, treadmill training, parallel bar training, balance exercises, strengthening, coordination activities, mobility training, and task-specific functional practice.",
    procedurePathway: [
      { step: '01', title: 'Assessment', desc: 'Evaluating neurological motor status, spasticity, sensory feedback, and posture.' },
      { step: '02', title: 'Establish Functional Goals', desc: 'Collaborating on meaningful, patient-centered movement and transfer goals.' },
      { step: '03', title: 'Movement Activation', desc: 'Facilitating active muscle firing and inhibiting abnormal movement synergies.' },
      { step: '04', title: 'Supported Movement Practice', desc: 'Body-weight supported standing and guided harness/parallel bar practice.' },
      { step: '05', title: 'Strength & Balance Training', desc: 'Targeted neuromuscular strengthening and equilibrium re-education.' },
      { step: '06', title: 'Gait & Functional Training', desc: 'Treadmill cadence practice, stepping symmetry, and overground ambulation.' },
      { step: '07', title: 'Progressive Task Practice', desc: 'Repetitive rehearsal of real-world sit-to-stand, transfers, and task mastery.' },
      { step: '08', title: 'Reassessment & Progression', desc: 'Measuring functional independence milestones and advancing rehabilitation stages.' }
    ],
    conditionsAddressed: [
      'Stroke rehabilitation',
      'Spinal cord-related impairments',
      "Parkinson's disease",
      'Multiple sclerosis',
      'Neurological movement disorders',
      'Peripheral nerve-related movement difficulties',
      'Neuromuscular conditions',
      'Balance and coordination problems',
      'Walking difficulties',
      'Muscle weakness',
      'Reduced functional independence'
    ],
    patientExperience: "Sessions may involve repeated practice of meaningful movements such as standing, walking, reaching, transferring, balancing, or performing functional tasks. Therapists provide support and gradually adjust the level of challenge as the patient's abilities change.",
    potentialBenefits: [
      'Improved movement control',
      'Better balance',
      'Improved walking ability',
      'Increased strength',
      'Better coordination',
      'Improved posture',
      'Greater confidence during movement',
      'Improved functional independence',
      'Better participation in everyday activities'
    ],
    sessionInfo: "Neuro rehabilitation is highly individualized. Session content, duration, frequency, intensity, and progression depend on the neurological condition, functional ability, rehabilitation goals, fatigue levels, and response to treatment.",
    safetyConsiderations: "Neurological rehabilitation requires careful progression because balance, strength, coordination, sensation, fatigue, and movement control can vary significantly between individuals. Exercises should be performed under appropriate professional guidance.",
    afterRehabGuidance: "The physiotherapist may provide individualized home exercises, movement practice, strengthening, balance activities, mobility exercises, and functional tasks to reinforce rehabilitation progress.",
    ctaText: "Talk to our physiotherapist to understand how neuro rehabilitation can support your movement, function, and independence.",
    iconType: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    overview: "Neuro rehabilitation is a structured physiotherapy approach for people recovering from neurological conditions or injuries that affect movement and everyday function.",
    keyConditions: [
      'Stroke recovery & hemiplegia',
      'Spinal cord-related impairments',
      "Parkinson's disease & movement disorders",
      'Peripheral nerve & neuromuscular conditions',
      'Harness-assisted gait & balance retraining',
      'Functional independence recovery'
    ]
  }
];
