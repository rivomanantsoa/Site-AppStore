import React, { useRef, useState } from 'react';
import { FaFacebookF, FaWhatsapp, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Footer.css';
//import '../pages/Home.css'
import emailjs from '@emailjs/browser';
import { Send } from 'lucide-react';


const Footer: React.FC = () => {
   const form = useRef<HTMLFormElement>(null);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
  
    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      setSuccess(false);
      setError(false);
  
      if (!form.current) return;
  
      emailjs
        .sendForm(
          'service_cy3h7om',        // <-- à remplacer
          'template_l5co6ni',       // <-- à remplacer
          form.current,
          '7fwYSEHZxP-BOTOSs'          // <-- à remplacer
        )
        .then(
          () => {
            setSuccess(true);
            form.current?.reset();
          },
          () => {
            setError(true);
          }
        );
    };
  return (
    <footer className="footer" id="footer-contact">
  <div className="contenu">
    <div className="footer-contact">
      <h3>Contactez-nous</h3>
      <ul>
        <li>
          <FaEnvelope /> <a href="mailto:aw.newgeneration@gmail.com">aw.newgeneration@gmail.com</a>
        </li>
        <li>
          <FaPhoneAlt /> <a href="tel:+261340736464">+261 34 07 364 64</a>
        </li>
        <li>
          <FaWhatsapp /> <a href="https://wa.me/261340736464" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </li>
        <li>
          <FaFacebookF /> <a href="https://facebook.com/tonprofil" target="_blank" rel="noopener noreferrer">Numeric World</a>
        </li>
      </ul>
    </div>

    <div className="footer-form">
      <h3>Envoyer un message</h3>
      {success && <p className="success-message">✅ Merci, votre message a été envoyé !</p>}
      {error && <p className="error-message">❌ Une erreur s'est produite.</p>}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="name" placeholder="Votre nom" required />
        <input type="email" name="email" placeholder="Votre email" required />
        <textarea name="message" placeholder="Votre message" rows={4} required />
        <button type="submit"><Send size={18} /> Envoyer</button>
      </form>
    </div>
  </div>

  <div className="footer-bottom">
    &copy; {new Date().getFullYear()} Br-FoNuWo / Mada. Tous droits réservés.
  </div>
</footer>


  );
};

export default Footer;
