import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Bloque le scroll quand le menu est ouvert pour un rendu propre
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
    <>
      <header className="fixed top-0 left-0 w-full z-[100] bg-[#070B18]/90 backdrop-blur-xl border-b border-white/[0.03]">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo - Toujours visible */}
          <div className="flex flex-col relative z-[120]">
            <div className="font-serif text-xl tracking-tighter text-prestige-cream">
              Amina <span className="text-prestige-gold italic">Longoh</span>
            </div>
            <div className="text-[6px] uppercase tracking-[0.6em] text-white/20 font-bold">
              Ambassadrice
            </div>
          </div>
          
          {/* Menu Desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  <a href={link.href} className="text-[9px] uppercase tracking-[0.4em] font-bold text-white/30 group-hover:text-prestige-cream transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Bouton Burger - Z-index supérieur pour rester cliquable */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden relative z-[120] w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          >
            <span className={`w-6 h-0.5 bg-prestige-gold transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-prestige-gold transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-prestige-gold transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* --- MENU MOBILE : L'ÉCRAN INDÉPENDANT --- */}
      <div className={`fixed inset-0 z-[110] bg-[#070B18] flex flex-col transition-all duration-500 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} md:hidden`}>
        
        {/* Décoration en arrière-plan */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vh] font-serif font-black text-white/[0.02] rotate-90 pointer-events-none uppercase">
          Menu
        </div>

        <div className="flex-1 flex flex-col justify-center px-10 relative z-10">
          <nav className="space-y-8">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="block group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-prestige-gold font-sans text-[10px] font-bold">0{index + 1}</span>
                  <span className="text-5xl font-serif text-white uppercase tracking-tighter group-hover:italic group-hover:text-prestige-gold transition-all">
                    {link.name}
                  </span>
                </div>
              </a>
            ))}
          </nav>

          {/* Footer du menu mobile */}
          <div className="mt-20 pt-10 border-t border-white/5">
            <p className="text-[10px] uppercase tracking-widest text-white/20 mb-2">Contact Officiel</p>
            <p className="text-prestige-gold font-serif italic">contact@ambatchadparis.fr</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;