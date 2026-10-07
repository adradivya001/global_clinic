export type EquipmentCategory = 
  | 'All'
  | 'Rehabilitation Equipment'
  | 'Exercise & Strength'
  | 'Pain & Comfort'
  | 'Supportive Techniques';

export interface EquipmentItem {
  id: string;
  number: string;
  name: string;
  category: 'Rehabilitation Equipment' | 'Exercise & Strength' | 'Pain & Comfort' | 'Supportive Techniques';
  image: string;
  shortDescription: string;
  paragraphs: string[];
  safetyNote: string;
  iconType: string;
}

export const EQUIPMENT_CATEGORIES: EquipmentCategory[] = [
  'All',
  'Rehabilitation Equipment',
  'Exercise & Strength',
  'Pain & Comfort',
  'Supportive Techniques'
];

export const CLINIC_EQUIPMENT: EquipmentItem[] = [
  {
    id: 'treadmill-training',
    number: '01',
    name: 'Treadmill Training',
    category: 'Rehabilitation Equipment',
    image: '/treadmill_training.png',
    shortDescription: 'Guided walking and movement training to improve mobility, balance, strength, and stamina.',
    paragraphs: [
      "Treadmill training is used as part of rehabilitation to help patients practice walking in a controlled and supervised environment. It allows the physiotherapist to adjust the walking speed and duration according to the patient's ability while working on mobility, balance, strength, coordination, and stamina.",
      "During treatment, the patient walks on the treadmill while the physiotherapist observes their walking pattern, posture, balance, and movement. The speed, duration, and level of support are adjusted according to the patient's condition and comfort.",
      "This type of training can be included for people experiencing walking difficulties, muscle weakness, balance problems, or those recovering from selected injuries, surgeries, or neurological conditions. Treatment usually begins at a comfortable level and is gradually progressed as strength, confidence, and walking ability improve."
    ],
    safetyNote: 'Treatment is selected based on individual assessment and may not be suitable for everyone.',
    iconType: 'Footprints'
  },
  {
    id: 'elliptical-cycling',
    number: '02',
    name: 'Elliptical Cycling',
    category: 'Rehabilitation Equipment',
    image: '/elliptical_cycling.png',
    shortDescription: 'Smooth, low-impact exercise for improving strength, stamina, and coordination.',
    paragraphs: [
      "Elliptical cycling provides a smooth, continuous movement pattern that combines lower-limb exercise with gentle cardiovascular conditioning. It allows patients to work on stamina, leg strength, and movement coordination while minimizing excessive joint impact.",
      "During a session, you stand on the pedals and move your legs through a continuous gliding motion. The physiotherapist monitors your posture, movement quality, and breathing, adjusting the resistance and session duration based on your exercise tolerance.",
      "This low-impact exercise can support individuals rebuilding general conditioning, recovering from selected joint or muscle injuries, or transitioning back to active daily routines. Workouts begin with comfortable resistance and are progressed gradually as endurance and strength improve."
    ],
    safetyNote: 'Treatment is selected based on individual assessment and may not be suitable for everyone.',
    iconType: 'RotateCcw'
  },
  {
    id: 'harness-standing',
    number: '03',
    name: 'Harness Standing',
    category: 'Rehabilitation Equipment',
    image: '/harness_standing.png',
    shortDescription: 'Supported standing practice for people who need additional assistance with balance and weight-bearing.',
    paragraphs: [
      "Harness standing provides structured body-weight support for patients who are working to regain standing balance, weight-bearing ability, and upright stability. By safely offloading a portion of the body weight, it allows patients to practice upright posture and stepping with confidence.",
      "During the session, the patient is secured comfortably into a clinical support harness. Under the close guidance of the physiotherapist, you practice maintaining posture, shifting weight between legs, and initiating stepping movements in a safe environment.",
      "This supported training is particularly valuable for individuals recovering from neurological conditions, severe lower-limb weakness, balance impairments, or extended periods of bed rest. The level of body-weight support is adjusted continuously and gradually reduced as standing tolerance and independent control improve."
    ],
    safetyNote: 'Treatment is selected based on individual clinical assessment and may not be suitable for everyone.',
    iconType: 'ShieldCheck'
  },
  {
    id: 'multistation-gym',
    number: '04',
    name: 'Multistation Gym',
    category: 'Exercise & Strength',
    image: '/multistation_gym.png',
    shortDescription: 'Controlled strengthening exercises for different muscle groups.',
    paragraphs: [
      "A multistation gym provides dedicated resistance-based exercise stations designed to strengthen specific muscle groups throughout the body. It allows physiotherapists to prescribe targeted, progressive resistance training to rebuild functional capacity and joint stability.",
      "During treatment, the physiotherapist selects appropriate exercise stations and calibrates the resistance loads according to your current strength and movement goals. You perform controlled repetitions with an emphasis on proper alignment, tempo, and safe mechanics.",
      "Targeted resistance exercise can benefit individuals recovering from orthopedic injuries, joint surgeries, muscular imbalances, or general physical deconditioning. Exercise loads and repetitions are progressively adjusted over time to support ongoing strength and everyday function."
    ],
    safetyNote: 'Treatment is selected based on individual assessment and may not be suitable for everyone.',
    iconType: 'Dumbbell'
  },
  {
    id: 'cpm-machine',
    number: '05',
    name: 'CPM — Continuous Passive Motion',
    category: 'Rehabilitation Equipment',
    image: '/cpm_machine.png',
    shortDescription: 'Gentle machine-assisted joint movement during selected recovery programs.',
    paragraphs: [
      "Continuous Passive Motion (CPM) is a specialized motorized device that gently and repeatedly moves a joint through a controlled range of motion without requiring active muscle effort from the patient. It helps maintain joint mobility and manage stiffness during early recovery stages.",
      "During the session, your limb is positioned comfortably and securely within the padded cradle of the CPM device. The physiotherapist programs the exact range of motion, movement speed, and duration according to surgical protocols and tissue tolerance.",
      "CPM may be recommended for selected patients recovering from joint surgeries, knee or shoulder procedures, or conditions where early, gentle passive movement is clinically indicated. Movement angles are increased gradually across visits as joint healing and comfort progress."
    ],
    safetyNote: 'CPM therapy requires individualized clinical evaluation and physician guidance following surgical procedures.',
    iconType: 'RotateCcw'
  },
  {
    id: 'steam-bath',
    number: '06',
    name: 'Steam Bath',
    category: 'Pain & Comfort',
    image: '/steam_bath.png',
    shortDescription: 'Warm, humid therapy designed to support relaxation and temporary comfort from stiffness.',
    paragraphs: [
      "Steam therapy exposes the body to a controlled, warm, and humid environment designed to encourage muscular relaxation and ease generalized stiffness. It is utilized as a soothing preparatory modality before targeted stretching, joint mobility work, or guided exercises.",
      "During treatment, you spend a carefully monitored period in the thermal chamber following strict clinic safety protocols. The warmth helps promote circulation and ease tension across tight muscle groups, preparing your tissues for movement.",
      "Steam exposure may be included for selected individuals experiencing generalized muscular tightness or stiffness when thermal therapy is clinically appropriate. Following the session, patients cool down gradually and transition into prescribed rehabilitation exercises."
    ],
    safetyNote: 'Steam therapy requires prior health screening and is not suitable for individuals with certain cardiovascular, respiratory, blood-pressure, skin, or heat-sensitive conditions.',
    iconType: 'Wind'
  },
  {
    id: 'fire-cupping',
    number: '07',
    name: 'Fire Cupping',
    category: 'Supportive Techniques',
    image: '/fire_cupping.png',
    shortDescription: 'A traditional suction-based technique used as a complementary treatment for selected muscle discomfort.',
    paragraphs: [
      "Fire cupping is a traditional suction-based soft tissue technique used alongside modern physiotherapy to address localized muscular tension, myofascial tightness, and regional discomfort. It creates a gentle negative pressure that lifts the skin and superficial tissue layers.",
      "During the procedure, a trained clinician uses a brief heating method to create suction inside sterile glass cups before placing them over specific anatomical areas. The cups remain in place for a controlled duration while your comfort and tissue response are monitored.",
      "Cupping may be incorporated as a supportive modality for patients with persistent muscle tightness, postural strain, or myofascial restrictions. Patients typically feel a pulling sensation during application, and temporary circular marks or skin discoloration may remain for several days."
    ],
    safetyNote: 'Cupping is used selectively following screening and is not appropriate for fragile skin, open wounds, bleeding disorders, or certain vascular conditions.',
    iconType: 'Flame'
  },
  {
    id: 'kinesiology-taping',
    number: '08',
    name: 'Kinesiology Taping',
    category: 'Supportive Techniques',
    image: '/kinesiology_taping.png',
    shortDescription: 'Flexible therapeutic tape used to provide support during movement.',
    paragraphs: [
      "Kinesiology taping involves the application of specialized elastic therapeutic tape to provide light external support, sensory feedback, and movement awareness without restricting normal joint range of motion. It moves naturally with your skin to support active rehabilitation.",
      "The physiotherapist applies the tape in specific directional patterns and tension levels based on your anatomical needs, joint mechanics, and movement goals. The elastic properties of the tape provide continuous proprioceptive feedback during daily activities and exercises.",
      "Taping is often utilized for athletes, individuals recovering from sports injuries, postural fatigue, or joint instability. The lightweight tape is water-resistant and can typically be worn for several days while you participate in your regular rehabilitation routine."
    ],
    safetyNote: 'Taping is applied after evaluating skin sensitivity and is not suitable for individuals with active adhesive allergies or compromised skin integrity.',
    iconType: 'Layers'
  },
  {
    id: 'quadriceps-table',
    number: '09',
    name: 'Quadriceps Table',
    category: 'Exercise & Strength',
    image: '/quadriceps_table.png',
    shortDescription: 'Targeted exercise equipment for strengthening the front thigh muscles.',
    paragraphs: [
      "The quadriceps table is a dedicated clinical exercise station designed to isolate and strengthen the muscles at the front of the thigh. Because the quadriceps play a vital role in knee stability, walking, stair climbing, and standing up, targeted conditioning is central to lower-limb recovery.",
      "During treatment, you sit comfortably with back support while performing controlled knee extension and lowering movements against calibrated resistance. The physiotherapist monitors your knee tracking, effort levels, and movement range to ensure safe joint loading.",
      "This exercise equipment is particularly beneficial for individuals recovering from knee injuries, ligament reconstructions, patellofemoral issues, or general quadriceps weakness. Resistance and exercise volume are progressed systematically as muscle strength and joint tolerance build."
    ],
    safetyNote: 'Exercise loads and movement ranges are individually calibrated to ensure safe joint mechanics and prevent patellofemoral strain.',
    iconType: 'Activity'
  },
  {
    id: 'balance-board',
    number: '10',
    name: 'Balance Board',
    category: 'Exercise & Strength',
    image: '/balance_board.png',
    shortDescription: 'Balance exercises to improve stability, coordination, and body control.',
    paragraphs: [
      "Balance board training utilizes dynamic, unstable surfaces to challenge your body's equilibrium, proprioception, and neuromuscular coordination. It helps train the subtle stabilizing muscles that support the ankles, knees, hips, and core during everyday movement.",
      "During the session, you stand on the wobble platform while maintaining steady posture and practicing controlled weight shifts. The physiotherapist remains beside you, introducing balance drills, multi-directional tilts, or functional movement tasks tailored to your ability.",
      "This training is commonly recommended for people recovering from ankle sprains, sports injuries, knee instability, or balance difficulties. Exercises begin with stable hand support and advance to single-leg balance and dynamic challenges as coordination and confidence improve."
    ],
    safetyNote: 'Balance training is individually supervised and adapted to prevent fall risk in patients with significant balance impairments.',
    iconType: 'Compass'
  },
  {
    id: 'parallel-bar-training',
    number: '11',
    name: 'Parallel Bar Training',
    category: 'Rehabilitation Equipment',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Supported standing and walking practice for safer movement.',
    paragraphs: [
      "Parallel bars provide a secure, bilateral support structure for patients who require maximum stability while learning or relearning standing, weight shifting, and walking skills. The solid handrails create a reassuring environment for early mobility practice.",
      "During the session, you stand between the parallel bars and practice posture alignment, weight transfer from foot to foot, step initiation, and walking under close therapist guidance. The clinician observes your gait pattern and provides immediate corrective feedback.",
      "Parallel bar training is widely used for individuals recovering from neurological conditions, joint replacement surgeries, severe lower-limb injuries, or significant muscle weakness. As stepping stability and confidence increase, support is gradually reduced to prepare you for independent walking aids."
    ],
    safetyNote: 'Gait retraining is closely guided by the physiotherapist based on individual weight-bearing precautions and safety guidelines.',
    iconType: 'MoveHorizontal'
  },
  {
    id: 'swiss-ball-training',
    number: '12',
    name: 'Swiss Ball Training',
    category: 'Exercise & Strength',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Exercise-ball training for core strength, balance, flexibility, and coordination.',
    paragraphs: [
      "Swiss ball training uses large therapeutic exercise balls to create dynamic instability during guided core, balance, and mobility exercises. The ball encourages continuous engagement of deep postural and stabilizing muscles while supporting functional movement.",
      "During a session, you may sit, lie, or brace against the ball while performing controlled pelvic tilts, core stabilization exercises, limb movements, or gentle stretches. The physiotherapist selects exercises that challenge your balance and strength safely.",
      "Swiss ball exercises can benefit patients in orthopedic, sports, neurological, and general postural rehabilitation programs. Exercises start with basic seated stability holds and advance to dynamic core strengthening as muscle control and coordination develop."
    ],
    safetyNote: "Exercise difficulty and ball size are matched to the patient's height, strength, and balance capabilities.",
    iconType: 'SlidersHorizontal'
  },
  {
    id: 'electrotherapy',
    number: '13',
    name: 'Electrotherapy',
    category: 'Pain & Comfort',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Controlled electrical stimulation used in selected physiotherapy programs.',
    paragraphs: [
      "Electrotherapy delivers controlled, therapeutic electrical stimulation through surface electrodes placed on the skin. Depending on the specific frequency and waveform chosen, it can support pain-management pathways or encourage muscle activation during rehabilitation.",
      "During treatment, conductive electrode pads are positioned over selected muscle or nerve areas. The physiotherapist adjusts the intensity and pulse settings to produce a comfortable tingling sensation or gentle, rhythmic muscle contractions while you rest comfortably.",
      "Electrotherapy may be included as a supportive modality for patients managing acute or chronic musculoskeletal pain, joint discomfort, muscle inhibition, or post-surgical weakness. It is commonly used alongside active exercise and hands-on therapy to support recovery."
    ],
    safetyNote: 'Electrotherapy requires clinical screening and is not suitable for individuals with cardiac pacemakers, implanted electronic devices, active pregnancy, or impaired skin sensation in the treatment area.',
    iconType: 'Zap'
  },
  {
    id: 'thermotherapy',
    number: '14',
    name: 'Thermotherapy',
    category: 'Pain & Comfort',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Controlled warmth used to support comfort, relaxation, and movement.',
    paragraphs: [
      "Thermotherapy uses controlled, therapeutic heat application to promote localized circulation, encourage muscle relaxation, and ease stiffness in joint and soft tissue structures. It is commonly applied before exercise or manual therapy to prepare the body for movement.",
      "During treatment, a specialized moist heat pack or therapeutic warming modality is wrapped in protective layers and applied to the targeted area. The physiotherapist monitors your comfort and skin temperature throughout the session to ensure safe, gentle warming.",
      "Heat therapy can support individuals experiencing muscular tightness, joint stiffness, or chronic aches when thermal application is clinically appropriate. Following the session, the relaxed tissues are more receptive to stretching, mobility exercises, and guided movement."
    ],
    safetyNote: 'Heat therapy is carefully monitored and is not appropriate for acute injuries with active inflammation, open wounds, or areas with impaired temperature sensation.',
    iconType: 'Sun'
  },
  {
    id: 'cryotherapy',
    number: '15',
    name: 'Cryotherapy',
    category: 'Pain & Comfort',
    image: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Controlled cold treatment used for temporary pain relief and swelling management.',
    paragraphs: [
      "Cryotherapy involves the targeted application of controlled cold to help manage localized pain, ease inflammation, and support tissue recovery following acute injuries or intensive rehabilitation exercises.",
      "During the session, a clinical cold pack or specialized cooling compress is applied over a protective skin barrier to the affected area. The treatment provides a cooling sensation that temporarily numbs nerve endings and helps manage localized swelling.",
      "Cold therapy may be recommended for patients with acute ligament sprains, muscle strains, post-exercise soreness, or post-surgical joint swelling. The duration is carefully timed to maximize comfort and therapeutic benefit while protecting the skin."
    ],
    safetyNote: "Cold therapy is time-controlled and requires caution in individuals with cold sensitivity, Raynaud's phenomenon, poor peripheral circulation, or impaired sensation.",
    iconType: 'Snowflake'
  },
  {
    id: 'dry-needling',
    number: '16',
    name: 'Dry Needling',
    category: 'Supportive Techniques',
    image: 'https://images.unsplash.com/photo-1512290900672-1f023922df37?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'A targeted technique using thin sterile needles for selected muscle-related pain and tightness.',
    paragraphs: [
      "Dry needling is a targeted clinical technique that uses very fine, sterile filiform needles inserted into specific muscular trigger points and tight bands of tissue. It is designed to stimulate muscular release, reduce localized tension, and support comfortable movement.",
      "A specially trained clinician palpates the treatment area to identify taut muscular bands before carefully inserting the sterile needle using precise anatomical technique. Patients may experience a brief prick sensation or a mild, localized muscle twitch as the trigger point releases.",
      "Dry needling may be included as part of a comprehensive rehabilitation plan for individuals with stubborn muscle knots, myofascial pain, tendon overload, or movement restrictions. It is followed by gentle stretching and movement to optimize muscle recovery."
    ],
    safetyNote: 'Dry needling is performed only after comprehensive clinical screening and informed consent; it is not suitable for individuals with bleeding disorders, needle phobia, active skin infections, or certain medical conditions.',
    iconType: 'Crosshair'
  },
  {
    id: 'traction-therapy',
    number: '17',
    name: 'Traction Therapy',
    category: 'Supportive Techniques',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Controlled spinal stretching used for selected neck and back conditions.',
    paragraphs: [
      "Traction therapy utilizes computerized, controlled pulling forces to gently decompress and unload specific segments of the cervical (neck) or lumbar (lower back) spine. It is designed to reduce compressive pressure on spinal discs, joints, and irritated nerve roots.",
      "During treatment, you lie comfortably on a specialized traction table secured with supportive harness belts. The physiotherapist programs the precise distraction force, hold-rest cycles, and pull angle based on your spinal assessment while monitoring your comfort.",
      "Spinal traction may be considered for selected patients experiencing radiating nerve pain, disc compression, or persistent spinal stiffness when mechanical unloading is clinically indicated. Treatment parameters are adjusted continuously to ensure comfortable, symptom-relieving distraction."
    ],
    safetyNote: 'Traction therapy requires thorough spinal and neurological assessment and is contraindicated in severe osteoporosis, spinal instability, fractures, malignancy, or acute cord compression.',
    iconType: 'Split'
  },
  {
    id: 'vibration-plate',
    number: '18',
    name: 'Vibration Plate',
    category: 'Exercise & Strength',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    shortDescription: 'Controlled vibration used during selected strengthening and balance exercises.',
    paragraphs: [
      "Vibration plate training utilizes a platform that generates controlled mechanical oscillations to stimulate rapid muscle contractions, enhance sensory input, and challenge postural stability. It can be integrated into exercise programs to boost muscle activation and body awareness.",
      "During the session, you stand or perform guided therapeutic exercises on the vibration platform while the physiotherapist adjusts the frequency and amplitude. The rapid micro-movements stimulate reflex muscle activity and proprioceptive pathways.",
      "Vibration training can support patients working on lower-limb muscle activation, balance stability, bone density support, and functional conditioning. Sessions are structured in short, supervised intervals matched to your strength and joint tolerance."
    ],
    safetyNote: 'Vibration training is prescribed selectively and requires clearance for individuals with joint replacements, acute spinal conditions, retinal detachment risks, or certain cardiovascular disorders.',
    iconType: 'Activity'
  }
];

export const getEquipmentById = (id: string): EquipmentItem | undefined => {
  return CLINIC_EQUIPMENT.find(item => item.id === id);
};
