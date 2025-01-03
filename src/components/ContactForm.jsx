import React, { useState, forwardRef } from 'react';
import emailjs from 'emailjs-com';

// La fonction ContactForm reçoit la ref du parent (App.jsx)
const ContactForm = forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false); // Gérer l'affichage de la modale

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2mqhbie', // Ton Service ID
        'template_ul8snfc', // Ton Template ID
        e.target,           // Le formulaire HTML
        '02Kv6Nimh392GLhzD' // Ta Public Key
      )
      .then(
        (result) => {
          console.log('Email envoyé avec succès:', result.text);
          setShowModal(true); // Afficher la modale après l'envoi réussi
        },
        (error) => {
          console.error('Erreur lors de l\'envoi de l\'email:', error);
        }
      );
  };

  return (
    <div ref={ref} className="bg-base-200 p-6 rounded-xl shadow-lg mt-16">
      <h2 className="text-xl font-bold text-center text-accent mb-6">
        Contact
      </h2>

      {/* Formulaire de contact */}
      <form onSubmit={sendEmail} className="space-y-6 w-full md:w-2/3 mx-auto"> {/* Augmenté de w-1/2 à w-2/3 */}
        {/* Champ Nom */}
        <div className="form-control flex flex-col items-start">
          <label htmlFor="name" className="label">
            <span className="label-text font-bold">Nom</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="input input-bordered w-full text-sm"
            placeholder="Votre nom"
            required
          />
        </div>

        {/* Champ Email */}
        <div className="form-control flex flex-col items-start">
          <label htmlFor="email" className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="input input-bordered w-full text-sm"
            placeholder="Votre email"
            required
          />
        </div>

        {/* Champ Message */}
        <div className="form-control flex flex-col items-start">
          <label htmlFor="message" className="label">
            <span className="label-text font-bold">Message</span>
          </label>
          <textarea
            id="message"
            name="message"
            className="textarea textarea-bordered w-full text-sm h-40"
            placeholder="Votre message"
            required
          ></textarea>
        </div>

        {/* Bouton */}
        <div className="flex justify-center">
          <button type="submit" className="btn btn-accent text-sm">
            Envoyer
          </button>
        </div>
      </form>

      {/* Fenêtre modale */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-black p-8 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-bold text-center text-accent mb-4">Message envoyé avec succès</h3>
            <p className="text-center mb-6">Votre message a bien été envoyé. Nous vous contacterons prochainement.</p>
            <button
              onClick={() => setShowModal(false)}
              className="btn btn-accent w-full"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
});

export default ContactForm;






