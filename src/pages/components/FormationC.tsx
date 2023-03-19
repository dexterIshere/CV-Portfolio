"use client";
import React, { useState } from "react";
import RubForm from "../assets/RubForm";

const FormationsC: React.FC = () => {
  const [displayForm, setDisplayForm] = useState(true);

  const handleClickForm = () => {
    setDisplayForm(true);
  };

  const handleClickLangues = () => {
    setDisplayForm(false);
  };

  return (
    <div className="formationsC">
      <div className="tglFL">
        <button className="formation" onClick={handleClickForm}>
          Formation
        </button>
        <button className="formation" onClick={handleClickLangues}>
          Langues étrangères
        </button>
      </div>
      <div className="formContain">
        {displayForm ? (
          <RubForm />
        ) : (
          <div className="rubEtLang">
            <div className="Lang">
              <h1 className="TLang">Français</h1>
              <h1 className="NvlLang">C2</h1>
            </div>
            <div className="Lang">
              <h1 className="TLang">Anglais</h1>
              <h1 className="NvlLang">B2-C1</h1>
            </div>
            <div className="Lang">
              <h1 className="TLang">Epagnol</h1>
              <h1 className="NvlLang">A2</h1>
            </div>
            <div className="Lang">
              <h1 className="TLang">Japonais</h1>
              <h1 className="NvlLang">A1</h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormationsC;
