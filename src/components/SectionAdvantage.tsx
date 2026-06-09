import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

import { Landmark, ShieldCheck, Briefcase, Building, Wallet, Gem } from 'lucide-react';

const advantages = [
  { id: "01", title: "Dual Road Exposure", desc: "A 35 ft primary front thoroughfare combined with an 11 ft secondary side access route, ensuring multipoint vehicular and pedestrian visibility." },
  { id: "02", title: "Proven Neighborhood", desc: "The immediate adjacent plot is already fully developed into a 4-story active commercial building, removing all speculative risk from the area's growth." },
  { id: "03", title: "Owner Direct Negotiation", desc: "Available directly through the genuine owner. No complicated broker networks, ensuring transparent and straightforward proceedings." },
  { id: "04", title: "Perfect For Institutions", desc: "The proportions (18x50 on a true corner) offer a blank canvas for purpose-built banking halls, ATMs, or enterprise branches." }
];

const acquisitions = [
  { name: 'Banks & ATMs', icon: Landmark },
  { name: 'Insurance Branches', icon: ShieldCheck },
  { name: 'Financial Inst.', icon: Briefcase },
  { name: 'NBFCs', icon: Wallet },
  { name: 'Corporate Dealerships', icon: Building },
  { name: 'Luxury Showrooms', icon: Gem }
];

