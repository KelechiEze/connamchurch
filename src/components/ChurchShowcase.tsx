import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { motion } from 'motion/react';

const CHURCH_ART = [
  { id: 1, image: '/images/church_hero_spirit_1779011074740.png', tag: 'Spirit' },
  { id: 2, image: '/images/church_community_outreach_1779011107802.png', tag: 'Service' },
  { id: 3, image: '/images/church_leaders_portrait_1779011093532.png', tag: 'Leadership' },
  { id: 4, image: '/images/church_sermon_media_1779011123956.png', tag: 'Preaching' },
  { id: 5, image: '/images/news_featured_1_1779011146657.png', tag: 'Sanctuary' },
  { id: 6, image: '/images/news_grid_1_1779011181863.png', tag: 'Fellowship' },
  { id: 7, image: '/images/hero_bg_community_1779009595537.png', tag: 'Assembly' },
  { id: 8, image: '/images/hero_bg_abstract_1779009650835.png', tag: 'Meditation' },
  { id: 9, image: '/images/news_coverage_1_1779011165326.png', tag: 'Outreach' },
  { id: 10, image: '/images/church_hero_spirit_1779011074740.png', tag: 'Worship' },
  { id: 11, image: '/images/church_community_outreach_1779011107802.png', tag: 'Mission' },
  { id: 12, image: '/images/church_sermon_media_1779011123956.png', tag: 'Evangelism' },
];

interface ScrollColumnProps {
  items: typeof CHURCH_ART;
  direction: 'up' | 'down';
  speed: number;
  offsetTop?: string;
  heightClass: string;
}

const ScrollColumn: React.FC<ScrollColumnProps> = ({ items, direction, speed, offsetTop, heightClass }) => {
  const columnRef = useRef<HTMLDivElement>(null);
  
  // Triple the items for a smooth infinite loop
  const displayItems = useMemo(() => [...items, ...items, ...items], [items]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!columnRef.current) return;
      
      const totalHeight = columnRef.current.scrollHeight / 3;
      
      gsap.to(columnRef.current, {
        y: direction === 'up' ? -totalHeight : totalHeight,
        duration: speed,
        ease: 'none',
        repeat: -1,
        modifiers: {
          y: (y) => {
            const val = parseFloat(y);
            if (direction === 'up') {
              return `${val % totalHeight}px`;
            } else {
              // Smooth modulo for downward scroll
              let mod = val % totalHeight;
              if (mod > 0) mod -= totalHeight;
              return `${mod}px`;
            }
          }
        }
      });
    });

    return () => ctx.revert();
  }, [direction, speed]);

  return (
    <div 
      className={`relative overflow-hidden ${heightClass} group/col`}
      style={{ marginTop: offsetTop || '0px' }}
    >
      <div 
        ref={columnRef}
        className="flex flex-col gap-6"
      >
        {displayItems.map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className="group relative w-full aspect-[3/4] overflow-hidden cursor-crosshair transform transition-all duration-700 hover:scale-[0.97]"
          >
            <img 
              src={item.image} 
              alt={item.tag} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              loading="lazy"
            />
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            
            <div className="absolute top-6 left-6 z-20">
              <span className="bg-[#8B11B1] backdrop-blur-md px-4 py-1.5 text-[9px] font-black text-white uppercase tracking-[0.25em] shadow-xl">
                {item.tag}
              </span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
               <span className="text-white text-3xl font-black italic uppercase tracking-tighter drop-shadow-2xl opacity-20">PENTECOST</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export function ChurchShowcase() {
  // Deterministic shuffle
  const shuffle = (arr: typeof CHURCH_ART, seed: number) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor((seed + i) * 9301 + 49297) % (i + 1);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const columns = useMemo(() => ({
    c1: shuffle(CHURCH_ART, 11),
    c2: shuffle(CHURCH_ART, 22),
    c3: shuffle(CHURCH_ART, 33),
    c4: shuffle(CHURCH_ART, 44),
    c5: shuffle(CHURCH_ART, 55),
  }), []);

  return (
    <section className="py-32 px-4 sm:px-8 lg:px-20 max-w-[1800px] mx-auto overflow-hidden bg-white">
      <div className="mb-24 text-center space-y-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B11B1]"
        >
          Spiritual Archive
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-8xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-none"
        >
          The Journey
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto text-xs uppercase tracking-[0.3em] font-bold leading-relaxed"
        >
          Moments of faith, service, and spiritual awakening captured through the lens of our community's walk with God.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-[900px] mb-32">
        <ScrollColumn 
          items={columns.c1} 
          direction="up" 
          speed={50} 
          heightClass="h-full" 
          offsetTop="0px" 
        />
        <div className="hidden md:block">
           <ScrollColumn 
            items={columns.c2} 
            direction="down" 
            speed={45} 
            heightClass="h-[95%]" 
            offsetTop="60px" 
          />
        </div>
        <div className="hidden lg:block">
          <ScrollColumn 
            items={columns.c3} 
            direction="up" 
            speed={40} 
            heightClass="h-[85%]" 
            offsetTop="120px" 
          />
        </div>
        <div className="hidden md:block">
          <ScrollColumn 
            items={columns.c4} 
            direction="down" 
            speed={48} 
            heightClass="h-[95%]" 
            offsetTop="60px" 
          />
        </div>
        <ScrollColumn 
          items={columns.c5} 
          direction="up" 
          speed={55} 
          heightClass="h-full" 
          offsetTop="0px" 
        />
      </div>

      {/* Decorative Finish */}
      <div className="flex flex-col items-center">
         <motion.div 
           initial={{ height: 0 }}
           whileInView={{ height: "128px" }}
           className="w-[1px] bg-neutral-100 mb-8" 
         />
         <span className="text-[10px] font-black uppercase tracking-[0.6em] text-gray-300 italic">Living Sanctuary</span>
      </div>
    </section>
  );
}
