
import './Download.css';
import { motion } from 'framer-motion';
import ReactDOM from 'react-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import React, { useState, useRef, useEffect } from 'react';


const apps = [
  {
    name: "Gestion Ferme Porcine",
    description: "Suivi des porcs, alimentation, vaccins et ventes.",
    image: "src/assets/apps/pig-svgrepo-com.svg",
    link: "#",
    screenshots: ["src/assets/images/undraw_code-thinking_0vf2.svg", "src/assets/screenshots/Capture d’écran (4).png"],
  },
  {
    name: "Vente de Poissons",
    description: "Application intuitive pour les marchands de poissons.",
    image: "src/assets/apps/fish-svgrepo-com.svg",
    link: "#",
    screenshots: ["src/assets/screenshots/Capture d’écran (5).png", "src/assets/screenshots/Capture d’écran (6).png",
      "src/assets/screenshots/Capture d’écran (14).png", "src/assets/screenshots/Capture d’écran (5).png",
      "src/assets/screenshots/Capture d’écran (6).png", "src/assets/screenshots/Capture d’écran (14).png"],
  },

  {
    name: "Gestion Événement Église",
    description: "Tickets, paiements partiels, statistiques journalières.",
    image: "src/assets/apps/cash-out-svgrepo-com.svg",
    link: "#",
    screenshots: ["src/assets/screenshots/Capture d’écran (8).png", "src/assets/screenshots/Capture d’écran (9).png"],
  },
];

const Download: React.FC = () => {
  const [selectedApp, setSelectedApp] = useState<number | null>(null);
  const scrollScreenshots = (direction: 'left' | 'right') => {
    const container = document.getElementById('screenshots-container');
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  const [modalImage, setModalImage] = React.useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  useEffect(() => {
    const checkScroll = () => {
      const container = containerRef.current;
      if (container) {
        setShowScrollButtons(container.scrollWidth > container.clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);

    return () => {
      window.removeEventListener('resize', checkScroll);
    };
  }, [selectedApp]);



  return (
    <div className="download-container">
      <motion.p initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        Des outils numériques pensés pour vous faciliter la vie.
      </motion.p>

      {selectedApp !== null && (
        <>
          <div className="selected-app-card">
            <img src={apps[selectedApp].image} alt={apps[selectedApp].name} style={{ width: '10%', height: '50%', minWidth: '100px' }} />
            <h2>{apps[selectedApp].name}</h2>
            <p>{apps[selectedApp].description}</p>
            <a href={apps[selectedApp].link} className="download-button">Télécharger</a>
          </div>

          <div className="details-section">
            <h3>Illustration</h3>
            <div className="screenshots-wrapper">
              {showScrollButtons && (
                <button className="scroll-btn left" onClick={() => scrollScreenshots('left')}>
                  <FaChevronLeft size={20} />
                </button>
              )}

              <div className="screenshots" ref={containerRef} id="screenshots-container">
                {apps[selectedApp].screenshots.map((screenshot, i) => (
                  <img
                    key={i}
                    src={screenshot}
                    alt={`Capture ${i + 1}`}
                    style={{ width: '250px', height: '300px', cursor: 'pointer' }}
                    onClick={() => setModalImage(screenshot)}
                  />
                ))}
              </div>

              {showScrollButtons && (
                <button className="scroll-btn right" onClick={() => scrollScreenshots('right')}>
                  <FaChevronRight size={20} />
                </button>
              )}
            </div>


          </div>


        </>
      )}

      <div className="apps-list">
        {apps.map((app, index) => {
          if (index === selectedApp) return null; // cacher celle déjà en haut

          return (
            <motion.div className="app-card" key={index}
              initial={{ opacity: 0, x: index }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 2 }}
            >
              <img src={app.image} alt={app.name} />
              <h2>{app.name}</h2>
              <p>{app.description}</p>
              <div className="button-group">
                <a href={app.link} className="download-button">Télécharger</a>
                <button className="detail-button" onClick={() => {
                  setSelectedApp(index);
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}>Détails</button>
              </div>
            </motion.div>
          );
        })}
      </div>
      {modalImage && ReactDOM.createPortal(
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setModalImage(null)}>X</button>
            <img src={modalImage} alt="Capture en grand" />
          </div>
        </div>,
        document.body
      )}


    </div>
  );
};

export default Download;
