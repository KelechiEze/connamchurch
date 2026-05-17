import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export function SplitScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pinning the left side
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: leftRef.current,
      pinSpacing: false,
      invalidateOnRefresh: true,
    });

    // Content fade in for right side blocks
    const blocks = gsap.utils.toArray(".right-block");
    blocks.forEach((block: any) => {
      gsap.from(block, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: block,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-white flex flex-col md:flex-row min-h-screen"
      id="split-scroll-section"
    >
      {/* LEFT SIDE - FIXED */}
      <div className="w-full md:w-[45%] h-screen overflow-hidden hidden md:block" ref={leftRef}>
        <div className="relative w-full h-full p-8 lg:p-16 flex items-center justify-center">
          <div className="relative w-full aspect-[4/5] max-h-[80vh]">
            <img 
              src="/src/assets/images/protest_community_1_1779010038513.png" 
              alt="Community Action" 
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            {/* Floating Badge/Sticker */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#8B11B1] rounded-full flex items-center justify-center p-4 shadow-2xl animate-spin-slow cursor-pointer hover:scale-110 transition-transform z-20">
                <div className="text-white text-center">
                   <p className="text-xs font-black uppercase tracking-[0.2em] mb-1">Support Us</p>
                   <p className="text-xl font-black">DONATE<br/>NOW</p>
                </div>
            </div>
            {/* Star shape around it (approximated with dots or simple svg if needed, but let's stick to clean look) */}
            <div className="absolute -bottom-12 -right-12 w-56 h-56 border-2 border-dashed border-[#8B11B1]/30 rounded-full animate-spin-slower" />
          </div>
        </div>
      </div>

      {/* MOBILE ONLY IMAGE */}
      <div className="md:hidden w-full px-4 pt-12">
          <div className="relative">
            <img 
              src="/src/assets/images/protest_community_1_1779010038513.png" 
              alt="Community Action" 
              className="w-full aspect-[4/5] object-cover rounded-xl shadow-lg"
            />
             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8B11B1] rounded-full flex items-center justify-center p-2 shadow-lg">
                <div className="text-white text-center">
                   <p className="text-[8px] font-black uppercase mb-1">Support Us</p>
                   <p className="text-sm font-black">DONATE NOW</p>
                </div>
            </div>
          </div>
      </div>

      {/* RIGHT SIDE - SCROLLING */}
      <div className="w-full md:w-[55%] flex flex-col gap-24 lg:gap-32 py-24 px-6 lg:px-20 bg-neutral-50/50">
        <div className="right-block max-w-xl">
           <p className="text-[#8B11B1] font-black uppercase tracking-widest text-sm mb-6 underline decoration-2 underline-offset-8">Who We Are</p>
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e2a4a] leading-tight mb-8">
             A Sanctuary of <br/> Hope and Help
           </h2>
           <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
              We are Anglican Church of the Pentecost. Our mission is to bring hope and help to those who are hurting in our community and beyond. 
              We welcome you to partner with us in this mission. We welcome you to be a family member here.
           </p>
           <div className="flex gap-4">
              <Link to="/about">
                <button className="bg-[#8B11B1] text-white px-8 py-4 rounded-lg font-black uppercase tracking-widest text-xs shadow-lg hover:bg-[#a11ccf] transition-all">Get to Know Us</button>
              </Link>
              <Link to="/clergy">
                <button className="border-2 border-[#1e2a4a] text-[#1e2a4a] px-8 py-4 rounded-lg font-black uppercase tracking-widest text-xs hover:bg-[#1e2a4a] hover:text-white transition-all">Our Leaders</button>
              </Link>
           </div>
        </div>

        <div className="right-block">
            <img 
              src="/src/assets/images/church_leaders_portrait_1779011093532.png" 
              alt="Our Spiritual Leaders" 
              className="w-full aspect-[4/5] object-cover rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-700"
            />
            <p className="mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Our Spiritual Guidance</p>
        </div>

        <div className="right-block max-w-xl">
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e2a4a] leading-tight mb-8">
             Our Spiritual Leaders
           </h2>
           <p className="text-base md:text-lg text-gray-600 leading-relaxed">
             Directed by faith and a deep sense of responsibility, our leaders are committed to guiding the flock with wisdom, integrity, and love. Meet those who dedicate their lives to serving the body of Christ.
           </p>
        </div>

        <div className="right-block pb-32">
           <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] bg-neutral-200 rounded-xl overflow-hidden">
                 <img src="/src/assets/images/church_hero_spirit_1779011074740.png" className="w-full h-full object-cover" alt="Spirit" />
              </div>
              <div className="aspect-[3/4] bg-neutral-100 rounded-xl overflow-hidden mt-12">
                 <img src="/src/assets/images/church_community_outreach_1779011107802.png" className="w-full h-full object-cover" alt="Outreach" />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
