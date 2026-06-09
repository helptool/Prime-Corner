import { motion } from 'motion/react';

export default function SectionTechnical() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-[#09090B] px-4 md:px-6 overflow-hidden">
      {/* Background Satellite/Site Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <motion.img 
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 0.8, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://raw.githubusercontent.com/helptool/Prime-Corner/refs/heads/main/images/Site2.png"
          alt="Site Area Background"
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity sepia-[0.3]"
        />
        {/* Overlays for smooth blending */}
        <div className="absolute inset-0 bg-[#09090B]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B] via-transparent to-[#09090B] opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090B] via-[#09090B]/30 to-[#09090B] opacity-70" />
        
        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-[0.07]" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
          
          {/* Visual Blueprint Diagram */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-square w-full max-w-md mx-auto pointer-events-none bg-[#09090B]/40 backdrop-blur-sm rounded-lg overflow-hidden border border-[#27272A] shadow-2xl">
              {/* MAIN FRONT ROAD (Bottom) */}
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-[#09090B]/80 border-t border-[#3F3F46] z-10 flex items-center justify-center md:px-6">
                <span className="font-mono text-[10px] md:text-xs text-[#71717A] tracking-[0.3em]">MAIN FRONT ROAD • 35 FT</span>
              </div>

              {/* SIDE ROAD (Right) */}
              <div className="absolute top-0 bottom-14 right-0 w-14 bg-[#09090B]/80 border-l border-[#3F3F46] z-10 flex items-center justify-center">
                <span className="font-mono text-[10px] text-[#71717A] tracking-[0.3em] rotate-90 whitespace-nowrap">SIDE ROAD • 11 FT</span>
              </div>

              {/* INNER AREA (Top Houses + Alley + Plots) */}
              <div className="absolute top-0 bottom-14 left-0 right-14 flex flex-col">
                {/* 1. Surrounding Constructed Properties */}
                <div className="flex-1 w-full bg-[#09090B]/50 relative flex items-center justify-center">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, #71717A 0, #71717A 1px, transparent 0, transparent 8px)" }} />
                  <div className="bg-[#09090B]/80 px-2 py-1 rounded-sm border border-[#27272A] z-10 drop-shadow-lg">
                    <span className="font-mono text-[7px] md:text-[9px] text-[#71717A] tracking-[0.1em] uppercase">Constructed Residential</span>
                  </div>
                </div>

                {/* 2. Alleyway */}
                <div className="h-4 w-full bg-[#09090B] border-y border-[#3F3F46] flex items-center justify-center z-10">
                  <span className="font-mono text-[6px] md:text-[7px] text-[#71717A] tracking-[0.3em] uppercase">4 FT ALLEYWAY</span>
                </div>

                {/* 3. The 50FT Depth Split Plots */}
                <div className="h-[65%] w-full flex">
                  {/* Left Half (Adjacent 4-Story Building) */}
                  <div className="w-1/2 h-full bg-[#18181B]/60 border-r border-[#3F3F46]/70 flex flex-col items-center justify-center p-2 relative">
                    <div className="absolute inset-2 border border-solid border-[#71717A]/20 rounded-sm pointer-events-none" />
                    <div className="text-center z-10 opacity-80">
                      <span className="block font-mono text-[8px] md:text-[10px] text-[#71717A] tracking-[0.1em] uppercase drop-shadow-md">Adjacent</span>
                      <span className="block font-mono text-[8px] md:text-[10px] text-[#71717A] tracking-[0.1em] uppercase mt-1 drop-shadow-md">4-Story Bldg</span>
                      <span className="block font-mono text-[8px] md:text-[10px] text-[#71717A] tracking-[0.1em] uppercase mt-1 drop-shadow-md">(Acquired)</span>
                    </div>
                  </div>

                  {/* Right Half (Available Corner Plot) */}
                  <div className="w-1/2 h-full relative bg-gold/5 flex">
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                      className="w-full h-full relative shadow-[0_0_30px_rgba(212,175,55,0.15)] bg-gold/10 border-2 border-gold flex items-center justify-center overflow-hidden"
                    >
                      <div className="absolute inset-0 blueprint-grid opacity-20" />
                      <div className="flex flex-col items-center justify-center text-center font-mono text-gold uppercase font-bold z-10 drop-shadow-md">
                        <span className="tracking-[0.2em] text-[10px] md:text-xs">18' × 50' PLOT</span>
                        <span className="text-[7px] md:text-[8px] tracking-[0.1em] text-white opacity-70 mt-2 font-light border border-white/20 bg-[#09090B]/50 px-2 flex items-center justify-center py-0.5 rounded-sm">AVAILABLE</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Compass / Orientation marker */}
              <div className="absolute top-2 left-2 p-1.5 bg-[#09090B] rounded border border-[#27272A] shadow-md font-mono text-[8px] text-[#71717A] flex flex-col items-center z-20">
                <div className="w-px h-3 bg-[#71717A] mb-1" />
                N
              </div>
            </div>
          </motion.div>

          {/* Text/Specs */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-8 md:space-y-12 mt-8 lg:mt-0"
          >
            <div>
              <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4 md:mb-6 text-[#FAFAFA]">
                Technical Blueprint.
              </h2>
              <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed font-sans">
                Meticulously positioned facing the South-East, maximizing daylight penetration for commercial setups. 
                The 18x50 rectangular footprint provides an efficient framework for banking halls, ATMs, or enterprise branches.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-y-10 gap-x-8 border-t border-[#27272A] pt-10">
              <div>
                <dt className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">Total Area</dt>
                <dd className="font-serif text-2xl font-light text-[#FFF5E1]">~900 sq ft</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">Dimensions</dt>
                <dd className="font-serif text-2xl font-light text-[#FFF5E1]">18' frontage</dd>
              </div>
              <div>
                <dt className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">Primary Access</dt>
                <dd className="font-serif text-2xl font-light text-[#FFF5E1]">35 ft Road</dd>
              </div>
              <div>
                 <dt className="text-[10px] tracking-[0.3em] text-gold uppercase mb-2">Orientation</dt>
                 <dd className="font-serif text-2xl font-light text-[#FFF5E1]">South-East</dd>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
