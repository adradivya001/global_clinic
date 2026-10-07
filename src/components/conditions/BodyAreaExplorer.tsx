import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import anatomyModelImg from '../../assets/anatomy_model.png';

interface BodyAreaExplorerProps {
  onBookClick: () => void;
}

interface AreaData {
  id: string;
  name: string;
  title: string;
  desc: string;
  concerns: string[];
  markerPos: { top: string; left: string };
  zoom: { scale: number; origin: string };
}

const BODY_AREAS: Record<string, AreaData> = {
  neck: {
    id: 'neck',
    name: 'Neck & Cervical Spine',
    title: 'Neck Pain & Cervical Care',
    desc: 'Targeted physical therapy for cervical stiffness, tension headaches, pinched nerve roots, and desk postural strain.',
    concerns: ['Cervical stiffness & headache', 'Whiplash & muscular spasm', 'Pinched nerve / radiculopathy', 'Desk-related postural fatigue'],
    markerPos: { top: '15%', left: '50%' },
    zoom: { scale: 1.8, origin: '50% 15%' },
  },
  shoulder: {
    id: 'shoulder',
    name: 'Shoulder Joint',
    title: 'Shoulder & Rotator Cuff Care',
    desc: 'Comprehensive rehabilitation for rotator cuff tears, frozen shoulder capsular tightness, and impingement syndromes.',
    concerns: ['Frozen shoulder stiffness', 'Rotator cuff strain or tear', 'Overhead reaching pain', 'Impingement syndrome & bursitis'],
    markerPos: { top: '23%', left: '35%' },
    zoom: { scale: 1.6, origin: '35% 23%' },
  },
  elbow: {
    id: 'elbow',
    name: 'Elbow & Forearm',
    title: 'Elbow Tendinopathy & Strain',
    desc: 'Focused care for repetitive strain, tennis elbow, golfer’s elbow, and forearm muscle imbalance.',
    concerns: ['Tennis elbow (lateral epicondylitis)', 'Golfer’s elbow (medial epicondylitis)', 'Weakened grip strength', 'Repetitive strain from daily work'],
    markerPos: { top: '40%', left: '26%' },
    zoom: { scale: 1.8, origin: '26% 40%' },
  },
  wrist: {
    id: 'wrist',
    name: 'Wrist & Hand',
    title: 'Wrist Mobility & Nerve Health',
    desc: 'Restoring wrist articulation, relieving carpal tunnel compression, and rebuilding fine motor control.',
    concerns: ['Carpal tunnel syndrome tingling', 'Repetitive strain from typing/devices', 'Post-fracture stiffness', 'De Quervain’s tenosynovitis'],
    markerPos: { top: '49%', left: '23%' },
    zoom: { scale: 2.0, origin: '23% 49%' },
  },
  back: {
    id: 'back',
    name: 'Lumbar Spine & Back',
    title: 'Lumbar Spine & Disc Care',
    desc: 'Advanced protocols for sciatica nerve decompression, herniated discs, acute spasms, and deep core stability.',
    concerns: ['Lower back ache & muscle spasm', 'Sciatica radiating leg pain', 'Herniated or bulging discs', 'Stiffness after prolonged sitting'],
    markerPos: { top: '42%', left: '50%' },
    zoom: { scale: 1.5, origin: '50% 42%' },
  },
  hip: {
    id: 'hip',
    name: 'Hip & Pelvis',
    title: 'Hip Joint & Pelvic Stability',
    desc: 'Relieving hip osteoarthritis, labral strain, bursitis, and improving walking and gait biomechanics.',
    concerns: ['Hip osteoarthritis discomfort', 'Bursitis & outer hip soreness', 'Groin pain when walking or climbing', 'Post-hip replacement rehab'],
    markerPos: { top: '52%', left: '42%' },
    zoom: { scale: 1.5, origin: '42% 52%' },
  },
  knee: {
    id: 'knee',
    name: 'Knee Joint',
    title: 'Knee & Ligament Rehabilitation',
    desc: 'Biomechanical care for ACL tears, meniscus injuries, knee osteoarthritis, and post-surgical stabilization.',
    concerns: ['ACL & ligament sprains/tears', 'Meniscus damage & locking', 'Knee osteoarthritis wear & stiffness', 'Pain going up or down stairs'],
    markerPos: { top: '72%', left: '38%' },
    zoom: { scale: 1.7, origin: '38% 72%' },
  },
  ankle: {
    id: 'ankle',
    name: 'Ankle & Foot',
    title: 'Ankle Stability & Plantar Care',
    desc: 'Restoring ankle ligaments, resolving Achilles tendonitis, and treating morning heel pain or flat feet.',
    concerns: ['Ankle sprains & chronic instability', 'Plantar fasciitis morning heel pain', 'Achilles tendinopathy stiffness', 'Flat feet & arch strain'],
    markerPos: { top: '90%', left: '42%' },
    zoom: { scale: 2.2, origin: '42% 90%' },
  },
};

