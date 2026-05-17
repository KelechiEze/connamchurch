import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

export function ContactPage() {
  return (
    <div className="bg-white pt-32 min-h-screen font-sans overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-20">
        
        {/* Header Hero */}
        <div className="mb-16 md:mb-24 space-y-6 md:space-y-8 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[10px] font-black uppercase tracking-[0.5em] text-[#8B11B1]"
          >
            Connect With Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-[#1e2a4a] tracking-tighter uppercase italic leading-[0.9] md:leading-[0.8]"
          >
            Get In <br className="hidden sm:block" />
            Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.3em] leading-relaxed max-w-2xl"
          >
            Whether you have a prayer request, a question about our ministries, or simply want to say hello, we are here to listen and support you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-32 mb-32">
          {/* Contact Form side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7"
          >
            <div className="bg-neutral-50 p-6 sm:p-8 md:p-16 border border-neutral-100 relative shadow-sm">
               <div className="absolute top-0 left-0 w-2 h-full bg-[#8B11B1]" />
               
               <form className="space-y-8 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-[#8B11B1] outline-none transition-colors font-bold text-[#1e2a4a] text-xs md:text-sm"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-[#8B11B1] outline-none transition-colors font-bold text-[#1e2a4a] text-xs md:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                    <select className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-[#8B11B1] outline-none transition-colors font-bold text-[#1e2a4a] appearance-none text-xs md:text-sm">
                       <option>General Inquiry</option>
                       <option>Prayer Request</option>
                       <option>Mothers' Union Information</option>
                       <option>Youth Ministry</option>
                       <option>Giving & Donations</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Message</label>
                    <textarea 
                      rows={6}
                      placeholder="How can we help you today?"
                      className="w-full bg-transparent border-b-2 border-neutral-200 py-3 focus:border-[#8B11B1] outline-none transition-colors font-bold text-[#1e2a4a] resize-none text-xs md:text-sm"
                    ></textarea>
                  </div>

                  <button className="group flex items-center justify-center gap-6 bg-[#1e2a4a] text-white px-8 md:px-12 py-5 md:py-6 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:bg-[#8B11B1] transition-all transform hover:-translate-y-1 w-full sm:w-auto">
                    <span>Send Message</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-2 group-hover:-translate-y-1" />
                  </button>
               </form>
            </div>
          </motion.div>

          {/* Contact Details side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-12 md:space-y-16"
          >
            {/* Contact cards */}
            <div className="space-y-10 md:space-y-12">
               <div className="flex gap-6 md:gap-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B11B1] transition-colors">
                     <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#1e2a4a] group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                     <h4 className="text-[9px] font-black uppercase tracking-widest text-[#8B11B1]">Visit Us</h4>
                     <p className="text-base md:text-lg font-bold text-[#1e2a4a] leading-tight">
                        1508 Derry Street, <br className="sm:hidden" /> Harrisburg, PA 17104
                     </p>
                  </div>
               </div>

               <div className="flex gap-6 md:gap-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B11B1] transition-colors">
                     <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#1e2a4a] group-hover:text-white" />
                  </div>
                  <div className="space-y-2">
                     <h4 className="text-[9px] font-black uppercase tracking-widest text-[#8B11B1]">Call Us</h4>
                     <div className="space-y-1">
                        <p className="text-base md:text-lg font-bold text-[#1e2a4a]">717-623-2113</p>
                        <p className="text-gray-400 text-[10px] md:text-xs font-medium tracking-wide">609-382-6583</p>
                     </div>
                  </div>
               </div>

               <div className="flex gap-6 md:gap-8 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:bg-[#8B11B1] transition-colors">
                     <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#1e2a4a] group-hover:text-white" />
                  </div>
                  <div className="space-y-2 min-w-0">
                     <h4 className="text-[9px] font-black uppercase tracking-widest text-[#8B11B1]">Email Us</h4>
                     <p className="text-sm md:text-lg font-bold text-[#1e2a4a] break-all">
                        canonchinatu57@gmail.com
                     </p>
                  </div>
               </div>
            </div>

            <div className="h-px w-full bg-neutral-100" />

            {/* Service times */}
            <div className="space-y-8">
               <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#8B11B1]" />
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1e2a4a]">Service Times</h4>
               </div>
               <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="space-y-1">
                     <p className="text-[9px] font-black uppercase text-[#8B11B1] tracking-widest">Sunday Worship</p>
                     <p className="text-sm md:text-base font-bold text-[#1e2a4a]">10:00 AM</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[9px] font-black uppercase text-[#8B11B1] tracking-widest">Bible Study (Wed)</p>
                     <p className="text-sm md:text-base font-bold text-[#1e2a4a]">6:30 PM</p>
                  </div>
               </div>
            </div>

            {/* Support Message */}
            <div className="bg-[#1e2a4a] p-8 md:p-10 text-white italic relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10">
                  <MessageSquare className="w-16 h-16 md:w-20 md:h-20" />
               </div>
               <p className="relative z-10 text-sm md:text-base leading-relaxed">
                  "Let us not love in word or talk but in deed and in truth."
               </p>
               <p className="relative z-10 mt-4 text-[10px] font-black uppercase tracking-widest opacity-50">— 1 John 3:18</p>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder or simple visual */}
        <div className="mb-32">
           <div className="relative aspect-square sm:aspect-video md:aspect-[21/9] bg-neutral-100 overflow-hidden group">
              <img 
                src="/images/hero_bg_city_1779009617476.png" 
                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-[3s]" 
                alt="Map Area"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center space-y-4">
                    <div className="inline-block p-4 md:p-6 bg-white shadow-2xl relative">
                       <MapPin className="w-6 h-6 md:w-8 md:h-8 text-[#8B11B1]" />
                       <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45" />
                    </div>
                    <p className="text-white font-black uppercase tracking-[0.5em] text-[9px] md:text-[10px] drop-shadow-lg">Harrisburg, PA</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
