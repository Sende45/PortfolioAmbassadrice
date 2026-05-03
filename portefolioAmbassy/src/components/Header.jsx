import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Empêcher le défilement du site quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Profil', href: '#home' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Formation', href: '#formation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-[#070B18]/60 backdrop-blur-2xl border-b border-white/[0.03]">
      <div className="container mx-auto px-6 py-4 md:px-8 md:py-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-col group cursor-pointer relative z-[110]">
          <div className="font-serif text-xl md:text-2xl tracking-tighter text-prestige-cream leading-none">
            Amina <span className="text-prestige-gold italic group-hover:pl-2 transition-all duration-500">Longoh</span>
          </div>
          <div className="text-[6px] md:text-[7px] uppercase tracking-[0.6em] text-white/20 mt-1 font-bold group-hover:text-prestige-gold/50 transition-colors">
            Ambassadrice
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <a href={link.href} className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-prestige-cream transition-all duration-300 block pb-1">
                  {link.name}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-prestige-gold group-hover:w-full transition-all duration-500"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-4 md:gap-8">
          <a href="https://ambatchadparis.fr/" target="_blank" rel="noopener noreferrer" 
             className="hidden sm:block relative overflow-hidden border border-white/10 px-6 py-2 md:px-8 md:py-3 group">
            <span className="relative z-10 text-[8px] md:text-[9px] uppercase tracking-[0.3em] font-bold text-prestige-cream group-hover:text-prestige-dark transition-colors duration-500">
              Ambassade
            </span>
            <div className="absolute inset-0 bg-prestige-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>

          {/* Hamburger Menu - Z-index très haut pour rester au dessus */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden flex flex-col justify-center items-center gap-1.5 z-[110] w-10 h-10 border border-white/5 rounded-full bg-white/5"
          >
            <span className={`w-5 h-0.5 bg-prestige-gold transition-all duration-500 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-prestige-gold transition-all duration-500 ${isOpen ? 'opacity-0 scale-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-prestige-gold transition-all duration-500 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </button>
        </div>

        {/* --- PAGE INDÉPENDANTE MOBILE (FULL SCREEN OVERLAY) --- */}
        <div className={`fixed inset-0 z-[105] bg-[#070B18] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} md:hidden`}>
          
          {/* Filigrane de fond pour le style */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
            <span className="text-[25vw] font-serif font-black rotate-90">MENU</span>
          </div>

          <div className="relative h-full flex flex-col justify-center px-12 gap-10">
            {/* Numérotation et Liens */}
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="group flex items-baseline gap-4"
                >
                  <span className="text-prestige-gold font-sans text-[10px] font-bold opacity-50">0{index + 1}</span>
                  <span className="text-4xl sm:text-5xl uppercase tracking-tighter font-serif text-white/90 group-hover:text-prestige-gold group-hover:italic group-hover:pl-4 transition-all duration-500">
                    {link.name}
                  </span>
                </a>
              ))}
            </nav>

            {/* Pied de page du menu */}
            <div className="mt-12 pt-12 border-t border-white/5 flex flex-col gap-4">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Contact Officiel</p>
              <a href="mailto:contact@ambatchadparis.fr" className="text-prestige-gold font-light text-sm italic">contact@ambatchadparis.fr</a>
              
              <div className="flex gap-6 mt-4">
                <span className="w-8 h-[1px] bg-white/10"></span>
                <span className="w-8 h-[1px] bg-white/10"></span>
                <span className="w-8 h-[1px] bg-white/10"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;