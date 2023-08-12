import React from 'react';
import { useState , useEffect } from 'react';
import Kkiapay from './kkiapay';


const Modal = ({ isOpen, onClose, onSubmit }) => {
  // State pour stocker les informations renseignées par l'utilisateur
  const [nom, setNom] = React.useState('');
  const [prenom, setPrenom] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [paye, setPaye] = React.useState(false); // Utilisation d'un boolean pour le champ "paye"
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showKkiapayModal, setShowKkiapayModal] = useState(false);

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Envoyer les informations renseignées à l'API ou au backend si nécessaire
    onSubmit({ nom, prenom, numero, paye });
    // Fermer le modal après soumission
    
    setFormSubmitted(true);
    
    // onClose();
  };

  // Utilisez useEffect pour contrôler l'affichage du composant Kkiapay après la soumission du formulaire
  useEffect(() => {
    if (formSubmitted) {
      setShowKkiapayModal(true);
      // handleOpenKkiapayModal()
    }
  }, [formSubmitted]);

  // Fonction pour ouvrir le modal Kkiapay
  const handleOpenKkiapayModal = () => {
    setShowKkiapayModal(true);
  };

  // Fonction pour fermer le modal Kkiapay
  const handleCloseKkiapayModal = () => {
    setShowKkiapayModal(false);
  };

  return (
    // Afficher le modal uniquement si isOpen est vrai (true)
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Renseignez vos informations pour participer à l'Événement</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="nom" className="block mb-1 font-semibold text-gray-800">Nom :</label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="prenom" className="block mb-1 font-semibold text-gray-800">Prénom :</label>
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="numero" className="block mb-1 font-semibold text-gray-800">Numéro :</label>
              <input
                type="text"
                id="numero"
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="paye" className="block mb-1 font-semibold text-gray-800">Payé :</label>
              <input
                type="checkbox"
                id="paye"
                checked={paye}
                onChange={(e) => setPaye(e.target.checked)}
                className="mr-2 leading-tight"
              />
              <span className="text-gray-700">Oui</span>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-4 px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-600"
                onClick={onClose}
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Soumettre
              </button>
            </div>
          </form>
        </div>

        {/* Afficher le modal Kkiapay après la soumission du formulaire */}
        {showKkiapayModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-10 rounded-lg">
              <Kkiapay />
              <button
                type="button"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                onClick={handleCloseKkiapayModal}
              >
                Fermer
              </button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Modal;
