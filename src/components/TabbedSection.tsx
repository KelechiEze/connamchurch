import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const tabs = [
  {
    id: "01.",
    title: "Youth Ministry",
    description: "Nurturing our young people to walk in the power of the Spirit and discover their divine purpose in God's kingdom.",
    image: "/src/assets/images/peace_sign_girl_1779010514133.png"
  },
  {
    id: "02.",
    title: "Global Outreach",
    description: "Taking the gospel to the ends of the earth and providing sanctuary for those in need through missions and relief.",
    image: "/src/assets/images/church_community_outreach_1779011107802.png"
  },
  {
    id: "03.",
    title: "Media & Media",
    description: "Spread the light through modern technology, ensuring our services and teachings reach everyone, everywhere.",
    image: "/src/assets/images/church_sermon_media_1779011123956.png"
  },
  {
    id: "04.",
    title: "Kingdom Resources",
    description: "Study Scripture and draw closer to God through His living Word with our curated study tools and resources.",
    image: "/src/assets/images/hero_bg_abstract_1779009650835.png"
  }
];

export function TabbedSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#f5f4f0] py-24 px-4 sm:px-6 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e2a4a] text-center mb-16 tracking-tight">
          Our Spiritual Ministries
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Tabs List */}
          <div className="lg:col-span-4 space-y-2">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 transition-all flex items-center gap-4 ${
                  activeTab === index 
                  ? "bg-[#e11d48] text-white shadow-xl scale-105" 
                  : "bg-white/50 text-[#1e2a4a] hover:bg-white"
                }`}
              >
                <span className={`text-sm font-black ${activeTab === index ? "text-white/80" : "text-[#e11d48]"}`}>
                  {tab.id}
                </span>
                <span className="text-lg font-black tracking-tight">{tab.title}</span>
              </button>
            ))}
          </div>

          {/* Active Content - Image */}
          <div className="lg:col-span-4 relative h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="w-full h-full"
              >
                <img 
                  src={tabs[activeTab].image} 
                  className="w-full h-full object-cover shadow-2xl" 
                  alt="Feature"
                />
                {/* Speech bubble arrow decoration like in screenshot */}
                <div className="absolute -bottom-6 left-1/2 -translated-x-1/2 w-12 h-12 bg-[#f5f4f0] rotate-45 hidden lg:block" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Active Content - Description */}
          <div className="lg:col-span-4 bg-white p-12 shadow-sm h-full flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <p className="text-sm font-black text-[#1e2a4a] mb-6">{tabs[activeTab].id}</p>
                <p className="text-gray-600 text-base leading-relaxed mb-12">
                  {tabs[activeTab].description}
                </p>
                
                {/* Hand drawn arrow icon placeholder - svg */}
                <div className="relative mb-12 ml-4">
                   <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#e11d48]/30">
                      <path d="M10 10C30 50 70 50 90 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M70 90L90 90L90 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                   </svg>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center bg-[#0f172a] text-white overflow-hidden shadow-lg group self-start"
                >
                  <span className="px-6 py-3 text-sm font-bold tracking-wide">
                    Join The Campaign
                  </span>
                  <div className="bg-[#e11d48] p-3 group-hover:bg-[#f43f5e] transition-colors">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
