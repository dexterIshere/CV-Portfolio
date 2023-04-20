"use client";
import React from "react";
import style from "../../styles/components/teothecoach.module.scss";

import { TbSchool } from "react-icons/tb";
import { MdSportsMma } from "react-icons/md";
import { RiFileDownloadFill } from "react-icons/ri";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TeoTheCoach: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const handleDownload = () => {
    const filePath = "/RouxTéoL3Staps.pdf";
    const fileName = "RouxTéoL3Staps.pdf";

    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <div className={style.CoatchC}>
      <div className={style.vidC}>
        <div className={style.Digitbg}></div>
        <div className={style.vid}></div>
      </div>
      <div className={style.ExplainC}>
        <div className={style.DigitTitle}>
          <div className={style.Digitbg}></div>
          <div className={style.Digit}>
            <h1>ROUX Téo</h1>
          </div>
        </div>
        <div className={style.diplomePart}>
          <div className={style.Fakebg}></div>
          <div className={style.diplExplain}>
            <div className={style.formaplain}>
              <div className={style.degreLogo}>
                <TbSchool />
              </div>
              <div className={style.formaplainctx}>
                <h1 className={style.formaplainT}>Université de Toulon</h1>
                <p>License STAPS</p>
                <p>Entrainement Sportif</p>
              </div>
            </div>
            <div className={style.activitySet}>
              <div className={style.activityLogo}>
                <MdSportsMma />
              </div>
              <div className={style.formaplainctx}>
                <h1 className={style.formaplainT}>Activités</h1>
                <p>Kempo</p>
                <p>MMA</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.ExpPart}>
          <div className={style.Fakebg}></div>
          <div className={style.Bgroate}></div>
          <div className={style.competentiasC}>
            <div className={style.COMPCAPA}>
              <h1 className={style.COMPCAPAt}>Experiences</h1>
              <div className={style.COMPCAPAp}>
                <ul>
                  <li>Planification d'entrainement</li>
                  <li>Cardio</li>
                  <li>Prise de masse</li>
                  <li>Sèche</li>
                </ul>
              </div>
            </div>
            <div className={style.COMPdwld}>
              <div className={style.dwldBox}>
                <button onClick={handleDownload}>
                  <RiFileDownloadFill />
                  <div className={style.Memoire}>
                    <p>Télécharger mon prémémoire de L3 ici</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeoTheCoach;
