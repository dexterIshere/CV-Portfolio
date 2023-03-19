/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { useState } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { SlScreenDesktop } from "react-icons/sl";
import { FiDatabase } from "react-icons/fi";
import { AiOutlineConsoleSql, AiOutlineMobile } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { TbBrandDocker } from "react-icons/tb";
import { SiMongodb, SiPnpm, SiPrisma, SiWebpack, SiJest } from "react-icons/si";
import Progress from "./Progress";

import { useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';


type SecteurProps = {
  title: string;
  contenu: JSX.Element;
};

const Secteur = ({ title, contenu }: SecteurProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setRotate(isOpen ? "" : "rotate");
  };
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);

  return (
    <div data-aos="fade-right" className="Secteur">
      <div className="SecteurHeader">
        <AiOutlineCode />
        <h1 className="FrubT">{title}</h1>
        <button onClick={toggleDropdown}>
          <RiArrowDropDownLine className={`${rotate}`} />
        </button>
      </div>
      {isOpen && contenu}
    </div>
  );
};

const RubForm = () => {
  return (
    <div className="rubForm">
      <Secteur
        title=" Langages de programmation"
        contenu={
          <ul data-aos="fade-right">
            <div className="UTformC">
              <BiCodeBlock />
              <h2 className="FrubUT">Language</h2>
            </div>
            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>JavaScript</p>
                <Progress done={99} />
              </div>
              <div className="Fsubject">
                <p>TypeScript</p>
                <Progress done={90} />
              </div>
              {/* <div className="Fsubject">
              <p>Python</p>
              <Progress done={20} />
            </div> */}
              {/* <div className="Fsubject">
              <p>Go</p>
              <Progress done={10} />
            </div> */}
              <div className="Fsubject">
                <p>Scss</p>
                <Progress done={100} />
              </div>
              {/* <div className="Fsubject">
              <p>C#</p>
              <Progress done={50} />
            </div> */}
              <div className="Fsubject">
                <p>Solidity</p>
                <Progress done={50} />
              </div>
            </div>
          </ul>
        }
      />

      <Secteur
        title="Framework"
        contenu={
          <ul data-aos="fade-right">
            <div className="UTformC">
              <SlScreenDesktop />
              <h2 className="FrubUT">Front-End</h2>
            </div>
            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>React</p>
                <Progress done={100} />
              </div>
              <div className="Fsubject">
                <p>Angular</p>
                <Progress done={20} />
              </div>
              <div className="Fsubject">
                <p>Nest.js</p>
                <Progress done={50} />
              </div>
              <div className="Fsubject">
                <p>Next.js</p>
                <Progress done={100} />
              </div>
              <div className="Fsubject">
                <p>Svelte</p>
                <Progress done={70} />
              </div>
            </div>
            <div className="UTformC">
              <FiDatabase />
              <h2 className="FrubUT">Back-End</h2>
            </div>
            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>Django</p>
                <Progress done={20} />
              </div>
              <div className="Fsubject">
                <p>Ruby on Rails</p>
                <Progress done={70} />
              </div>
              <div className="Fsubject">
                <p>Express.js</p>
                <Progress done={65} />
              </div>
              <div className="Fsubject">
                <p>Laravel</p>
                <Progress done={65} />
              </div>
            </div>
          </ul>
        }
      />

      <Secteur
        title="Gestion de base de données"
        contenu={
          <ul data-aos="fade-right">
            <div className="UTformC">
              <AiOutlineConsoleSql />
              <h2 className="FrubUT">Relationnels</h2>
            </div>
            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>MySQL</p>
                <Progress done={80} />
              </div>
              <div className="Fsubject">
                <p>PostgreSQL</p>
                <Progress done={80} />
              </div>
              {/* <div className="Fsubject">
       <p>Oracle</p>
       <Progress done={50} />
      </div> */}
              {/* <div className="Fsubject">
       <p>SQL Server</p>
       <Progress done={50} />
      </div> */}
            </div>
            <div className="UTformC">
              <SiMongodb />
              <h2 className="FrubUT">NoSQL </h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>MongoDB</p>
                <Progress done={95} />
              </div>
              {/* <div className="Fsubject">
       <p>Cassandra</p>
       <Progress done={50} />
      </div> */}

              <div className="Fsubject">
                <p>Firebase</p>
                <Progress done={80} />
              </div>

              <div className="Fsubject">
                <p>Supabase</p>
                <Progress done={100} />
              </div>

              <div className="Fsubject">
                <p>Pocketbase</p>
                <Progress done={80} />
              </div>
            </div>

            <div className="UTformC">
              <SiPrisma />
              <h2 className="FrubUT">ORM (Object-Relational Mapping)</h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>Prisma</p>
                <Progress done={90} />
              </div>
            </div>
          </ul>
        }
      />
      <Secteur
        title="Outils de développement"
        contenu={
          <ul data-aos="fade-right">
            <div className="UTformC">
              <DiGit />
              <h2 className="FrubUT">Contrôle version et maintien</h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>Git</p>
                <Progress done={80} />
              </div>
              <div className="Fsubject">
                <p>Turbo</p>
                <Progress done={90} />
              </div>
            </div>

            <div className="UTformC">
              <SiPnpm />
              <h2 className="FrubUT">gestionnaires de paquets</h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>Pnpm Yarn npm/node.js</p>
                <Progress done={100} />
              </div>
              <div className="Fsubject">
                <p>Vite.js</p>
                <Progress done={100} />
              </div>
            </div>

            <div className="UTformC">
              <SiWebpack />
              <h2 className="FrubUT">Empaqueteur</h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>Webpack</p>
                <Progress done={90} />
              </div>
            </div>

            <div className="UTformC">
              <SiJest />
              <h2 className="FrubUT">Tests</h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>Postman</p>

                <Progress done={50} />
              </div>

              <div className="Fsubject">
                <p>Jest</p>

                <Progress done={50} />
              </div>
            </div>
          </ul>
        }
      />
      <Secteur
        title=" Développement mobile"
        contenu={
          <ul data-aos="fade-right">
            <div className="UTformC">
              <AiOutlineMobile />
              <h2 className="FrubUT">Interface</h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>React Native</p>
                <Progress done={100} />
              </div>

              <div className="Fsubject">
                <p>Ionic</p>
                <Progress done={80} />
              </div>

              <div className="Fsubject">
                <p>Expo</p>
                <Progress done={85} />
              </div>

              <div className="Fsubject">
                <p>Flutter</p>
                <Progress done={20} />
              </div>
            </div>
          </ul>
        }
      />
      <Secteur
        title="Architectures web"
        contenu={
          <ul data-aos="fade-right">
            <div className="UTformC">
              <GrGraphQl />
              <h2 className="FrubUT">
                Protocoles de communication client-serveur
              </h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>REST</p>
                <Progress done={100} />
              </div>
              <div className="Fsubject">
                <p>GraphQL</p>
                <Progress done={90} />
              </div>
              <div className="Fsubject">
                <p>tRCP</p>
                <Progress done={70} />
              </div>
            </div>

            <div className="UTformC">
              <FaAws />
              <h2 className="FrubUT">Cloud</h2>
            </div>

            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>AWS</p>
                <Progress done={95} />
              </div>
              <div className="Fsubject">
                <p>GCP</p>
                <Progress done={50} />
              </div>
            </div>
            <div className="UTformC">
              <TbBrandDocker />
              <h2 className="FrubUT">Conteneurs</h2>
            </div>
            <div className="rubsubjectsFC">
              <div className="Fsubject">
                <p>Docker</p>
                <Progress done={90} />
              </div>
              <div className="Fsubject">
                <p>Kubernetes</p>
                <Progress done={90} />
              </div>
            </div>
          </ul>
        }
      />
    </div>
  );
};

export default RubForm;
