import React from "react";
import { motion } from "motion/react";

export function VideoScriptureSection() {
  return (
    <section className="relative min-h-[60vh] flex items-center py-24 px-4 sm:px-8 lg:px-20 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source 
            src="/images/connamvideo.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="max-w-7xl mx-auto relative z-20 w-full">
        <div className="max-w-3xl">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-left"
          >
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B11B1]">
                Divine Strength
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] tracking-tighter italic uppercase">
                WALK IN POWER,<br />
                NOT IN WEARINESS.
              </h2>
            </div>
            
            <div className="relative pl-8 border-l-4 border-[#8B11B1]">
              <p className="text-xl md:text-3xl font-bold text-white italic leading-tight">
                "But they that wait upon the Lord shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint."
              </p>
              <p className="mt-4 text-xs font-black uppercase tracking-widest text-white/50">
                — Isaiah 40:31
              </p>
            </div>

            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-xl font-medium">
              We believe in a God who restores the weary and empowers the faithful. Our community is built on the promise of spiritual renewal through prayer, fellowship, and the living Word.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
