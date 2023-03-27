// Importez les modules nécessaires
import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import ToastMessage from "./ToastMessage";

// Créez le composant
const CopyButton: React.FC = () => {
  // Définition de l'email
  const predefinedText = "teo.rxux@gmail.com";

  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 400);
  }

  // Utilisez un état pour gérer le message de confirmation
  const [message, setMessage] = useState("");

  // Créez une fonction pour gérer le clic sur le bouton
  const handleButtonClick = async () => {
    try {
      // Copiez le texte prédéfini dans le presse-papiers
      await navigator.clipboard.writeText(predefinedText);

      // Affichez un message de confirmation
      setMessage("Email copié !");

      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (err) {
      // Gérez les erreurs éventuelles
      console.error("Erreur lors de la copie du texte:", err);
      setMessage("Erreur lors de la copie du texte.");
    }
  };

  // Renvoyez le JSX pour le bouton et le message
  return (
    <div>
      <button
        className={`emailPress ${isClicked ? "clicked" : ""}`}
        onClick={() => {
          handleClick();
          handleButtonClick();
        }}
      >
        <p>Copy Email</p> <MdContentCopy></MdContentCopy>
        {message && <ToastMessage message={message} />}
      </button>
    </div>
  );
};

// Exportez le composant
export default CopyButton;
