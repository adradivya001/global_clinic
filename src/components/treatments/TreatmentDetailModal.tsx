import React from 'react';
import { X, ArrowRight, CheckCircle2, Phone, Calendar, Sparkles, Activity, ShieldCheck, Cpu } from 'lucide-react';
import { CLINIC_INFO } from '../../data/clinicData';
import tritonTableImg from '../../assets/triton_dts_table.png';
import bosuBallImg from '../../assets/bosu_ball.png';
import kinetecCpmImg from '../../assets/kinetec_cpm.png';
import ultracareProImg from '../../assets/ultracare_pro.png';
import biodexGaitTrainerImg from '../../assets/biodex_gait_trainer.png';
import medicalLegPressImg from '../../assets/medical_leg_press.png';

export interface TreatmentDetailData {
  number: string;
  category: string;
  title: string;
  tagline: string;
  overview: string;
  image: string;
  keyEquipment?: string;
  equipmentDesc?: string;
  conditionsTreated: string[];
  protocolSteps: { title: string; desc: string }[];
  clinicalOutcomes: string[];
}

export const TREATMENT_DETAILS: Record<string, TreatmentDetailData> = {
  '01': {
    number: '01',
    category: 'JOINT & SPINE CARE',
    title: 'Ortho Conditions',
    tagline: 'Computerized Spinal Decompression, Joint Alignment & Musculoskeletal Recovery',
    overview:
      'Comprehensive physical rehabilitation for bone, joint, ligament, and spinal disorders. We treat acute disc bulges, osteoarthritis, frozen shoulder, fractures, and postural back pain at their root cause.',
    image: tritonTableImg,
    keyEquipment: 'Chattanooga Triton DTS Traction & Quadriceps Table',
    equipmentDesc:
      'Computerized spinal traction system delivering gentle, non-surgical axial decompression combined with isolation quad reconditioning to relieve disc compression and restore joint glide.',
    conditionsTreated: [
      'Cervical & Lumbar Disc Herniation / Sciatica',
      'Knee & Hip Osteoarthritis',
      'Frozen Shoulder & Rotator Cuff Tendinopathy',
      'Cervical Spondylosis & Chronic Neck Stiffness',
      'Post-Fracture Stiffness & Joint Contractures',
      'Ankylosing Spondylitis & Facet Syndrome',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Biomechanical Spine & Joint Evaluation',
        desc: 'Comprehensive orthopedic screening, postural analysis, and neurological root assessment to identify the primary pain generator.',
      },
      {
        title: 'Phase 2: Targeted Decompression & Mobilisation',
        desc: 'Computerized Triton DTS decompression and Mulligan/Maitland manual joint mobilisations to restore intervertebral spacing and ease nerve impingement.',
      },
      {
        title: 'Phase 3: Soft-Tissue & Electrotherapy Pain Relief',
        desc: 'Deep myofascial release, trigger point deactivation, and electrotherapy (IFT/TENS) to alleviate compensatory muscle spasms.',
      },
      {
        title: 'Phase 4: Kinetic Strengthening & Postural Retraining',
        desc: 'Progressive quadriceps table loading, deep core stabilization, and ergonomic spine education to prevent re-injury.',
      },
    ],
    clinicalOutcomes: [
      'Significant reduction in nerve root compression and radiating sciatica',
      'Restored intervertebral disc hydration and natural spinal flexibility',
      'Substantial joint mobility gains without surgical intervention',
      'Long-term independent posture control and daily pain-free function',
    ],
  },
  '02': {
    number: '02',
    category: 'NEUROLOGICAL CARE',
    title: 'Neuro Conditions',
    tagline: 'Motor Unit Re-education, Nerve Pathway Activation & Spasticity Control',
    overview:
      'Specialized physiotherapy addressing disorders of the central and peripheral nervous systems, helping patients regain neuromuscular communication, muscle tone balance, and reflex coordination.',
    image: ultracareProImg,
    keyEquipment: 'Clinical Multi-Mode Electrotherapy (EMS / IFT) & Parallel Bars',
    equipmentDesc:
      'Multi-channel electrical stimulation for denervated muscle groups combined with rigid parallel bars and balance boards for motor re-education and gait stability.',
    conditionsTreated: [
      'Bell’s Palsy & Facial Nerve Paralysis',
      'Parkinson’s Disease & Tremor / Bradykinesia',
      'Peripheral Neuropathy & Diabetic Nerve Pain',
      'Spinal Cord Compression & Radiculopathy',
      'Guillain-Barré Syndrome (GBS) Recovery',
      'Multiple Sclerosis Motor Impairments',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Sensorimotor Nerve & Reflex Mapping',
        desc: 'Detailed dermatomal and myotomal examination to map sensory loss, motor weakness, and pathological reflexes.',
      },
      {
        title: 'Phase 2: Neuromuscular Electrical Stimulation (EMS/IFT)',
        desc: 'Targeted electrical stimulation along affected nerve branches to prevent muscle atrophy and promote axonal regeneration.',
      },
      {
        title: 'Phase 3: Inhibitory Spasticity Control & Passive Mobilization',
        desc: 'Gentle sustained stretching, warm moist heat, and reciprocal inhibition techniques to reduce muscular stiffness.',
      },
      {
        title: 'Phase 4: Functional Motor Pattern & Daily Independence Training',
        desc: 'Task-specific motor training, balance retraining on wobble boards, and coordination drills for functional independence.',
      },
    ],
    clinicalOutcomes: [
      'Re-activation of inhibited motor units and facial/limb nerves',
      'Improved movement speed and reduction in muscle rigidity',
      'Enhanced sensory awareness and protective reflexes',
      'Substantial reduction in neuropathic burning and tingling',
    ],
  },
  '03': {
    number: '03',
    category: 'ATHLETIC RECOVERY',
    title: 'Sports Injuries',
    tagline: 'Tendon Conditioning, Explosive Agility & Return-To-Sport Clearance',
    overview:
      'High-performance recovery tailored for athletes and active individuals. Led by Dr. K. Bhavendra (MPT Sports Medicine), restoring full muscular power, joint resilience, and peak kinetic performance.',
    image: bosuBallImg,
    keyEquipment: 'Multistation Gym, Kinesiology Taping & Trigger Point Dry Needling',
    equipmentDesc:
      'Full kinetic chain resistance framework paired with dynamic proprioceptive perturbators and invasive trigger point release for rapid athletic conditioning.',
    conditionsTreated: [
      'ACL, PCL, MCL & Meniscal Ligament Strains',
      'Rotator Cuff Tears & Scapular Dyskinesis',
      'Tennis Elbow & Golfer’s Elbow Tendinopathy',
      'Ankle Sprains & Achilles Tendon Strains',
      'Hamstring, Groin & Quad Muscle Tears',
      'Overuse Shin Splints & Jumper’s Knee',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Acute Protection & Inflammation Control',
        desc: 'Targeted offloading, cryo-compression, and therapeutic modalities to protect injured soft tissues and speed cellular repair.',
      },
      {
        title: 'Phase 2: Progressive Tendon & Muscle Loading',
        desc: 'Controlled eccentric loading protocols, dry needling, and kinesiology taping to rebuild tendon elasticity and load tolerance.',
      },
      {
        title: 'Phase 3: Neuromuscular Proprioception Training',
        desc: 'Dynamic single-leg balance and reactive agility drills on balance boards to re-establish joint stability under velocity.',
      },
      {
        title: 'Phase 4: Sport-Specific Functional Clearance',
        desc: 'Simulated cutting, sprinting, and sport-specific movement screens to ensure full physical readiness before competition.',
      },
    ],
    clinicalOutcomes: [
      'Full restoration of explosive power, joint stability, and deceleration control',
      'Symmetric muscle strength across both extremities to prevent recurrence',
      'Confident, fear-free return to high-level sporting performance',
      'Customized athletic injury prevention regimen for long-term play',
    ],
  },
  '04': {
    number: '04',
    category: 'PEDIATRIC CARE',
    title: 'Pediatric Conditions',
    tagline: 'Developmental Milestone Facilitation & Pediatric Neuromuscular Coordination',
    overview:
      'Gentle, play-based physical rehabilitation addressing congenital, developmental, and acquired physical challenges in infants, children, and adolescents, fostering independent mobility and postural symmetry.',
    image: kinetecCpmImg,
    keyEquipment: 'Swiss Ball Dynamic Training & Pediatric Parallel Bars',
    equipmentDesc:
      'Specialized pediatric unstable dynamic gym balls, balance platforms, and safe low-height parallel bars designed to encourage natural movement exploration.',
    conditionsTreated: [
      'Cerebral Palsy (Spastic, Diplegic, Hemiplegic)',
      'Delayed Motor Milestones (Crawling, Standing, Walking)',
      'Congenital Muscular Torticollis (Wry Neck)',
      'Clubfoot (CTEV) & Flat Feet / In-Toeing Gait',
      'Juvenile Idiopathic Arthritis & Growing Pains',
      'Pediatric Postural Kyphosis & Early Scoliosis',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Developmental Milestone & Reflex Screening',
        desc: 'Evaluating primitive reflexes, postural control, and developmental age-appropriate motor milestones.',
      },
      {
        title: 'Phase 2: Neuro-Developmental Treatment (NDT) & Bobath Techniques',
        desc: 'Gentle handling techniques inhibiting abnormal posture while facilitating normal transitional motor patterns.',
      },
      {
        title: 'Phase 3: Play-Integrated Kinetic Balance & Core Activation',
        desc: 'Engaging Swiss ball and balance board games strengthening trunk stabilizers and vestibular balance.',
      },
      {
        title: 'Phase 4: Parent Coaching & Home Integration',
        desc: 'Teaching parents therapeutic carrying, positioning, and play activities for continuous developmental gains at home.',
      },
    ],
    clinicalOutcomes: [
      'Timely achievement of independent sitting, standing, and walking milestones',
      'Normalizing abnormal muscle tone and preventing contractures',
      'Enhanced coordination, spatial balance, and play endurance',
      'Empowered parents with daily home handling and positioning skills',
    ],
  },
  '05': {
    number: '05',
    category: 'GERIATRIC CARE',
    title: 'Geriatric Conditions',
    tagline: 'Fall Prevention, Bone Mineral Density, Joint Ease & Dignified Senior Mobility',
    overview:
      'Dedicated physical therapy programs designed for elderly individuals to maintain independence, alleviate arthritic stiffness, restore dynamic balance, and eliminate fall risk.',
    image: medicalLegPressImg,
    keyEquipment: 'Whole-Body Vibration Plate, Thermotherapy Moist Heat & Parallel Bars',
    equipmentDesc:
      'Low-impact oscillatory bone stimulation, penetrating hydrocollator thermal therapy, and supportive parallel bars promoting bone density, joint easing, and fall prevention.',
    conditionsTreated: [
      'Age-Related Sarcopenia & Muscle Wasting',
      'Osteopenia & Osteoporosis Bone Density Loss',
      'Frequent Loss of Balance, Dizziness & Fall Anxiety',
      'Severe Degenerative Joint Stiffness & Polyarthritis',
      'Post-Fracture / Hip Arthroplasty Recovery in Seniors',
      'Generalized Frailty & Post-Illness Immobility',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Standardized Fall-Risk Screening & Stance Testing',
        desc: 'Testing dynamic balance, Timed Up and Go (TUG), grip strength, and joint range of motion.',
      },
      {
        title: 'Phase 2: Gentle Moist Heat & Joint Ease Preparation',
        desc: 'Thermal application soothing arthritic discomfort and enhancing connective tissue pliability before exercise.',
      },
      {
        title: 'Phase 3: Anti-Gravity Quad Strengthening & Bone Loading',
        desc: 'Vibration plate stimulation and closed-chain leg conditioning rebuild anti-gravity strength needed for stairs.',
      },
      {
        title: 'Phase 4: Safe Transfer Training & Independent Mobility',
        desc: 'Gait retraining, assistive device fitting, and practical confidence training for safe home and community mobility.',
      },
    ],
    clinicalOutcomes: [
      'Dramatically reduced fall incidence and elimination of balance anxiety',
      'Preserved bone mineral density and stimulated anti-gravity muscle strength',
      'Ease of morning arthritic stiffness and smoother joint mobility',
      'Sustained dignity, social mobility, and independent home living',
    ],
  },
  '06': {
    number: '06',
    category: 'ADVANCED NEURO REHAB',
    title: 'Neuro Rehabilitation',
    tagline: 'Body-Weight Supported Harness Ambulation, Post-Stroke & Spinal Retraining',
    overview:
      'Intensive, milestone-driven rehabilitation for patients recovering from major neurological trauma, stroke, or paralysis. Utilizing specialized harness standing frames and assisted gait technology.',
    image: biodexGaitTrainerImg,
    keyEquipment: 'Harness Standing Frame, Treadmill Gait Retraining & Parallel Bars',
    equipmentDesc:
      'Overhead unweighting harness system and instrumented gait retraining platform allowing safe early vertical standing and repetitive stepping without fall hazard.',
    conditionsTreated: [
      'Post-Stroke Hemiplegia & Severe Hemiparesis',
      'Traumatic Brain & Incomplete Spinal Cord Injuries',
      'Post-Neurosurgical Functional Ambulation Deficits',
      'Severe Gait Ataxia & Trunk Equilibrium Loss',
      'Refractory Lower Limb Spasticity & Drop Foot',
      'Prolonged Bedridden Neurological Deconditioning',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Anti-Gravity Axial Stance in Harness Suspension',
        desc: 'Securing the patient in an overhead harness to safely achieve upright posture, preventing bone density loss and postural hypotension.',
      },
      {
        title: 'Phase 2: Reciprocal Stepping & Weight Transfer Drills',
        desc: 'Assisted weight shifting and gait training between parallel bars to rebuild bilateral stance symmetry.',
      },
      {
        title: 'Phase 3: Sensorimotor Biofeedback & Trunk Equilibrium',
        desc: 'Dynamic Swiss ball core drills, visual biofeedback, and neuromuscular re-education for equilibrium control.',
      },
      {
        title: 'Phase 4: Functional Ambulation & Daily ADL Mastery',
        desc: 'Progressive unassisted walking, obstacle navigation, stair climbing, and independent daily activity mastery.',
      },
    ],
    clinicalOutcomes: [
      'Safe early verticalization preventing orthostatic hypotension and bone loss',
      'Re-learning natural reciprocal heel-strike and swing-phase gait mechanics',
      'Transition from wheelchair dependence to assisted or independent ambulation',
      'Restoration of core equilibrium and functional daily independence',
    ],
  },
};

