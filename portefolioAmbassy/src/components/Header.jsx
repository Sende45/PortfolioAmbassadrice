import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Profil', href: '#home' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Parcours', href: '#parcours' },
    { name: 'Formation', href: '#formation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070B18]/60 backdrop-blur-2xl border-b border-white/[0.03]">
      <div className="container mx-auto px-6 py-4 md:px-8 md:py-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex flex-col group cursor-pointer relative z-50">
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

          {/* Hamburger Menu */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden flex flex-col gap-1.5 z-50">
            <span className={`w-6 h-0.5 bg-prestige-gold transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-prestige-gold transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-prestige-gold transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-[#070B18] transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
           {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-xl uppercase tracking-[0.3em] font-serif text-white/50 hover:text-prestige-gold">
                {link.name}
              </a>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;