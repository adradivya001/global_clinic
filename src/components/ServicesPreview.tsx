import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Activity, 
  Brain, 
  Trophy, 
  Baby, 
  HeartHandshake, 
  Zap,
  ShieldCheck
} from 'lucide-react';

export const ServicesPreview: React.FC = () => {
  const services = [
    {
      id: 'orthopedic-conditions',
      title: 'Orthopaedic Conditions',
      category: 'Joint, Spine & Bone Care',
      tagline: 'Restoring comfortable movement, spine health, and joint mobility.',
      conditions: ['Back & Neck Pain', 'Knee Osteoarthritis', 'Frozen Shoulder', 'Sciatica', 'Post-Op Rehab'],
      icon: Activity,
      link: '/services/orthopedic-conditions',
      color: 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]',
      iconBg: 'bg-[#B87908] text-white',
      badge: 'Joint & Spine'
    },
    {
      id: 'neurological-conditions',
      title: 'Neurological Conditions',
      category: 'Brain & Nerve Recovery',
      tagline: 'Supporting movement, balance, and independence after neurological events.',
      conditions: ['Stroke Recovery', 'Parkinson’s Mobility', 'Bell’s Palsy', 'Neuropathy', 'Balance Care'],
      icon: Brain,
      link: '/services/neurological-conditions',
      color: 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]',
      iconBg: 'bg-[#B87908] text-white',
      badge: 'Neuro Care'
    },
    {
      id: 'sports-injuries',
      title: 'Sports Injuries',
      category: 'Athletic Recovery & Performance',
      tagline: 'Evidence-guided recovery and safe return-to-sport conditioning.',
      conditions: ['ACL & Ligament Tears', 'Meniscus Recovery', 'Ankle Sprains', 'Tennis Elbow', 'Hamstring Strains'],
      icon: Trophy,
      link: '/services/sports-injuries',
      color: 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]',
      iconBg: 'bg-[#B87908] text-white',
      badge: 'Sports Medicine'
    },
    {
      id: 'pediatric-conditions',
      title: 'Pediatric Conditions',
      category: 'Childhood Movement & Development',
      tagline: 'Gentle, play-informed care to support your child’s developmental milestones.',
      conditions: ['Developmental Delay', 'Cerebral Palsy', 'Toe Walking', 'Torticollis', 'Coordination'],
      icon: Baby,
      link: '/services/pediatric-conditions',
      color: 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]',
      iconBg: 'bg-[#B87908] text-white',
      badge: 'Pediatric Care'
    },
    {
      id: 'geriatric-conditions',
      title: 'Geriatric Conditions',
      category: 'Senior Mobility & Fall Prevention',
      tagline: 'Respectful physical therapy for confidence, balance, and active aging.',
      conditions: ['Age-Related Mobility', 'Balance & Fall Risk', 'Joint Stiffness', 'Post-Fracture', 'Post-Op Senior'],
      icon: HeartHandshake,
      link: '/services/geriatric-conditions',
      color: 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]',
      iconBg: 'bg-[#B87908] text-white',
      badge: 'Senior Care'
    },
    {
      id: 'neuro-rehabilitation',
      title: 'Neuro Rehabilitation',
      category: 'Functional Retraining Programs',
      tagline: 'Comprehensive functional training programs for long-term daily independence.',
      conditions: ['Gait Retraining', 'Trunk Control', 'Upper Limb Function', 'Transfer Training', 'Stamina'],
      icon: Zap,
      link: '/services/neuro-rehabilitation',
      color: 'bg-[#FAF4E8] text-[#B87908] border-[#EAD9B7]',
      iconBg: 'bg-[#B87908] text-white',
      badge: 'Functional Retraining'
    }
  ];

  return (
    <section id="services-preview" className="py-16 lg:py-24 bg-[#FFFDF8] relative overflow-hidden font-sans border-t border-[#EAD9B7] scroll-mt-20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-[#F8EAC9]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#FAF4E8]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF4E8] border border-[#EAD9B7] text-[#B87908] text-xs font-extrabold uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#B87908]" />
              <span>CLINICAL SERVICES &amp; SPECIALTIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#24190F] tracking-tight leading-tight">
              Specialized Physiotherapy Care
            </h2>
            <p className="text-[#65594B] text-sm sm:text-base leading-relaxed font-normal">
              Structured clinical programs tailored to your specific condition, movement limitations, and recovery milestones.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#B87908] hover:bg-[#966205] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all group shrink-0"
          >
            <span>Explore All Clinical Services</span>
            <ArrowRight className="w-4 h-4 text-[#F8EAC9] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Clean Clinical Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;

            return (
              <Link
                key={srv.id}
                to={srv.link}
                className="group p-6 sm:p-7 rounded-3xl bg-[#FFFDF8] hover:bg-white border border-[#EAD9B7] hover:border-[#B87908] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Top: Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${srv.iconBg} flex items-center justify-center shadow-md shadow-[#B87908]/10 group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${srv.color}`}>
                      {srv.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-[#24190F] group-hover:text-[#B87908] transition-colors tracking-tight mb-1.5">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#65594B] font-medium leading-relaxed mb-4">
                    {srv.tagline}
                  </p>

                  {/* Common Conditions Pill Cloud */}
                  <div className="pt-3 border-t border-[#EAD9B7]/70">
                    <span className="block text-[10px] font-black uppercase tracking-wider text-[#65594B]/70 mb-2">
                      Frequently Supported
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {srv.conditions.map((cond, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2.5 py-1 rounded-lg bg-white border border-[#EAD9B7] text-[#24190F] text-[11px] font-semibold group-hover:border-[#D99B24]"
                        >
                          {cond}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Link Action */}
                <div className="mt-6 pt-3.5 border-t border-[#EAD9B7]/70 flex items-center justify-between text-xs font-bold text-[#B87908] group-hover:text-[#966205]">
                  <span>View Condition Programs</span>
                  <div className="w-6 h-6 rounded-full bg-[#FAF4E8] group-hover:bg-[#B87908] group-hover:text-white flex items-center justify-center transition-all">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
