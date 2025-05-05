import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { Mail, Phone, Facebook, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
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
    <div className="contact-contain">
      <h1>Contact Professionnel</h1>
      <div className="contact-container">
        <div className="form-detail">
        
          <p>Vous pouvez me joindre via :</p>
          <div className="contact-details">
            <div className="contact-item"><Mail className="icon" /> <span>Aw.newgeneration@gmail.com</span></div>
            <div className="contact-item"><Phone className="icon" /> <span>+261 34 07 364 64</span></div>
            <div className="contact-item"><Facebook className="icon" /><a href="https://facebook.com/tonprofil" target="_blank" rel="noreferrer">facebook.com/Numeric world</a></div>
            <div className="contact-item"><MessageCircle className="icon" /><a href="https://wa.me/261340736464" target="_blank" rel="noreferrer">WhatsApp : +261 34 07 364 64</a></div>
          </div>
        </div>

        <div className="form-section">
          <h2>Envoyer un message direct</h2>
          {success && <p className="success-message">✅ Merci, votre message a été envoyé !</p>}
          {error && <p className="success-message" style={{ color: 'red' }}>❌ Une erreur s'est produite.</p>}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="name" placeholder="Votre nom" required />
            <input type="email" name="email" placeholder="Votre email" required />
            <textarea name="message" placeholder="Votre message" rows={5} required />
            <button type="submit"><Send size={18} /> Envoyer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
