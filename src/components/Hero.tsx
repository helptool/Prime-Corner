import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-app-bg">
      {/* Cinematic Background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ y: yBg, willChange: 'transform' }}
        className="absolute inset-x-0 -top-[20%] w-full h-[140%] origin-top"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#09090B]/60 via-[#09090B]/70 to-app-bg z-10" />
        <img 
          src="https://raw.githubusercontent.com/helptool/Prime-Corner/refs/heads/main/images/Site3.png" 
          alt="Site Area Overview" 
          className="w-full h-full object-cover sm:object-[center_20%] opacity-40 mix-blend-luminosity sepia-[0.3]"
        />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity: opacityText, y: yText, willChange: 'transform, opacity' }}
        className="relative z-20 h-full flex flex-col justify-center items-center px-4 md:px-6 text-center max-w-7xl mx-auto pt-16 md:pt-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="uppercase tracking-[0.4em] sm:tracking-[0.5em] md:tracking-[0.6em] text-gold text-[9px] sm:text-[10px] mb-8 md:mb-10 font-mono flex items-center justify-center gap-4"
        >
          <span className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold/60 block" />
          <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <span className="px-2">100% Owner-Direct Offering</span>
          <span className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <span className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold/60 block" />
        </motion.div>

        <h1 className="font-serif italic text-6xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-tight text-[#FAFAFA] leading-[1.1] mb-8 md:mb-10 drop-shadow-2xl flex flex-col items-center">
          <div className="overflow-hidden pb-4 -mb-4 pt-4 -mt-4">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="block opacity-90"
            >
              Prime Corner
            </motion.span>
          </div>
          <div className="overflow-hidden pb-6 -mb-6 pt-4 -mt-4">
            <motion.span 
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="block not-italic text-transparent bg-clip-text bg-gradient-to-b from-gold via-[#D4AF37] to-[#8C6D1F]"
            >
              Commercial Plot
            </motion.span>
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          className="relative max-w-2xl mx-auto"
        >
          {/* Subtle borders for text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <p className="text-[#A1A1AA] text-sm sm:text-base md:text-xl leading-relaxed font-sans px-8 py-6">
            Directly positioned between both main entry gates of <strong className="text-[#FAFAFA] font-medium tracking-wide">Rajnandgaon Railway Station</strong>.{' '}
            <br className="hidden sm:block mt-2"/>
            A highly visible, high-traffic corner plot offered exclusively by the <span className="text-gold italic font-serif">genuine family owner</span>.
          </p>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <div className="text-[9px] font-mono uppercase tracking-[0.3em] text-gold/50">Explore</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/50 to-transparent origin-top animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  );
}