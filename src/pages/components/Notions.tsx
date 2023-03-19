import React from "react";
import style from "../../styles/modules/components/notions.module.scss";

import { useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

const Skilz: React.FC = () => {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div data-aos-offset="10" data-aos="fade-left" data-aos-duration="2000" className={style.notions}>
      <div data-aos-offset="10" data-aos="zoom-in" className={style.aNotion}>
        <div className={style.NNC}>
          <p className={style.notionName}>UI/UX</p>
        </div>
        <p className={style.notiontype}>Front</p>
      </div>
      <div data-aos-offset="10" data-aos="zoom-in" className={style.aNotion}>
        <div className={style.NNC}>
          <p className={style.notionName}>Responsivness</p>
        </div>
        <p className={style.notiontype}>Front</p>
      </div>
      <div data-aos-offset="10" data-aos="zoom-in" className={style.aNotion}>
        <div className={style.NNC}>
          <p className={style.notionName}>API building</p>
        </div>
        <p className={style.notiontype}>Back</p>
      </div>
      {/* <div className={style.aNotion}>
        <div className={style.NNC}>
          <p className={style.notionName}>résoltion problèmes</p>
        </div>
        <p className={style.notiontype}>Humain</p>
      </div> */}
      <div data-aos-offset="10" data-aos="zoom-in" className={style.aNotion}>
        <div className={style.NNC}>
          <p className={style.notionName}>collaboration </p>
        </div>
        <p className={style.notiontype}>Humain</p>
      </div>
    </div>
  );
};
export default Skilz;