export const BodyAreaExplorer: React.FC<BodyAreaExplorerProps> = ({ onBookClick }) => {
  const [selectedArea, setSelectedArea] = useState<string>('knee');
  const navigate = useNavigate();

  const currentArea = BODY_AREAS[selectedArea];
  const areasList = Object.values(BODY_AREAS);

  const handleExploreTreatments = () => {
    navigate('/treatments');
  };

  return (
    <section id="body-explorer" className="py-16 lg:py-24 bg-[#F4F7F4] relative overflow-hidden font-sans scroll-mt-20 border-t border-stone-200/80">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold text-xs tracking-[0.2em] uppercase mb-4 shadow-sm">
            <Activity className="w-3.5 h-3.5 text-emerald-600" />
            <span>INTERACTIVE ANATOMY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-[1.15] mb-3">
            Where Are You Experiencing Difficulty?
          </h2>

          <p className="text-stone-600 text-base leading-relaxed">
            Select an anatomical region to explore common musculoskeletal conditions and evidence-guided therapies.
          </p>
        </div>

        {/* 3-Part Main Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* 1. Body Area Navigation List (Left Column) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-800 mb-3 px-2">
              Select Anatomical Region
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {areasList.map((area) => {
                const isActive = selectedArea === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`text-left px-4 py-3 rounded-2xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-emerald-700 text-white shadow-md shadow-emerald-700/20'
                        : 'bg-white text-stone-800 hover:bg-emerald-50/60 border border-stone-200'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isActive ? 'bg-orange-300' : 'bg-stone-300 group-hover:bg-emerald-600'
                        }`}
                      />
                      <span className={`text-xs sm:text-sm ${isActive ? 'font-black' : 'font-semibold'}`}>
                        {area.name}
                      </span>
                    </div>
                    {isActive ? (
                      <ChevronRight className="w-4 h-4 text-orange-200 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-700 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Anatomical Visual Viewport (Center Column) */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-[380px] sm:h-[420px] lg:h-[460px] rounded-3xl bg-stone-900 overflow-hidden shadow-xl border border-stone-800 group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,150,105,0.35),transparent_70%)] pointer-events-none mix-blend-screen" />

            {/* Scaled / Positioned Anatomical Model */}
            <div
              className="w-full h-full relative flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transformOrigin: currentArea.zoom.origin,
                transform: `scale(${currentArea.zoom.scale})`,
              }}
            >
              <img
                src={anatomyModelImg}
                alt="Human Anatomy Explorer"
                className="w-full h-full object-cover opacity-90 mix-blend-screen"
              />

              {/* Dynamic Focus Pin Marker */}
              <div
                className="absolute -translate-x-1/2 -translate-y-1/2 w-24 h-24 pointer-events-none transition-all duration-700 ease-in-out"
                style={{ top: currentArea.markerPos.top, left: currentArea.markerPos.left }}
              >
                <div className="absolute inset-0 rounded-full border border-orange-400/40 animate-ping" />
                <div className="absolute inset-6 rounded-full bg-orange-400 blur-xl opacity-60" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-orange-400 border-2 border-stone-900 shadow-lg" />
              </div>
            </div>

            {/* Active Region Label Overlay */}
            <div className="absolute bottom-4 left-4 bg-stone-950/80 backdrop-blur-md border border-stone-700 px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                {currentArea.name}
              </span>
            </div>
          </div>

          {/* 3. Compact Information Panel (Right Column) */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-stone-200 p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-800 block mb-1">
                  CONDITION FOCUS
                </span>
                <h3 className="text-2xl font-black text-stone-900">
                  {currentArea.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                {currentArea.desc}
              </p>

              {/* Common Concerns Bullets */}
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-stone-900 mb-2.5 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Common Presentations</span>
                </h4>
                <ul className="space-y-2">
                  {currentArea.concerns.map((concern, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700 font-semibold leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-5 mt-4 border-t border-stone-100 space-y-2.5">
              <button
                onClick={handleExploreTreatments}
                className="w-full py-3 px-4 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-emerald-200 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-200"
              >
                <span>Book for this area &rarr;</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
