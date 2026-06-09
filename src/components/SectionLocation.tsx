import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { ArrowRight, Activity, Map, Eye, X, ZoomIn } from 'lucide-react';

export default function SectionLocation() {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full py-20 md:py-32 bg-app-bg px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Typography & Story */}
          <motion.div
            initial={{ opacity: 0, x: -40, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-serif italic text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-8">
              A Proven Hub of <br className="hidden sm:block"/><span className="not-italic text-[#A1A1AA]">Daily Commerce.</span>
            </h2>
            <p className="text-[#A1A1AA] text-sm md:text-base font-sans leading-relaxed mb-12">
              Situated masterfully between BOTH entry gates of <strong className="text-[#FAFAFA] font-medium">Rajnandgaon Railway Station</strong>.
              Unlike speculative investments, this location guarantees continuous footfall. 
              The adjacent half of this very plot has already been developed into a bustling 3-story commercial structure—validating the massive on-ground demand.
            </p>

            <div className="space-y-8">
              {[
                { icon: Activity, title: "Proven Commercial Demand", desc: "Adjacent plot is fully constructed and commercially active, providing immediate proof of value." },
                { icon: Eye, title: "Unmissable Corner Visibility", desc: "Dual road frontage ensures instant brand presence to massive daily commuter crowds." },
                { icon: Map, title: "Direct Owner Offering", desc: "Experience seamless acquisition or long-term lease terms straight from the actual owner." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.15 }}
                  className="flex gap-6 items-start"
                >
                  <div className="mt-1 p-3 rounded-full bg-[#27272A]/30 border border-[#3F3F46]">
                    <item.icon strokeWidth={1.5} className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h5 className="font-serif italic text-xl text-[#FAFAFA] mb-2">{item.title}</h5>
                    <p className="text-[#A1A1AA] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Abstract Imagery/Data Representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full p-3 md:p-5 bg-gradient-to-b from-[#18181B] to-[#09090B] border border-gold/30 rounded-sm shadow-2xl flex items-center justify-center group"
          >
            {/* Inner royal border/frame */}
            <div className="relative w-full h-full border border-gold/20 overflow-hidden outline outline-1 outline-offset-[-4px] outline-gold/10">
              <div className="absolute inset-0 bg-[#09090B]/10 z-10 pointer-events-none" />
              
              <div 
                className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full overflow-hidden bg-[#09090B] cursor-pointer group"
                onClick={() => setIsFullscreen(true)}
              >
                <motion.img 
                  style={{ y: yImage, scale: 1.15, willChange: 'transform' }}
                  src="https://raw.githubusercontent.com/helptool/Prime-Corner/refs/heads/main/images/Site.png" 
                  alt="Site plan showing corner plot" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 sepia-[0.3] hover:sepia-0"
                />
                <div className="absolute inset-0 bg-[#09090B]/0 group-hover:bg-[#09090B]/40 transition-colors duration-500 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="bg-[#18181B]/80 backdrop-blur-md px-6 py-3 border border-gold/30 rounded-sm flex items-center gap-3 text-gold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ZoomIn className="w-5 h-5" />
                    <span className="text-xs uppercase tracking-widest font-mono">View Fullscreen</span>
                  </div>
                </div>
              </div>
              
              {/* Cinematic overlay UI */}
              <div className="absolute inset-0 z-20 p-4 md:p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-center w-full">
                  <div className="text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold font-mono drop-shadow-md bg-[#09090B]/80 px-3 py-2 border border-gold/20 backdrop-blur-sm self-start shadow-xl">
                    <span>Rajnandgaon Station</span>
                  </div>
                  <div className="flex items-center gap-2 text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold font-mono drop-shadow-md bg-[#09090B]/80 px-3 py-2 border border-gold/20 backdrop-blur-sm shadow-xl">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold animate-pulse"/> LIVE TRAFFIC
                  </div>
                </div>
              </div>
              
              {/* Ornamental Gold Corners */}
              <div className="absolute top-2 left-2 w-6 h-6 md:w-10 md:h-10 border-t border-l border-gold/60 z-30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-6 h-6 md:w-10 md:h-10 border-t border-r border-gold/60 z-30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-6 h-6 md:w-10 md:h-10 border-b border-l border-gold/60 z-30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 md:w-10 md:h-10 border-b border-r border-gold/60 z-30 pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#09090B] flex items-center justify-center p-4 md:p-8 backdrop-blur-xl"
            onClick={() => setIsFullscreen(false)}
          >
            <button 
              className="absolute top-6 right-6 z-[110] text-gold hover:text-[#FAFAFA] transition-colors p-2 bg-[#18181B] border border-gold/30 rounded-sm"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="w-6 h-6" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src="https://raw.githubusercontent.com/helptool/Prime-Corner/refs/heads/main/images/Site.png" 
                alt="Site plan showing corner plot fullscreen" 
                className="w-full h-full object-contain border border-gold/20"
              />
              
              <div className="absolute font-mono text-[10px] text-gold uppercase tracking-[0.3em] bottom-4 bg-[#09090B]/80 px-4 py-2 border border-gold/20 backdrop-blur-sm">
                Prime Corner Site Layout
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
