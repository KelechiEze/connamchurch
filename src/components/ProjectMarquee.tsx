import { motion } from "motion/react";

const projects = [
  { id: 1, title: "Youth Empowerment Ministry", description: "Nurturing the next generation in faith and wisdom." },
  { id: 2, title: "Global Mission Outreach", description: "Spreading the word and providing aid across borders." },
  { id: 3, title: "Kingdom Tool Resources", description: "Equipping the saints for the work of ministry." },
  { id: 4, title: "Sunday Worship Services", description: "Come and be renewed by God's holy presence." },
  { id: 5, title: "Community Hope Initiative", description: "Bringing help to those hurting in our community." },
  { id: 6, title: "Intercessory Prayer Chain", description: "Lifting up needs and believing God for answers." },
];

export function ProjectMarquee() {
  // Triple the list to ensure smooth infinite loop
  const marqueeItems = [...projects, ...projects, ...projects];

  return (
    <div className="bg-white py-12 md:py-20 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="text-[#8B11B1] uppercase tracking-[0.4em] font-black text-xs mb-4">Our Walking Faith</h2>
        <p className="text-[#1e2a4a] text-3xl md:text-5xl font-black tracking-tight">Equipping for the Kingdom</p>
      </div>
      
      <div className="relative flex whitespace-nowrap overflow-hidden py-4">
        <motion.div
          animate={{
            x: ["0%", "-33.33%"],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-4"
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-block min-w-[320px] md:min-w-[420px] bg-white border border-gray-100 p-10 shadow-sm hover:shadow-xl hover:border-[#8B11B1]/30 transition-all cursor-default group"
            >
              <div className="w-12 h-1 bg-[#8B11B1] mb-6 transform origin-left group-hover:scale-x-150 transition-transform" />
              <h3 className="text-[#1e2a4a] text-xl font-black mb-4">{item.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
