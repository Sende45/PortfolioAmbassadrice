import React from 'react';

const Formation = () => {
  const diplomes = [
    {
      annee: "2024",
      titre: "MPA Etudes Diplomatiques et Relations Internationales",
      ecole: "CEDS Paris",
      lieu: "France"
    },
    {
      annee: "2023",
      titre: "Spécialisation en Diplomates Innovantes",
      ecole: "CEDS Paris",
      lieu: "France"
    },
    {
      annee: "2016",
      titre: "Master | communication des institutions",
      ecole: "Sup' Management School of Business",
      lieu: "Tchad"
    },
    {
      annee: "2015",
      titre: "Licence | gestion & administration des Entreprises",
      ecole: "Institut Supérieur Polytechnique De Reference (ISPR)",
      lieu: "Tchad"
    },
     {
      annee: "2014",
      titre: "Certificat des responsables des services généraux",
      ecole: "Cegos",
      lieu: "France"
    },
     {
      annee: "2012",
      titre: "Advanced diploma in business management",
      ecole: "Wintech Professional Institute",
      lieu: "Ghana"
    },
     {
      annee: "2009",
      titre: "Baccalaureat serie A4 ",
      ecole: "Lycée Adventiste",
      lieu: "Tchad"
    }

  ];

  const langues = [
    { nom: "Français", niveau: "Maternelle", bar: "100%" },
    { nom: "Arabe", niveau: "Avancé", bar: "90%" },
    { nom: "Anglais", niveau: "Professionnel", bar: "85%" }
  ];

  return (
    <section id="formation" className="py-32 bg-[#FDFBF6] text-[#070B18] overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-stretch">
          
          {/* CÔTÉ GAUCHE : ACADÉMIQUE (Éditorial) */}
          <div className="lg:col-span-7">
            <div className="space-y-4 mb-20">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-prestige-gold"></span>
                <p className="text-prestige-gold uppercase tracking-[0.5em] text-[10px] font-black">
                  Curriculum
                </p>
              </div>
              <h2 className="text-6xl md:text-8xl font-serif tracking-tighter leading-[0.9]">
                Formation <br /> <span className="italic">Académique</span>
              </h2>
            </div>

            <div className="space-y-16">
              {diplomes.map((item, index) => (
                <div key={index} className="group relative pl-12 md:pl-20 border-l border-black/5 hover:border-prestige-gold transition-colors duration-700">
                  <span className="absolute left-0 top-0 text-5xl md:text-7xl font-serif font-black text-black/[0.03] -translate-x-1/2 group-hover:text-prestige-gold/10 transition-colors">
                    {item.annee}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-serif tracking-tight leading-tight group-hover:translate-x-2 transition-transform duration-500">
                      {item.titre}
                    </h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-black/40">
                      {item.ecole} <span className="mx-2 text-prestige-gold">•</span> {item.lieu}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CÔTÉ DROITE : LANGUES & PASSIONS (Bloc Sombre) */}
          <div className="lg:col-span-5 bg-[#070B18] p-12 md:p-20 text-white flex flex-col justify-between relative shadow-2xl">
            {/* Texture de fond discrète */}
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <div className="w-20 h-20 border-t border-r border-white"></div>
            </div>

            <div className="space-y-16">
              <div className="space-y-10">
                <p className="text-[10px] uppercase tracking-[0.5em] text-prestige-gold font-black">Linguistique</p>
                <div className="space-y-10">
                  {langues.map((l, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-end mb-4">
                        <span className="text-xs uppercase tracking-[0.2em] font-bold">{l.nom}</span>
                        <span className="text-[9px] uppercase tracking-[0.1em] text-white/40 italic font-serif">{l.niveau}</span>
                      </div>
                      <div className="w-full h-[1px] bg-white/10 overflow-hidden">
                        <div 
                          className="h-full bg-prestige-gold transition-all duration-1000 ease-out" 
                          style={{ width: l.bar }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-16 border-t border-white/5">
                <p className="text-[10px] uppercase tracking-[0.5em] text-prestige-gold font-black mb-6">Engagement & Intérêts</p>
                <p className="font-serif text-xl italic text-white/60 leading-relaxed">
                  "Promouvoir l'excellence tchadienne à travers la culture, l'humanitaire et une diplomatie d'action."
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {['Diplomatie', 'Genre', 'Humanitaire'].map((tag) => (
                    <span key={tag} className="text-[8px] uppercase tracking-widest border border-white/10 px-4 py-2 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Formation;