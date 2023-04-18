"use client";
import React, { useState } from "react";
import style from "../../styles/components/teothecoach.module.scss";

import { TbSchool } from "react-icons/tb";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const TeoTheCoach: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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
            <div className={style.degreLogo}>
              <TbSchool />
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
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>Quisque fermentum leo sed odio gravida fermentum.</li>
                  <li>Sed a neque sit amet enim varius semper.</li>
                  <li>Vivamus nec lacus a sapien accumsan aliquam.</li>
                </ul>
              </div>
            </div>
            <div className={style.COMPdwld}>
              <div className={style.dwldBox}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeoTheCoach;
