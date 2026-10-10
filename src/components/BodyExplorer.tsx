import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, Flame, Activity, ShieldCheck, Zap, Plus, ChevronRight, Sparkles
} from 'lucide-react';

import anatomyModelImg from '../assets/anatomy_model.png';

interface BodyExplorerProps {
  onBookClick?: () => void;
}

const ANATOMY_DATA: Record<string, any> = {
  neck: {
    id: 'neck', name: 'Spine & Neck',
    title: 'Cervical & Spine Care',
    desc: 'Specialized physiotherapy for neck pain, whiplash, postural strain, and disc issues.',
    markerPos: { top: '15%', left: '50%' },
    zoom: { scale: 1.8, origin: '50% 15%' },
    conditions: ["Cervical Spondylosis", "Whiplash", "Herniated Disc", "Tension Headaches", "Neck Strain", "Pinched Nerve"],
    symptoms: ["Stiffness and limited range of motion", "Sharp or dull ache in the neck", "Pain radiating to shoulders", "Frequent headaches", "Tingling in fingers"],
    results: [ { label: 'Whiplash Recovery', value: 'Full mobility in 8 weeks' }, { label: 'Chronic Pain', value: '80% pain reduction' } ],
    testimonial: { quote: "My chronic neck pain and headaches are completely gone. The postural correction changed my life.", name: "Sarah Jenkins" },
    faqs: ["How long does neck rehab take?", "Are neck adjustments safe?", "Can poor posture cause neck pain?", "Do I need an MRI?"]
  },
  shoulder: {
    id: 'shoulder', name: 'Shoulder Joint',
    title: 'Shoulder Rehabilitation',
    desc: 'Comprehensive care for frozen shoulder, rotator cuff tears, and impingement syndrome.',
    markerPos: { top: '23%', left: '35%' },
    zoom: { scale: 1.6, origin: '35% 23%' },
    conditions: ["Frozen Shoulder", "Rotator Cuff Tear", "Impingement", "Bursitis", "Dislocation Rehab", "Tendinitis"],
    symptoms: ["Pain when lifting arm", "Inability to reach behind back", "Night pain sleeping on shoulder", "Weakness in the arm", "Clicking or popping sounds"],
    results: [ { label: 'Frozen Shoulder', value: 'Restored overhead reach' }, { label: 'Rotator Cuff', value: 'Avoided surgery' } ],
    testimonial: { quote: "I couldn't lift my arm above my head. After 6 weeks of targeted therapy, I have full range of motion.", name: "Michael Chen" },
    faqs: ["How to sleep with shoulder pain?", "Is it a tear or just inflammation?", "When can I return to lifting weights?", "Do steroid injections help?"]
  },
  elbow: {
    id: 'elbow', name: 'Elbow & Arm',
    title: 'Elbow & Arm Therapy',
    desc: 'Targeted treatments for tennis elbow, golfer\'s elbow, and repetitive strain injuries.',
    markerPos: { top: '40%', left: '26%' },
    zoom: { scale: 1.8, origin: '26% 40%' },
    conditions: ["Tennis Elbow", "Golfer's Elbow", "Olecranon Bursitis", "Cubital Tunnel", "Ligament Sprain", "Fracture Rehab"],
    symptoms: ["Pain on the outside of elbow", "Weak grip strength", "Pain when twisting forearm", "Numbness in ring finger", "Swelling at the joint"],
    results: [ { label: 'Tennis Elbow', value: 'Pain-free grip restored' }, { label: 'Fracture Rehab', value: 'Full extension achieved' } ],
    testimonial: { quote: "Tennis elbow kept me off the court for months. The shockwave therapy here worked wonders.", name: "David Miller" },
    faqs: ["Should I wear a brace?", "Can I play through the pain?", "What is shockwave therapy?", "How long to heal tennis elbow?"]
  },
  back: {
    id: 'back', name: 'Lumbar & Spine',
    title: 'Lumbar Spine & Back Care',
    desc: 'Advanced protocols for sciatica, lower back pain, disc herniation, and core stability.',
    markerPos: { top: '42%', left: '50%' },
    zoom: { scale: 1.5, origin: '50% 42%' },
    conditions: ["Sciatica", "Herniated Disc", "Spinal Stenosis", "Muscle Strain", "Scoliosis", "Post-op Fusion Rehab"],
    symptoms: ["Dull ache in lower back", "Sharp pain shooting down leg", "Muscle spasms", "Pain worse when sitting", "Difficulty standing up straight"],
    results: [ { label: 'Sciatica Relief', value: 'Nerve pain eliminated' }, { label: 'Chronic Back Pain', value: 'Return to active lifestyle' } ],
    testimonial: { quote: "I was scheduled for spinal surgery but decided to try physio first. I am now completely pain-free.", name: "Robert Fox" },
    faqs: ["Should I rest or exercise with back pain?", "What causes sciatica?", "Are core exercises really important?", "When is surgery necessary?"]
  },
  hip: {
    id: 'hip', name: 'Hip & Pelvis',
    title: 'Hip & Pelvis Rehabilitation',
    desc: 'Expert care for hip osteoarthritis, labral tears, bursitis, and post-replacement recovery.',
    markerPos: { top: '52%', left: '42%' },
    zoom: { scale: 1.5, origin: '42% 52%' },
    conditions: ["Hip Osteoarthritis", "Bursitis", "Labral Tear", "Piriformis Syndrome", "Hip Replacement Rehab", "Groin Strain"],
    symptoms: ["Pain in the groin or side of hip", "Stiffness after sitting", "Limping when walking", "Pain sleeping on one side", "Clicking in the joint"],
    results: [ { label: 'Hip Replacement', value: 'Walking unassisted in 3 weeks' }, { label: 'Bursitis', value: 'Zero night pain' } ],
    testimonial: { quote: "The rehab after my hip replacement was exceptional. I walked without a cane much faster than expected.", name: "Elena Rodriguez" },
    faqs: ["Is walking good for hip arthritis?", "How to stretch the piriformis?", "What is a labral tear?", "When can I drive after surgery?"]
  },
  knee: {
    id: 'knee', name: 'Knee & Ligaments',
    title: 'Knee Rehabilitation & Ligament Care',
    desc: 'Comprehensive physiotherapy care for knee pain, ligament injuries, meniscus issues and post-surgical rehabilitation.',
    markerPos: { top: '72%', left: '38%' },
    zoom: { scale: 1.7, origin: '38% 72%' },
    conditions: ["ACL Injuries", "Meniscus Tears", "Ligament Sprains", "Runner's Knee", "Arthritis", "Post-Surgery Rehab"],
    symptoms: ["Pain going up or down stairs", "Swelling, stiffness, or catching in joint", "Instability or giving way", "Post-ACL surgery or meniscus rehab", "Arthritic wear and joint discomfort"],
    results: [ { label: 'ACL Rehabilitation', value: 'Back to Sports in 6 Months' }, { label: 'Meniscus Injury', value: 'Pain Free Movement' } ],
    testimonial: { quote: "After my ACL surgery, the physiotherapy here helped me regain my strength and confidence. I'm now back to playing football without pain.", name: "Ravi Kumar" },
    faqs: ["How long does knee rehabilitation take?", "Can I avoid surgery with physiotherapy?", "What exercises are best for knee stability?", "When can I return to sports?"]
  },
  ankle: {
    id: 'ankle', name: 'Ankle & Foot',
    title: 'Ankle Sprains & Instability',
    desc: 'Focused recovery for ankle sprains, Achilles tendinopathy, and chronic instability.',
    markerPos: { top: '88%', left: '40%' },
    zoom: { scale: 2.2, origin: '40% 88%' },
    conditions: ["Ankle Sprain", "Achilles Tendinitis", "Chronic Instability", "Fracture Rehab", "Tarsal Tunnel", "Sever's Disease"],
    symptoms: ["Swelling and bruising", "Inability to bear weight", "Stiffness in the morning", "Weakness or 'giving way'", "Pain at the back of the heel"],
    results: [ { label: 'Severe Sprain', value: 'Return to running in 4 weeks' }, { label: 'Achilles Tendinitis', value: 'Tendon strength restored' } ],
    testimonial: { quote: "I kept spraining my ankle while running. The balance and strengthening program finally stopped the cycle.", name: "James Wilson" },
    faqs: ["Should I ice or heat a sprained ankle?", "Do I need an x-ray?", "Are ankle braces good to wear long-term?", "How to prevent future sprains?"]
  },
  foot: {
    id: 'foot', name: 'Foot & Heel',
    title: 'Plantar Fasciitis & Foot Mechanics',
    desc: 'Specialized biomechanical correction for heel pain, flat feet, and plantar fasciitis.',
    markerPos: { top: '95%', left: '44%' },
    zoom: { scale: 2.5, origin: '44% 95%' },
    conditions: ["Plantar Fasciitis", "Heel Spurs", "Flat Feet", "Metatarsalgia", "Morton's Neuroma", "Bunions"],
    symptoms: ["Sharp heel pain first thing in the morning", "Arch pain after standing", "Numbness in toes", "Pain in the ball of the foot", "Changes in foot shape"],
    results: [ { label: 'Plantar Fasciitis', value: 'Morning pain eliminated' }, { label: 'Flat Feet', value: 'Custom orthotics fitted' } ],
    testimonial: { quote: "The morning heel pain was unbearable. The combination of manual therapy and custom orthotics fixed it completely.", name: "Anita Desai" },
    faqs: ["What is the best shoe for plantar fasciitis?", "Do I need custom orthotics?", "How long does heel pain take to go away?", "Are cortisone shots effective?"]
  }
};

