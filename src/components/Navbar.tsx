import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { 
    name: "About", 
    path: "/about",
    dropdown: [
      { title: "About Us", path: "/about" },
      { title: "Meet Our Clergy", path: "/clergy" }
    ]
  },
  { name: "Our Ministries", path: "/ministries" },
  { 
    name: "Media", 
    path: "/news",
    dropdown: [
      { title: "Messages", path: "/news" },
      { title: "Blog", path: "/blog" }
    ]
  },
  { 
    name: "Resources", 
    path: "/resources",
    dropdown: [
      { title: "Event Calendar", path: "/events" },
      { title: "Online Bible", path: "/bible" },
      { title: "Prayer Request", path: "/prayer" }
    ]
  },
  { 
    name: "Kingdom Tools", 
    path: "/tools",
    dropdown: [
      { title: "Testimonial", path: "/testimonials" },
      { title: "Prayers", path: "/prayers" },
      { title: "Kingdom Standards", path: "/standards" },
      { title: "God Foundations", path: "/foundations" },
      { title: "Church Connections", path: "/connections" },
      { title: "Bible in One Hour", path: "/bible-hour" },
      { title: "Kingdom Disciple Assessment", path: "/assessment" }
    ]
  },
  { name: "Give", path: "/give" },
  { name: "Contact", path: "/contact" },
];

const NavLink: React.FC<{ link: any; isActive: boolean }> = ({ link, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const magneticX = useSpring(mouseX, springConfig);
  const magneticY = useSpring(mouseY, springConfig);

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    mouseX.set(x * 0.3);
    mouseY.set(y * 0.3);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative px-3 py-2 cursor-pointer group"
    >
      <motion.div
        style={{ x: magneticX, y: magneticY }}
        className="relative z-10"
      >
        <Link
          to={link.path}
          className={`relative z-10 text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-500 flex items-center gap-1.5 ${
            isActive || isHovered ? "text-white" : "text-white/60"
          }`}
        >
          <span>{link.name}</span>
          {link.dropdown && (
            <ChevronDown className={`w-3 h-3 transition-transform duration-500 ${isHovered ? "rotate-180" : ""}`} />
          )}
        </Link>
      </motion.div>

      <AnimatePresence>
        {(isActive || isHovered) && (
          <motion.div
            layoutId="nav-pill"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
            className="absolute inset-0 bg-[#8B11B1] -z-0 shadow-[0_0_20px_rgba(139,17,177,0.4)]"
          />
        )}
      </AnimatePresence>

      {/* DROPDOWN MEGA MENU PANEL */}
      <AnimatePresence>
        {isHovered && link.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "circOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 z-[60]"
          >
            <div className="bg-black/95 backdrop-blur-2xl p-4 border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B11B1]/20 to-transparent pointer-events-none" />
              <div className="relative z-10 flex flex-col gap-1">
                {link.dropdown.map((sub: any) => (
                  <Link
                    key={sub.title}
                    to={sub.path}
                    className="p-3 hover:bg-white/10 transition-all flex items-center justify-between group/sub"
                  >
                    <span className="text-[10px] font-bold text-white/80 uppercase tracking-widest group-hover/sub:text-white group-hover/sub:translate-x-1 transition-all">{sub.title}</span>
                    <ArrowRight className="w-3 h-3 text-white/0 group-hover/sub:text-white group-hover/sub:opacity-100 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();
  
  const isHome = location.pathname === "/";

  // If not on home, we force the values to their "scrolled" counterparts
  const navWidth = useTransform(scrollY, [0, 100], isHome ? ["95%", "90%"] : ["90%", "90%"]);
  const navPadding = useTransform(scrollY, [0, 100], isHome ? ["24px 40px", "12px 24px"] : ["12px 24px", "12px 24px"]);
  const navBg = useTransform(scrollY, [0, 100], isHome ? ["rgba(0,0,0,0.1)", "rgba(10,10,10,0.8)"] : ["rgba(10,10,10,0.8)", "rgba(10,10,10,0.8)"]);
  const navBlur = useTransform(scrollY, [0, 100], isHome ? ["blur(0px)", "blur(20px)"] : ["blur(20px)", "blur(20px)"]);
  const navBorder = useTransform(scrollY, [0, 100], isHome ? ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)"] : ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.1)"]);
  const scale = useTransform(scrollY, [0, 100], isHome ? [1, 0.98] : [0.98, 0.98]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        style={{ 
          width: navWidth, 
          padding: navPadding, 
          backgroundColor: navBg, 
          backdropFilter: navBlur,
          border: `1px solid ${navBorder}`,
          scale,
          left: "50%",
          x: "-50%"
        }}
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 24, x: "-50%", opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 z-50 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.3)] group/nav"
      >
        {/* Logo with Image */}
        <Link to="/" className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 180 }}
            className="w-10 h-10 flex items-center justify-center overflow-hidden bg-[#8B11B1]"
          >
            <img 
              src="/images/connamlogo.jpg" 
              alt="Anglican Church of Pentecost Logo"
              className="w-full h-full object-contain p-1.5"
            />
          </motion.div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm uppercase tracking-tighter leading-none">Anglican Church</span>
            <span className="text-[9px] font-black text-[#8B11B1] uppercase tracking-[0.3em] leading-none mt-1">Pentecost</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2 bg-white/5 p-1 border border-white/5">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              link={link} 
              isActive={location.pathname === link.path} 
            />
          ))}
        </div>

        {/* CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="hidden sm:flex items-center bg-white text-[#0f172a] overflow-hidden shadow-2xl group/cta"
          >
            <span className="pl-6 pr-4 py-2.5 text-[10px] font-black uppercase tracking-widest">
              Live Service
            </span>
            <div className="bg-[#8B11B1] p-2.5 group-hover/cta:bg-[#a11ccf] transition-colors">
              <ArrowRight className="w-4 h-4 text-white" />
            </div>
          </motion.button>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 bg-white/10 flex items-center justify-center text-white border border-white/10 hover:bg-[#8B11B1] transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 50% 50%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-[#1e2a4a] flex flex-col items-center justify-center p-10"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B11B1]/20 to-transparent pointer-events-none" />

            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 w-14 h-14 bg-white/10 flex items-center justify-center text-white border border-white/10 hover:rotate-90 transition-transform duration-500"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 50, rotate: 10 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.8, ease: "circOut" }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl md:text-7xl font-black text-white hover:text-[#8B11B1] transition-colors tracking-tighter uppercase"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-20 flex flex-col items-center gap-6"
            >
               <p className="text-white/40 font-black uppercase tracking-[0.4em] text-xs">Join our family</p>
               <div className="flex gap-8">
                  {["Facebook", "Instagram", "Sermons"].map(s => (
                    <a key={s} href="#" className="text-white font-bold text-sm hover:text-[#8B11B1] transition-colors uppercase tracking-widest">{s}</a>
                  ))}
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}