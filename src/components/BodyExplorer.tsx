import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, CheckCircle2, Play, Flame, Activity, ShieldCheck, Zap, ChevronDown, Plus, ChevronRight
} from 'lucide-react';

import anatomyModelImg from '../assets/anatomy_model.png';
import doctorPhoto from '../assets/doctor_photo.png';

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
    { num: '01', title: 'Pain Relief', desc: 'Reduce pain and inflammation', icon: <Flame className="w-5 h-5 text-[#F5B400]" /> },
    { num: '02', title: 'Improved Stability', desc: 'Strengthen muscles and ligaments', icon: <ShieldCheck className="w-5 h-5 text-[#075A87]" /> },
    { num: '03', title: 'Better Mobility', desc: 'Restore movement and function', icon: <Activity className="w-5 h-5 text-[#075A87]" /> },
    { num: '04', title: 'Return to Activity', desc: 'Get back to the life you love', icon: <Zap className="w-5 h-5 text-[#075A87]" /> },
  ];

  const journeySteps = [
    { num: '01', title: 'Detailed Assessment', desc: 'Movement analysis and functional testing' },
    { num: '02', title: 'Personalised Plan', desc: 'Tailored treatment for your condition' },
    { num: '03', title: 'Hands-on Therapy', desc: 'Manual therapy and advanced techniques' },
    { num: '04', title: 'Guided Exercises', desc: 'Strength and mobility training' },
    { num: '05', title: 'Return to Activity', desc: 'Ongoing support and injury prevention' },
  ];

  // Auto-advance stepper
  useEffect(() => {
    if (isHoveringStepper) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % journeySteps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHoveringStepper, journeySteps.length]);

  return (
    <section id="explorer" className="pt-16 pb-12 bg-[#F7FAFD] relative font-sans overflow-hidden">
      
      {/* Global Background Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(22,141,208,0.05),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,180,0,0.03),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-[1700px] w-full mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-12 animate-[slideIn_0.5s_ease-out_forwards]">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#07182D] tracking-tight mb-4">
            Where Are You Experiencing Difficulty?
          </h2>
          <p className="text-[#61738C] text-lg">
            Click on a body area to explore how we can help.
          </p>
        </div>

        {/* Main 3-Column Hero Anatomy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center mb-16">
          
          {/* LEFT: Anatomy Regions */}
          <div className="lg:col-span-3 flex flex-col justify-center py-2">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#086B9F] mb-6 pl-4">
              Anatomy Regions
            </h4>
            <div className="flex flex-col space-y-1">
              {bodyAreasList.map((area) => {
                const isActive = selectedArea === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => { setSelectedArea(area.id); setExpandedFaq(0); }}
                    className={`text-left px-5 py-3 rounded-2xl transition-all duration-300 flex items-center gap-4 group ${
                      isActive
                        ? 'bg-[#041326] text-white shadow-xl scale-[1.02] origin-left'
                        : 'bg-transparent text-[#61738C] hover:bg-white hover:shadow-sm hover:text-[#041326]'
                    }`}
                  >
                    <div className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                      <div className={`w-4 h-4 rounded-full border-2 ${isActive ? 'border-[#F5B400]' : 'border-[rgba(7,26,51,0.2)]'}`} />
                    </div>
                    <span className={`text-[15px] tracking-wide flex-1 ${isActive ? 'font-bold text-white' : 'font-semibold'}`}>
                      {area.name}
                    </span>
                    {isActive && (
                      <div className="w-7 h-7 rounded-full bg-[#F5B400] flex items-center justify-center shrink-0 shadow-sm">
                        <ArrowRight className="w-3.5 h-3.5 text-[#041326]" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CENTER: Anatomical Illustration */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-[520px] rounded-[24px] bg-[#041326] overflow-hidden shadow-2xl border border-[rgba(255,255,255,0.05)] group">
            
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,107,159,0.3),transparent_70%)] pointer-events-none mix-blend-screen"></div>

            <div 
              className="w-full h-full relative flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.02]"
              style={{
                transformOrigin: currentData.zoom.origin,
                transform: `scale(${currentData.zoom.scale})`
              }}
            >
              <img
                src={anatomyModelImg}
                alt="Human Anatomy"
                className="w-full h-full object-cover opacity-90 transition-opacity duration-700 mix-blend-screen"
              />

              {/* Focus Glow & Rings */}
              <div 
                className="absolute -translate-x-1/2 -translate-y-1/2 w-32 h-32 pointer-events-none transition-all duration-1000 ease-in-out"
                style={{ top: currentData.markerPos.top, left: currentData.markerPos.left }}
              >
                <div className="absolute inset-0 rounded-full border-[1px] border-[#F5B400]/40 animate-[ping_3s_ease-out_infinite]"></div>
                <div className="absolute inset-4 rounded-full border-[2px] border-[#F5B400]/60 animate-[ping_3s_ease-out_infinite_0.5s]"></div>
                <div className="absolute inset-10 rounded-full bg-[#F5B400] blur-2xl opacity-40"></div>
                
                {/* Marker Label */}
                <div className="absolute top-1/2 left-[calc(100%+5px)] -translate-y-1/2 bg-[#041326]/90 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-md shadow-xl flex items-center gap-2 whitespace-nowrap scale-75 origin-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F5B400]"></div>
                  <span className="text-white text-[9px] font-bold tracking-wider uppercase">{currentData.name}</span>
                </div>
              </div>
            </div>

            {/* Floating Anatomy Badge */}
            <div className="absolute bottom-6 left-6 bg-[rgba(255,255,255,0.08)] backdrop-blur-md border border-[rgba(255,255,255,0.15)] px-6 py-3 rounded-[16px] shadow-2xl z-20 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#F5B400] animate-pulse"></div>
              <span className="text-white font-bold text-xs tracking-widest uppercase">{currentData.name} Anatomy View</span>
            </div>

          </div>

          {/* RIGHT: Condition Details */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-[slideIn_0.5s_ease-out_forwards]">
            
            {/* Condition Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between gap-6 mb-4">
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F5B400] mb-3 flex items-center gap-2">
                    <Flame className="w-3.5 h-3.5" /> Condition Focus
                  </h4>
                  <h1 className="text-4xl lg:text-5xl font-extrabold text-[#071A33] tracking-tight leading-[1.1]">
                    {currentData.title}
                  </h1>
                </div>
              </div>
              <p className="text-[#61738C] text-lg leading-relaxed max-w-xl">
                {currentData.desc}
              </p>
            </div>

            {/* Horizontal Benefit Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {benefits.map((b, i) => (
                <div key={i} className="bg-white p-4 rounded-[16px] shadow-sm border border-[rgba(7,26,51,0.06)] hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div className="mb-4">{b.icon}</div>
                  <div>
                    <h5 className="text-[11px] font-bold text-[#071A33] mb-1 leading-tight">{b.title}</h5>
                    <p className="text-[10px] text-[#61738C] leading-snug">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Common Conditions Chips */}
            <div className="mb-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#071A33] mb-4">Common Conditions We Treat</h4>
              <div className="flex flex-wrap gap-2">
                {currentData.conditions.map((c: string, i: number) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white border border-[rgba(7,26,51,0.1)] text-[#086B9F] text-xs font-bold hover:bg-[#086B9F] hover:text-white hover:border-[#086B9F] transition-all cursor-default shadow-sm">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions & Doctor Profile */}
            <div className="flex flex-col xl:flex-row items-center gap-6">
              <button 
                onClick={onBookClick}
                className="bg-[#F5B400] text-[#041326] px-8 py-4 rounded-[14px] font-bold text-sm tracking-wide shadow-[0_8px_20px_rgba(245,180,0,0.22)] hover:bg-[#FFD45A] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap w-full xl:w-auto group"
              >
                Book a Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Doctor Card */}
              <div className="flex items-center gap-5 bg-white pl-4 pr-8 py-3.5 rounded-full shadow-sm border border-[rgba(7,26,51,0.06)] w-full xl:w-auto justify-center xl:justify-start">
                <img src={doctorPhoto} alt="Dr K Bhavendra" className="w-16 h-16 rounded-full object-cover object-top border-2 border-[#F7FAFD] shadow-sm shrink-0" />
                <div className="flex flex-col justify-center text-left">
                  <span className="text-[10px] text-[#61738C] uppercase tracking-widest font-black mb-0.5">Consult with</span>
                  <span className="text-base font-extrabold text-[#071A33] leading-tight">Dr. K. Bhavendra</span>
                  <span className="text-xs text-[#61738C] font-medium mt-0.5">BPT, MPT (Sports)</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================
            MASTER UI/UX BOTTOM SECTIONS
            Premium Medical Editorial + Dynamic Interactions
        ======================================================== */}
        <div className="mt-12 border-t border-[rgba(7,26,51,0.08)] pt-12 relative">
          
          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-[#071A33] mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-[2px] bg-[rgba(245,180,0,0.4)]"></span>
              Treatment Approach
              <span className="w-12 h-[2px] bg-[rgba(245,180,0,0.4)]"></span>
            </h3>
          </div>

          {/* Premium Stepper */}
          <div 
            className="max-w-5xl mx-auto mb-12 relative px-4"
            onMouseEnter={() => setIsHoveringStepper(true)}
            onMouseLeave={() => setIsHoveringStepper(false)}
          >
            {/* Connecting Line Base */}
            <div className="absolute top-[38px] left-[10%] right-[10%] h-[2px] bg-[rgba(7,26,51,0.06)] -z-10"></div>
            
            {/* Dynamic Connecting Line Progress */}
            <div 
              className="absolute top-[38px] left-[10%] h-[2px] bg-[#168DD0] -z-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ width: `${(activeStep / (journeySteps.length - 1)) * 80}%` }}
            ></div>
            
            <div className="flex justify-between relative z-10">
              {journeySteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = idx < activeStep;
                return (
                  <button 
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center w-40 group outline-none animate-[slideUp_0.8s_ease-out_forwards]"
                    style={{ animationDelay: `${idx * 150}ms`, opacity: 0 }}
                    aria-selected={isActive}
                  >
                    <div className={`w-[76px] h-[76px] rounded-full flex items-center justify-center mb-5 transition-all duration-500 relative ${
                      isActive 
                        ? 'bg-[#086B9F] text-white scale-[1.05] shadow-[0_0_0_4px_rgba(245,180,0,0.3)] border-none' 
                        : isPast
                        ? 'bg-white text-[#086B9F] border-2 border-[#168DD0] shadow-sm'
                        : 'bg-white text-[#10243E] border-2 border-[rgba(7,26,51,0.1)] hover:border-[#168DD0] shadow-sm hover:scale-[1.03]'
                    }`}>
                      <span className="font-extrabold text-[22px] tracking-tight">{step.num}</span>
                    </div>
                    <h5 className={`text-[14px] font-bold mb-2 transition-colors duration-300 ${isActive ? 'text-[#071A33]' : 'text-[#10243E]'}`}>{step.title}</h5>
                    <p className={`text-[12px] leading-relaxed transition-colors duration-300 ${isActive ? 'text-[#61738C]' : 'text-[#61738C]/70'}`}>{step.desc}</p>
                    
                    {/* Active Progress indicator */}
                    {isActive && (
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#F5B400] rounded-full overflow-hidden">
                         <div className="w-full h-full bg-white/60 animate-[slideRight_4s_linear]"></div>
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 4 Cards Master Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            
            {/* TYPE A: SYMPTOMS */}
            <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(7,26,51,0.03)] border border-[rgba(7,26,51,0.06)] relative overflow-hidden group hover:-translate-y-1 transition-all duration-400">
              <div className="p-6 relative z-10 h-full flex flex-col">
                <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#071A33] mb-6 flex items-center gap-3">
                  <span className="w-[3px] h-4 bg-[#F5B400] rounded-full"></span>
                  Presenting Symptoms
                </h4>
                <ul className="space-y-5 relative z-10">
                  {currentData.symptoms.map((sym: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 group/sym transition-all duration-300 hover:translate-x-1 p-2 -ml-2 rounded-xl hover:bg-[rgba(22,141,208,0.05)] cursor-default">
                      <CheckCircle2 className="w-[18px] h-[18px] mt-0.5 text-[#071A33]/20 group-hover/sym:text-[#F5B400] shrink-0 transition-colors duration-300" />
                      <span className="text-[13px] text-[#10243E] font-medium leading-snug">{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Anatomy Pulse Background */}
              <div className="absolute right-[-30%] bottom-[-10%] w-[120%] h-[120%] opacity-[0.12] group-hover:opacity-[0.18] transition-opacity duration-700 pointer-events-none flex items-center justify-center">
                <img src={anatomyModelImg} className="h-full object-contain" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white"></div>
                <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#F5B400]/40 rounded-full blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
              </div>
            </div>

            {/* TYPE B: REAL RESULTS */}
            <div className="bg-[#041326] rounded-[24px] shadow-[0_8px_32px_rgba(4,19,38,0.15)] relative overflow-hidden group text-white hover:-translate-y-1 transition-all duration-400">
              <img src={anatomyModelImg} className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen group-hover:scale-[1.03] transition-transform duration-700" />
              
              <div className="relative z-10 h-full flex flex-col p-6">
                <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-white/70 mb-6 flex items-center gap-3">
                  <span className="w-[3px] h-4 bg-[#F5B400] rounded-full"></span>
                  Real Results
                </h4>
                <div className="space-y-4 mt-auto">
                  {currentData.results.map((res: any, i: number) => (
                    <div key={i} className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] p-5 rounded-[16px] hover:-translate-y-1 hover:border-[#168DD0]/50 hover:bg-[rgba(255,255,255,0.08)] transition-all duration-300 cursor-pointer group/card flex justify-between items-center shadow-lg">
                      <div>
                        <div className="text-[#F5B400] text-[9px] font-bold uppercase tracking-widest mb-1.5">{res.label}</div>
                        <div className="text-[15px] font-bold text-white tracking-wide">{res.value}</div>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/card:bg-[#168DD0] group-hover/card:border-[#168DD0] transition-colors">
                        <ChevronRight className="w-4 h-4 text-white/50 group-hover/card:text-white transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* TYPE C: TESTIMONIAL */}
            <div className="bg-gradient-to-br from-[#086B9F] to-[#041326] rounded-[24px] shadow-[0_8px_32px_rgba(8,107,159,0.2)] relative overflow-hidden text-white p-6 flex flex-col hover:-translate-y-1 transition-all duration-400 group">
              <div className="absolute top-4 right-4 text-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 pointer-events-none">
                 <svg width="140" height="140" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/></svg>
              </div>
              <div className="flex gap-1 mb-6 text-[#F5B400]">
                 {[1,2,3,4,5].map(i => <div key={i} className="animate-[slideUp_0.5s_ease-out_forwards]" style={{ animationDelay: `${i * 100}ms`, opacity: 0 }}>★</div>)}
              </div>
              <p className="text-[15px] font-medium leading-relaxed mb-6 relative z-10">
                "{currentData.testimonial.quote}"
              </p>
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div>
                  <div className="font-bold text-white tracking-wide">{currentData.testimonial.name}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold mt-1">Patient</div>
                </div>
              </div>
            </div>

            {/* TYPE A: FAQS */}
            <div className="bg-white rounded-[24px] shadow-[0_4px_24px_rgba(7,26,51,0.03)] border border-[rgba(7,26,51,0.06)] p-6 hover:-translate-y-1 transition-all duration-400">
              <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#071A33] mb-6 flex items-center gap-3">
                <span className="w-[3px] h-4 bg-[#F5B400] rounded-full"></span>
                Frequent Questions
              </h4>
              <div className="space-y-2">
                {currentData.faqs.map((faq: string, i: number) => {
                  const isOpen = expandedFaq === i;
                  return (
                    <div key={i} className="border-b border-[rgba(7,26,51,0.06)] last:border-0">
                      <button 
                        onClick={() => setExpandedFaq(isOpen ? null : i)}
                        className="w-full flex items-center justify-between text-left py-4 group outline-none"
                        aria-expanded={isOpen}
                      >
                        <span className={`text-[13px] font-bold transition-colors duration-300 ${isOpen ? 'text-[#086B9F]' : 'text-[#10243E] group-hover:text-[#086B9F]'}`}>{faq}</span>
                        <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#086B9F] bg-[#086B9F]' : 'border-[rgba(7,26,51,0.1)] group-hover:border-[#086B9F]'}`}>
                           <Plus className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'text-white rotate-45' : 'text-[#61738C] group-hover:text-[#086B9F]'}`} />
                        </div>
                      </button>
                      <div className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100 mb-4 bg-[#F7FAFD] rounded-xl p-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <p className="text-[12px] text-[#61738C] leading-relaxed">
                            Our standard protocol takes 12-16 weeks depending on severity and compliance, utilizing advanced clinical methods for fast recovery.
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
      <style>{`
        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
