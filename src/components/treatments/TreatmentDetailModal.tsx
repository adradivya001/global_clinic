import React from 'react';
import { X, ArrowRight, CheckCircle2, Phone, Calendar, Sparkles, Activity, ShieldCheck, Zap, Heart, Compass, Cpu } from 'lucide-react';
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
    title: 'Orthopedic Rehabilitation',
    tagline: 'Computerized Spinal Decompression, Joint Alignment & Musculoskeletal Recovery',
    overview:
      'Our Orthopedic Rehabilitation program combines evidence-based manual therapy with advanced medical technology to treat acute and chronic spine disorders, arthritis, and joint dysfunctions at their root cause.',
    image: tritonTableImg,
    keyEquipment: 'Chattanooga Triton DTS Advanced Spinal Decompression System',
    equipmentDesc:
      'A computerized clinical traction system delivering precise, non-surgical axial decompression to gently relieve pressure on herniated discs, pinched nerve roots, and compressed facet joints.',
    conditionsTreated: [
      'Lumbar & Cervical Disc Herniation / Bulge',
      'Sciatica & Radiating Nerve Pain (Radiculopathy)',
      'Cervical Spondylosis & Chronic Neck Stiffness',
      'Osteoarthritis of Knee, Hip & Spine',
      'Frozen Shoulder & Rotator Cuff Tendinopathy',
      'Postural Back Fatigue & Facet Joint Syndrome',
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
        title: 'Phase 3: Soft-Tissue & Myofascial Release',
        desc: 'Deep soft-tissue manipulation, trigger point deactivation, and electrotherapy to alleviate compensatory muscle spasms.',
      },
      {
        title: 'Phase 4: Kinetic Strengthening & Postural Retraining',
        desc: 'Progressive deep core conditioning and ergonomic spine education to ensure long-term stability and prevent re-injury.',
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
    category: 'ATHLETIC RECOVERY',
    title: 'Sports Rehabilitation',
    tagline: 'Performance Recovery, Tendon Conditioning & Return-To-Sport Protocols',
    overview:
      'Designed for competitive athletes and active individuals, our sports rehabilitation restores muscular symmetry, rebuilds tendon tensile strength, and prepares athletes for a confident, safe return to high-intensity play.',
    image: bosuBallImg,
    keyEquipment: 'BOSU® Balance Dynamic Proprioception & Kinetic Stability Trainer',
    equipmentDesc:
      'Multi-dimensional balance perturbator and reactive stability dome used for neuromuscular retraining, ankle-knee proprioception, and sport-specific return-to-play conditioning.',
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
        desc: 'Controlled eccentric loading protocols to restore tendon elasticity and rebuild load tolerance.',
      },
      {
        title: 'Phase 3: Neuromuscular Proprioception Training',
        desc: 'Dynamic single-leg balance and reactive agility drills to re-establish joint stability under velocity.',
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
  '03': {
    number: '03',
    category: 'POST-OPERATIVE CARE',
    title: 'Post-Surgical Rehabilitation',
    tagline: 'Structured Milestone-Based Post-Op Recovery & Functional Independence',
    overview:
      'Following orthopedic and spine surgery, tailored physical therapy is critical. We follow surgeon-approved phased protocols to rebuild joint motion, safely manage scar tissue, and restore full physical independence.',
    image: kinetecCpmImg,
    keyEquipment: 'Kinetec Performa™ Continuous Passive Motion (CPM) Machine',
    equipmentDesc:
      'Advanced motorized continuous passive motion device providing calibrated, pain-free joint mobilization immediately following knee arthroplasty, ACL reconstruction, and joint surgeries.',
    conditionsTreated: [
      'Total Knee Replacement (TKR) Rehabilitation',
      'Total Hip Replacement (THR) Recovery',
      'Spine Decompression, Discectomy & Fusion Recovery',
      'Arthroscopic Shoulder & Knee Post-Op Care',
      'Fracture Internal Fixation & Post-Cast Stiffness',
      'Ligament Reconstruction (ACL / PCL Repair)',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Early Mobilisation & Edema Reduction',
        desc: 'Gentle passive range of motion, lymphatic drainage, and isometric muscle activations to prevent joint stiffness and blood clots.',
      },
      {
        title: 'Phase 2: Active Range of Motion & Scar Mobilisation',
        desc: 'Gradual active joint movements and soft-tissue scar release to prevent adhesions and restore natural joint glide.',
      },
      {
        title: 'Phase 3: Progressive Weight-Bearing & Strengthening',
        desc: 'Safe closed-chain strengthening of supporting musculature and proper biomechanical gait retraining.',
      },
      {
        title: 'Phase 4: Advanced Functional Independence',
        desc: 'Stair climbing, balance restoration, and independent daily activity mastery without reliance on walking aids.',
      },
    ],
    clinicalOutcomes: [
      'Full targeted range of motion achieved within clinical milestone timelines',
      'Elimination of post-operative limp and restored natural walking gait',
      'Rebuilt quadriceps, gluteal, and stabilizing muscle power',
      'Rapid and safe return to independent living, driving, and work',
    ],
  },
  '04': {
    number: '04',
    category: 'TARGETED RELIEF',
    title: 'Pain Management',
    tagline: 'Evidence-Guided Non-Invasive Pain Desensitization & Neural Relief',
    overview:
      'Chronic pain often alters neural sensitivity and muscular firing patterns. Our clinical pain management protocol addresses mechanical and neurological sources of pain through multimodal physiotherapy.',
    image: ultracareProImg,
    keyEquipment: 'UltraCare PRO Combo³ Plus Dual-Channel Multi-Mode Electrotherapy System',
    equipmentDesc:
      'Advanced dual-channel clinical neuromodulation system combining TENS, EMS, IFT, and Russian Stimulation protocols for targeted pain gate inhibition, muscle spasm release, and deep tissue healing.',
    conditionsTreated: [
      'Chronic Lower Back & Neck Pain',
      'Myofascial Pain Syndrome & Muscle Knots',
      'Sciatica & Peripheral Nerve Entrapments',
      'Fibromyalgia & Generalized Musculoskeletal Ache',
      'Tension Headaches & Cervicogenic Migraines',
      'Plantar Fasciitis & Heel Spur Pain',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Neuro-Mechanical Pain Mapping',
        desc: 'Pinpointing trigger points, compressed nerves, and postural fatigue loops sustaining the pain cycle.',
      },
      {
        title: 'Phase 2: Pain Gate Neuromodulation',
        desc: 'Application of IFT, TENS, and therapeutic heat/cold modalities to inhibit ascending pain signals.',
      },
      {
        title: 'Phase 3: Trigger Point & Soft-Tissue Deactivation',
        desc: 'Hands-on ischemic compression, dry needling techniques, and gentle myofascial unwinding.',
      },
      {
        title: 'Phase 4: Desensitization & Movement Restoration',
        desc: 'Graded movement re-education to re-teach the nervous system that daily motion is safe and pain-free.',
      },
    ],
    clinicalOutcomes: [
      'Rapid reduction in acute pain intensity and reliance on painkillers',
      'Deactivated muscle spasms and restored soft-tissue suppleness',
      'Improved sleep quality and restored physical confidence',
      'Empowered patient self-management with home relief strategies',
    ],
  },
  '05': {
    number: '05',
    category: 'KINETIC REALIGNMENT',
    title: 'Posture & Movement Correction',
    tagline: 'Ergonomic Alignment, Tech-Neck Reversal & Spinal Balance',
    overview:
      'Sedentary lifestyle, prolonged smartphone use, and desk jobs cause chronic muscular imbalances. We analyze your kinetic chain to re-align your posture and restore effortless spinal balance.',
    image: biodexGaitTrainerImg,
    keyEquipment: 'Biodex Gait Trainer™ 3 Computerized Biofeedback Movement System',
    equipmentDesc:
      'Advanced instrumented gait treadmill with real-time visual biofeedback of step length, cadence, and weight-bearing symmetry for dynamic postural realignment and walking re-education.',
    conditionsTreated: [
      'Tech-Neck & Forward Head Posture',
      'Kyphosis (Rounded Shoulders & Upper Back Hunch)',
      'Hyperlordosis & Anterior Pelvic Tilt',
      'Scoliosis-Related Muscular Asymmetries',
      'Desk-Worker Shoulder & Upper Trap Tightness',
      'Repetitive Strain from Poor Workplace Ergonomics',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Full-Body Posture & Ergonomic Audit',
        desc: 'Comprehensive photographic and biomechanical assessment of plumb-line alignment and workstation habits.',
      },
      {
        title: 'Phase 2: Tight Musculature Release',
        desc: 'Releasing tight pectorals, suboccipitals, and hip flexors that pull joints out of neutral alignment.',
      },
      {
        title: 'Phase 3: Deep Postural Stabilizer Activation',
        desc: 'Strengthening deep neck flexors, lower trapezius, and transverse abdominal muscles with biofeedback.',
      },
      {
        title: 'Phase 4: Dynamic Ergonomic Integration',
        desc: 'Personalized workstation setup recommendations, micro-break routines, and posture endurance drills.',
      },
    ],
    clinicalOutcomes: [
      'Visible correction in forward head posture and rounded shoulders',
      'Permanent relief from chronic upper back and neck tension',
      'Greater breathing capacity and reduced end-of-day fatigue',
      'Natural, effortless upright posture sustained during work hours',
    ],
  },
  '06': {
    number: '06',
    category: 'PHYSICAL CAPACITY',
    title: 'Strength & Functional Rehabilitation',
    tagline: 'Progressive Resistance, Balance Mastery & Lifelong Physical Resilience',
    overview:
      'True recovery requires rebuilding physical strength, neuromuscular balance, and daily stamina. Our functional rehabilitation ensures your body is strong, resilient, and prepared for life’s demands.',
    image: medicalLegPressImg,
    keyEquipment: 'Clinical Closed-Kinetic-Chain Medical Leg Press & Resistance Station',
    equipmentDesc:
      'Calibrated orthopedic leg press machine providing variable angle resistance, biomechanical eccentric loading, and safe closed-kinetic-chain functional strengthening for quadriceps, hamstrings, glutes, and joint load tolerance.',
    conditionsTreated: [
      'Age-Related Muscle Loss & Sarcopenia in Seniors',
      'Balance Disorders, Dizziness & Fall Prevention',
      'Generalized Weakness Following Illness or Bed Rest',
      'Joint Instability & Hypermobility Spectrum',
      'Loss of Daily Functional Mobility & Stair Climbing',
      'Pre-Hab Strength Conditioning Before Elective Surgery',
    ],
    protocolSteps: [
      {
        title: 'Phase 1: Functional Movement & Strength Baseline',
        desc: 'Testing core strength, grip strength, balance reflexes, and functional sit-to-stand endurance.',
      },
      {
        title: 'Phase 2: Multi-Planar Neuromuscular Training',
        desc: 'Calibrated exercises improving joint coordination, balance reflexes, and weight distribution.',
      },
      {
        title: 'Phase 3: Progressive Resistance & Load Tolerance',
        desc: 'Structured progressive overload targeting major muscle groups to rebuild bone density and muscle mass.',
      },
      {
        title: 'Phase 4: Functional Task & Stamina Conditioning',
        desc: 'Re-training real-world tasks like lifting, walking long distances, stair ascent, and recreational activities.',
      },
    ],
    clinicalOutcomes: [
      'Measurable increases in physical stamina, muscle power, and joint stability',
      'Dramatically reduced fall risk and enhanced balance confidence in seniors',
      'Restored independence in all everyday activities and recreational pursuits',
      'Lifelong home exercise prescription tailored for ongoing vitality',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-[fadeIn_0.2s_ease-out]">
      <div className="relative w-full max-w-4xl bg-[#08172c] border border-white/10 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Sticky Header with Treatment Switcher Tabs */}
        <div className="p-4 sm:p-6 border-b border-white/10 bg-[#061224]/95 backdrop-blur-xl shrink-0 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 overflow-x-auto py-1 scrollbar-none">
            {allNumbers.map((num) => {
              const item = TREATMENT_DETAILS[num];
              const isActive = num === selectedNumber;
              return (
                <button
                  key={num}
                  onClick={() => onSelectTreatment(num)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
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
            className="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-8 text-white">
          {/* Top Hero Banner with High-Resolution Medical Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#061224]">
            <div className="relative h-64 sm:h-80 w-full overflow-hidden flex items-center justify-center bg-white p-4 sm:p-6">
              <img
                src={treatment.image}
                alt={treatment.title}
                className="w-full h-full object-contain filter drop-shadow-md"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08172c] via-[#08172c]/40 to-transparent opacity-90" />

              {/* Floating Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                <span className="px-3 py-1 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/40 text-amber-400 text-xs font-black tracking-wider shadow-md">
                  TREATMENT DOMAIN {treatment.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#168DD0]/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                  {treatment.category}
                </span>
              </div>

              {/* Title on Image */}
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
                  {treatment.title}
                </h2>
                <p className="text-amber-300 text-xs sm:text-sm font-medium mt-1 drop-shadow-sm">
                  {treatment.tagline}
                </p>
              </div>
            </div>
          </div>

          {/* Clinical Overview Paragraph */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 space-y-2">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-400" />
              Clinical Scope & Approach
            </h3>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              {treatment.overview}
            </p>
          </div>

          {/* Key Technology / Equipment Highlight (e.g. Triton DTS for Orthopedic) */}
          {treatment.keyEquipment && (
            <div className="bg-gradient-to-br from-[#0b2545] to-[#07182d] border border-[#168DD0]/30 rounded-2xl p-5 sm:p-6 space-y-3 shadow-lg">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#168DD0]/20 text-[#168DD0] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#168DD0]">
                    ADVANCED CLINICAL TECHNOLOGY
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white">
                    {treatment.keyEquipment}
                  </h4>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {treatment.equipmentDesc}
              </p>
            </div>
          )}

          {/* Conditions Treated Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Key Conditions & Ailments Treated
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {treatment.conditionsTreated.map((cond, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">
                    {cond}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 4-Step Clinical Protocol */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-widest flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Our 4-Phase Recovery Protocol
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {treatment.protocolSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-amber-400/30 transition-all space-y-2"
                >
                  <div className="text-xs font-bold text-amber-400">
                    Step 0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Expected Clinical Outcomes */}
          <div className="bg-emerald-950/20 border border-emerald-500/20 rounded-2xl p-5 sm:p-6 space-y-3">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Expected Clinical Outcomes & Patient Goals
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-200">
              {treatment.clinicalOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">•</span>
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Footer */}
        <div className="p-4 sm:p-6 border-t border-white/10 bg-[#061224] shrink-0 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handlePrev}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
            >
              ← Previous
            </button>
            <button
              onClick={handleNext}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
            >
              Next Treatment →
            </button>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/\s+/g, '')}`}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onBookClick();
              }}
              className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-[#F5B400] hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap"
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
