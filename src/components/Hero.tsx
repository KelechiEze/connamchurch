import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "/src/assets/images/church_hero_spirit_1779011074740.png",
  "/src/assets/images/hero_bg_community_1779009595537.png",
  "/src/assets/images/church_sermon_media_1779011123956.png",
  "/src/assets/images/hero_bg_abstract_1779009650835.png",
];

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden" id="hero-section">
      {/* Background Image Slider with Overlay */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`Hero Background ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B11B1]/40 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Text Content */}
        <div className="w-full lg:w-3/4 text-white py-12 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Live in the Power <br className="hidden lg:block" /> of the Holy Spirit
            </h1>
            <p className="text-base md:text-lg text-white/90 font-medium mb-12 max-w-3xl leading-relaxed">
              Come and be renewed by God’s Spirit. <br className="hidden sm:block"/> Discover a deeper walk with Christ in our growing community.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/prayer" className="contents">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center bg-white text-[#8B11B1] overflow-hidden shadow-2xl"
                  id="hero-cta-primary"
                >
                  <span className="px-10 py-5 text-sm font-black uppercase tracking-widest">
                    Lift Up A Prayer
                  </span>
                  <div className="bg-[#8B11B1] p-5">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </motion.button>
              </Link>
              
              <Link to="/about" className="contents">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group flex items-center bg-transparent border-2 border-white/50 text-white overflow-hidden transition-all px-10 py-5 text-sm font-black uppercase tracking-widest"
                  id="hero-cta-secondary"
                >
                  Get To Know Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative transition to marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/80 to-transparent z-20" />
    </section>
  );
}
