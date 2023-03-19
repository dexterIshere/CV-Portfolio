"use client";

import style from "../../styles/assets/porfolioLink.module.scss";
import React, { type FC } from "react";
import { useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

import Tilt from "react-parallax-tilt";



interface AprojectCProps {
  top: React.ReactNode;
  Name: string;
  Desc: string;
}

const AprojectC: React.FC<AprojectCProps> = (props) => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  return (
    <div data-aos="fade-left" className={style.Aproject}>
      <div className={style.PorfolioZ}>
        <div className={style.portfolioC}>
          <div className={style.portfolioPjt}>
            {/* <div className={style.projectLinkDeco}></div> */}
            <div className={style.projectLink}>
              <div className={style.projectLayout}>
                <Tilt
                  className={style.parallaxEffect}
                  tiltReverse={true}
                  perspective={8000}
                >
                  <div className={style.plaque}>
                    <div className={style.PLtop}>{props.top}</div>
                    <div className={style.PLName}>{props.Name}</div>
                    <div className={style.PLDesc}>{props.Desc}</div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprojectC;
