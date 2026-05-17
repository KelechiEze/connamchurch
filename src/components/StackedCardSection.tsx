import { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    title: "Messages",
    description: "Be encouraged and strengthened through Spirit-filled sermons and teachings from God’s Word. Listen now to be transformed.",
    image: "/images/church_sermon_media_1779011123956.png",
    bgColor: "bg-white",
    cta: "Listen Now",
    path: "#"
  },
  {
    id: 2,
    title: "Blog",
    description: "Read inspiring articles that help you grow in faith and live out God’s truth daily in your workplace, family, and community.",
    image: "/images/church_hero_spirit_1779011074740.png",
    bgColor: "bg-neutral-50",
    cta: "Read More",
    path: "/news"
  },
  {
    id: 3,
    title: "Online Bible",
    description: "Study Scripture anytime and draw closer to God through His living Word. Accessible tools for your daily walk.",
    image: "/images/hero_bg_abstract_1779009650835.png",
    bgColor: "bg-neutral-100",
    cta: "Open Bible",
    path: "/bible"
  },
  {
    id: 4,
    title: "Prayer Request",
    description: "Share your needs and let us join you in prayer, believing God for answers. You are not alone in your journey.",
    image: "/images/church_community_outreach_1779011107802.png",
    bgColor: "bg-white",
    cta: "Send a Request",
    path: "/prayer"
  }
];

export function StackedCardSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray(".stacked-card");
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 150}%`, // Increase scroll depth for better pacing
        pin: true,
        scrub: 1, // Smooth scrolling
        invalidateOnRefresh: true,
      }
    });

    cards.forEach((card: any, index: number) => {
      if (index === 0) return; // First card is already visible

      tl.fromTo(card, 
        { 
          y: "100%",
          clipPath: "inset(20% 0 0 0)", // Interesting reveal effect
        },
        {
          y: "0%",
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "power2.inOut",
        },
        // Add a small pause at the end of each card animation
        `+=0.5`
      );
    });
    
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-screen overflow-hidden bg-white"
      id="stacked-cards-container"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {cardData.map((card, index) => (
          <div
            key={card.id}
            className={`stacked-card absolute inset-0 w-full h-full ${card.bgColor} flex items-center justify-center`}
            style={{ zIndex: index + 1 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center gap-12 lg:gap-24">
               {/* Alternate image/text based on index */}
               <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                  <div className="relative overflow-hidden shadow-2xl group">
                    <img 
                        src={card.image} 
                        alt={card.title} 
                        className="w-full aspect-[4/3] object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
               </div>
               
               <div className={`w-full md:w-1/2 text-left ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                  <p className="text-[#8B11B1] font-black uppercase tracking-[0.3em] text-xs mb-4">Resource {index + 1}</p>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e2a4a] leading-tight mb-8">
                     {card.title}
                  </h3>
                  <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-xl">
                     {card.description}
                  </p>
                  <Link to={card.path}>
                    <button className="mt-10 px-8 py-4 border-2 border-[#1e2a4a] text-[#1e2a4a] font-bold hover:bg-[#1e2a4a] hover:text-white transition-all transform hover:-translate-y-1">
                        {card.cta}
                    </button>
                  </Link>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