function AdvantageCard({ adv, index }: { adv: any, index: number }) {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start 100%", "start 40%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ 
        opacity, 
        scale, 
        top: `calc(6rem + ${index * 1.5}rem)`,
        willChange: 'transform, opacity' 
      }}
      className="group relative p-2 md:p-4 bg-gradient-to-br from-[#18181B] to-[#09090B] border border-gold/30 rounded-sm overflow-hidden sticky shadow-2xl shadow-gold/5 mb-24 md:mb-40 w-full mx-auto"
    >
      {/* Royal Frame accents */}
      <div className="absolute top-0 left-0 w-6 h-6 md:w-8 md:h-8 border-t border-l border-gold/50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-6 h-6 md:w-8 md:h-8 border-t border-r border-gold/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-6 h-6 md:w-8 md:h-8 border-b border-l border-gold/50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-6 h-6 md:w-8 md:h-8 border-b border-r border-gold/50 pointer-events-none" />

      <div className="relative h-full p-8 md:p-12 lg:p-16 bg-[#09090B] border border-[#27272A] group-hover:border-gold/30 transition-colors duration-700 overflow-hidden outline outline-1 outline-offset-[-4px] outline-gold/5 group-hover:outline-gold/20 z-10 w-full rounded-sm">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0 pointer-events-none" />
        
        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center relative z-10 w-full">
          <div className="md:col-span-4 flex flex-col items-start border-b md:border-b-0 md:border-r border-[#27272A] pb-8 md:pb-0 md:pr-8">
            <div className="font-mono text-gold text-5xl md:text-7xl font-light opacity-50 mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              {adv.id}
            </div>
            <div className="w-16 h-[1px] bg-gold/50 mt-4 group-hover:w-full transition-all duration-700 ease-out" />
          </div>
          
          <div className="md:col-span-8 flex flex-col">
            <h4 className="font-serif italic text-2xl md:text-4xl lg:text-5xl font-light text-[#FAFAFA] mb-4 md:mb-6 tracking-tight group-hover:text-gold transition-colors duration-500">
              {adv.title}
            </h4>
            <p className="text-[#A1A1AA] leading-relaxed font-sans text-sm md:text-lg max-w-2xl">
              {adv.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SectionAdvantage() {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="py-20 md:py-40 bg-app-bg px-4 md:px-6 relative border-t border-[#27272A]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gold mb-6 relative inline-block font-semibold">
            <span className="hidden md:block absolute -left-12 top-1/2 w-8 h-[1px] bg-gold opacity-50" />
            Unmatched Potential
            <span className="hidden md:block absolute -right-12 top-1/2 w-8 h-[1px] bg-gold opacity-50" />
          </h2>
          <h3 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#FAFAFA]">
            A genuine opportunity <br className="hidden md:block"/> for forward-thinking institutions.
          </h3>
        </motion.div>

        <div className="mt-16 md:mt-32 pt-12 pb-32 md:pb-[30vh] w-full max-w-5xl mx-auto">
          {advantages.map((adv, i) => (
            <AdvantageCard key={adv.id} adv={adv} index={i} />
          ))}
        </div>

        {/* Institutional Potential */}
      </div>

      <div className="relative w-full overflow-hidden mt-16 md:mt-32 pt-16 md:pt-32 pb-20 border-t border-[#27272A]">
        {/* Animated Corner Flowers at the Screen Corners */}
        <CornerFlower className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] absolute -top-[150px] -left-[150px] md:-top-[300px] md:-left-[300px] opacity-30" />
        <CornerFlower className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] absolute -bottom-[150px] -right-[150px] md:-bottom-[300px] md:-right-[300px] opacity-30" />

        <div className="max-w-5xl mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, delay: 0.2 }}
          >
            <div className="text-center mb-12 md:mb-16">
              <h3 className="font-serif italic text-3xl md:text-5xl font-light mb-4 text-[#FAFAFA]">Ideal Acquisitions</h3>
              <p className="text-[#A1A1AA] text-sm md:text-base font-sans mt-4 max-w-xl mx-auto">
                Zoned and perfectly proportioned for high-value administrative and retail operations.
              </p>
            </div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 1.2,
                    staggerChildren: 0.15,
                    ease: [0.16, 1, 0.3, 1]
                  }
                }
              }}
              className="relative p-2 md:p-6 bg-gradient-to-br from-[#18181B] to-[#09090B] border border-gold/30 rounded-sm shadow-2xl mx-auto max-w-4xl"
            >
              {/* Royal Frame accents */}
              <div className="absolute top-0 left-0 w-6 h-6 md:w-10 md:h-10 border-t border-l border-gold/50 pointer-events-none" />
              <div className="absolute top-0 right-0 w-6 h-6 md:w-10 md:h-10 border-t border-r border-gold/50 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-6 h-6 md:w-10 md:h-10 border-b border-l border-gold/50 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-6 h-6 md:w-10 md:h-10 border-b border-r border-gold/50 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-px bg-[#27272A] border border-[#27272A] overflow-hidden outline outline-1 outline-offset-[-4px] outline-gold/10 shadow-inner rounded-sm">
                {acquisitions.map((acq, i) => (
                  <motion.div 
                    key={acq.name}
                    variants={{
                      hidden: { opacity: 0, scale: 0.9 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                    whileHover={{ backgroundColor: "rgba(212, 175, 55, 0.05)" }}
                    className="flex flex-col items-center justify-center p-6 md:p-10 bg-[#09090B] hover:bg-[#18181B] transition-colors duration-500 group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="relative z-10 mb-4 text-[#A1A1AA] group-hover:text-gold transition-colors duration-500">
                      <acq.icon className="w-8 h-8 md:w-10 md:h-10 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" strokeWidth={1} />
                    </div>
                    <div className="relative z-10 text-[10px] md:text-xs text-[#FAFAFA] font-sans tracking-widest uppercase text-center opacity-80 group-hover:opacity-100 transition-opacity">
                      {acq.name}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const CornerFlower = ({ className }: { className?: string }) => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
    className={`absolute pointer-events-none z-10 ${className}`}
  >
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold opacity-25">
      {/* Outer intricate rings */}
      <circle cx="100" cy="100" r="98" stroke="currentColor" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="100" cy="100" r="82" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
      
      {/* 24-point intricate star/flower */}
      {[...Array(24)].map((_, i) => (
        <path
          key={i}
          d={i % 2 === 0 
            ? "M100 100 L100 15 C105 40, 110 60, 100 100 Z" 
            : "M100 100 L100 30 C102 50, 105 70, 100 100 Z"}
          fill="currentColor"
          opacity={i % 2 === 0 ? 0.8 : 0.4}
          transform={`rotate(${i * 15} 100 100)`}
        />
      ))}
      
      {/* Inner details */}
      <circle cx="100" cy="100" r="45" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
      <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1" />
      <path d="M100 70 L105 85 L120 100 L105 115 L100 130 L95 115 L80 100 L95 85 Z" fill="currentColor" opacity="0.6" />
      <circle cx="100" cy="100" r="10" fill="currentColor" opacity="0.8" />
    </svg>
  </motion.div>
);
