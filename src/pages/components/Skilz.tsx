/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React, { useState } from "react";
import style from "../../styles/assets/skiltech.module.scss";
import {
  SiJsonwebtokens,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSolidity,
  SiPrisma,
  SiExpo,
  SiVisualstudiocode,
  SiSupabase,
  SiFirebase,
  SiSass,
  SiReact,
  SiVercel,
  SiLinkedin,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";
import Link from "next/link";
import { useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import HoneComp from "../assets/HoneComp";


const Skilz: React.FC = () => {
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    const target = e.target as HTMLUListElement;
    if (target.scrollLeft === 0) {
      setShowLeftButton(false);
    } else {
      setShowLeftButton(true);
    }
    if (target.scrollLeft === target.scrollWidth - target.clientWidth) {
      setShowRightButton(false);
    } else {
      setShowRightButton(true);
    }
  };

  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  const handleScrollButtonClick = (direction: "left" | "right") => () => {
    const list = document.querySelector(
      `.${style.skilzTech}`
    ) as HTMLUListElement;
    const scrollAmount = list.clientWidth;
    if (direction === "left") {
      list.scrollLeft -= scrollAmount;
    } else {
      list.scrollLeft += scrollAmount;
    }
  };
  return (
    <div className="compDevD">
      <div className="CompExpPartC">
        <div className="CompExpPart">
          <div className="ICompC">
            <HoneComp/>
            {/* <h1 className="compT">Competences</h1> */}
            <h2 data-aos="fade-left" className="compUT">web development</h2>
            <p data-aos="fade-left" className="compP">
            Je suis un développeur fullstack chevronné qui a travaillé avec une multitude de technologies telles que JavaScript, React, Vue.js, Node.js, Ruby on Rails, Python, Django, MongoDB, PostgreSQL et AWS. Ma connaissance approfondie de ces technologies me permet de développer des applications web robustes et évolutives, tout en assurant la sécurité et la convivialité de l'interface utilisateur.
            </p>
          </div>
        </div>
        <div className="Entete">
          <div className="polygonC">
            <div className="InrPolygon"></div>
          </div>

          <div className="LinkProfile">
            <Link
              className="LinkSocials"
              href="https://www.linkedin.com/in/t%C3%A9o-roux-22907b268/"
            >
              <SiLinkedin />
            </Link>
            <Link
              className="LinkSocials"
              href="https://github.com/dexterIshere"
            >
              <SiGithub />
            </Link>
          </div>
        </div>
      </div>

      <div data-aos="fade-right" className={style.SepCompo}>
        <div className={style.SepTC}>
          <div className={style.SepT}>
            <h1>Stacks</h1>
          </div>
        </div>
        <div className={style.lineUp}>
          <div className={style.lineUpIn}></div>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-duration="2000" className={style.scrollSkillC}>
        {showLeftButton && (
          <button
            onClick={handleScrollButtonClick("left")}
            className={style.scrollButtonLeft}
          >
            &lt;
          </button>
        )}

        <div className={style.compskilHoz}>
          <ul className={style.skilzTech} onScroll={handleScroll}>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiTypescript />
              </div>
              <h1 className={style.compD}>Type Script</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiReact />
                <SiNextdotjs />
              </div>
              <h1 className={style.compD}>React / Next.js</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiHtml5 />
                <SiCss3 />
                <SiJavascript />
              </div>
              <h1 className={style.compD}>Basics</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiSolidity />
              </div>
              <h1 className={style.compD}>Solidity</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiPrisma />
              </div>
              <h1 className={style.compD}>Prisma ORM</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiExpo />
              </div>
              <h1 className={style.compD}>EXPO</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiVisualstudiocode />
              </div>
              <h1 className={style.compD}>Vs Code</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiSupabase />
                <SiFirebase />
              </div>
              <h1 className={style.compD}>Database</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiFirebase />
              </div>
              <h1 className={style.compD}>Json Web Token (JWT)</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiSass />
              </div>
              <h1 className={style.compD}>Sass</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiJsonwebtokens />
              </div>
              <h1 className={style.compD}>Json Web Token (JWT)</h1>
            </li>
            <li className={style.aComp}>
              <div className={style.complogo}>
                <SiVercel />
              </div>
              <h1 className={style.compD}>Vercel</h1>
            </li>
          </ul>
        </div>

        {showRightButton && (
          <button
            onClick={handleScrollButtonClick("right")}
            className={style.scrollButtonRight}
          >
            &gt;
          </button>
        )}
      </div>

      <div data-aos="fade-right" className={style.SepCompo}>
        <div className={style.SepTC}>
          <div className={style.SepT}>
            <h1>Notions</h1>
          </div>
        </div>
        <div className={style.lineUp}>
          <div className={style.lineUpIn}></div>
        </div>
      </div>
    </div>
  );
};
export default Skilz;
