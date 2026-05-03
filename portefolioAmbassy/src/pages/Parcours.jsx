import React from 'react';

const Parcours = () => {
  const experiences = [
    {
      date: "2026",
      period: "JANVIER — PRÉSENT",
      institution: "Ambassade du Tchad en France",
      poste: "Ambassadeur Extraordinaire et Plénipotentiaire",
      description: "Représentation officielle et conduite des relations bilatérales. Négociation d'accords politiques et économiques majeurs.",
      location: "France"
    },
    {
      date: "2025",
      period: "JUILLET — PRÉSENT",
      institution: "OIF",
      poste: "Conseillère Spéciale du Chef de l’Etat",
      description: "Représentation au Conseil permanent de la Francophonie (CPF). Analyse diplomatique et stratégique de l'espace francophone.",
      location: "Tchad"
    },
     {
      date: "2020",
      period: "2020-2026",
      institution: "REFAMP",
      poste: "Présidente",
      description: "Réseau des Femmes Africaines Ministres et Parlementaires REFAMP/ Tchad",
      location: "Afrique"
    },
    {
      date: "2020",
      period: "2020 — 2025",
      institution: "Ministère de la Femme",
      poste: "Ministre d'État",
      description: "Pilotage des réformes nationales pour l'autonomisation des femmes, la protection de l'enfance et l'équité des chances.",
      location: "Tchad"
    },
    {
      date: "2020",
      period: "MANDAT 2020 — 2024",
      institution: "G5 Sahel",
      poste: "Présidente / Tutelle Régionale",
      description: "Plaidoyer de haut niveau pour la participation politique des femmes et coordination du conseil des ministres du genre du G5 Sahel.",
      location: "Afrique"
    },
    {
      date: "2019",
      period: "JUILLET 2019 — JUILLET 2020",
      institution: "Maison Nationale De La Femme",
      poste: "Directrice Générale",
      description: "Gestion financière et RH. Modernisation des systèmes d'information et promotion socio-économique par la formation technique.",
      location: "Tchad"
    },
    {
      date: "2019",
      period: "2019 - 07/2020",
      institution: "Union Panafricaine de la Jeunesse",
      poste: "Commissaire Éducation",
      description: "Mise en œuvre de l'Agenda 2063 de l'UA et des programmes de l'UNESCO pour la représentativité des jeunes.",
      location: "Tchad"
    },
    {
      date: "2016",
      period: "2016 - PRESENT",
      institution: "Fondation Tchad Helping Hands",
      poste: "Présidente",
      description: "Encadrement d'activités caritatives et plaidoyer pour l'éducation des filles et l'insertion des jeunes.",
      location: "Tchad"
    },
    {
      date: "2013",
      period: "2013 — 2019",
      institution: "Glencore",
      poste: "Superviseur des Services Généraux",
      description: "Gestion des opérations administratives, marketing stratégique, budgétisation et engagement des parties prenantes.",
      location: "Tchad"
    },
    {
      date: "2013",
      period: "JANVIER — OCTOBRE 2013",
      institution: "Millicom",
      poste: "Agent Front Office",
      description: "Gestion et fidélisation du portefeuille clients. Mise en œuvre de la politique commerciale et reporting analytique.",
      location: "Tchad"
    }
  ];

  const formations = [
    { year: "2023 - 2024", label: "Executive Master en Management", info: "France" },
    { year: "2023", label: "Certification en Leadership Diplomatique", info: "France" },
    { year: "2015 - 2016", label: "Master en Gestion des Entreprises", info: "Tchad" }
  ];

  return (
    <section id="parcours" className="py-32 bg-[#070B18] text-prestige-cream relative overflow-hidden">
      
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

        {/* Timeline des Expériences */}
        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 w-[1px] h-full bg-gradient-to-b from-prestige-gold/50 via-white/5 to-transparent"></div>

          <div className="space-y-32">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
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

                <div className="absolute left-0 md:left-1/2 top-4 md:top-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-full h-full rounded-full bg-[#070B18] border border-prestige-gold flex items-center justify-center">
                    <div className="w-1 h-1 bg-prestige-gold rounded-full group-hover:scale-[3] transition-transform duration-500"></div>
                  </div>
                </div>

                <div className="w-full md:w-[45%] pl-10 md:pl-0">
                  <div className={`space-y-4 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-right'}`}>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold italic">{exp.institution}</p>
                    <h3 className="text-2xl md:text-3xl font-serif leading-tight group-hover:text-prestige-gold transition-colors duration-500">{exp.poste}</h3>
                    <div className={`w-12 h-[1px] bg-prestige-gold/30 my-6 ${index % 2 === 0 ? '' : 'ml-auto'}`}></div>
                    <p className="text-white/40 text-sm leading-relaxed font-light">{exp.description}</p>
                    <div className={`pt-4 flex items-center gap-2 text-[9px] uppercase tracking-widest text-white/20 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                      <span className="w-1 h-1 rounded-full bg-white/20"></span> {exp.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section ÉDUCATION ajoutée en bas */}
        <div className="mt-48 pt-24 border-t border-white/5">
          <h3 className="text-prestige-gold uppercase tracking-[0.4em] text-xs font-bold mb-16 text-center">Cursus Académique</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {formations.map((edu, i) => (
              <div key={i} className="text-center group">
                <p className="text-prestige-gold/40 font-serif italic mb-2">{edu.year}</p>
                <h4 className="text-lg font-serif mb-2 group-hover:text-prestige-gold transition-colors">{edu.label}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/20">{edu.info}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

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