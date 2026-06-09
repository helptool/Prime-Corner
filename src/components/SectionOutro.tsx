import { motion } from 'motion/react';
import { ArrowRight, MapPin, Phone } from 'lucide-react';

export default function SectionOutro() {
  return (
    <>
      {/* Transformation Concept Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-app-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#FAFAFA]">Immediate Development Potential.</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "Clear Ownership",
                title: "Direct Transaction",
                desc: "Engage with the genuine owner. Clear titles and straightforward negotiations without middle-men."
              },
              {
                step: "Proven Blueprint",
                title: "Adjacent Success",
                desc: "The neighboring 4-story construction proves the immediate infrastructural viability and strong commercial demand here."
              },
              {
                step: "Institutional Use",
                title: "Built-to-Suit Possibility",
                desc: "Perfect footprint for banking halls, ATMs, or enterprise branches leveraging the constant railway station footfall."
              }
            ].map((phase, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="bg-[#18181B]/80 border border-[#27272A] p-8 md:p-10 rounded-sm flex flex-col h-full"
              >
                <div className="text-[10px] text-gold font-mono tracking-[0.3em] uppercase mb-6 md:mb-8">{phase.step}</div>
                <h4 className="text-xl md:text-2xl font-serif italic text-[#FAFAFA] mb-4">{phase.title}</h4>
                <p className="text-[#A1A1AA] font-sans text-sm leading-relaxed mt-auto">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Segment */}
      <section className="py-16 md:py-24 px-4 md:px-6 border-t border-[#27272A] bg-app-bg" id="map-section">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <h4 className="font-serif italic text-3xl md:text-4xl text-[#FAFAFA] mb-3">Station Road Rajnandgaon</h4>
              <p className="text-[#A1A1AA] text-sm font-sans flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                Strategic Railway Transit Positioning
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-[#18181B] border border-[#3F3F46] px-4 py-3 rounded-sm text-[10px] text-gold uppercase tracking-widest font-mono">
                BOTH GATES ACCESSIBLE
              </div>
              <a href="https://maps.app.goo.gl/Te93seBeDHoiVjLA7" target="_blank" rel="noopener noreferrer" className="bg-[#D4AF37] text-[#09090B] px-6 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-[#C5A059] transition-colors flex items-center justify-center w-full sm:w-auto gap-2 shadow-lg">
                Open in Maps <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2 }}
            className="relative p-3 md:p-8 bg-[#09090B] shadow-2xl w-full mx-auto outline outline-1 outline-offset-8 outline-gold/20"
          >
            {/* Multiple nested borders for Royal feel */}
            <div className="absolute inset-0 border border-gold/40 pointer-events-none m-1 md:m-2" />
            <div className="absolute inset-0 border border-[#3F3F46] pointer-events-none m-2 md:m-4" />
            
            {/* Royal Frame accents */}
            <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-l-2 border-gold pointer-events-none -translate-x-1 -translate-y-1" />
            <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-2 border-r-2 border-gold pointer-events-none translate-x-1 -translate-y-1" />
            <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-l-2 border-gold pointer-events-none -translate-x-1 translate-y-1" />
            <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-2 border-r-2 border-gold pointer-events-none translate-x-1 translate-y-1" />
            
            {/* Decorative Corner Dots */}
            <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-gold rotate-45 pointer-events-none hidden md:block" />
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gold rotate-45 pointer-events-none hidden md:block" />
            <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-gold rotate-45 pointer-events-none hidden md:block" />
            <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-gold rotate-45 pointer-events-none hidden md:block" />

            <div className="relative w-full h-[400px] md:h-[600px] bg-[#09090B] group border border-[#27272A]">
              <div className="absolute inset-0 bg-gold/10 mix-blend-color pointer-events-none z-10" />
              <div className="absolute inset-0 bg-[#09090B]/30 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-700" />
              
              <iframe 
                src="https://maps.google.com/maps?q=Rajnandgaon%20Railway%20Station&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 z-0 grayscale contrast-125 opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Opportunity / Call to Action */}
      <section className="relative py-24 md:py-32 border-t border-[#27272A] flex items-center justify-center overflow-hidden px-4 md:px-6">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gold/[0.03] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          
          {/* Owner Identity Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            className="mb-16 md:mb-20 max-w-2xl mx-auto border border-[#3F3F46] rounded-sm bg-[#09090B]/80 backdrop-blur-md p-8 md:p-14 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-[#18181B] rounded-full flex items-center justify-center mb-6 border border-[#3F3F46] shadow-inner">
              <span className="font-serif italic text-2xl md:text-3xl text-gold">SG</span>
            </div>
            <p className="text-[#71717A] uppercase tracking-[0.3em] text-[9px] md:text-[10px] mb-3 font-semibold">Owned & Managed By</p>
            <h4 className="font-serif italic text-3xl md:text-4xl text-[#FAFAFA] mb-3">Dr. Sangeeta Gupta</h4>
            
            <div className="space-y-1 mb-6">
              <p className="text-gold text-sm md:text-base font-sans font-medium">Asst. Professor of Chemistry (Guest)</p>
              <p className="text-[#A1A1AA] text-xs md:text-sm font-sans"> Govt. Shivnath Science College</p>
              <p className="text-[#71717A] text-[10px] md:text-xs font-sans uppercase tracking-wider pt-2">(w/o Mr. Sanjeev Gupta)</p>
            </div>
            
            <div className="w-12 h-px bg-[#3F3F46] mx-auto mb-6" />
            
            <p className="text-[#71717A] text-xs md:text-sm font-sans italic leading-relaxed px-4">
               "We believe in transparent, straightforward negotiations. No intermediaries, just a direct conversation between honest parties."
            </p>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-serif italic text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-[#FAFAFA] mb-6 md:mb-8"
          >
            Connect Directly.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-sm md:text-base text-[#A1A1AA] font-sans mb-12 md:mb-16 leading-relaxed max-w-xl mx-auto px-2"
          >
            This 18×50 corner footprint at Rajnandgaon Railway Station is available for direct acquisition or long-term institutional lease. Speak exclusively with the genuine property owner, completely broker-free.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <div className="flex flex-col gap-3 w-full sm:w-auto">
              <a href="tel:+919300068808" className="px-8 py-4 bg-[#D4AF37] text-[#09090B] text-[14px] font-bold tracking-wider hover:bg-[#C5A059] transition-colors flex items-center justify-center gap-3 rounded-sm shadow-xl shadow-gold/10">
                <Phone className="w-4 h-4 fill-current" />
                +91 93000 68808
              </a>
              <a href="tel:+917987358855" className="px-8 py-4 bg-transparent text-[#FAFAFA] border border-[#3F3F46] hover:border-gold text-[14px] font-bold tracking-wider transition-colors flex items-center justify-center gap-3 rounded-sm text-center">
                <Phone className="w-4 h-4" />
                +91 79873 58855
              </a>
            </div>
            
            <div className="hidden sm:block w-px h-16 bg-[#3F3F46]" />

            <div className="flex flex-col gap-3 w-full sm:w-auto mt-2 sm:mt-0">
              <a href="https://wa.me/919300068808" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-transparent text-[#A1A1AA] hover:text-gold border border-transparent hover:border-[#3F3F46] text-[13px] font-bold tracking-wider transition-colors flex items-center justify-center gap-2 rounded-sm text-center">
                WhatsApp Primarily
              </a>
              <p className="text-[10px] text-[#71717A] uppercase tracking-widest text-center mt-1">Available 10 AM - 6 PM</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#09090B] border-t border-[#27272A] pt-20 md:pt-32 pb-10 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          {/* Mr. & Mrs. Gupta Royal Branding */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center mb-20 md:mb-28 relative"
          >
            {/* Background glowing aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[60%] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
            
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="flex items-center justify-center gap-4 mb-6 opacity-80"
            >
              <div className="h-[1px] w-16 md:w-32 bg-gradient-to-r from-transparent to-gold/50" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rotate-45 bg-gold" />
              <div className="h-[1px] w-16 md:w-32 bg-gradient-to-l from-transparent to-gold/50" />
            </motion.div>

            <h2 className="font-serif italic text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6">
              <span className="text-[#FAFAFA] opacity-90 drop-shadow-2xl block relative z-10">Mr. & Mrs.</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-gold via-[#D4AF37] to-[#8C6D1F] block mt-2 relative z-10 drop-shadow-[0_0_30px_rgba(212,175,55,0.3)]">Gupta</span>
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-gold/80 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] relative z-10 mt-2"
            >
              A Legacy of Trust • Direct Owners
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
            <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left border-t border-[#27272A] md:border-t-0 pt-8 md:pt-0">
              <div className="font-serif text-3xl font-light tracking-widest text-[#FAFAFA] uppercase mb-6 opacity-50">
                PRIME<span className="text-gold italic">CORNER</span>
              </div>
              <p className="text-[#71717A] text-sm leading-relaxed max-w-sm mb-8 font-sans">
                A highly secure, broker-free commercial real estate opportunity located directly between the twin gates of Rajnandgaon Railway Station.
              </p>
              <div className="px-4 py-2 border border-[#27272A] bg-[#18181B] rounded-sm inline-flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] text-[#A1A1AA] uppercase tracking-widest">Available For Acquisition</span>
              </div>
            </div>
            
            <div className="md:col-span-3 md:col-start-7 flex flex-col items-center md:items-start w-full">
              <h5 className="text-[#FAFAFA] text-xs font-mono uppercase tracking-[0.2em] mb-6">Property Details</h5>
              <ul className="space-y-4 text-[#A1A1AA] text-sm font-sans w-full max-w-[300px]">
                <li className="flex justify-between border-b border-[#27272A] pb-2"><span>Dimensions</span> <span className="text-[#FAFAFA]">18' × 50'</span></li>
                <li className="flex justify-between border-b border-[#27272A] pb-2"><span>Total Area</span> <span className="text-[#FAFAFA]">900 Sq.Ft.</span></li>
                <li className="flex justify-between border-b border-[#27272A] pb-2"><span>Front Road</span> <span className="text-[#FAFAFA]">35 FT (Main)</span></li>
                <li className="flex justify-between pb-2"><span>Side Road</span> <span className="text-[#FAFAFA]">11 FT</span></li>
              </ul>
            </div>

            <div className="md:col-span-3 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
              <h5 className="text-[#FAFAFA] text-xs font-mono uppercase tracking-[0.2em] mb-6">Direct Contact</h5>
              <div className="space-y-4 font-sans w-full max-w-[300px]">
                <a href="tel:+919300068808" className="block text-[#A1A1AA] hover:text-gold transition-colors text-sm">+91 93000 68808</a>
                <a href="tel:+917987358855" className="block text-[#A1A1AA] hover:text-gold transition-colors text-sm">+91 79873 58855</a>
                <div className="pt-4 mt-4 border-t border-[#27272A]">
                  <p className="text-[10px] text-[#71717A] uppercase tracking-widest leading-relaxed">
                    Owned by<br/><span className="text-[#A1A1AA]">Dr. Sangeeta Gupta</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-[#27272A] flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-[#71717A] text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} Prime Corner Rajnandgaon. All Rights Reserved.
            </p>
            <p className="text-[#71717A] text-[10px] uppercase tracking-widest">
              Direct Owner Representation • No Brokers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
