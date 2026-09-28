import type { Treatment, Condition, Article, Testimonial, DoctorInfo } from './types';

export const CLINIC_INFO = {
  name: "Global Physiotherapy Clinic",
  city: "Anantapur, Andhra Pradesh",
  doctor: "Dr. K. Bhavendra PT",
  address: "Dr. No. MIG 30, Housing Board Colony, Anantapur, Andhra Pradesh – 515001",
  phone: "+91 73308 85190",
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
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?auto=format&fit=crop&w=800&q=80",
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
