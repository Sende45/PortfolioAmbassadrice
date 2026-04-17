import React from 'react';
// Importation de l'image locale pour une netteté maximale
import aminaPhoto from '../assets/AminaPic.png';

const Home = () => {
  return (
    <div className="bg-[#070B18] text-white selection:bg-prestige-gold selection:text-prestige-dark">
      
      {/* --- SECTION HERO : L'AUTORITÉ --- */}
      {/* Correction : overflow-hidden pour éviter le scroll horizontal et items-center pour la stabilité */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        
        {/* Décoration de fond (Filigrane) - pointer-events-none ajouté pour ne pas gêner le clic */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-serif font-black text-white/[0.01] whitespace-nowrap pointer-events-none select-none z-0">
          EXCELLENCE
        </div>

        <div className="container mx-auto px-8 relative z-10">
          {/* Correction de la grille : passage en lg:grid-cols-12 pour un meilleur ratio texte/image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Texte à gauche - Élargi à 8 colonnes pour éviter de pousser l'image */}
            <div className="lg:col-span-8 space-y-12">
              <div className="flex items-center gap-4 animate-reveal">
                <span className="w-16 h-[1px] bg-prestige-gold"></span>
                <p className="text-prestige-gold tracking-[0.6em] uppercase text-[10px] font-black">
                  République du Tchad • État & Diplomatie
                </p>
              </div>

              {/* Correction de la taille de police : utilisation de text-8xl à 11rem max pour rester dans le cadre */}
              <h1 className="font-serif text-6xl md:text-8xl xl:text-[10rem] leading-[0.85] tracking-tighter animate-reveal pb-8" style={{ animationDelay: '0.2s' }}>
                Amina Priscille <br />
                <span className="text-prestige-gold italic ml-8 md:ml-32 inline-block">Longoh</span>
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 animate-reveal" style={{ animationDelay: '0.4s' }}>
                {/* Max-width ajouté pour empêcher le texte de s'étaler trop loin à droite */}
                <p className="text-white/40 text-lg font-light leading-relaxed border-l border-white/10 pl-8 max-w-md">
                  Ambassadeur Extraordinaire auprès de la France. 
                  <span className="text-white/80 block mt-4 italic font-serif text-xl">
                    "Une diplomatie de vision, un leadership d'action."
                  </span>
                </p>
                
                {/* Stats Minimalistes - Max-width pour garder le bloc compact */}
                <div className="flex justify-between items-end border-b border-white/5 pb-6 max-w-xs">
                   <div className="text-center">
                      <span className="block text-3xl font-serif text-prestige-gold">12+</span>
                      <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold">Années</span>
                   </div>
                   <div className="text-center">
                      <span className="block text-3xl font-serif text-prestige-gold">G5</span>
                      <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold">Sahel</span>
                   </div>
                   <div className="text-center">
                      <span className="block text-3xl font-serif text-prestige-gold">FR/AR/EN</span>
                      <span className="text-[8px] uppercase tracking-widest text-white/30 font-bold">Langues</span>
                   </div>
                </div>
              </div>
            </div>

            {/* Portrait Frame - Fixé sur 4 colonnes pour la stabilité */}
            <div className="lg:col-span-4 hidden lg:block relative group animate-reveal" style={{ animationDelay: '0.6s' }}>
              <div className="relative aspect-[3/4] border border-white/5 p-4 transition-all duration-1000 group-hover:border-prestige-gold/30">
                <div className="w-full h-full bg-[#0F172A] overflow-hidden relative">
                   <img 
                    src={aminaPhoto} 
                    alt="Amina Priscille Longoh" 
                    className="w-full h-full object-cover object-top transition-all duration-700 brightness-105 contrast-[1.02] group-hover:scale-110"
                    loading="eager"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#070B18]/10 to-transparent pointer-events-none"></div>
                </div>
                {/* Badge de poste - text-nowrap pour éviter les retours à la ligne brusques */}
                <div className="absolute -bottom-8 -right-8 bg-white p-10 shadow-2xl z-20 min-w-[220px]">
                  <p className="text-[#070B18] font-black tracking-[0.4em] text-[10px] uppercase">Poste Actuel</p>
                  <p className="text-[#070B18] font-serif italic text-xl mt-1 whitespace-nowrap">Ambassadrice, Paris</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION IMPACT : LE BILAN --- */}
      <section className="py-32 bg-[#FDFBF6] text-[#070B18] relative">
        <div className="container mx-auto px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <p className="text-prestige-gold uppercase tracking-[0.5em] text-[10px] font-black mb-6">Impact & Résultats</p>
              <h2 className="text-5xl md:text-8xl font-serif tracking-tighter leading-[0.9]">
                Réalisations <br /> <span className="italic">Stratégiques</span>
              </h2>
            </div>
            <div className="pb-4">
              <p className="text-black/30 text-[10px] uppercase tracking-[0.4em] font-bold border-r border-prestige-gold/40 pr-8 text-right">
                Bilan de gouvernance <br /> 2020 — 2026
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/5 border border-black/5">
            <div className="md:col-span-8 p-16 bg-[#FDFBF6] group hover:bg-white transition-colors duration-700">
              <span className="text-[10px] text-prestige-gold font-black tracking-widest mb-12 block">01 / GENRE</span>
              <h3 className="text-4xl font-serif mb-8 group-hover:translate-x-4 transition-transform duration-500">
                Parité Constitutionnelle
              </h3>
              <p className="text-black/50 leading-relaxed text-lg max-w-2xl font-light">
                Impulsion d'une réforme historique portant la représentativité politique des femmes à <span className="text-[#070B18] font-bold">45 %</span>. Une avancée majeure pour la démocratie tchadienne.
              </p>
            </div>

            <div className="md:col-span-4 p-12 bg-[#FDFBF6] group hover:bg-white transition-colors duration-700">
               <span className="text-[10px] text-prestige-gold font-black tracking-widest mb-8 block">02 / DROITS</span>
               <h3 className="text-2xl font-serif mb-6">Centres Intégrés</h3>
               <p className="text-black/50 text-sm leading-relaxed">
                 Déploiement de structures de protection pour les victimes de violences basées sur le genre sur l'ensemble du territoire national.
               </p>
            </div>

            <div className="md:col-span-5 p-12 bg-[#FDFBF6] group hover:bg-white transition-colors duration-700 border-t border-black/5">
               <span className="text-[10px] text-prestige-gold font-black tracking-widest mb-8 block">03 / SOCIAL</span>
               <h3 className="text-2xl font-serif mb-6">Enregistrement État Civil</h3>
               <p className="text-black/50 text-sm leading-relaxed">
                 Augmentation critique du taux d'enregistrement des naissances, sécurisant l'avenir de milliers d'enfants tchadiens.
               </p>
            </div>

            <div className="md:col-span-7 p-12 bg-[#070B18] text-white group overflow-hidden relative border-t border-black/5">
               <div className="relative z-10">
                 <span className="text-[10px] text-prestige-gold font-black tracking-widest mb-8 block">04 / RÉGIONAL</span>
                 <h3 className="text-3xl font-serif mb-6 group-hover:text-prestige-gold transition-colors italic">Influence G5 Sahel</h3>
                 <p className="text-white/40 text-sm leading-relaxed max-w-md">
                   Architecture de la politique nationale genre au sein de l'espace Sahel, positionnant le Tchad comme leader sur ces questions.
                 </p>
               </div>
               <div className="absolute -bottom-10 -right-10 text-white/[0.03] text-9xl font-serif italic pointer-events-none">SAHEL</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;