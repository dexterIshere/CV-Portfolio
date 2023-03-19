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
          Name={"Bruh"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Caca"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Pipi"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Zizi"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Zgeg"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Portable"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Potatoes"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Eliel"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
        <AprojectC
          top={undefined}
          Name={"Minecraft"}
          Desc={"Mauris gravida odio convallis nunc faucibus"}
        />
      </div>
    </div>
  );
};

export default PorfolioC;
