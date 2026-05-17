import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ProjectMarquee } from "./components/ProjectMarquee";
import { ChurchShowcase } from "./components/ChurchShowcase";
import { MissionSection } from "./components/MissionSection";
import { SplitScrollSection } from "./components/SplitScrollSection";
import { StackedCardSection } from "./components/StackedCardSection";
import { PromiseSection } from "./components/PromiseSection";
import { TabbedSection } from "./components/TabbedSection";
import { ValuesSection } from "./components/ValuesSection";
import { NewsPage } from "./pages/NewsPage";
import { AboutPage } from "./pages/AboutPage";
import { ClergyPage } from "./pages/ClergyPage";
import { MinistriesPage } from "./pages/MinistriesPage";
import { BiblePage } from "./pages/BiblePage";
import { PrayerPage } from "./pages/PrayerPage";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NewsPreviewSection() {
  const news = [
    {
      id: 1,
      category: "Kingdom Progress",
      date: "May 15, 2026",
      title: "Advancing Change Through Consistent and Visible Leadership in the Church",
      image: "/src/assets/images/church_hero_spirit_1779011074740.png"
    },
    {
      id: 2,
      category: "Community Impact",
      date: "May 12, 2026",
      title: "How Our New Mission Project is Touching Lives in Harrisburg",
      image: "/src/assets/images/church_community_outreach_1779011107802.png"
    },
    {
      id: 3,
      category: "Spiritual Growth",
      date: "May 10, 2026",
      title: "Be Encouraged: Testimony from Last Sunday's Renewed Spirit Service",
      image: "/src/assets/images/news_grid_1_1779011181863.png"
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-20 overflow-hidden" id="news-preview">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1e2a4a] mb-6 tracking-tight">
            Latest News & Media
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Stay updated with the latest happenings, spiritual teachings, and community impacts from our church family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {news.map((item) => (
            <Link key={item.id} to="/news" className="group">
              <div className="relative aspect-[4/3] overflow-hidden mb-6 shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#8B11B1]">
                   {item.category}
                </div>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">{item.date}</p>
              <h3 className="text-lg font-black text-[#1e2a4a] group-hover:text-[#8B11B1] transition-colors leading-snug">
                {item.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/news">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-[#0f172a] text-white overflow-hidden shadow-xl group"
            >
              <span className="px-10 py-5 text-sm font-black uppercase tracking-widest">
                View All News
              </span>
              <div className="bg-[#8B11B1] p-5">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function LandingPage() {
  return (
    <>
      <Hero />
      <ProjectMarquee />
      <ChurchShowcase />
      <SplitScrollSection />
      <StackedCardSection />
      <PromiseSection />
      <MissionSection />
      <TabbedSection />
      <NewsPreviewSection />
      <ValuesSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#8B11B1] selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/clergy" element={<ClergyPage />} />
            <Route path="/ministries" element={<MinistriesPage />} />
            <Route path="/bible" element={<BiblePage />} />
            <Route path="/prayer" element={<PrayerPage />} />
          </Routes>
        </main>
        
        <footer className="bg-gray-50 text-gray-600 py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#8B11B1] flex items-center justify-center">
                     <span className="text-white font-black text-xs">ACP</span>
                  </div>
                  <span className="text-2xl font-black text-[#1e2a4a] tracking-tight">Anglican Church</span>
                </div>
                <p className="text-sm font-medium leading-relaxed">
                  1508 Derry Street,<br/>
                  Harrisburg, PA 17104
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#8B11B1]">Contact Us</h4>
                <div className="flex flex-col gap-2">
                  <a href="mailto:canonchinatu57@gmail.com" className="text-base font-bold text-[#1e2a4a] hover:text-[#8B11B1] transition-colors">canonchinatu57@gmail.com</a>
                  <p className="text-gray-500 font-medium">717-623-2113</p>
                  <p className="text-gray-500 font-medium">609-382-6583</p>
                </div>
              </div>

              <div className="flex flex-col gap-6 items-start md:items-end">
                 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-[#8B11B1] md:text-right">Giving</h4>
                 <button className="bg-[#1e2a4a] text-white px-8 py-3 font-black uppercase tracking-widest text-xs hover:bg-[#8B11B1] transition-all">Give Now</button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-200/50">
              <p className="text-xs font-bold uppercase tracking-wider">© 2025 Kingdom Web Services | Anglican Church of the Pentecost</p>
              <div className="flex gap-8">
                {["Privacy Policy", "Facebook", "Sermons"].map(item => (
                  <a key={item} href="#" className="hover:text-[#8B11B1] transition-colors text-xs font-black uppercase tracking-widest">{item}</a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
