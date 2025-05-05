// src/components/Layout.tsx
import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import './Layout.css';


interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [showButton, setShowButton] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowButton(window.scrollY > 300); // S'affiche après 300px de scroll
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <div className="layout-wrapper">
      {/* SVG décoratif en arrière-plan */}
      <svg className="background-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path
          fill="#00e5ff"
          fillOpacity="0.1"
          d="M0,64L48,69.3C96,75,192,85,288,112C384,139,480,181,576,181.3C672,181,768,139,864,106.7C960,75,1056,53,1152,69.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        />
      </svg>

      <main className="main-content">{children}</main>
      <div className="svg-deco-bottom">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path
            fill="#203a43"
            fillOpacity="1"
            d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Footer />
      {showButton && (
  <button
    className="scroll-to-top"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    title="Revenir en haut"
  >
    ⬆
  </button>
)}


    </div>
  );
};

export default Layout;
