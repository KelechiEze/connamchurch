import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const row1Images = [
  "/src/assets/images/church_hero_spirit_1779011074740.png",
  "/src/assets/images/church_community_outreach_1779011107802.png",
  "/src/assets/images/news_grid_1_1779011181863.png",
  "/src/assets/images/church_sermon_media_1779011123956.png",
  "/src/assets/images/hero_bg_community_1779009595537.png",
];

const row2Images = [
  "/src/assets/images/church_leaders_portrait_1779011093532.png",
  "/src/assets/images/news_featured_1_1779011146657.png",
  "/src/assets/images/news_coverage_1_1779011165326.png",
  "/src/assets/images/hero_bg_abstract_1779009650835.png",
  "/src/assets/images/church_community_outreach_1779011107802.png",
];

export function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="bg-white pt-32">
      {/* HERO SECTION */}
      <section className="relative h-[80vh] flex items-center px-4 sm:px-6 lg:px-20 overflow-hidden">
        {/* Fixed Background */}
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url('/src/assets/images/church_hero_spirit_1779011074740.png')` }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="max-w-7xl mx-auto relative z-20 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-12"
          >
            Anglican Church <br/> <span className="text-[#8B11B1]">of the Pentecost</span>
          </motion.h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-base md:text-lg text-white/90 font-medium leading-relaxed max-w-2xl"
            >
              Harrisburg, Pennsylvania is an evangelical, Bible believing, and Holy Ghost empowered church rooted in the tradition of Anglican liturgical worship.
            </motion.p>
            <div className="flex justify-end hidden lg:flex">
               <div className="w-32 h-32 border-4 border-[#8B11B1] flex items-center justify-center animate-spin-slower">
                  <span className="text-white font-black text-sm tracking-widest uppercase rotate-12">Faith First</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-neutral-50 px-4 sm:px-6 lg:px-20 py-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
           <div className="lg:col-span-5">
              <h2 className="text-xs font-black uppercase tracking-[0.5em] text-[#8B11B1] mb-8">Who We Are</h2>
              <div className="relative">
                 <img 
                   src="/src/assets/images/church_hero_spirit_1779011074740.png" 
                   className="w-full aspect-[3/4] object-cover shadow-2xl" 
                   alt="Spirit"
                 />
                 <div className="absolute -bottom-10 -right-10 bg-white p-8 shadow-xl hidden md:block">
                    <p className="text-4xl font-black text-[#1e2a4a] italic">"The Power of the Holy Spirit"</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-7 flex flex-col justify-center space-y-10">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed first-letter:text-7xl first-letter:font-black first-letter:text-[#8B11B1] first-letter:mr-3 first-letter:float-left">
                We uphold the authority of the holy scriptures as received by the Church as the only rule of faith that contains information that are adequate for the salvation of the individual person. It is our belief that humanity is depraved, but the individual person can experience salvation through the grace of God by faith in the finished work of Jesus Christ.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that the church is a body of persons who have not only experienced God’s saving grace, but that they are bound through the baptismal covenant in corporately seeking to deepen their relationship with God – Father, Son and Holy Spirit. The local church exists to make Christ’s goodnews known to lost souls, by equipping the saints to exercise their gifts in various aspects of missionary endeavor.
              </p>
           </div>
        </div>
      </section>

      {/* OUR MISSION */}
      <section className="px-4 sm:px-6 lg:px-20 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-6xl md:text-8xl font-black text-[#1e2a4a] tracking-tight mb-8">Our Mission</h2>
            <p className="text-lg text-gray-500 max-w-3xl">We are committed to intentional engagement in these core pillars of our faith and community service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                title: "Expository Preaching", 
                desc: "Informed expository preaching and teaching of the word of God in ways that are faithful to the intention of the revealed word." 
              },
              { 
                title: "Systematic Discipling", 
                desc: "Discipling of the saints so that they may continue to be transformed to conform to the image of the Son." 
              },
              { 
                title: "Mobilizing Believers", 
                desc: "Mobilizing believers into ministry and mission from their immediate neighborhoods to distant worlds." 
              },
              { 
                title: "Spiritual Networking", 
                desc: "Networking with other congregations which share our passion in confronting the powers of darkness in the power of the Holy Spirit." 
              },
              { 
                title: "Conscientious Engagement", 
                desc: "Engaging the saints to be ready for the Lord’s return to the earth through faithful service and prayer." 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 border border-neutral-100 hover:border-[#8B11B1]/30 transition-all group"
              >
                <div className="w-12 h-12 bg-neutral-50 flex items-center justify-center mb-8 border border-neutral-100 group-hover:bg-[#8B11B1] group-hover:text-white transition-colors">
                  <span className="font-black">0{i+1}</span>
                </div>
                <h3 className="text-xl font-black text-[#1e2a4a] mb-4 group-hover:text-[#8B11B1] transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed font-semibold">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INFINITE SLIDER SECTION */}
      <section className="py-24 overflow-hidden bg-neutral-900 border-y border-white/5">
        <div className="mb-16 px-4 text-center">
           <h2 className="text-white text-4xl font-black tracking-tighter italic">Faith in Motion</h2>
        </div>
        <div className="space-y-4">
          {/* Row 1: Left to Right */}
          <div className="flex w-fit animate-infinite-scroll">
            {[...row1Images, ...row1Images].map((img, i) => (
              <div key={i} className="w-[400px] h-[300px] flex-shrink-0 px-2">
                <img src={img} className="w-full h-full object-cover transition-all duration-700" alt="Church life" />
              </div>
            ))}
          </div>
          {/* Row 2: Right to Left */}
          <div className="flex w-fit animate-infinite-scroll-reverse">
            {[...row2Images, ...row2Images].map((img, i) => (
              <div key={i} className="w-[400px] h-[300px] flex-shrink-0 px-2">
                <img src={img} className="w-full h-full object-cover transition-all duration-700" alt="Church life" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE REFERENCE 1: TACKLING PRESSING LOCAL ISSUES (Outreach) */}
      <section className="px-4 sm:px-6 lg:px-20 py-32 bg-[#f5f4f0]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
             <img 
               src="/src/assets/images/church_community_outreach_1779011107802.png" 
               className="w-full aspect-square object-cover shadow-2xl" 
               alt="Local outreach"
             />
             <div className="absolute top-0 left-0 w-full h-full border-8 border-white/20 pointer-events-none" />
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl md:text-7xl font-black text-[#1e2a4a] leading-[0.9] tracking-tight">
               Tackling Pressing <br/> Local Issues
            </h2>
            <p className="text-base text-gray-500 leading-relaxed font-medium">
               We are committed to tackling pressing local issues that affect our communities every day. By listening to neighbors, understanding their challenges, and implementing practical solutions.
            </p>
            <div className="space-y-8 pt-4">
              {[
                { title: "Local Solutions", desc: "We implement practical local solutions, addressing community needs with dedicated action." },
                { title: "Spiritual Guidance", desc: "Listening carefully, acting decisively, and providing hope to those who are hurting." },
                { title: "Public Concern", desc: "Addressing concerns ensures fairness, progress, and stronger communities together." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-8 h-8 text-[#e11d48]" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#1e2a4a]">{item.title}: <span className="font-medium text-gray-500">{item.desc}</span></h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE REFERENCE 2: LEADERSHIP / SPIRIT */}
      <section className="relative min-h-[60vh] flex items-center px-4 sm:px-6 lg:px-20 py-24 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/news_featured_1_1779011146657.png" 
              className="w-full h-full object-cover brightness-[0.3]" 
              alt="Leadership"
            />
         </div>
         <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
            <motion.h2 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               className="text-5xl md:text-8xl lg:text-9xl font-black text-white tracking-widest leading-none italic uppercase"
            >
               Your Voice Guides <br className="hidden md:block"/> Our Spirit
            </motion.h2>
            <div className="mt-16 flex flex-col items-center">
               <div className="w-px h-32 bg-white/30 mb-8" />
               <p className="text-white/60 text-xs font-black uppercase tracking-[0.5em]">Walk with us</p>
            </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-[#1e2a4a] mb-12">Experience The Renewal</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
           <button className="bg-[#8B11B1] text-white px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-[#a11ccf] transition-all">Join Our Service</button>
           <button className="border-4 border-[#1e2a4a] text-[#1e2a4a] px-12 py-6 text-sm font-black uppercase tracking-widest hover:bg-[#1e2a4a] hover:text-white transition-all">Support The Mission</button>
        </div>
      </section>
    </div>
  );
}
