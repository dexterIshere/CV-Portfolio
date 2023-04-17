"use client";
import React, { useState } from "react";
import RubForm from "../assets/RubForm";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

import pp from "~/image/Teo.png";
import ppbg from "~/image/bgpp.png";
import { AiOutlineCode, AiOutlineArrowDown } from "react-icons/ai";
import { animateScroll } from "react-scroll";
import CopyButton from "../assets/CopyButton";
import Skilz from "./Skilz";
import Notions from "./Notions";
import PorfolioC from "./Porfolio";
import FormationsC from "./FormationC";

const TeoTheDev: React.FC = () => {
  const scrollToForm = (): void => {
    animateScroll.scrollTo(document.getElementById("contact-form")!.offsetTop);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="leftSide">
        <div className="photoContainer">
          <div className="ppbox">
            <Image className="bgpp" src={ppbg} alt={"ppbg"}></Image>
            <Image className="pp" src={pp} alt={"pp"}></Image>
          </div>
        </div>
        <div data-aos="fade-right" className="profilDesC">
          <div className="TplusDisp">
            <h2 className="typeTitle">Profil</h2>
            <div className="ledDispoC">
              <div className="ledDispo"></div>
              <p className="ledDispoT">Disponible</p>
            </div>
          </div>
          <h1 data-aos="fade-right" className="CVName">
            Teo ROUX
          </h1>

          <CopyButton />
          <div className="oruseform">
            <div className="proflineUp">
              <div className="proflineUpIn"></div>
            </div>
            <p>Ou</p>
            <div className="proflineUp">
              <div className="proflineUpIn"></div>
            </div>
          </div>
          <div>
            <button className="emailPress" onClick={scrollToForm}>
              <p>Use Contact Form</p>
              <AiOutlineArrowDown></AiOutlineArrowDown>
            </button>
          </div>

          <p className="resuMe">
            Autodidacte dans le domaine du développement web, j'ai une passion
            pour la technologie et une curiosité insatiable envers ces
            dèrnières.
            <br /> Avec un peu plus de deux ans d'expérience en développement
            web.
            <br /> Mon approche créative et mon désir de perfectionnement m'ont
            permis à me former par le biais de minis projets personels.
            <br />
            Il convient de souligner que si je me suis former en autodidacte
            dans le web c'est que mon parcours académique initial et actuel est
            celui des STAPS.
          </p>
        </div>
        <FormationsC />
      </div>
      <div className="rightSide">
        <div className="notionCompC">
          <Skilz />
          <Notions />
        </div>
        <PorfolioC />
      </div>
    </>
  );
};

export default TeoTheDev;
