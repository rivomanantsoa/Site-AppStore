import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import { Download, Phone, Lightbulb, ArrowRightCircle } from 'lucide-react';
import FadeInOnScroll from '../components/FadeInOnScroll';

const Home: React.FC = () => {
  return (
    <div className="home-container">
<div className="background-animation"></div>

      {/* Section héro améliorée */}
      <div className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Numérisez vos idées dès aujourd'hui
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Des solutions sur mesure pour transformer vos besoins en applications performantes et modernes.
        </motion.p>
        <a href="/telechargement" className="cta-button">
          Commencer <ArrowRightCircle size={18} style={{ marginLeft: '8px' }} />
        </a>
      </div>

      {/* Intro fade */}
      <FadeInOnScroll direction="up">
        <p style={{ maxWidth: 700, margin: '2rem auto' }}>
          Découvrez comment nos applications transforment les tâches ordinaires en expériences simples, rapides et intelligentes.
        </p>
      </FadeInOnScroll>

      {/* Pourquoi le numérique */}
      <motion.div
        className="info-section"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className="info-image">
          <img src="src/assets/images/undraw_mobile-site_qjby.svg" alt="Innovation numérique" />
        </div>
        <div className="info-text">
          <h2>Pourquoi choisir le numérique ?</h2>
          <p>
            Le monde évolue, et les solutions numériques vous permettent de gagner du temps, d'optimiser vos efforts et de rester connecté en toute simplicité.
          </p>
        </div>
      </motion.div>

      {/* Appel à l'exploration */}
      <a href="/telechargement" className="cta-button">
        Explorer & Télécharger <Download size={18} style={{ marginLeft: '8px' }} />
      </a>

      {/* Section idée */}
      <FadeInOnScroll direction="left" delay={0.3}>
        <div className="advice-section">
          <div className="advice-text">
            <h2>Vous avez une idée ? Nous la rendons numérique</h2>
            <p>
              Que ce soit pour gérer une activité, faciliter un processus ou créer une application personnalisée, nous sommes là pour transformer vos besoins en solutions numériques efficaces. Il vous suffit de nous faire part de votre projet.
            </p>
          </div>
          <div className="advice-image">
            <img src="src/assets/images/undraw_ideas_41b9.svg" alt="Conseil numérique" />
          </div>
        </div>
      </FadeInOnScroll>
      <FadeInOnScroll direction="up">
  <div className="stats-section">
    <h2>Ils nous ont fait confiance</h2>
    <div className="stats-grid">
      <div className="stat-item">
        <h3>+20</h3>
        <p>Projets numériques réalisés</p>
      </div>
      <div className="stat-item">
        <h3>100%</h3>
        <p>Satisfaction client</p>
      </div>
      <div className="stat-item">
        <h3>24h/24</h3>
        <p>Assistance dédiée</p>
      </div>
    </div>
  </div>
</FadeInOnScroll>


      {/* Appel clair à contact */}
      <a
  href="#footer-contact"
  className="cta-button"
  onClick={(e) => {
    e.preventDefault();
    const section = document.getElementById("footer-contact");
    section?.scrollIntoView({ behavior: "smooth" });
  }}
>
  Discuter avec nous <Phone size={18} style={{ marginLeft: '8px' }} />
</a>

      {/* Section bonus : incitation ou témoignage */}
      <FadeInOnScroll direction="up" delay={0.5}>
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ color: '#00e5ff' }}>
            Une solution numérique commence par une idée...
          </h2>
          <p style={{ color: '#ccc', marginTop: '1rem' , marginBottom: '1rem' }}>
            ...et cette idée peut devenir réalité dès aujourd'hui. Pourquoi attendre ?
          </p>
          <a href="/telechargement" className="cta-button" style={{ marginTop: '1.5rem' }}>
            Parlez-nous de votre idée <Lightbulb size={18} style={{ marginLeft: '8px' }} />
          </a>
        </div>
      </FadeInOnScroll>
    </div>
  );
};

export default Home;
