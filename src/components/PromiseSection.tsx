import { motion } from "motion/react";

export function PromiseSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-end px-4 sm:px-6 lg:px-20">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url('/images/hero_promise_bg_1779010237110.png')` }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Floating "Our Promise" Card */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full max-w-md bg-white p-10 lg:p-14 shadow-2xl border-t-8 border-[#8B11B1]"
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rotate-45 border-t border-l border-[#8B11B1]/10 hidden lg:block" />
        
        <h2 className="text-4xl lg:text-5xl font-black text-[#1e2a4a] mb-8 tracking-tight">Our Mission</h2>
        
        <p className="text-gray-600 mb-8 leading-relaxed font-medium">
          Our mission is to bring hope and help to those who are hurting in our community and beyond. 
          We welcome you to partner with us in this mission.
        </p>
        
        <ul className="space-y-4">
          {[
            "Live in the Power of the Holy Spirit",
            "Be a family member in our growing home",
            "Renewed by God’s Spirit and Wisdom",
          ].map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 group">
              <div className="mt-1.5 w-2 h-2 bg-[#8B11B1] group-hover:scale-150 transition-transform" />
              <span className="text-gray-700 font-bold text-sm lg:text-base">{item}</span>
            </li>
          ))}
        </ul>

        {/* Speech buble tip for mobile/tablet */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rotate-45 shadow-2xl lg:hidden" />
      </motion.div>
    </section>
  );
}
