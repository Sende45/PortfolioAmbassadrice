import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-prestige-dark overflow-hidden pt-20">
      
      {/* 1. Arrière-plan Texturé & Dynamique */}
      <div className="absolute inset-0 z-0">
        {/* Texte fantôme en parallaxe */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-white/[0.01] whitespace-nowrap select-none">
          EXCELLENCE
        </div>
        {/* Lignes de structure */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/[0.03]"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-white/[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* 2. Bloc Texte : L'Autorité */}
          <div className="lg:col-span-8 space-y-12">
            <div className="space-y-4 animate-reveal">
              <div className="flex items-center gap-3">
                <span className="w-12 h-[1px] bg-prestige-gold"></span>
                <span className="text-prestige-gold uppercase tracking-[0.5em] text-[10px] font-bold">
                  Représentation Diplomatique
                </span>
              </div>
              
              <h1 className="text-prestige-cream font-serif text-7xl md:text-[10rem] leading-[0.8] tracking-tighter">
                Amina <br />
                <span className="text-prestige-gold italic relative inline-block pb-4">
                  Longoh
                  <span className="absolute -bottom-4 right-0 text-[10px] font-sans not-italic tracking-[0.3em] text-white/20 uppercase">
                    Ambassadeur d'État
                  </span>
                </span>
              </h1>
            </div>

            <div className="max-w-xl space-y-10 animate-reveal" style={{ animationDelay: '0.2s' }}>
              <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed border-l border-prestige-gold/20 pl-8">
                Porter la voix de la République du Tchad au cœur de l'Europe. 
                <span className="text-white/80 block mt-2">Une vision stratégique pour une coopération bilatérale d'excellence.</span>
              </p>

              <div className="flex flex-wrap gap-8 pt-6">
                <a href="#parcours" className="group relative overflow-hidden bg-prestige-gold text-prestige-dark px-12 py-5 font-bold uppercase tracking-[0.2em] text-[10px]">
                  <span className="relative z-10">Explorer l'histoire</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </a>
                
                <button className="group flex items-center gap-6 text-white uppercase tracking-[0.3em] text-[10px] font-bold py-5">
                  <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-prestige-gold transition-colors">
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  Missions Officielles
                </button>
              </div>
            </div>
          </div>

          {/* 3. Bloc Image : Le Prestige */}
          <div className="lg:col-span-4 relative group animate-reveal" style={{ animationDelay: '0.4s' }}>
            <div className="relative aspect-[3/4] overflow-hidden border border-white/5">
              {/* Overlay de couleur/grain sur l'image */}
              <div className="absolute inset-0 bg-prestige-dark/20 z-10 mix-blend-overlay"></div>
              
              {/* Placeholder Image avec effet de zoom au hover */}
              <div className="w-full h-full bg-[#0F172A] flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
                 <span className="text-prestige-gold/10 font-serif text-9xl italic">APL</span>
                 {/* <img src="/portrait.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" /> */}
              </div>

              {/* Cadre flottant décoratif */}
              <div className="absolute inset-4 border border-white/10 pointer-events-none z-20"></div>
            </div>

            {/* Information Flottante (Look 2026) */}
            <div className="absolute -bottom-10 -right-6 md:-right-12 bg-prestige-cream p-8 md:p-12 shadow-[20px_20px_60px_rgba(0,0,0,0.5)]">
              <div className="space-y-2">
                <p className="text-prestige-dark font-bold text-[10px] tracking-[0.4em] uppercase">Poste Actuel</p>
                <p className="text-prestige-dark font-serif text-2xl italic tracking-tight">Paris, France</p>
                <div className="w-8 h-[2px] bg-prestige-gold mt-4"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 4. Indicateur de Scroll Latéral */}
      <div className="absolute bottom-12 left-12 flex items-center gap-6 rotate-[-90deg] origin-left opacity-20 hover:opacity-100 transition-opacity cursor-pointer">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white">Scroll to discover</span>
        <div className="w-24 h-[1px] bg-white"></div>
      </div>
    </section>
  );
};

export default Hero;