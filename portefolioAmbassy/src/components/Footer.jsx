import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Liens de réseaux sociaux extraits des images fournies
  const socialLinks = [
    { name: 'Instagram', handle: 'IG', url: 'https://www.instagram.com/amina.p.longoh/' },
    { name: 'X / Twitter', handle: 'X', url: 'https://x.com/longoh_p' },
  ];

  return (
    <footer className="bg-[#070B18] text-prestige-cream pt-24 pb-12 border-t border-white/[0.03] overflow-hidden">
      <div className="container mx-auto px-8">
        
        {/* Section Principale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* Bloc GAUCHE : Identité Monumentale */}
          <div className="lg:col-span-6 space-y-8">
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
            <p className="text-white/20 text-xs leading-relaxed max-w-sm font-light">
              Représentation officielle de la République du Tchad en France. 
              Engagement, vision et coopération bilatérale au service de la nation.
            </p>
          </div>

          {/* Bloc DROITE : Navigation & Social */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8">
            {/* Menu Nettoyé */}
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold">Navigation</p>
              <nav className="flex flex-col gap-4">
                {['Profil', 'Expertise', 'Parcours', 'Contact'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-widest text-white/40 hover:text-white transition-colors duration-500">
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Réseaux Sociaux mis à jour */}
            <div className="space-y-6">
              <p className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold">Suivre</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-[10px] uppercase tracking-tighter text-white/40 hover:border-prestige-gold hover:text-prestige-gold transition-all duration-700 group"
                    title={social.name}
                  >
                    <span className="group-hover:scale-110 transition-transform">{social.handle}</span>
                  </a>
                ))}
              </div>
              <p className="text-[8px] text-white/10 uppercase tracking-widest pt-2">
                Comptes Officiels
              </p>
            </div>
          </div>
        </div>

        {/* Barre de Signature Finale */}
        <div className="relative pt-12 border-t border-white/[0.03] flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          
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
          
          <div className="z-10 md:text-right space-y-1">
            <p className="text-[8px] uppercase tracking-[0.4em] text-white/20">
              Ambassade du Tchad à Paris
            </p>
            <p className="text-[8px] uppercase tracking-[0.2em] text-white/10 italic">
              Conçu avec Excellence par <span className="text-white/30 hover:text-prestige-gold transition-colors cursor-pointer uppercase">Eden group</span>
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;