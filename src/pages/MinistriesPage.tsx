import React from "react";
import { motion } from "motion/react";
import { Users, Heart, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Ministry {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ElementType;
  tagline: string;
}

const ministries: Ministry[] = [
  {
    id: 1,
    title: "Women's Ministry",
    subtitle: "Mothers' Union",
    tagline: "Spiritual Care for Every Woman",
    description: "In the Anglican tradition, the women's ministry is known as the Mothers' Union. This is the home-making department where women and mothers meet for prayers, studies and teaching on sundry issues that promote good Christian family and marital experiences. Mothers’ Union in our church is the best forum for spiritual care specific to mothers, singles and all women.",
    image: "/images/womens_ministry_portrait_1779017576860.png",
    icon: Heart
  },
  {
    id: 2,
    title: "Youth Ministry",
    subtitle: "Anglican Youth Fellowship (AYF)",
    tagline: "Building a Christian Worldview",
    description: "The Anglican Youth Fellowship (AYF) is devoted to ministering to young people from the middle through high school. This is the age for strong doctrinal formation and grounding in the Christian worldview of life. Your child should not later abandon Christ or fall prey to predatory demonic philosophies if he or she has had a sound spiritual formation in the youth department. We try and answer practical questions confronting today’s youths in the market place, while encouraging them to be faithful to the word of God.",
    image: "/images/youth_ministry_group_1779017593705.png",
    icon: Users
  },
  {
    id: 3,
    title: "Children Ministry",
    subtitle: "The Foundation",
    tagline: "Introducing Christ to Young Minds",
    description: "This department cares for all children from Kindergarten through 6th grade. This is the sanctuary for introducing Christ to young minds and planting the seeds of faith that will grow for a lifetime. We provide a safe, nurturing environment where the Word of God comes alive through age-appropriate teaching and joyful worship.",
    image: "/images/children_ministry_room_1779017611317.png",
    icon: Sparkles
  }
];

export function MinistriesPage() {
  return (
    <div className="bg-white pt-32 min-h-screen font-sans">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        
        {/* Header Hero */}
        <div className="mb-32 space-y-8 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B11B1]"
          >
            Our Departments
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-9xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-[0.8]"
          >
            Hearts <br />
            In Service
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm md:text-base font-bold uppercase tracking-[0.3em] leading-relaxed max-w-2xl"
          >
            Our ministries are the heartbeat of our community, designed to nurture faith at every stage of life's journey.
          </motion.p>
        </div>

        {/* Ministries List */}
        <div className="space-y-48 pb-32">
          {ministries.map((ministry, index) => (
            <div 
              key={ministry.id} 
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-16 lg:gap-32 items-center`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/2 aspect-square lg:aspect-[4/5] bg-neutral-100 relative group overflow-hidden"
              >
                <img 
                  src={ministry.image} 
                  alt={ministry.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1e2a4a]/10 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Floating Stat/Icon Box */}
                <div className={`absolute bottom-0 ${index % 2 === 0 ? "right-0" : "left-0"} bg-[#8B11B1] p-8 md:p-12 text-white`}>
                   <ministry.icon className="w-8 h-8 mb-4" />
                   <div className="text-xl font-black uppercase tracking-tighter italic">Join us</div>
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="space-y-2">
                  <p className="text-[#8B11B1] text-[10px] font-black uppercase tracking-[0.4em]">
                    {ministry.subtitle}
                  </p>
                  <h2 className="text-5xl md:text-7xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-none">
                     {ministry.title}
                  </h2>
                </div>

                <div className="h-1 w-20 bg-[#1e2a4a]" />

                <div className="space-y-6">
                  <p className="text-gray-400 text-xs font-black uppercase tracking-widest italic">
                    {ministry.tagline}
                  </p>
                  <p className="text-gray-600 text-base md:text-lg font-medium leading-relaxed">
                     {ministry.description}
                  </p>
                </div>

                <div className="pt-8">
                  <Link to="/prayer">
                    <button className="flex items-center gap-4 bg-[#1e2a4a] text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:bg-[#8B11B1] transition-all group">
                       <span>Get Involved</span>
                       <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1e2a4a] p-16 md:p-32 text-center space-y-12 mb-32"
        >
           <h3 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">
              A Place For <br className="hidden md:block" /> Every Soul
           </h3>
           <p className="text-white/60 text-xs font-black uppercase tracking-[0.4em] max-w-xl mx-auto">
              Our church is not just a building; it's a home where every member of the family is valued and nurtured in the Spirit.
           </p>
           <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact">
                <button className="bg-[#8B11B1] text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-white hover:text-[#8B11B1] transition-all">
                   Contact Us
                </button>
              </Link>
              <Link to="/news">
                <button className="border-2 border-white/20 text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:border-white transition-all">
                   View Calendar
                </button>
              </Link>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
