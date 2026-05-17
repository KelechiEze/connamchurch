import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function ValuesSection() {
  return (
    <section className="bg-white py-32 px-4 sm:px-6 lg:px-20 overflow-hidden" id="values-section">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left card */}
          <div className="lg:col-span-3">
             <div className="bg-neutral-50 overflow-hidden shadow-sm border border-neutral-100">
                <img 
                  src="/images/values_commitment_card_1779010534068.png" 
                  className="w-full aspect-square object-cover" 
                  alt="Our Commitment"
                />
                <div className="p-8">
                   <h4 className="text-lg font-bold text-[#1e2a4a] mb-4">Our Commitment</h4>
                   <p className="text-gray-500 text-sm leading-relaxed">
                     Guided by values and a deep sense of responsibility, we strive to create opportunities, empower citizens.
                   </p>
                </div>
             </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-9">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1e2a4a] leading-[0.95] mb-20 tracking-tighter">
              Walking by Faith <br className="hidden md:block"/> in Every Decision
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
               <div>
                  <p className="text-[#8B11B1] font-black uppercase tracking-[0.2em] text-xs mb-4 italic">Isaiah 41:10 (NIV)</p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-bold italic">
                    "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand."
                  </p>
               </div>
               <div>
                  <p className="text-[#8B11B1] font-black uppercase tracking-[0.2em] text-xs mb-4 italic">Philippians 4:13 (NIV)</p>
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed font-bold italic">
                     "I can do all this through him who gives me strength."
                  </p>
               </div>
            </div>

            <div className="mt-20">
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center bg-[#0f172a] text-white overflow-hidden shadow-2xl group transition-all"
              >
                <span className="px-10 py-5 text-sm font-black uppercase tracking-widest">
                  Lift Up A Prayer
                </span>
                <div className="bg-[#8B11B1] p-5">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
