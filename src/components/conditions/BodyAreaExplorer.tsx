import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
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
    title: 'Neck Pain & Posture Care',
    desc: 'Targeted physical therapy for cervical stiffness, tension headaches, pinched nerves and postural strain.',
    concerns: ['Cervical stiffness & headache', 'Whiplash & muscular spasm', 'Pinched nerve / radiculopathy', 'Desk-related postural fatigue'],
    markerPos: { top: '15%', left: '50%' },
    zoom: { scale: 1.8, origin: '50% 15%' },
  },
  shoulder: {
    id: 'shoulder',
    name: 'Shoulder Joint',
    title: 'Shoulder & Rotator Cuff Care',
    desc: 'Comprehensive rehabilitation for rotator cuff tears, frozen shoulder capsular tightness and impingement.',
    concerns: ['Frozen shoulder stiffness', 'Rotator cuff strain or tear', 'Overhead reaching pain', 'Impingement syndrome & bursitis'],
    markerPos: { top: '23%', left: '35%' },
    zoom: { scale: 1.6, origin: '35% 23%' },
  },
  elbow: {
    id: 'elbow',
    name: 'Elbow & Forearm',
    title: 'Elbow Tendinopathy & Strain',
    desc: 'Focused care for repetitive strain, tennis elbow, golfer’s elbow and forearm muscle imbalance.',
    concerns: ['Tennis elbow (lateral epicondylitis)', 'Golfer’s elbow (medial epicondylitis)', 'Weakened grip strength', 'Repetitive strain from daily work'],
    markerPos: { top: '40%', left: '26%' },
    zoom: { scale: 1.8, origin: '26% 40%' },
  },
  wrist: {
    id: 'wrist',
    name: 'Wrist & Hand',
    title: 'Wrist Mobility & Nerve Health',
    desc: 'Restoring wrist articulation, relieving carpal tunnel pressure, and rebuilding fine motor control.',
    concerns: ['Carpal tunnel syndrome tingling', 'Repetitive strain from typing/devices', 'Post-fracture stiffness', 'De Quervain’s tenosynovitis'],
    markerPos: { top: '49%', left: '23%' },
    zoom: { scale: 2.0, origin: '23% 49%' },
  },
  back: {
    id: 'back',
    name: 'Lumbar Spine & Back',
    title: 'Lumbar Spine & Core Care',
    desc: 'Advanced protocols for sciatica nerve decompression, herniated discs, acute spasms and core stability.',
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
    desc: 'Biomechanical care for ACL tears, meniscus injuries, knee osteoarthritis and post-surgical stabilization.',
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
    <section id="body-explorer" className="py-16 lg:py-24 bg-[#F7FAFD] relative overflow-hidden font-sans scroll-mt-20">
      {/* Background Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(22,141,208,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(245,180,0,0.04),transparent_50%)] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-[2px] bg-[#F5B400]" />
            <span className="text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase">
              INTERACTIVE ANATOMY
            </span>
            <div className="w-8 h-[2px] bg-[#F5B400]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Where Are You Experiencing Difficulty?
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Select a body region to explore common musculoskeletal conditions and evidence-backed therapy.
          </p>
        </div>

        {/* 3-Part Main Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* 1. Body Area Navigation List (Left Column) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#086B9F] mb-3 px-2">
              Select Body Region
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {areasList.map((area) => {
                const isActive = selectedArea === area.id;
                return (
                  <button
                    key={area.id}
                    onClick={() => setSelectedArea(area.id)}
                    className={`text-left px-4 py-3 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isActive
                        ? 'bg-[#041326] text-white shadow-lg border border-white/10'
                        : 'bg-white text-[#07182D] hover:bg-[#EAF4FC] border border-[#08213D]/6'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-2.5 h-2.5 rounded-full transition-colors ${
                          isActive ? 'bg-[#F5B400]' : 'bg-[#08213D]/20 group-hover:bg-[#086B9F]'
                        }`}
                      />
                      <span className={`text-xs sm:text-sm ${isActive ? 'font-bold' : 'font-semibold'}`}>
                        {area.name}
                      </span>
                    </div>
                    {isActive ? (
                      <ChevronRight className="w-4 h-4 text-[#F5B400] shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#086B9F] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Anatomical Visual Viewport (Center Column) */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-[380px] sm:h-[420px] lg:h-[460px] rounded-[24px] bg-[#041326] overflow-hidden shadow-xl border border-white/10 group">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,107,159,0.35),transparent_70%)] pointer-events-none mix-blend-screen" />

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
                <div className="absolute inset-0 rounded-full border border-[#F5B400]/40 animate-ping" />
                <div className="absolute inset-6 rounded-full bg-[#F5B400] blur-xl opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#F5B400] border-2 border-[#041326] shadow-lg" />
              </div>
            </div>

            {/* Active Region Label Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F5B400] animate-pulse" />
              <span className="text-white text-[11px] font-bold tracking-wider uppercase">
                {currentArea.name}
              </span>
            </div>
          </div>

          {/* 3. Compact Information Panel (Right Column) */}
          <div className="lg:col-span-4 bg-white rounded-[24px] border border-[#08213D]/8 p-6 sm:p-7 shadow-[0_10px_35px_rgba(8,33,61,0.06)] flex flex-col justify-between">
            <div className="space-y-4">
              {/* Header */}
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#086B9F] block mb-1">
                  CONDITION FOCUS
                </span>
                <h3 className="text-2xl font-extrabold text-[#07182D]">
                  {currentArea.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-[#526A84] text-xs sm:text-sm leading-relaxed">
                {currentArea.desc}
              </p>

              {/* Common Concerns Bullets */}
              <div>
                <h4 className="text-[11px] font-black uppercase tracking-[0.15em] text-[#07182D] mb-2.5 flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#F5B400]" />
                  Common Problems
                </h4>
                <ul className="space-y-2">
                  {currentArea.concerns.map((concern, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#07182D] font-medium leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#086B9F] shrink-0 mt-0.5" />
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-5 mt-4 border-t border-[#08213D]/6 space-y-2.5">
              <button
                onClick={handleExploreTreatments}
                className="w-full py-3 px-4 rounded-xl bg-[#08213D] hover:bg-[#041326] text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 text-[#F5B400] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onBookClick}
                className="w-full py-2.5 px-4 rounded-xl bg-[#EAF4FC] hover:bg-[#FFF4D6] text-[#086B9F] hover:text-[#07182D] font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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
