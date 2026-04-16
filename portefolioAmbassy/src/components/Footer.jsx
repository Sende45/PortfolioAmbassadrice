import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070B18] text-prestige-cream pt-24 pb-12 border-t border-white/[0.03] overflow-hidden">
      <div className="container mx-auto px-8">
        
        {/* Section Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Bloc GAUCHE : Identité Monumentale */}
          <div className="lg:col-span-5 space-y-8">
            <div className="group cursor-default">
              <h2 className="font-serif text-4xl tracking-tighter mb-2">
                Amina <span className="text-prestige-gold italic">Longoh</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-8 h-[1px] bg-prestige-gold/30"></div>
                <p className="text-[8px] uppercase tracking-[0.6em] text-white/30 font-black">
                  Excellence Diplomatique
                </p>
              </div>
            </div>
            <p className="text-white/20 text-xs leading-relaxed max-w-xs font-light">
              Représentation officielle de la République du Tchad en France. 
              Engagement, vision et coopération bilatérale au service de la nation.
            </p>
          </div>

          {/* Bloc CENTRE : Navigation Éditoriale */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold">Menu</p>
              <nav className="flex flex-col gap-4">
                {['Profil', 'Expertise', 'Parcours'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-500">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold">Ressources</p>
              <nav className="flex flex-col gap-4">
                {['Formation', 'Contact', 'Presse'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-500">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Bloc DROITE : Contact & Social */}
          <div className="lg:col-span-3 space-y-10">
            <div className="space-y-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold">Suivre</p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter'].map((social) => (
                  <a key={social} href="#" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[10px] uppercase tracking-tighter text-white/40 hover:border-prestige-gold hover:text-prestige-gold transition-all duration-700 group">
                    <span className="group-hover:scale-110 transition-transform">{social.slice(0, 2)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Barre de Signature Finale */}
        <div className="relative pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Background Text Overlay */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10vw] font-serif font-bold text-white/[0.01] whitespace-nowrap pointer-events-none select-none">
            REPUBLIQUE DU TCHAD
          </div>

          <div className="flex items-center gap-4 z-10">
             <div className="w-2 h-2 rounded-full bg-prestige-gold/50 animate-pulse"></div>
             <p className="text-[8px] uppercase tracking-[0.5em] text-white/20 font-bold">
               © {currentYear} — TOUS DROITS RÉSERVÉS
             </p>
          </div>
          
          <div className="z-10 text-center md:text-right space-y-1">
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/20">
              Ambassade du Tchad à Paris
            </p>
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/10 italic">
              Conçu avec Excellence par <span className="text-white/30 hover:text-prestige-gold transition-colors cursor-pointer uppercase">Paris Studio</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;