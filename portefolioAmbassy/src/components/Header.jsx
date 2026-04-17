import React from 'react';

const Header = () => {
  const navLinks = [
    { name: 'Profil', href: '#home' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Formation', href: '#formation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070B18]/60 backdrop-blur-2xl border-b border-white/[0.03]">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        
        {/* 1. Logo Minimaliste */}
        <div className="flex flex-col group cursor-pointer">
          <div className="font-serif text-2xl tracking-tighter text-prestige-cream leading-none">
            Amina <span className="text-prestige-gold italic group-hover:pl-2 transition-all duration-500">Longoh</span>
          </div>
          <div className="text-[7px] uppercase tracking-[0.6em] text-white/20 mt-1 font-bold group-hover:text-prestige-gold/50 transition-colors">
            Ambassadrice
          </div>
        </div>
        
        {/* 2. Navigation "Focus" */}
        <nav className="hidden md:block">
          <ul className="flex gap-12">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a 
                  href={link.href} 
                  className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-prestige-cream transition-all duration-300 block pb-1"
                >
                  {link.name}
                </a>
                {/* Ligne de soulignement moderne */}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-prestige-gold group-hover:w-full transition-all duration-500"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3. Bouton d'Action & Lien Ambassade */}
        <div className="flex items-center gap-8">
          <button className="hidden lg:flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] font-bold text-white/40 hover:text-prestige-gold transition-all group">
            <span className="w-6 h-[1px] bg-white/10 group-hover:bg-prestige-gold group-hover:w-10 transition-all"></span>
            FR / EN
          </button>
          
          {/* Lien vers le site officiel de l'ambassade */}
          <a 
            href="https://ambatchadparis.fr/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative overflow-hidden border border-white/10 px-8 py-3 group block"
          >
            <span className="relative z-10 text-[9px] uppercase tracking-[0.3em] font-bold text-prestige-cream group-hover:text-prestige-dark transition-colors duration-500">
              Ambassade
            </span>
            <div className="absolute inset-0 bg-prestige-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;