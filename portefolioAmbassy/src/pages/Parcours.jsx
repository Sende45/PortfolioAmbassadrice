import React from 'react';

const Parcours = () => {
  const experiences = [
    {
      date: "2026",
      period: "JANVIER — PRÉSENT",
      institution: "Ambassade du Tchad en France",
      poste: "Ambassadeur Extraordinaire et Plénipotentiaire",
      description: "Représentation officielle de l'État tchadien auprès des autorités françaises. Conduite des relations bilatérales et négociation d'accords politiques, économiques et de coopération.",
      location: "Paris"
    },
    {
      date: "2025",
      period: "JUILLET — PRÉSENT",
      institution: "Organisation Internationale de la Francophonie (OIF)",
      poste: "Conseillère Spéciale, Représentante Personnelle du Chef de l’Etat auprès de l’OIF",
      description: "Représentation au CPF et à l'OIF. Élaboration des positions diplomatiques, analyse de la situation politique et budgétaire de l'espace francophone, et contribution aux résolutions sur l'égalité des genres et les droits de l'homme.",
      location: "International"
    },
    {
      date: "2020",
      period: "JUILLET 2020 — JUILLET 2025",
      institution: "Ministère de la Femme",
      poste: "Ministre d'État — Femme & Protection de l'Enfance",
      description: "Pilotage de la politique nationale de promotion de la femme et de la famille. Réformes pour l'autonomisation socio-économique, l'équité des chances et la protection des personnes vulnérables.",
      location: "N'Djaména"
    },
    {
      date: "2020",
      period: "MANDAT 2020 — 2025",
      institution: "REFAMP / TCHAD",
      poste: "Présidente du Réseau des Femmes Africaines Ministres et Parlementaires",
      description: "Plaidoyer pour la participation politique des femmes, renforcement des capacités, suivi des politiques d'égalité et contribution active à la paix et à la sécurité régionale.",
      location: "Tchad"
    },
    {
      date: "2020",
      period: "MANDAT 2020 — 2025",
      institution: "G5 Sahel",
      poste: "Présidente de tutelle — Plateforme régionale des femmes",
      description: "Coordination du conseil des ministres en charge du genre de l'espace G5 Sahel. Mise en œuvre du plan d'action des plateformes nationales et de la politique genre régionale.",
      location: "Sahel"
    },
    {
      date: "2018",
      period: "FONDATRICE",
      institution: "Fondation Tchad Helping Hands",
      poste: "Présidente",
      description: "Coordination d'activités caritatives, plaidoyer pour l'éducation des filles, la justice sociale et l'insertion socio-économique des femmes et des jeunes.",
      location: "Tchad"
    },
    {
      date: "2017",
      period: "MANDAT PANAFRICAIN",
      institution: "Union Panafricaine de la Jeunesse",
      poste: "Commissaire éducation & compétences",
      description: "Mise en œuvre du pilier éducation de l'Agenda 2063 de l'Union Africaine, programmes de l'UNESCO et plaidoyer pour la représentativité des jeunes.",
      location: "Afrique"
    }
  ];

  return (
    <section id="parcours" className="py-32 bg-[#070B18] text-prestige-cream relative overflow-hidden">
      
      {/* Filigrane latéral */}
      <div className="absolute top-0 right-0 h-full w-24 border-l border-white/[0.03] flex items-center justify-center pointer-events-none">
        <p className="rotate-90 text-[10px] uppercase tracking-[1em] text-white/5 font-black whitespace-nowrap">
          CHRONOLOGIE OFFICIELLE
        </p>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-prestige-gold"></span>
              <p className="text-prestige-gold uppercase tracking-[0.5em] text-[10px] font-black">
                Étapes de Leadership
              </p>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9]">
              Un Parcours <br /> <span className="text-prestige-gold italic">d'Exception</span>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Ligne centrale de la Timeline */}
          <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-prestige-gold/50 via-white/5 to-transparent"></div>

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* 1. Bloc Date & Année */}
                <div className="w-full md:w-[45%] mb-8 md:mb-0">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end text-right'}`}>
                    <span className="text-7xl md:text-9xl font-serif font-black text-white/[0.03] leading-none group-hover:text-prestige-gold/10 transition-colors duration-700">
                      {exp.date}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-prestige-gold font-bold mt-[-1rem] md:mt-[-2rem] relative z-10">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* 2. Le Point d'Ancrage */}
                <div className="absolute left-0 md:left-1/2 top-4 md:top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-full h-full rounded-full bg-[#070B18] border border-prestige-gold flex items-center justify-center">
                    <div className="w-1 h-1 bg-prestige-gold rounded-full group-hover:scale-[3] transition-transform duration-500"></div>
                  </div>
                </div>

                {/* 3. Bloc Contenu */}
                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <div className={`space-y-4 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold italic">
                      {exp.institution}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-serif leading-tight group-hover:text-prestige-gold transition-colors duration-500">
                      {exp.poste}
                    </h3>
                    <div className={`w-12 h-[1px] bg-prestige-gold/30 my-6 ${index % 2 === 0 ? '' : 'ml-auto'}`}></div>
                    <p className="text-white/40 text-sm leading-relaxed font-light">
                      {exp.description}
                    </p>
                    <div className={`pt-4 flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/20 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span>
                      {exp.location}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bouton de téléchargement CV */}
      <div className="mt-32 flex justify-center pb-12">
        <button className="group flex flex-col items-center gap-4">
          <span className="text-[9px] uppercase tracking-[0.6em] text-white/20 group-hover:text-prestige-gold transition-colors font-bold">Consulter le dossier complet</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-prestige-gold to-transparent"></div>
        </button>
      </div>
    </section>
  );
};

export default Parcours;