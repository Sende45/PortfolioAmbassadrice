import React from 'react';

const Expertise = () => {
  const categories = [
    {
      id: "01",
      title: "Diplomatie & Relations internationales",
      skills: ["Négociation multilatérale", "Représentation officielle d'État", "Droit international public", "Coopération bilatérale", "Médiation et résolution de conflits"]
    },
    {
      id: "02",
      title: "Genre & Politiques publiques",
      skills: ["Politiques nationales genre", "Plan d'action Résolution 1325 ONU", "Autonomisation des femmes", "Loi sur la parité", "Protection de l'enfance"]
    },
    {
      id: "03",
      title: "Leadership & Gouvernance",
      skills: ["Pilotage de politiques publiques", "Communication institutionnelle", "Partenariats stratégiques", "Gestion des ressources humaines", "Leadership organisationnel"]
    }
  ];

  return (
    <section id="expertise" className="py-32 bg-[#070B18] text-prestige-cream relative overflow-hidden">
      
      {/* Filigrane d'arrière-plan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[25vw] font-serif font-black text-white/[0.01] whitespace-nowrap select-none pointer-events-none">
        STRATÉGIE
      </div>

      <div className="container mx-auto px-8 relative z-10">
        
        {/* En-tête de section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-prestige-gold"></span>
              <p className="text-prestige-gold uppercase tracking-[0.5em] text-[10px] font-black">
                Domaines d'impact
              </p>
            </div>
            <h2 className="text-6xl md:text-[7rem] font-serif leading-[0.85] tracking-tighter">
              Expertise & <br /> <span className="text-prestige-gold italic">Savoir-faire</span>
            </h2>
          </div>
          <div className="hidden md:block pb-4">
             <p className="text-white/20 text-[10px] uppercase tracking-[0.4em] font-bold border-r border-prestige-gold/30 pr-8 text-right">
               Standard d'Excellence <br /> Diplomatique
             </p>
          </div>
        </div>

        {/* Grille d'expertise style "Éditorial" */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-white/5 bg-white/[0.01]">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`p-12 md:p-16 group relative transition-all duration-700 hover:bg-white/[0.02] ${
                idx !== categories.length - 1 ? 'lg:border-r border-b lg:border-b-0 border-white/5' : 'border-b lg:border-b-0 border-white/5'
              }`}
            >
              {/* Numéro de section stylisé */}
              <div className="mb-12">
                <span className="font-serif italic text-4xl text-prestige-gold/20 group-hover:text-prestige-gold/50 transition-colors duration-500">
                  {cat.id}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif mb-12 leading-snug group-hover:translate-x-3 transition-transform duration-500 ease-out">
                {cat.title}
              </h3>

              <ul className="space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-4 group/item">
                    <span className="w-1.5 h-1.5 rounded-full border border-prestige-gold/50 mt-1.5 group-hover/item:bg-prestige-gold transition-colors"></span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 group-hover/item:text-white transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Ligne décorative de survol */}
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-prestige-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Note de bas de section */}
        <div className="mt-16 flex justify-center">
          <div className="px-8 py-4 border border-white/5 rounded-full">
            <p className="text-[9px] uppercase tracking-[0.5em] text-white/20 font-bold italic text-center">
              Engagée pour une diplomatie de résultats et d'action
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Expertise;