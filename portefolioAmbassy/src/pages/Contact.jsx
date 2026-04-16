import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#070B18] text-prestige-cream relative overflow-hidden">
      
      {/* Texture de fond : Numérotation de section */}
      <div className="absolute -bottom-10 -left-10 text-[20vw] font-serif font-bold text-white/[0.02] pointer-events-none select-none">
        05
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          
          {/* 1. Informations Officielles - Le Protocole */}
          <div className="lg:col-span-4 space-y-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-prestige-gold/50"></div>
                <p className="text-prestige-gold uppercase tracking-[0.5em] text-[10px] font-black">
                  Audiences & Relations
                </p>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] tracking-tighter">
                Le <br /> <span className="text-prestige-gold italic">Contact</span>
              </h2>
            </div>

            <div className="space-y-12 pt-8">
              <div className="group border-l border-white/5 pl-8 hover:border-prestige-gold transition-colors duration-700">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mb-3 font-bold">Localisation</p>
                <p className="text-lg font-serif">Ambassade du Tchad</p>
                <p className="text-xs text-white/40 tracking-widest mt-1 uppercase">Paris, France</p>
              </div>
              
              <div className="group border-l border-white/5 pl-8 hover:border-prestige-gold transition-colors duration-700">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mb-3 font-bold">Ligne Officielle</p>
                <p className="text-lg font-serif tracking-widest">(+33) 6 64 43 19 51</p>
              </div>

              <div className="group border-l border-white/5 pl-8 hover:border-prestige-gold transition-colors duration-700">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mb-3 font-bold">Correspondance</p>
                <p className="text-lg font-serif italic text-prestige-gold/80">amylongoh@gmail.com</p>
              </div>
            </div>
          </div>

          {/* 2. Le Formulaire - L'Interface Épurée */}
          <div className="lg:col-span-8 relative">
            <div className="bg-white/[0.01] border border-white/[0.03] p-10 md:p-20 relative">
              
              {/* Filigrane décoratif en coin */}
              <div className="absolute top-0 right-0 p-6 opacity-20">
                <div className="w-12 h-12 border-t border-r border-prestige-gold/40"></div>
              </div>

              <form className="space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="relative">
                    <input type="text" id="name" required className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-prestige-gold transition-all duration-500 placeholder-transparent text-sm tracking-wide" />
                    <label htmlFor="name" className="absolute left-0 top-4 text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 peer-focus:-top-4 peer-focus:text-prestige-gold peer-valid:-top-4">
                      Identité Complète
                    </label>
                  </div>
                  
                  <div className="relative">
                    <input type="email" id="email" required className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-prestige-gold transition-all duration-500 placeholder-transparent text-sm tracking-wide" />
                    <label htmlFor="email" className="absolute left-0 top-4 text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 peer-focus:-top-4 peer-focus:text-prestige-gold peer-valid:-top-4">
                      Adresse de contact
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <input type="text" id="subject" required className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-prestige-gold transition-all duration-500 placeholder-transparent text-sm tracking-wide" />
                  <label htmlFor="subject" className="absolute left-0 top-4 text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 peer-focus:-top-4 peer-focus:text-prestige-gold peer-valid:-top-4">
                    Objet de l'audience
                  </label>
                </div>

                <div className="relative">
                  <textarea id="message" rows="4" required className="peer w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-prestige-gold transition-all duration-500 placeholder-transparent text-sm tracking-wide resize-none"></textarea>
                  <label htmlFor="message" className="absolute left-0 top-4 text-white/20 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 peer-focus:-top-4 peer-focus:text-prestige-gold peer-valid:-top-4">
                    Détails du message
                  </label>
                </div>

                <div className="pt-8 flex justify-end">
                  <button className="group relative px-16 py-6 overflow-hidden border border-prestige-gold/20">
                    <div className="absolute inset-0 bg-prestige-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    <span className="relative z-10 text-prestige-gold group-hover:text-prestige-dark text-[10px] uppercase tracking-[0.4em] font-black transition-colors duration-500">
                      Soumettre la demande
                    </span>
                  </button>
                </div>
              </form>
            </div>
            
            {/* Coordonnées géographiques décoratives */}
            <div className="absolute -right-8 bottom-1/4 hidden xl:block">
              <p className="rotate-90 text-[8px] uppercase tracking-[0.8em] text-white/10 font-bold origin-right">
                48.8566° N, 2.3522° E • PARIS
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;