import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Mail, Phone, ArrowRight } from "lucide-react";

interface Clergy {
  id: number;
  name: string;
  role: string;
  image: string;
  shortBio: string;
  fullBio: string;
  email: string;
  phone: string;
}

const clergyList: Clergy[] = [
  {
    id: 1,
    name: "Canon Chinatu",
    role: "Lead Pastor / Rector",
    image: "/images/church_leaders_portrait_1779011093532.png",
    shortBio: "A visionary leader dedicated to the spiritual growth and transformation of the Harrisburg community.",
    fullBio: "Canon Chinatu has served the Anglican community for over two decades. His ministry is characterized by a deep commitment to expository preaching and pastoral care. He believes in the power of the Holy Spirit to transform lives and is passionate about equipping the local church for global mission. Under his leadership, the Anglican Church of the Pentecost has grown into a vibrant family of believers dedicated to the truth of the Gospel.",
    email: "canonchinatu57@gmail.com",
    phone: "717-623-2113"
  },
  {
    id: 2,
    name: "Rev. Dr. Sarah Miller",
    role: "Associate Priest",
    image: "/images/church_hero_spirit_1779011074740.png",
    shortBio: "Specializing in family ministry and theological education with a heart for community outreach.",
    fullBio: "Rev. Dr. Sarah Miller brings a wealth of experience in theological education and family counseling. She oversees our education programs and is instrumental in our local outreach initiatives. Her heart beats for the marginalized, and she works tirelessly to ensure that our church remains a sanctuary for all souls seeking grace.",
    email: "sarah.miller@acp-hbg.org",
    phone: "609-382-6583"
  }
];

export function ClergyPage() {
  const [selectedClergy, setSelectedClergy] = useState<Clergy | null>(null);

  return (
    <div className="bg-white pt-32 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 mb-24">
        {/* Header */}
        <div className="mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B11B1]"
          >
            Spiritual Leadership
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-none"
          >
            Meet Our <br className="hidden md:block"/> Clergy
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-xs uppercase tracking-[0.3em] font-bold leading-relaxed"
          >
            The under-shepherds chosen to guide, nourish, and protect the flock on our collective journey toward Christ.
          </motion.p>
        </div>

        {/* Grid Layout - 2 per row as requested */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-neutral-100">
           {clergyList.map((clergy) => (
             <div 
               key={clergy.id} 
               className="group relative aspect-[4/5] overflow-hidden cursor-pointer border-r border-b border-neutral-100"
               onClick={() => setSelectedClergy(clergy)}
             >
                <img 
                  src={clergy.image} 
                  alt={clergy.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo">
                   <p className="text-[#8B11B1] text-xs font-black uppercase tracking-[0.3em] mb-2">{clergy.role}</p>
                   <h3 className="text-4xl font-black text-white uppercase tracking-tighter italic mb-4">{clergy.name}</h3>
                   <p className="text-white/70 text-sm font-medium leading-relaxed mb-6 max-w-md">
                      {clergy.shortBio}
                   </p>
                   <div className="flex items-center gap-4 text-white font-black uppercase tracking-widest text-[10px]">
                      <span>Read Full Biography</span>
                      <ArrowRight className="w-4 h-4" />
                   </div>
                </div>

                {/* Static Name Label */}
                <div className="absolute top-10 left-10 group-hover:opacity-0 transition-opacity duration-500">
                   <h4 className="text-xl font-black text-white uppercase tracking-tighter drop-shadow-lg">{clergy.name}</h4>
                   <div className="w-8 h-1 bg-[#8B11B1] mt-2" />
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Full Bio Modal/Overlay */}
      <AnimatePresence>
        {selectedClergy && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-3xl"
          >
             <motion.div 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 100, opacity: 0 }}
               transition={{ type: "spring", damping: 30, stiffness: 200 }}
               className="bg-white w-full max-w-6xl h-full md:h-auto overflow-hidden flex flex-col md:flex-row relative"
             >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedClergy(null)}
                  className="absolute top-6 right-6 z-10 w-12 h-12 bg-[#1e2a4a] text-white flex items-center justify-center hover:bg-[#8B11B1] transition-colors"
                >
                   <X className="w-6 h-6" />
                </button>

                <div className="md:w-1/2 h-[40vh] md:h-[80vh]">
                   <img src={selectedClergy.image} className="w-full h-full object-cover" alt={selectedClergy.name} />
                </div>
                
                <div className="md:w-1/2 p-8 md:p-20 overflow-y-auto max-h-[60vh] md:max-h-[80vh] flex flex-col justify-center">
                   <motion.p 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     className="text-[#8B11B1] text-xs font-black uppercase tracking-[0.4em] mb-4"
                   >
                     {selectedClergy.role}
                   </motion.p>
                   <motion.h2 
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: 0.1 }}
                     className="text-5xl md:text-7xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-none mb-10"
                   >
                     {selectedClergy.name}
                   </motion.h2>
                   
                   <motion.div 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.2 }}
                     className="space-y-6 text-gray-500 text-base leading-relaxed font-medium mb-12"
                   >
                      <p>{selectedClergy.fullBio}</p>
                   </motion.div>

                   <motion.div 
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.3 }}
                     className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-neutral-100"
                   >
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-widest text-neutral-300">Email Address</p>
                         <p className="font-bold text-[#1e2a4a] flex items-center gap-2">
                            <Mail className="w-4 h-4 text-[#8B11B1]" />
                            {selectedClergy.email}
                         </p>
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-widest text-neutral-300">Contact Number</p>
                         <p className="font-bold text-[#1e2a4a] flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[#8B11B1]" />
                            {selectedClergy.phone}
                         </p>
                      </div>
                   </motion.div>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
