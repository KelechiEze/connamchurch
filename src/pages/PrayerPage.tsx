import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Heart, ShieldCheck, Sparkles } from "lucide-react";

export function PrayerPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    request: "",
    isPrivate: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-neutral-50 pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* Content Side */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B11B1]"
              >
                Intercessory Prayer
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-6xl md:text-8xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-none"
              >
                Lift Up <br/> A Prayer
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-lg"
              >
                "For where two or three are gathered together in my name, there am I in the midst of them." — Matthew 18:20
              </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Heart, title: "We Care", desc: "Our intercessory team reviews every request with compassion." },
                { icon: ShieldCheck, title: "Confidential", desc: "Your requests can be kept private between you and our clergy." },
                { icon: Sparkles, title: "Faith Works", desc: "We believe in the transformative power of prayer." }
              ].map((item, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-10 h-10 bg-white shadow-md flex items-center justify-center text-[#8B11B1]">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-[#1e2a4a]">{item.title}</h3>
                  <p className="text-gray-400 text-xs font-bold leading-relaxed tracking-wide uppercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 left-0 w-1.5 h-full bg-[#8B11B1]" />
             
             <AnimatePresence mode="wait">
               {!submitted ? (
                 <motion.form 
                   key="form"
                   exit={{ opacity: 0, y: -20 }}
                   onSubmit={handleSubmit}
                   className="space-y-6"
                 >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#1e2a4a]">Full Name</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-neutral-50 border border-neutral-100 p-4 text-sm font-bold focus:outline-none focus:border-[#8B11B1] transition-colors"
                          placeholder="John Doe"
                          value={formState.name}
                          onChange={e => setFormState({...formState, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-[#1e2a4a]">Email Address</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-neutral-50 border border-neutral-100 p-4 text-sm font-bold focus:outline-none focus:border-[#8B11B1] transition-colors"
                          placeholder="john@example.com"
                          value={formState.email}
                          onChange={e => setFormState({...formState, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#1e2a4a]">Subject</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-neutral-50 border border-neutral-100 p-4 text-sm font-bold focus:outline-none focus:border-[#8B11B1] transition-colors"
                        placeholder="e.g. Healing, Family, Guidance"
                        value={formState.subject}
                        onChange={e => setFormState({...formState, subject: e.target.value})}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#1e2a4a]">Your Prayer Request</label>
                      <textarea 
                        required
                        rows={6}
                        className="w-full bg-neutral-50 border border-neutral-100 p-4 text-sm font-bold focus:outline-none focus:border-[#8B11B1] transition-colors resize-none"
                        placeholder="Tell us what we can pray for..."
                        value={formState.request}
                        onChange={e => setFormState({...formState, request: e.target.value})}
                      />
                    </div>

                    <div className="flex items-center gap-3">
                       <input 
                        type="checkbox" 
                        id="isPrivate"
                        className="w-4 h-4 accent-[#8B11B1]"
                        checked={formState.isPrivate}
                        onChange={e => setFormState({...formState, isPrivate: e.target.checked})}
                       />
                       <label htmlFor="isPrivate" className="text-[10px] font-black uppercase tracking-widest text-gray-400">Keep this request private (Clergy only)</label>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#1e2a4a] text-white p-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-[#8B11B1] transition-colors flex items-center justify-center gap-4 group"
                    >
                       <span>Submit Request</span>
                       <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                 </motion.form>
               ) : (
                 <motion.div 
                   key="success"
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   className="py-20 text-center space-y-6"
                 >
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                       <Sparkles className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black text-[#1e2a4a] uppercase tracking-tighter italic">Request Received</h2>
                    <p className="text-gray-500 font-bold uppercase tracking-widest text-xs leading-relaxed max-w-sm mx-auto">
                       Thank you for sharing your heart. Our team will overlap you in prayer. God bless you.
                    </p>
                    <button 
                       onClick={() => setSubmitted(false)}
                       className="text-[#8B11B1] text-xs font-black uppercase tracking-[0.3em] underline decoration-4 underline-offset-8"
                    >
                       Send Another
                    </button>
                 </motion.div>
               )}
             </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
