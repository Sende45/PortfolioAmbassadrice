import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; // Qui contient désormais le composant Hero
import Expertise from './pages/Expertise';
import Parcours from './pages/Parcours';
import Formation from './pages/Formation';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="bg-prestige-dark min-h-screen">
      <Header />

      <main>
        <section id="home">
          <Home /> {/* Assure-toi que Home.jsx importe et affiche <Hero /> */}
        </section>
        
        <section id="expertise">
          <Expertise />
        </section>

        <section id="parcours">
          <Parcours />
        </section>

        <section id="formation">
          <Formation />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;