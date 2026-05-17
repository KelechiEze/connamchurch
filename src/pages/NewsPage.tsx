import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function NewsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-up", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".reveal-up",
          start: "top 85%",
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-24 bg-white min-h-screen">
      {/* 1. HERO NEWS SECTION */}
      <section className="px-4 sm:px-6 lg:px-20 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: Massive Featured */}
          <div className="lg:col-span-8 group cursor-pointer">
            <div className="relative aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src="/src/assets/images/news_featured_1_1779011146657.png" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                  alt="Main News"
                />
            </div>
            <p className="text-[10px] font-black uppercase tracking-widest text-[#8B11B1] mb-2">Momentum • April 16, 2026</p>
            <h1 className="text-4xl md:text-6xl font-black text-[#1e2a4a] tracking-tighter leading-tight group-hover:underline transition-all">
                Leadership That Builds Trust Through Action and Commitment
            </h1>
            <p className="mt-6 text-gray-500 text-base max-w-2xl">
                Real leadership is driven by momentum—listening to communities, taking responsibility, and turning public concerns into meaningful action.
            </p>
          </div>

          {/* RIGHT: Stacked Cards */}
          <div className="lg:col-span-4 flex flex-col gap-12">
             {[
               { id: 1, cat: "Progress", date: "April 16, 2026", title: "Advancing Change Through Consistent and Visible Leadership" },
               { id: 2, cat: "Forward", date: "April 16, 2026", title: "Moving Forward With Purpose and People-Centered Solutions" },
             ].map(item => (
                <div key={item.id} className="group cursor-pointer">
                   <div className="relative aspect-video overflow-hidden mb-4">
                      <img src={`/src/assets/images/news_grid_1_1779011181863.png`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Thumb" />
                   </div>
                   <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-2">{item.cat} • {item.date}</p>
                   <h3 className="text-lg font-bold text-[#1e2a4a] group-hover:text-[#8B11B1] transition-colors leading-tight">{item.title}</h3>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 2. LATEST NEWS COVERAGE SECTION */}
      <section className="bg-neutral-50 px-4 sm:px-6 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#1e2a4a] text-center mb-16 tracking-tight">Public News Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { id: 1, cat: "Impact", title: "New Outreach Research Advances Public Health", img: "/src/assets/images/news_coverage_1_1779011165326.png" },
               { id: 2, cat: "Together", title: "Global Teams Advance Next Generation Faith", img: "/src/assets/images/church_hero_spirit_1779011074740.png" },
               { id: 3, cat: "Empower", title: "Ministries Protect Communities Worldwide", img: "/src/assets/images/church_community_outreach_1779011107802.png" },
               { id: 4, cat: "Integrity", title: "Transparent Research Builds Public Trust", img: "/src/assets/images/news_featured_1_1779011146657.png" },
             ].map(item => (
                <div key={item.id} className="reveal-up group cursor-pointer bg-white p-6 shadow-sm hover:shadow-xl transition-all">
                   <div className="relative aspect-square overflow-hidden mb-6">
                      <img src={item.img} className="w-full h-full object-cover group-hover:rotate-2 transition-transform" />
                      <div className="absolute inset-0 bg-black/10" />
                   </div>
                   <p className="text-[10px] font-black uppercase tracking-widest text-[#8B11B1] mb-2">{item.cat} • April 16, 2026</p>
                   <h4 className="text-base font-black text-[#1e2a4a] leading-tight">{item.title}</h4>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. MULTI-CARD NEWS GRID SECTION */}
      <section className="px-4 sm:px-6 lg:px-20 py-24">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-4xl md:text-5xl font-black text-[#1e2a4a] mb-16 tracking-tight italic">Latest Media Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[
                 { id: 1, cat: "Dispatch", title: "Latest Coverage From Our Growing Campaign" },
                 { id: 2, cat: "Journal", title: "Media Coverage And Spiritual Updates" },
                 { id: 3, cat: "Story", title: "Stories Covering Our Leadership Insights" },
               ].map(item => (
                 <div key={item.id} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden mb-6">
                       <img src="/src/assets/images/news_grid_1_1779011181863.png" className="w-full h-full object-cover" alt="grid" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-2">{item.cat} • April 16, 2026</p>
                          <h4 className="text-xl font-black text-white leading-tight">{item.title}</h4>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 4. ARTICLE + SIDEBAR SECTION */}
      <section className="px-4 sm:px-6 lg:px-20 py-24 border-t border-neutral-100">
         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
            
            {/* LEFT: Article Content */}
            <div className="lg:col-span-8">
               <h2 className="text-4xl md:text-6xl font-black text-[#1e2a4a] mb-12 tracking-tight italic select-none">In The News</h2>
               
               <article className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-8">
                  <p className="font-bold text-[#1e2a4a] text-xl border-l-4 border-[#8B11B1] pl-6 py-2">
                    Stories Covering Our Leadership And Initiatives Across The Region
                  </p>
                  <p>
                    Leadership driven by integrity focuses on honesty, accountability, and ethical governance. By upholding strong values and transparent decision-making, it ensures that public trust is earned and maintained while creating fair, responsible, and sustainable outcomes for our church community.
                  </p>
                  <div className="my-16">
                     <img 
                       src="/src/assets/images/news_coverage_1_1779011165326.png" 
                       className="w-full aspect-video object-cover shadow-2xl" 
                       alt="detail" 
                     />
                     <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Faith in Action - Church Expansion Research</p>
                  </div>
                  <p>
                    From grassroots community building to high-level strategic planning, every decision we make is filtered through our core values. We are not just building a church; we are building a sanctuary for souls seeking truth and light in a complicated world.
                  </p>
                  <p>
                    Our outreach programs have seen a 40% increase in participation over the last year, demonstrating the hunger for meaningful connection and spiritual grounding. This momentum fuels our commitment to serve Harrisburg and its people with renewed vigor.
                  </p>
                  <div className="grid grid-cols-2 gap-8 my-16">
                     <img src="/src/assets/images/church_leaders_portrait_1779011093532.png" className="w-full aspect-square object-cover" />
                     <img src="/src/assets/images/church_community_outreach_1779011107802.png" className="w-full aspect-square object-cover" />
                  </div>
                  <p>
                    As we look to the future, we invite you to be part of this continuing story. Faith is not a static state but a journey we take together, supported by the Spirit and guided by the Word.
                  </p>
               </article>
            </div>

            {/* RIGHT: Sticky Sidebar */}
            <aside className="lg:col-span-4 relative">
               <div className="lg:sticky lg:top-32 space-y-12">
                  <h3 className="text-xs font-black uppercase tracking-[0.4em] text-[#8B11B1] mb-8">Popular Right Now</h3>
                  <div className="flex flex-col gap-10">
                     {[
                       { id: 1, title: "Leadership That Builds Trust", cat: "Momentum" },
                       { id: 2, title: "Advancing Change Through Leadership", cat: "Progress" },
                       { id: 3, title: "Moving Forward With Purpose", cat: "Forward" },
                       { id: 4, title: "New Vaccine Research Advances", cat: "Impact" },
                       { id: 5, title: "Global Teams Advance Next Gen", cat: "Together" },
                     ].map(item => (
                       <div key={item.id} className="flex gap-4 group cursor-pointer border-b border-neutral-100 pb-6">
                          <div className="w-20 h-20 bg-neutral-100 flex-shrink-0 overflow-hidden">
                             <img src="/src/assets/images/news_grid_1_1779011181863.png" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                          </div>
                          <div>
                             <p className="text-[9px] font-black uppercase tracking-widest text-[#8B11B1] mb-1">{item.cat} • April 16, 2026</p>
                             <h4 className="text-sm font-black text-[#1e2a4a] group-hover:text-[#8B11B1] transition-colors leading-tight">{item.title}</h4>
                          </div>
                       </div>
                     ))}
                  </div>
                  
                  <div className="bg-[#1e2a4a] p-8 text-white">
                      <h4 className="text-lg font-bold mb-4">Start the Conversation</h4>
                      <p className="text-white/70 text-sm mb-6">Your voice matters. Whether you have a question, concern, or idea, we welcome your message.</p>
                      <button className="w-full bg-[#8B11B1] py-3 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#8B11B1] transition-all">Send Message</button>
                  </div>
               </div>
            </aside>
         </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-neutral-900 py-32 text-center text-white">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           className="max-w-4xl mx-auto px-4"
         >
            <h2 className="text-5xl md:text-7xl font-black mb-8 italic tracking-tighter">Join Our Growing Family</h2>
            <p className="text-sm md:text-base text-white/60 mb-12 max-w-2xl mx-auto">
               We welcome you to partner with us in this mission. Stay connected with our spiritual journey.
            </p>
            <button className="bg-white text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-sm shadow-2xl hover:bg-[#8B11B1] hover:text-white transition-all transform hover:-translate-y-2">
               Connect With Us
            </button>
         </motion.div>
      </section>
    </div>
  );
}
