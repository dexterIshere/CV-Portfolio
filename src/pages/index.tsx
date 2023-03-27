import { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import pp from "~/image/Teo.png";
import ppbg from "~/image/bgpp.png";
import { AiOutlineCode, AiOutlineArrowDown } from "react-icons/ai";
import * as Aos from "aos";
import "aos/dist/aos.css";
import { api } from "~/utils/api";
import FormationsC from "./components/FormationC";
import Skilz from "./components/Skilz";
import Notions from "./components/Notions";
import PorfolioC from "./components/Porfolio";
import ContactForm from "./components/ContactForm";
import CopyButton from "./assets/CopyButton";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import { animateScroll } from "react-scroll";

const Home: NextPage = () => {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const scrollToForm = (): void => {
    animateScroll.scrollTo(document.getElementById("contact-form")!.offsetTop);
  };

  return (
    <>
      <Head>
        <title>Téo ROUX</title>
        <meta name="description" content="Here is The CV" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fasthand&family=Lato&family=Orbitron&family=Poppins:wght@300&family=Raleway:ital,wght@1,300&family=Ubuntu:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <div data-aos="zoom-in" className="container">
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
                Autodidacte dans le domaine du développement web, j'ai une
                passion pour la technologie et une curiosité insatiable envers
                ces dèrnières.
                <br /> Avec un peu plus de deux ans d'expérience en
                développement web.
                <br /> Mon approche créative et mon désir de perfectionnement
                m'ont permis à me former par le biais de minis projets
                personels.
                <br />
                Il convient de souligner que si je me suis former en autodidacte
                dans le web c'est que mon parcours académique initial et actuel
                est celui des STAPS.
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
          {/* <p className="showcaseText">
            {hello.data ? hello.data.greeting : "Loading tRPC query..."}
          </p> */}
        </div>
        <div id="contact-form">
          <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
            <ContactForm />
          </GoogleReCaptchaProvider>
        </div>
      </main>
    </>
  );
};

export default Home;
