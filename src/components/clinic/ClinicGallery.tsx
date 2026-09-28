import React from 'react';
import { Eye, Sparkles } from 'lucide-react';
import heroBg from '../../assets/hero_bg.png';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  span: string;
}

export const ClinicGallery: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-1',
      title: 'Consultation & Clinical Assessment Suite',
      category: 'Treatment Area',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
      span: 'lg:col-span-8 lg:row-span-2 min-h-[380px] lg:min-h-[480px]',
    },
    {
      id: 'gallery-2',
      title: 'Manual Therapy & Spinal Realignment',
      category: 'Therapy Space',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-4 min-h-[230px]',
    },
    {
      id: 'gallery-3',
      title: 'Active Mobility & Exercise Rehabilitation',
      category: 'Exercise Area',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-4 min-h-[230px]',
    },
    {
      id: 'gallery-4',
      title: 'Targeted Movement & Biomechanical Training',
      category: 'Functional Rehab',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-6 min-h-[260px]',
    },
    {
      id: 'gallery-5',
      title: 'Clean & Comfortable Patient Environment',
      category: 'Clinic Atmosphere',
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80',
      span: 'lg:col-span-6 min-h-[260px]',
    },
  ];

  return (
    <section id="inside-clinic" className="py-16 lg:py-24 bg-[#F7FAFD] relative overflow-hidden font-sans">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FC] text-[#086B9F] font-bold text-xs tracking-[0.2em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#086B9F]" />
            <span>CLINIC ENVIRONMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#07182D] tracking-tight leading-[1.15] mb-3">
            Inside Global Physiotherapy
          </h2>

          <p className="text-[#526A84] text-base leading-relaxed">
            Take a visual tour through our clean, dedicated therapy spaces and rehabilitation environment.
          </p>
        </div>

        {/* Editorial Asymmetrical Visual Gallery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden border border-[#08213D]/8 shadow-[0_8px_30px_rgba(8,33,61,0.04)] bg-slate-900 ${item.span}`}
            >
              {/* Image with smooth zoom on hover */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Ambient Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041326]/90 via-[#041326]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-bold uppercase tracking-wider text-amber-300">
                  {item.category}
                </span>
              </div>

              {/* Bottom Label & Info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10 flex items-end justify-between gap-4">
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl leading-snug tracking-tight group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105">
                  <Eye className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
