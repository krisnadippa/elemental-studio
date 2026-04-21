"use client";

import { useState } from "react";

export default function Contact() {
  const [name, setName]       = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Professional WhatsApp template
      const template = `Halo Elemental Studio,

Saya *${name || "Calon Klien"}* tertarik untuk berkonsultasi mengenai proyek desain:
"${message}"

Mohon informasi lebih lanjut. Terima kasih!`;

      const whatsappUrl = `https://wa.me/6281339711438?text=${encodeURIComponent(template)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <section id="contact" className="bg-[#080808] border-t border-white/[0.05] py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c4a882]/[0.02] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left: Contact Info & Form */}
          <div className="animate-fade-up">
            <div className="mb-10">
              <nav className="flex items-center gap-3 text-[0.6rem] tracking-[0.3em] uppercase text-[#6b5a3e] mb-4">
                <span className="w-8 h-[1px] bg-[#c4a882]/40" />
                Connect With Us
              </nav>
              <h2 className="font-serif text-[2.4rem] md:text-[3.2rem] lg:text-[3.8rem] text-[#f5f0e8] leading-[1.1] mb-6">
                Start your <br/><span className="italic text-[#c4a882]">design journey</span>
              </h2>
              <p className="text-[#8b7355] text-sm md:text-base font-light max-w-md leading-relaxed">
                Connect directly with our creative team. Whether you have a specific project or just a seed of an idea, we're ready to listen and collaborate.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
              <div className="group">
                <label htmlFor="contact-name" className="block text-[0.55rem] tracking-[0.25em] uppercase text-[#6b5a3e] mb-2 px-1">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full bg-[#111111] border border-white/[0.08] 
                             text-[#e8ddd0] placeholder-[#4a3a2a] px-6 py-4 text-sm
                             outline-none focus:border-[#c4a882]/40 focus:bg-[#141414]
                             transition-all duration-500 font-sans
                             hover:border-white/[0.15]"
                />
              </div>

              <div className="group">
                <label htmlFor="contact-message" className="block text-[0.55rem] tracking-[0.25em] uppercase text-[#6b5a3e] mb-2 px-1">
                  Your Inquiry
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your space, style, or vision..."
                  required
                  rows={5}
                  className="w-full bg-[#111111] border border-white/[0.08] 
                             text-[#e8ddd0] placeholder-[#4a3a2a] px-6 py-5 text-sm
                             outline-none focus:border-[#c4a882]/40 focus:bg-[#141414]
                             transition-all duration-500 font-sans resize-none
                             hover:border-white/[0.15]"
                />
              </div>
              
              <button
                type="submit"
                className="group relative w-full sm:w-auto bg-[#c4a882] text-[#0d0d0d] px-10 py-5 text-[0.65rem]
                           tracking-[0.25em] uppercase font-semibold font-sans
                           hover:bg-[#e8ddd0] transition-all duration-500
                           flex items-center justify-center gap-4 overflow-hidden"
              >
                <span className="relative z-10">Send to WhatsApp</span>
                <svg 
                  className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </button>
            </form>

            {/* Quick contact details */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/[0.05]">
               <div>
                  <p className="text-[#6b5a3e] text-[0.55rem] tracking-[0.2em] uppercase mb-2">WhatsApp Direct</p>
                  <p className="text-[#e8ddd0] font-serif text-lg">+62 813 3971 1438</p>
               </div>
               <div>
                  <p className="text-[#6b5a3e] text-[0.55rem] tracking-[0.2em] uppercase mb-2">Studio Location</p>
                  <p className="text-[#e8ddd0] font-serif text-lg">Bali, Indonesia</p>
               </div>
            </div>
          </div>

          {/* Right: Maps */}
          <div className="relative w-full h-[450px] lg:h-[600px] animate-fade-in delay-200">
             {/* Map container with custom border and shadow */}
             <div className="absolute inset-0 border border-white/[0.08] p-3 bg-[#111111] shadow-2xl">
                <div className="relative w-full h-full grayscale contrast-[1.1] brightness-[0.8] invert-[0.05] opacity-70 hover:opacity-90 transition-all duration-700">
                   <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2939730490216!2d115.25337560000001!3d-8.567706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f973ed547e3%3A0x9c97337e63253400!2sElemental%20Studio%20-%20Interior%20Contractor%20%7C%20Residential%20%26%20Commercial!5e0!3m2!1sid!2sid!4v1776752984203!5m2!1sid!2sid" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen={true}
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                    {/* Glass overlay to prevent accidental scrolling while navigating layout */}
                    <div className="absolute inset-0 bg-transparent hover:bg-black/0 transition-colors cursor-pointer pointer-events-none" />
                </div>
             </div>
             
             {/* Decorative frames */}
             <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#c4a882]/40 pointer-events-none" />
             <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-[#c4a882]/40 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
