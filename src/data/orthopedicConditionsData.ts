export interface OrthopedicConditionItem {
  id: string;
  number: string;
  title: string;
  bodyArea: 'Spine & Back' | 'Upper Body' | 'Lower Body' | 'Joints & Mobility' | 'Injuries & Recovery' | 'Surgical & Fractures';
  tagline: string;
  understanding: string;
  howWeHelp: string;
  yourRecovery: string;
  flowSteps: string[];
}

export const ORTHOPEDIC_CONDITIONS_DATA: OrthopedicConditionItem[] = [
  {
    id: 'back-pain',
    number: '01',
    title: 'Back Pain',
    bodyArea: 'Spine & Back',
    tagline: 'Move better. Feel stronger. Get back to your routine.',
    understanding: 'Back pain can happen because of muscle strain, poor posture, long hours of sitting, weakness, or problems with the spine. It can make sitting, standing, walking, or sleeping uncomfortable.',
    howWeHelp: 'We first understand where your pain is and what movements make it worse. Treatment may include gentle exercises, stretching, hands-on therapy, posture correction, and exercises to strengthen your back and stomach muscles.',
    yourRecovery: 'To reduce your pain, improve your movement and strength, and help you get back to your normal daily activities.',
    flowSteps: ['Pain Management', 'Movement', 'Strength', 'Function', 'Confidence']
  },
  {
    id: 'neck-pain',
    number: '02',
    title: 'Neck Pain',
    bodyArea: 'Spine & Back',
    tagline: 'Relieve stiffness. Restore ease. Move your head comfortably.',
    understanding: 'Neck pain can cause stiffness, muscle tightness, headaches, or difficulty turning your head. It can happen because of poor posture, long hours on a computer or phone, or muscle strain.',
    howWeHelp: 'We check your neck movement, posture, and muscle strength. Treatment may include gentle neck exercises, stretching, hands-on treatment, strengthening exercises, and advice on better sitting and working positions.',
    yourRecovery: 'To reduce pain and stiffness and help you move your neck comfortably again.',
    flowSteps: ['Pain Relief', 'Mobility', 'Posture Support', 'Strength', 'Comfort']
  },
  {
    id: 'knee-pain',
    number: '03',
    title: 'Knee Pain',
    bodyArea: 'Lower Body',
    tagline: 'Step confidently. Build joint stability. Walk without pain.',
    understanding: 'Knee pain can happen because of arthritis, injury, muscle weakness, overuse, or changes in the way you walk or move. It may make walking, climbing stairs, sitting, or standing difficult.',
    howWeHelp: 'We check your knee movement, leg strength, balance, and walking. Treatment may include exercises to strengthen your thigh and hip muscles, improve flexibility, balance, and knee movement.',
    yourRecovery: 'To reduce pain, make your knee stronger and more stable, and help you move comfortably.',
    flowSteps: ['Relief', 'Joint Mobility', 'Leg Strength', 'Balance', 'Active Living']
  },
  {
    id: 'shoulder-pain',
    number: '04',
    title: 'Shoulder Pain',
    bodyArea: 'Upper Body',
    tagline: 'Reach higher. Lift with ease. Sleep soundly through the night.',
    understanding: 'Shoulder pain can make it difficult to lift your arm, reach overhead, dress yourself, or sleep comfortably. It can happen because of injury, muscle problems, stiffness, or repeated movements.',
    howWeHelp: 'We check how much you can move your shoulder and how strong the muscles are. Treatment may include gentle movements, stretching, strengthening exercises, and hands-on treatment.',
    yourRecovery: 'To reduce pain and help you move and use your shoulder normally again.',
    flowSteps: ['Pain Easing', 'Gentle Motion', 'Muscle Strength', 'Functional Reach', 'Freedom']
  },
  {
    id: 'frozen-shoulder',
    number: '05',
    title: 'Frozen Shoulder',
    bodyArea: 'Upper Body',
    tagline: 'Gradually unfreeze. Regain range. Reclaim everyday movement.',
    understanding: 'Frozen shoulder causes pain and stiffness in the shoulder. Simple movements like reaching overhead, wearing clothes, or reaching behind your back can become difficult.',
    howWeHelp: 'We gently work on improving your shoulder movement. Treatment may include stretching, gentle movement exercises, hands-on treatment, and strengthening exercises as your shoulder improves.',
    yourRecovery: 'To gradually reduce stiffness and pain and help you regain comfortable shoulder movement.',
    flowSteps: ['Symptom Relief', 'Progressive Range', 'Hands-on Therapy', 'Strengthening', 'Full Recovery']
  },
  {
    id: 'arthritis',
    number: '06',
    title: 'Arthritis',
    bodyArea: 'Joints & Mobility',
    tagline: 'Keep joints moving. Preserve flexibility. Stay active every day.',
    understanding: 'Arthritis can cause pain, stiffness, and difficulty moving your joints. It can affect the knees, hips, hands, shoulders, and other joints.',
    howWeHelp: 'We check your joint movement, strength, flexibility, and daily activities. Treatment may include gentle exercises, strengthening, stretching, balance exercises, and activities that keep your joints moving.',
    yourRecovery: 'To manage pain, keep your joints moving, improve strength, and help you stay active.',
    flowSteps: ['Joint Comfort', 'Flexibility', 'Muscle Support', 'Daily Activity', 'Long-term Health']
  },
  {
    id: 'osteoarthritis',
    number: '07',
    title: 'Osteoarthritis',
    bodyArea: 'Joints & Mobility',
    tagline: 'Cushion your joints. Boost muscular support. Make walking easy.',
    understanding: 'Osteoarthritis is a common joint problem that can cause pain, stiffness, and difficulty moving. It commonly affects the knees and hips.',
    howWeHelp: 'We check your joint movement, muscle strength, walking, and daily activities. Treatment may include strengthening exercises, stretching, gentle joint movements, walking exercises, and balance training.',
    yourRecovery: 'To reduce discomfort, keep your joints moving, improve strength, and make daily activities easier.',
    flowSteps: ['Discomfort Relief', 'Range Maintenance', 'Muscle Support', 'Gait Training', 'Smooth Movement']
  },
  {
    id: 'sciatica',
    number: '08',
    title: 'Sciatica',
    bodyArea: 'Spine & Back',
    tagline: 'Calm nerve irritation. Restore leg comfort. Walk freely.',
    understanding: 'Sciatica can cause pain, tingling, numbness, or weakness that travels from your lower back into your buttock or leg.',
    howWeHelp: 'We check your back movement, leg strength, flexibility, and the way your symptoms change with different movements. Treatment may include specific exercises, stretching, strengthening, and guidance on how to move safely.',
    yourRecovery: 'To reduce your symptoms, improve movement, and help you return to your normal activities.',
    flowSteps: ['Nerve Calming', 'Spinal Mobility', 'Decompression', 'Leg Strength', 'Normal Routine']
  },
  {
    id: 'slip-disc',
    number: '09',
    title: 'Slip Disc / Disc Problems',
    bodyArea: 'Spine & Back',
    tagline: 'Protect your spine. Ease nerve pressure. Rebuild core stability.',
    understanding: 'Problems with the soft cushions between the bones of your spine can cause back or neck pain. Sometimes the pain may also travel into your arm or leg.',
    howWeHelp: 'We understand your symptoms and check your movement, strength, and flexibility. Treatment may include specific exercises, gentle movement, strengthening, posture correction, and advice on daily activities.',
    yourRecovery: 'To reduce discomfort, improve movement and strength, and help you safely return to everyday activities.',
    flowSteps: ['Symptom Control', 'Spine Decompression', 'Core Activation', 'Safe Movement', 'Resilience']
  },
  {
    id: 'tennis-elbow',
    number: '10',
    title: 'Tennis Elbow',
    bodyArea: 'Upper Body',
    tagline: 'Grip without strain. Relieve forearm pain. Return to work and play.',
    understanding: 'Tennis elbow causes pain on the outside of the elbow. It can make gripping, lifting, typing, or repeated hand movements uncomfortable.',
    howWeHelp: 'We check your elbow and wrist movement and grip strength. Treatment may include stretching, gentle movement, forearm strengthening, grip exercises, and advice on reducing activities that put extra stress on the elbow.',
    yourRecovery: 'To reduce pain and gradually make your arm strong enough for normal activities.',
    flowSteps: ['Pain Relief', 'Tendon Healing', 'Grip Strengthening', 'Forearm Power', 'Pain-Free Function']
  },
  {
    id: 'golfers-elbow',
    number: '11',
    title: "Golfer's Elbow",
    bodyArea: 'Upper Body',
    tagline: 'Soothe inner elbow pain. Restore forearm power. Move with confidence.',
    understanding: "Golfer's elbow causes pain on the inside of the elbow. It can happen from repeated gripping, lifting, or wrist movements.",
    howWeHelp: 'We check your elbow, wrist, and grip strength. Treatment may include stretching, strengthening exercises, grip exercises, and guidance on changing activities that are causing extra stress.',
    yourRecovery: 'To reduce pain and restore strength and comfortable movement in your arm.',
    flowSteps: ['Comfort', 'Targeted Stretch', 'Grip Resistance', 'Wrist Stability', 'Full Activity']
  },
  {
    id: 'hip-pain',
    number: '12',
    title: 'Hip Pain',
    bodyArea: 'Lower Body',
    tagline: 'Improve hip flexibility. Walk with ease. Climb stairs comfortably.',
    understanding: 'Hip pain can make walking, climbing stairs, sitting, standing, or moving your leg difficult. It can be caused by joint problems, arthritis, muscle weakness, or injury.',
    howWeHelp: 'We check your hip movement, strength, flexibility, balance, and walking. Treatment may include stretching, hip strengthening, balance exercises, and movement training.',
    yourRecovery: 'To reduce pain, improve hip strength and movement, and make everyday activities easier.',
    flowSteps: ['Pain Reduction', 'Joint Mobility', 'Glute Strength', 'Walking Mechanics', 'Confident Steps']
  },
  {
    id: 'ankle-pain',
    number: '13',
    title: 'Ankle Pain',
    bodyArea: 'Lower Body',
    tagline: 'Step on solid ground. Strengthen your ankle. Walk with balance.',
    understanding: 'Ankle pain can happen after a sprain, injury, overuse, or because of weakness or stiffness. It may make walking and balancing difficult.',
    howWeHelp: 'We check your ankle movement, strength, balance, and walking. Treatment may include movement exercises, stretching, strengthening, balance exercises, and walking practice.',
    yourRecovery: 'To make your ankle stronger and more stable and help you walk and move confidently.',
    flowSteps: ['Swelling Control', 'Mobility Drills', 'Ligament Strength', 'Balance Training', 'Stable Gait']
  },
  {
    id: 'wrist-pain',
    number: '14',
    title: 'Wrist Pain',
    bodyArea: 'Upper Body',
    tagline: 'Type, write, and hold without pain. Restore hand dexterity.',
    understanding: 'Wrist pain can happen because of an injury, repeated movements, muscle or tendon problems, or joint issues. It may make typing, writing, lifting, or gripping difficult.',
    howWeHelp: 'We check your wrist movement and grip strength. Treatment may include gentle movements, stretching, strengthening, grip exercises, and advice on reducing activities that are causing strain.',
    yourRecovery: 'To reduce pain and help you regain normal wrist movement and strength.',
    flowSteps: ['Symptom Relief', 'Joint Mobilization', 'Hand Strength', 'Ergonomic Setup', 'Effortless Tasks']
  },
  {
    id: 'muscle-strain',
    number: '15',
    title: 'Muscle Strain',
    bodyArea: 'Injuries & Recovery',
    tagline: 'Help torn fibers heal. Rebuild elasticity. Prevent re-injury.',
    understanding: 'A muscle strain happens when a muscle is stretched or injured. It can cause pain, tenderness, weakness, and difficulty moving.',
    howWeHelp: 'We first check the injured muscle and how much you can move it comfortably. As it heals, we gradually introduce movement, stretching, strengthening, and exercises that prepare you to return to your normal activities.',
    yourRecovery: 'To help the muscle heal properly, regain strength, and safely return to your daily activities or sport.',
    flowSteps: ['Gentle Protection', 'Safe Movement', 'Progressive Loading', 'Power Recovery', 'Sport / Daily Return']
  },
  {
    id: 'ligament-sprain',
    number: '16',
    title: 'Ligament Sprain',
    bodyArea: 'Injuries & Recovery',
    tagline: 'Stabilize your joints. Regain ligament integrity. Move safely.',
    understanding: 'A sprain happens when a ligament around a joint is stretched or injured. It commonly affects the ankle, knee, or wrist.',
    howWeHelp: 'We check the pain, swelling, movement, strength, and stability of the joint. Treatment may include movement exercises, strengthening, balance exercises, and activities that gradually make the joint stronger and more stable.',
    yourRecovery: 'To restore strength and stability and reduce the chance of the injury happening again.',
    flowSteps: ['Joint Protection', 'Range Restoration', 'Muscle Bracing', 'Proprioception', 'Solid Joint']
  },
  {
    id: 'tendon-problems',
    number: '17',
    title: 'Tendon Problems',
    bodyArea: 'Injuries & Recovery',
    tagline: 'Strengthen tendon fibers. Relieve irritation. Move smoothly.',
    understanding: 'Tendons connect your muscles to your bones. Repeated use or injury can cause tendon pain and make certain movements difficult.',
    howWeHelp: 'We identify which movements are causing the problem and check your strength and movement. Treatment usually includes gentle and progressive strengthening exercises, stretching, movement correction, and advice on managing activities.',
    yourRecovery: 'To gradually make the tendon stronger and help you return to your normal activities without unnecessary pain.',
    flowSteps: ['Load Management', 'Isometric Control', 'Eccentric Strength', 'Kinetic Alignment', 'Resilience']
  },
  {
    id: 'joint-stiffness',
    number: '18',
    title: 'Joint Stiffness',
    bodyArea: 'Joints & Mobility',
    tagline: 'Release tightness. Lubricate movement. Regain joint freedom.',
    understanding: 'A joint can become stiff after an injury, surgery, arthritis, or a long period without movement. This can make everyday movements difficult.',
    howWeHelp: 'We check how much the joint can move and what is causing the stiffness. Treatment may include gentle movement exercises, stretching, hands-on treatment, and strengthening.',
    yourRecovery: 'To gradually improve movement and make everyday activities more comfortable.',
    flowSteps: ['Manual Mobilization', 'Gentle Stretches', 'Active Motion', 'Strengthening', 'Fluid Movement']
  },
  {
    id: 'post-fracture-rehab',
    number: '19',
    title: 'Post-Fracture Rehabilitation',
    bodyArea: 'Surgical & Fractures',
    tagline: 'Reawaken bone and muscle strength after cast removal.',
    understanding: 'After a bone fracture heals, you may still have stiffness, weakness, difficulty walking, or trouble using the affected body part.',
    howWeHelp: 'Once your doctor has cleared you for rehabilitation, we gradually work on movement, strength, balance, and normal use of the affected area. Exercises are increased slowly as you become stronger.',
    yourRecovery: 'To help you regain movement, strength, balance, and confidence after your fracture.',
    flowSteps: ['Post-Cast Mobilization', 'Gentle Load Bearing', 'Muscle Rebuilding', 'Coordination', 'Confident Use']
  },
  {
    id: 'post-surgical-rehab',
    number: '20',
    title: 'Post-Surgical Rehabilitation',
    bodyArea: 'Surgical & Fractures',
    tagline: 'Guided step-by-step recovery for a safe, strong surgical outcome.',
    understanding: 'After surgery, it is common to have pain, stiffness, weakness, or difficulty moving. Physiotherapy helps you safely regain your movement and strength.',
    howWeHelp: 'Your treatment is planned according to your surgery and recovery stage. It may include gentle movement, exercises to reduce stiffness, strengthening, balance training, walking practice, and functional exercises.',
    yourRecovery: 'To help you safely regain movement, strength, and independence.',
    flowSteps: ['Gentle Activation', 'Swelling Control', 'Phased Strengthening', 'Functional Training', 'Independence']
  },
  {
    id: 'joint-replacement-rehab',
    number: '21',
    title: 'Joint Replacement Rehabilitation',
    bodyArea: 'Surgical & Fractures',
    tagline: 'Maximize your new knee or hip with specialized gait training.',
    understanding: 'After a knee, hip, or other joint replacement, you may need help regaining movement, strength, balance, and walking ability.',
    howWeHelp: 'We gradually work on joint movement, muscle strength, walking, balance, and everyday activities. Your exercises are increased step by step as your body becomes stronger.',
    yourRecovery: 'To help you walk confidently, become more independent, and return to your daily routine.',
    flowSteps: ['Early Motion', 'Gait Re-education', 'Muscle Strengthening', 'Stairs & Walking', 'Full Routine']
  },
  {
    id: 'posture-related-problems',
    number: '22',
    title: 'Posture-Related Problems',
    bodyArea: 'Spine & Back',
    tagline: 'Align your spine. Eliminate desk strain. Sit and stand tall.',
    understanding: 'Poor sitting, standing, or working posture can put extra stress on your neck, back, and muscles. Over time, this may contribute to pain and stiffness.',
    howWeHelp: 'We look at how you sit, stand, work, and move. Treatment may include posture exercises, stretching, strengthening, and simple changes to your daily habits and workspace.',
    yourRecovery: 'To improve your posture, reduce unnecessary strain, and help you move more comfortably.',
    flowSteps: ['Ergonomic Check', 'Muscle Awareness', 'Core Support', 'Habit Re-training', 'Effortless Posture']
  },
  {
    id: 'muscle-weakness',
    number: '23',
    title: 'Muscle Weakness',
    bodyArea: 'Injuries & Recovery',
    tagline: 'Rebuild stamina. Restore power. Carry out daily tasks with vigor.',
    understanding: 'Muscles can become weak after an injury, surgery, illness, prolonged rest, or lack of physical activity. Weakness can affect walking, balance, lifting, and everyday activities.',
    howWeHelp: 'We first check your current strength and ability. We then create exercises that start at a comfortable level and gradually become more challenging as you get stronger.',
    yourRecovery: 'To rebuild strength, improve balance and movement, and help you perform everyday activities with greater confidence.',
    flowSteps: ['Strength Assessment', 'Comfortable Start', 'Progressive Challenge', 'Balance Gains', 'Everyday Power']
  }
];
