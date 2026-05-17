import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, BookOpen, ChevronRight, Loader2, Bookmark, ChevronLeft } from "lucide-react";

interface BibleVerse {
  book_id: string;
  book_name: string;
  chapter: number;
  verse: number;
  text: string;
}

interface BibleResponse {
  reference: string;
  verses: BibleVerse[];
  text: string;
  translation_id: string;
  translation_name: string;
  translation_note: string;
}

const BIBLE_BOOKS = [
  "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel",
  "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs",
  "Ecclesiastes", "Song of Solomon", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos",
  "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi",
  "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians",
  "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon",
  "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Judas", "Revelation"
];

export function BiblePage() {
  const [query, setQuery] = useState("John 3");
  const [selectedBook, setSelectedBook] = useState("John");
  const [selectedChapter, setSelectedChapter] = useState(3);
  const [bibleData, setBibleData] = useState<BibleResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVerses = async (q: string) => {
    if (!q) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`https://bible-api.com/${encodeURIComponent(q)}`);
      if (!res.ok) throw new Error("Reference not found. Please try something like 'Psalm 23' or 'John 1:1-5'");
      const data = await res.json();
      setBibleData(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVerses(`${selectedBook} ${selectedChapter}`);
  }, [selectedBook, selectedChapter]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchVerses(query);
  };

  const handleNextChapter = () => {
    setSelectedChapter(prev => prev + 1);
  };

  const handlePrevChapter = () => {
    if (selectedChapter > 1) {
      setSelectedChapter(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white pt-32 min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20 mb-24">
        {/* Header */}
        <div className="mb-16 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
          <div className="space-y-4">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B11B1]"
            >
              Holy Scriptures
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-none"
            >
              Online <br/> Bible
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-end">
            <div className="flex flex-col gap-2">
               <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Select Book</label>
               <select 
                 className="bg-neutral-50 border-b-4 border-[#1e2a4a] p-5 text-sm font-black uppercase tracking-widest focus:outline-none appearance-none cursor-pointer hover:bg-neutral-100 transition-colors"
                 value={selectedBook}
                 onChange={(e) => {
                   setSelectedBook(e.target.value);
                   setSelectedChapter(1);
                 }}
               >
                 {BIBLE_BOOKS.map(book => (
                   <option key={book} value={book}>{book}</option>
                 ))}
               </select>
            </div>
            
            <div className="flex flex-col gap-2">
               <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4">Chapter</label>
               <div className="flex items-center">
                  <button 
                    onClick={handlePrevChapter}
                    disabled={selectedChapter <= 1}
                    className="h-[64px] px-4 bg-neutral-100 border-b-4 border-[#1e2a4a] hover:bg-neutral-200 disabled:opacity-30 transition-all font-black"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <input 
                    type="number" 
                    className="w-24 bg-neutral-50 border-b-4 border-[#1e2a4a] p-5 text-center text-sm font-black focus:outline-none"
                    value={selectedChapter}
                    onChange={(e) => setSelectedChapter(parseInt(e.target.value) || 1)}
                  />
                  <button 
                    onClick={handleNextChapter}
                    className="h-[64px] px-4 bg-neutral-100 border-b-4 border-[#1e2a4a] hover:bg-neutral-200 transition-all font-black"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
               </div>
            </div>

            <form onSubmit={handleSearch} className="relative w-full max-w-sm group">
               <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-4 block mb-2">Search Reference</label>
               <div className="relative">
                 <input 
                   type="text" 
                   className="w-full bg-neutral-50 border-b-4 border-[#1e2a4a] p-5 pr-14 text-sm font-black uppercase tracking-widest focus:outline-none focus:border-[#8B11B1] transition-all placeholder:text-neutral-200"
                   placeholder="e.g. John 3:16"
                   value={query}
                   onChange={e => setQuery(e.target.value)}
                 />
                 <button 
                   type="submit"
                   className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-[#1e2a4a] text-white flex items-center justify-center group-hover:bg-[#8B11B1] transition-colors"
                 >
                    <Search className="w-5 h-5" />
                 </button>
               </div>
            </form>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
           
           {/* Sidebar: Suggested */}
           <div className="lg:col-span-3 space-y-12">
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-neutral-300">Quick Links</h3>
                <div className="space-y-4">
                   {[
                     { b: "Psalms", c: 23 },
                     { b: "Matthew", c: 5 },
                     { b: "John", c: 1 },
                     { b: "Romans", c: 8 },
                     { b: "Hebrews", c: 11 }
                   ].map(s => (
                     <button 
                       key={`${s.b}-${s.c}`}
                       onClick={() => { setSelectedBook(s.b); setSelectedChapter(s.c); }}
                       className="w-full text-left p-4 border border-neutral-100 hover:border-[#8B11B1] hover:bg-[#8B11B1]/5 transition-all flex items-center justify-between group"
                     >
                        <span className="text-xs font-black uppercase tracking-widest text-[#1e2a4a]">{s.b} {s.c}</span>
                        <ChevronRight className="w-4 h-4 text-neutral-200 group-hover:text-[#8B11B1]" />
                     </button>
                   ))}
                </div>
              </div>

              <div className="p-8 bg-neutral-900 border-l-[8px] border-[#8B11B1]">
                 <Bookmark className="text-[#8B11B1] mb-4" />
                 <p className="text-white font-black italic text-lg mb-4 leading-tight">Thy word is a lamp unto my feet, and a light unto my path.</p>
                 <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">Psalm 119:105</span>
              </div>
           </div>

           {/* Main Viewer */}
           <div className="lg:col-span-9 min-h-[60vh] relative">
              <AnimatePresence mode="wait">
                 {loading ? (
                   <motion.div 
                     key="loading"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="absolute inset-0 flex flex-col items-center justify-center gap-6"
                   >
                      <Loader2 className="w-12 h-12 text-[#8B11B1] animate-spin" />
                      <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-300">Seeking His Word...</p>
                   </motion.div>
                 ) : error ? (
                    <motion.div 
                      key="error"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-12 bg-red-50 border-l-4 border-red-500 text-red-500"
                    >
                       <p className="font-black uppercase tracking-widest text-sm">{error}</p>
                    </motion.div>
                 ) : bibleData ? (
                    <motion.div 
                      key="content"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-12"
                    >
                       <div className="pb-12 border-b-2 border-neutral-100 flex items-end justify-between">
                          <div>
                            <p className="text-[#8B11B1] text-xs font-black uppercase tracking-[0.4em] mb-4">Current Reading</p>
                            <h2 className="text-5xl md:text-6xl font-black text-[#1e2a4a] tracking-tighter uppercase italic">{bibleData.reference}</h2>
                          </div>
                          <div className="hidden sm:block">
                             <div className="px-6 py-2 bg-neutral-100 text-[10px] font-black uppercase tracking-widest rounded-full">
                                {bibleData.translation_name}
                             </div>
                          </div>
                       </div>

                       <div className="space-y-10">
                          {bibleData.verses.map((verse, idx) => (
                            <div key={idx} className="group flex gap-8">
                               <div className="flex-shrink-0 w-12 h-12 bg-[#1e2a4a] text-white flex items-center justify-center font-black group-hover:bg-[#8B11B1] transition-colors">
                                  {verse.verse}
                               </div>
                               <p className="text-xl md:text-2xl text-[#1e2a4a] leading-relaxed font-semibold italic">
                                  {verse.text}
                                </p>
                            </div>
                          ))}
                       </div>

                       <div className="pt-20 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-neutral-100 py-20">
                          <button 
                            onClick={handlePrevChapter}
                            disabled={selectedChapter <= 1}
                            className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-[#1e2a4a] hover:text-[#8B11B1] disabled:opacity-20 transition-all"
                          >
                             <ChevronLeft className="w-5 h-5" />
                             <span>Previous Chapter</span>
                          </button>
                          
                          <button 
                             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                             className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-300 hover:text-[#8B11B1] transition-colors"
                          >
                             Back to top
                          </button>

                          <button 
                            onClick={handleNextChapter}
                            className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-[#1e2a4a] hover:text-[#8B11B1] transition-all"
                          >
                             <span>Next Chapter</span>
                             <ChevronRight className="w-5 h-5" />
                          </button>
                       </div>
                    </motion.div>
                 ) : null}
              </AnimatePresence>
           </div>

        </div>
      </div>
    </div>
  );
}