interface TreatmentDetailModalProps {
  selectedNumber: string | null;
  onClose: () => void;
  onBookClick: () => void;
  onSelectTreatment: (num: string) => void;
}

export const TreatmentDetailModal: React.FC<TreatmentDetailModalProps> = ({
  selectedNumber,
  onClose,
  onBookClick,
  onSelectTreatment,
}) => {
  if (!selectedNumber) return null;

  const treatment = TREATMENT_DETAILS[selectedNumber] || TREATMENT_DETAILS['01'];
  const allNumbers = Object.keys(TREATMENT_DETAILS);
  const currentIndex = allNumbers.indexOf(selectedNumber);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allNumbers.length) % allNumbers.length;
    onSelectTreatment(allNumbers[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allNumbers.length;
    onSelectTreatment(allNumbers[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/60 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#FAF8F5] border border-stone-200 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Sticky Header with Treatment Switcher Tabs */}
        <div className="p-4 sm:p-5 border-b border-stone-200/80 bg-white/90 backdrop-blur-xl shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {allNumbers.map((num) => {
              const item = TREATMENT_DETAILS[num];
              const isActive = num === selectedNumber;
              return (
                <button
                  key={num}
                  onClick={() => onSelectTreatment(num)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                      : 'bg-stone-100 text-stone-700 hover:bg-emerald-50 hover:text-emerald-800'
                  }`}
                >
                  <span>{num}</span>
                  <span className="hidden sm:inline">{item.title.split(' ')[0]}</span>
                </button>
              );
            })}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-stone-100 text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-7 text-stone-800">
          {/* Top Hero Banner with High-Resolution Medical Image */}
          <div className="relative rounded-3xl overflow-hidden border border-stone-200 bg-white shadow-sm">
            <div className="relative h-60 sm:h-72 w-full overflow-hidden flex items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-stone-50 to-emerald-50/30">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/85 via-stone-900/30 to-transparent" />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md border border-white/20 text-white text-xs font-black tracking-wider shadow-sm">
                  DOMAIN {treatment.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                  {treatment.category}
                </span>
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                  {treatment.title}
                </h2>
                <p className="text-emerald-100 text-xs sm:text-sm font-medium mt-1 drop-shadow-sm">
                  {treatment.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Overview Paragraph */}
          <div className="bg-white border border-stone-200/80 rounded-2xl p-5 sm:p-6 space-y-2 shadow-sm">
            <h3 className="text-xs font-black text-emerald-800 uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-700" />
              <span>Clinical Scope & Assessment Focus</span>
            </h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {treatment.overview}
            </p>
          </div>

          {/* Key Technology / Equipment Highlight */}
          {treatment.keyEquipment && (
            <div className="bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/50 border border-emerald-200/80 rounded-2xl p-5 sm:p-6 space-y-2.5 shadow-sm">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                    ADVANCED CLINICAL TECHNOLOGY
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-stone-900">
                    {treatment.keyEquipment}
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {treatment.equipmentDesc}
              </p>
            </div>
          )}

          {/* Conditions Treated Grid */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-black text-stone-900 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
              <span>Key Conditions Treated</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {treatment.conditionsTreated.map((cond, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-stone-200/80 hover:border-emerald-300 transition-colors shadow-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-stone-700 font-semibold">
                    {cond}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Clinical Protocol */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-black text-stone-900 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-700" />
              <span>4-Phase Recovery Protocol</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {treatment.protocolSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-stone-200/80 hover:border-emerald-300 transition-all space-y-1.5 shadow-sm"
                >
                  <div className="text-xs font-bold text-emerald-800">
                    Phase 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {step.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Clinical Outcomes */}
          <div className="bg-emerald-50/60 border border-emerald-200/70 rounded-2xl p-5 sm:p-6 space-y-2.5">
            <h3 className="text-xs font-black text-emerald-900 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Expected Clinical Outcomes & Milestones</span>
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
              {treatment.clinicalOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-700 font-black">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-5 border-t border-stone-200/80 bg-white shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={handlePrev}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-bold transition-colors cursor-pointer"
            >
              Next Treatment →
            </button>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer whitespace-nowrap hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
