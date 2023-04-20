"use client";

import { SiReact } from "react-icons/si";
import style from "../../styles/assets/porfolioLink.module.scss";
import AprojectC from "../assets/Aproject";

const PorfolioC: React.FC = () => {
  return (
    <div className={style.AllProjects}>
      <div className={style.PortSep}>
        <div className={style.PortAnn}>
          <h1>Portfolio</h1>
        </div>
        <div className={style.lineUp}>
          <div className={style.lineUpIn}></div>
        </div>
      </div>
      <div className={style.ProjectZone}>
        <AprojectC
          top={
            <div className={style.iconcercle}>
              <SiReact />
            </div>
          }
          Name={"SolidGroup"}
          Desc={
            "Un jeu de carte deckbuilding sur navigateur, où les cartes sont représenté par Téo et ses potes"
          }
        />
        <AprojectC
          top={undefined}
          Name={"Dojo"}
          Desc={
            "Dojo est un moteur de recherche, qui peut offrir une bonne alternantive à google"
          }
        />
        <AprojectC
          top={undefined}
          Name={"10LEX"}
          Desc={
            "Est une extention web qui permet de pouvoir afficher le contenu des pages sous une forme addapté aux personnes dyslexiques"
          }
        />
        <AprojectC
          top={undefined}
          Name={"LucasSette"}
          Desc={
            "Lucassette est un bot discord qui envoie des disquettes à la demmande"
          }
        />
        <AprojectC
          top={undefined}
          Name={"Nucleon"}
          Desc={"Nucleon est un nigateur web dans le même style que Arc"}
        />
        <AprojectC
          top={undefined}
          Name={"Unique"}
          Desc={
            "Unique est une aplication de tchat décentralisé, donc mieux que discord"
          }
        />
        <AprojectC
          top={undefined}
          Name={"CapibaraFee"}
          Desc={"CapibaraFee c'est un buy me a coffe like, mais que pour moi"}
        />
        {/* <AprojectC
          top={undefined}
          Name={"Eliel"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        /> */}
        <AprojectC
          top={undefined}
          Name={"Minecraft v0.0v"}
          Desc={"un mode minecraft"}
        />
      </div>
    </div>
  );
};

export default PorfolioC;
