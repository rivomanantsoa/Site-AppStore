import React from 'react';
import './Apropos.css';
import FadeInOnScroll from '../components/FadeInOnScroll';

const AboutPage = () => {
  return (
    <div className="about-wrapper">
      <div className="hero-section">
        <FadeInOnScroll direction="up">
          <h1>Bienvenue chez <span className="highlight">Numeric World</span></h1>
        </FadeInOnScroll>
        <FadeInOnScroll direction="up" delay={0.2}>
          <p className="hero-subtitle">
            L’innovation au service des utilisateurs malgaches. Simple, local, efficace.
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll direction="left" delay={0.4}>
          <img
            className="hero-image"
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=768"
            alt="Innovation numérique"
          />
        </FadeInOnScroll>
      </div>

      <section className="about-section alt">
        <FadeInOnScroll direction="left">
          <div className="text-content">
            <h2>Notre mission 🎯</h2>
            <p>
              Mettre la technologie au service du quotidien en concevant des outils numériques accessibles, intuitifs et pensés pour les réalités malgaches.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll direction="right" delay={0.2}>
          <div className="image-frame">
            <img src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&h=768&w=1152" alt="Mission" />
          </div>
        </FadeInOnScroll>
      </section>

      <section className="about-section">
        <FadeInOnScroll direction="right">
          <div className="text-content">
            <h2>Une équipe passionnée 💡</h2>
            <p>
              Développeurs, designers, et créatifs réunis autour d’une vision commune : proposer des solutions concrètes, utiles, et porteuses de sens.
            </p>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll direction="left" delay={0.2}>
          <div className="image-frame">
            <img src="https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&h=768" alt="Équipe Numeric World" />
          </div>
        </FadeInOnScroll>
      </section>

      <section className="values-section">
        <FadeInOnScroll direction="up">
          <h2>Nos valeurs fondamentales 🌟</h2>
        </FadeInOnScroll>
        <div className="cards">
          <FadeInOnScroll direction="up" delay={0.1}>
            <div className="card">
              <h3>🚀 Innovation locale</h3>
              <p>Nous créons des produits pensés pour les réalités malgaches.</p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.2}>
            <div className="card">
              <h3>🔐 Respect de la vie privée</h3>
              <p>Vos données sont à vous, et le resteront.</p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.3}>
            <div className="card">
              <h3>📱 Accessibilité</h3>
              <p>Nos applications sont optimisées pour tout type d’appareil.</p>
            </div>
          </FadeInOnScroll>
          <FadeInOnScroll direction="up" delay={0.4}>
            <div className="card">
              <h3>💬 Écoute</h3>
              <p>Nous sommes à l’écoute pour améliorer sans cesse l’expérience utilisateur.</p>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      <section className="contact-cta">
        <FadeInOnScroll direction="up">
          <h2>Restons connectés ! 📣</h2>
          <p>
            Retrouvez nos coordonnées dans le footer ou suivez-nous sur <strong>Facebook</strong> pour découvrir nos dernières nouveautés.
          </p>
        </FadeInOnScroll>
      </section>
    </div>
  );
};

export default AboutPage;
