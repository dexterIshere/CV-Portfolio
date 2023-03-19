import { type NextPage } from "next";
import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import pp from "~/image/Teo.png";
import ppbg from "~/image/bgpp.png";
import { MdContentCopy } from "react-icons/md";
AiOutlineCode;
import { AiOutlineCode } from "react-icons/ai";
import * as Aos from "aos";
import 'aos/dist/aos.css';
import { api } from "~/utils/api";
import FormationsC from "./components/FormationC";
import Skilz from "./components/Skilz";
import Notions from "./components/Notions";
import PorfolioC from "./components/Porfolio";


const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <>
      <Head>
        <title>Téo ROUX</title>
        <meta name="description" content="Here is The CV" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Orbitron&family=Poppins:wght@300&family=Raleway:ital,wght@1,300&family=Ubuntu:wght@700&display=swap" rel="stylesheet" />
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
            <div data-aos="fade-right"  className="profilDesC">
              <div className="TplusDisp">
                <h2  className="typeTitle">Profil</h2>
                <div className="ledDispoC">
                  <div className="ledDispo"></div>
                  <p  className="ledDispoT">Disponible</p>
                </div>
              </div>
              <h1 data-aos="fade-right" className="CVName">Teo ROUX</h1>

              <button  className="emailPress">
                <p>Email Me</p>
                <MdContentCopy></MdContentCopy>
              </button>
              <p  className="resuMe">
              Je suis un jeune professionnel autodidacte dans le domaine du développement web, doté d'une passion pour la technologie et d'une curiosité insatiable pour l'apprentissage continu. Avec plus de deux ans d'expérience en développement web, j'ai développé mes compétences en utilisant des outils modernes tels que JavaScript, React, Node.js, HTML, CSS et Git. Mon approche créative et mon désir de perfectionnement me permettent de relever des défis techniques complexes avec aisance, tout en restant à jour avec les dernières tendances et technologies de l'industrie
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
      </main>
    </>
  );
};

export default Home;
