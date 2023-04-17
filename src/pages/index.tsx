import { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import * as Aos from "aos";
import "aos/dist/aos.css";
import { api } from "~/utils/api";
import FormationsC from "./components/FormationC";
import Skilz from "./components/Skilz";
import PorfolioC from "./components/Porfolio";
import ContactForm from "./components/ContactForm";
import CopyButton from "./assets/CopyButton";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import TeoTheDev from "./components/TeoTheDev";
import TeoTheCoach from "./components/TeoTheCoach";

const Home: NextPage = () => {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  const [showComponent1, setShowComponent1] = useState(true);
  const handleButtonClick = (showComponent1: boolean) => {
    setShowComponent1(showComponent1);
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
        <div className="themepick">
          <button onClick={() => handleButtonClick(true)}>
            Development 💻
          </button>
          <button onClick={() => handleButtonClick(false)}>Coaching 🥊</button>
        </div>
        <div data-aos="zoom-in" className="container">
          {showComponent1 ? <TeoTheDev /> : <TeoTheCoach />}
        </div>
        <div id="contact-form">
          <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey ?? ""}>
            <ContactForm />
          </GoogleReCaptchaProvider>
        </div>
      </main>
    </>
  );
};

export default Home;
