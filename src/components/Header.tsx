import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaHome, FaAppStore, FaBars, FaTimes, FaInfo } from 'react-icons/fa';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Accueil';
      case '/telechargement':
        return 'Applications';
      case '/apropos':
        return 'À propos';
      default:
        return '';
    }
  };

  return (
    <header className="header">
      <div className="navbar">
        <div className="logo">🧠 Numeric World</div>

        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaHome /> Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/telechargement" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaAppStore /> Applications
            </NavLink>
          </li>
          <li>
            <NavLink to="/apropos" onClick={() => setMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              <FaInfo /> À propos
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="page-title">{getTitle()}</div>
    </header>
  );
};

export default Header;