export const BodyExplorer: React.FC<BodyExplorerProps> = ({ onBookClick }) => {
  const [selectedArea, setSelectedArea] = useState('knee');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  
  // Advanced Stepper State
  const [activeStep, setActiveStep] = useState(0);
  const [isHoveringStepper, setIsHoveringStepper] = useState(false);

  const currentData = ANATOMY_DATA[selectedArea];
  const bodyAreasList = Object.values(ANATOMY_DATA);

  const benefits = [
    { num: '01', title: 'Targeted Relief', desc: 'Soothe acute inflammation & localized spasms', icon: <Flame className="w-4 h-4 text-orange-700" /> },
    { num: '02', title: 'Joint Stability', desc: 'Strengthen deep stabilizer muscle groups', icon: <ShieldCheck className="w-4 h-4 text-emerald-700" /> },
    { num: '03', title: 'Kinetic Mobility', desc: 'Restore complete biomechanical range', icon: <Activity className="w-4 h-4 text-emerald-700" /> },
    { num: '04', title: 'Long-term Power', desc: 'Prevent recurrence with progressive conditioning', icon: <Zap className="w-4 h-4 text-emerald-700" /> },
  ];

  const journeySteps = [
    { num: '01', title: 'Clinical Assessment', desc: 'Detailed orthopedic & kinetic movement analysis' },
    { num: '02', title: 'Targeted Care Plan', desc: 'Evidence-based protocol matched to diagnosis' },
    { num: '03', title: 'Modalities & Therapy', desc: 'High-precision electrotherapy & manual care' },
    { num: '04', title: 'Functional Rehab', desc: 'Supervised strengthening and mobility exercises' },
    { num: '05', title: 'Active Independence', desc: 'Long-term maintenance and injury prevention' },
  ];

  // Auto-advance stepper
  useEffect(() => {
    if (isHoveringStepper) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isHoveringStepper, journeySteps.length]);

  return (
    <section id="explorer" className="py-16 lg:py-24 bg-[#FFFDF8] relative font-sans overflow-hidden border-t border-[#EAD9B7]">
      
      {/* Global Background Atmospheric Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#F8EAC9]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#FAF4E8]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1640px] w-full mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#EAD9B7] text-[#B87908] text-xs font-bold uppercase tracking-widest mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
            <span>Interactive Body Condition Explorer</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#24190F] tracking-tight leading-tight">
            Where Are You Experiencing <span className="bg-gradient-to-r from-[#B87908] to-[#D99B24] bg-clip-text text-transparent">Pain or Discomfort?</span>
          </h2>
          <p className="text-[#65594B] text-sm sm:text-base mt-3 leading-relaxed">
            Select any anatomical region to discover targeted clinical protocols, verified recovery pathways, and evidence-based solutions.
          </p>
        </div>

        {/* Main 3-Column Anatomy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch mb-16">
          
          {/* LEFT: Anatomy Regions List */}
          <div className="lg:col-span-3 bg-white rounded-3xl p-5 border border-[#EAD9B7] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#EAD9B7]/50">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#B87908]">
                  Anatomical Regions
                </span>
                <span className="text-[11px] font-bold text-[#65594B]/70">8 Areas</span>
              </div>
              <div className="flex flex-col space-y-1.5">
                {bodyAreasList.map((area) => {
                  const isActive = selectedArea === area.id;
                  return (
                    <button
                      key={area.id}
                      onClick={() => { setSelectedArea(area.id); setExpandedFaq(0); }}
                      className={`text-left px-4 py-3 rounded-2xl transition-all duration-300 flex items-center gap-3.5 group cursor-pointer ${
                        isActive
                          ? 'bg-[#FAF4E8] text-[#B87908] font-bold border border-[#EAD9B7] shadow-xs'
                          : 'bg-transparent text-[#65594B] hover:bg-[#FAF4E8]/60 hover:text-[#24190F]'
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full transition-all ${isActive ? 'bg-[#B87908] scale-125 ring-4 ring-[#F8EAC9]' : 'bg-[#EAD9B7] group-hover:bg-[#B87908]'}`} />
                      <span className="text-[14px] flex-1">
                        {area.name}
                      </span>
                      {isActive ? (
                        <div className="w-6 h-6 rounded-full bg-[#B87908] flex items-center justify-center shrink-0 shadow-xs">
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-[#65594B]/50 group-hover:text-[#24190F] transition-colors" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-[#EAD9B7]/50">
              <div className="flex items-center gap-2.5 text-xs text-[#65594B] font-medium">
                <ShieldCheck className="w-4 h-4 text-[#B87908]" />
                <span>Doctor-Led Clinical Guidance</span>
              </div>
            </div>
          </div>

          {/* CENTER: Anatomical Illustration & Interactive Target */}
          <div className="lg:col-span-4 flex justify-center items-center relative min-h-[460px] lg:min-h-[520px] rounded-3xl bg-gradient-to-b from-[#24190F] to-[#3D2B1A] overflow-hidden shadow-xl border border-[#B87908]/40 group">
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,121,8,0.3),transparent_70%)] pointer-events-none mix-blend-screen" />

            <div 
              className="w-full h-full relative flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              style={{
                transformOrigin: currentData.zoom.origin,
                transform: `scale(${currentData.zoom.scale})`
              }}
            >
              <img
                src={anatomyModelImg}
                alt="Human Anatomy 3D Model"
                className="w-full h-full object-cover opacity-95 transition-opacity duration-700 mix-blend-screen"
              />

              {/* Focus Glow & Targeted Pulse Ring */}
              <div 
                className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none transition-all duration-1000 ease-in-out"
                style={{ top: currentData.markerPos.top, left: currentData.markerPos.left }}
              >
                <div className="absolute inset-0 rounded-full border border-[#D99B24]/40 animate-[ping_3s_ease-out_infinite]" />
                <div className="absolute inset-4 rounded-full border-2 border-[#D99B24]/70 animate-[ping_3s_ease-out_infinite_0.6s]" />
                <div className="absolute inset-10 rounded-full bg-[#B87908] blur-xl opacity-50" />
                
                {/* Floating Region Target Badge */}
                <div className="absolute top-1/2 left-[calc(100%+8px)] -translate-y-1/2 bg-white/95 border border-[#EAD9B7] px-3 py-1.5 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2 whitespace-nowrap scale-90 origin-left">
                  <div className="w-2 h-2 rounded-full bg-[#B87908] animate-pulse" />
                  <span className="text-[#24190F] text-[11px] font-black tracking-wider uppercase">{currentData.name}</span>
                </div>
              </div>
            </div>

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-xl border border-[#EAD9B7] px-4 py-2.5 rounded-2xl shadow-lg flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 rounded-full bg-[#B87908] animate-ping" />
                <span className="text-[#24190F] font-serif font-bold text-xs tracking-wider uppercase">{currentData.name} Focused</span>
              </div>
              <span className="text-[11px] text-[#B87908] font-bold">Active Region</span>
            </div>
          </div>

          {/* RIGHT: Condition Details & Quick Action Panel */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-[#EAD9B7] shadow-sm flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-2.5">
                <span className="px-2.5 py-1 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-2xs">
                  <Flame className="w-3 h-3 text-[#B87908]" />
                  Condition Focus
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#24190F] tracking-tight leading-snug mb-3">
                {currentData.title}
              </h3>
              
              <p className="text-[#65594B] text-[14px] sm:text-[15px] leading-relaxed mb-6">
                {currentData.desc}
              </p>

              {/* 4 Micro-Pillars */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {benefits.map((b, i) => (
                  <div key={i} className="bg-[#FAF4E8] hover:bg-[#F8EAC9]/60 p-3.5 rounded-2xl border border-[#EAD9B7] transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-1.5 rounded-lg bg-white shadow-2xs">{b.icon}</div>
                      <span className="text-[10px] font-bold text-[#65594B]/60">{b.num}</span>
                    </div>
                    <h5 className="text-[12px] font-serif font-bold text-[#24190F] leading-snug mb-1">{b.title}</h5>
                    <p className="text-[11px] text-[#65594B] leading-tight">{b.desc}</p>
                  </div>
                ))}
              </div>

              {/* Common Conditions Treated */}
              <div className="mb-6">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#65594B]/70 block mb-2.5">
                  Frequently Treated Diagnoses
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentData.conditions.map((c: string, i: number) => (
                    <span key={i} className="px-3 py-1.5 rounded-xl bg-[#FAF4E8] hover:bg-[#B87908] hover:text-white text-[#24190F] text-xs font-semibold border border-[#EAD9B7] transition-colors cursor-default">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-5 border-t border-[#EAD9B7]/50 flex flex-col sm:flex-row items-center gap-3">
              <button 
                onClick={onBookClick}
                className="w-full sm:flex-1 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#B87908] to-[#D99B24] hover:opacity-95 text-white font-bold text-sm tracking-wide shadow-md shadow-[#B87908]/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Clinical Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <Link
                to="/services"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white border border-[#EAD9B7] text-[#24190F] hover:border-[#B87908] hover:text-[#B87908] font-bold text-sm transition-all flex items-center justify-center gap-1.5 shadow-2xs"
              >
                <span>All Services</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>

        {/* ========================================================
            LOWER MASTER SECTION: 4 LIGHT EDITORIAL CARDS
        ======================================================== */}
        <div className="pt-8 border-t border-[#EAD9B7]">
          
          {/* Section Sub-Eyebrow */}
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#B87908]">
              5-Phase Evidence-Based Pathway
            </span>
            <h4 className="text-xl sm:text-2xl font-serif font-bold text-[#24190F] tracking-tight mt-1">
              How We Guide Your Full Recovery
            </h4>
          </div>

          {/* Stepper Progress Bar */}
          <div 
            className="max-w-5xl mx-auto mb-12 relative px-4"
            onMouseEnter={() => setIsHoveringStepper(true)}
            onMouseLeave={() => setIsHoveringStepper(false)}
          >
            {/* Connecting Base Line */}
            <div className="absolute top-[32px] left-[8%] right-[8%] h-[2px] bg-[#EAD9B7] -z-10" />
            
            {/* Active Line */}
            <div 
              className="absolute top-[32px] left-[8%] h-[2px] bg-[#B87908] -z-10 transition-all duration-700 ease-out"
              style={{ width: `${(activeStep / (journeySteps.length - 1)) * 84}%` }}
            />
            
            <div className="grid grid-cols-5 gap-2 relative z-10">
              {journeySteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = idx < activeStep;
                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center group outline-none cursor-pointer"
                  >
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#B87908] text-white shadow-lg shadow-[#B87908]/25 scale-105 ring-4 ring-[#F8EAC9]' 
                        : isPast
                        ? 'bg-white text-[#B87908] border-2 border-[#B87908] shadow-2xs'
                        : 'bg-white text-[#65594B]/50 border border-[#EAD9B7] hover:border-[#B87908] shadow-2xs'
                    }`}>
                      <span className="font-extrabold text-base sm:text-lg">{step.num}</span>
                    </div>
                    <h5 className={`text-[12px] sm:text-[13px] font-bold leading-tight mb-1 transition-colors ${isActive ? 'text-[#24190F]' : 'text-[#65594B]'}`}>
                      {step.title}
                    </h5>
                    <p className="hidden md:block text-[11px] text-[#65594B]/70 leading-snug max-w-[150px]">
                      {step.desc}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 4 Cards Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* 1. Presenting Symptoms */}
            <div className="bg-white rounded-3xl p-6 border border-[#EAD9B7] shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#EAD9B7]/50">
                  <div className="w-2 h-2 rounded-full bg-[#B87908]" />
                  <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#24190F]">
                    Common Symptoms
                  </span>
                </div>
                <ul className="space-y-3">
                  {currentData.symptoms.map((sym: string, i: number) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#65594B] font-medium leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#B87908] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4 mt-4 border-t border-[#EAD9B7]/50 text-[11px] text-[#65594B]/70">
                Evaluation during first clinical visit
              </div>
            </div>

            {/* 2. Real Verified Clinical Outcomes */}
            <div className="bg-white rounded-3xl p-6 border border-[#EAD9B7] shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#EAD9B7]/50">
                  <div className="w-2 h-2 rounded-full bg-[#B87908]" />
                  <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#24190F]">
                    Documented Outcomes
                  </span>
                </div>
                <div className="space-y-3">
                  {currentData.results.map((res: any, i: number) => (
                    <div key={i} className="bg-[#FAF4E8] rounded-2xl p-4 border border-[#EAD9B7]">
                      <span className="text-[10px] font-bold text-[#B87908] uppercase tracking-wider block mb-1">
                        {res.label}
                      </span>
                      <p className="text-sm font-bold text-[#24190F]">
                        {res.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 mt-4 border-t border-[#EAD9B7]/50 flex items-center justify-between text-[11px] text-[#65594B]/70">
                <span>Personalized Progress Metrics</span>
                <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
              </div>
            </div>

            {/* 3. Patient Voice Quote */}
            <div className="bg-gradient-to-br from-[#FAF4E8] to-white rounded-3xl p-6 border border-[#EAD9B7] shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#EAD9B7]/50">
                  <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#B87908]">
                    Patient Testimonial
                  </span>
                  <div className="flex text-[#B87908] text-xs">★★★★★</div>
                </div>
                <blockquote className="text-sm sm:text-[15px] font-medium leading-relaxed italic text-[#65594B] mb-4">
                  "{currentData.testimonial.quote}"
                </blockquote>
              </div>
              <div className="pt-4 border-t border-[#EAD9B7]/50 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#B87908] text-white font-black text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  {currentData.testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#24190F]">{currentData.testimonial.name}</div>
                  <div className="text-[10px] text-[#65594B]">Verified Recovery Patient</div>
                </div>
              </div>
            </div>

            {/* 4. Frequently Asked Questions */}
            <div className="bg-white rounded-3xl p-6 border border-[#EAD9B7] shadow-sm flex flex-col justify-between group hover:-translate-y-1 transition-all">
              <div>
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-[#EAD9B7]/50">
                  <div className="w-2 h-2 rounded-full bg-[#B87908]" />
                  <span className="text-[11px] font-serif font-bold uppercase tracking-widest text-[#24190F]">
                    Common Inquiries
                  </span>
                </div>
                <div className="space-y-1.5">
                  {currentData.faqs.map((faq: string, i: number) => {
                    const isOpen = expandedFaq === i;
                    return (
                      <div key={i} className="border-b border-[#EAD9B7]/50 last:border-0 pb-1.5">
                        <button 
                          onClick={() => setExpandedFaq(isOpen ? null : i)}
                          className="w-full flex items-center justify-between text-left py-2 group/faq cursor-pointer"
                        >
                          <span className={`text-[12px] font-bold transition-colors ${isOpen ? 'text-[#B87908]' : 'text-[#65594B] group-hover/faq:text-[#B87908]'}`}>
                            {faq}
                          </span>
                          <Plus className={`w-3.5 h-3.5 shrink-0 transition-transform ${isOpen ? 'rotate-45 text-[#B87908]' : 'text-[#65594B]/50'}`} />
                        </button>
                        {isOpen && (
                          <p className="text-[11px] text-[#65594B] leading-relaxed pt-1 pb-2">
                            Recovery schedules vary by individual anatomy and severity. Our doctor creates targeted step-by-step milestones to ensure safe return to full activity.
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pt-3 mt-2 border-t border-[#EAD9B7]/50 text-[11px] text-[#65594B]/70 text-center">
                Have specific questions? Call our clinic directly.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
