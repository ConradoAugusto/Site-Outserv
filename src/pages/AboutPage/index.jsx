import { DefaultTemplate } from "../../../components/DefaultTemplate";
import styles from "./style.module.scss";
import Ellipse1 from "../../assets/Ellipse1.svg";
import Ellipse2 from "../../assets/Ellipse2.svg";
import abstract from "../../assets/abstract.webp";
import smallerAndGraeter from "../../assets/smallerAndGraeter.webp";
import outservTeam from "../../assets/outservTeam.webp";
import {
  IconGitCherryPick,
  IconAffiliate,
  IconSeparatorVertical,
  IconComponents,
  IconBookUpload,
} from "@tabler/icons-react";

import jef from "../../assets/logos/jef.png";
import antonelli from "../../assets/logos/antonelli.png";
import benassi from "../../assets/logos/benassi.png";
import sansim from "../../assets/logos/sansim.png";
import eptv from "../../assets/logos/eptv.png";
import turbo from "../../assets/logos/turbo.png";
import eldorado from "../../assets/logos/eldorado.png";

import { Form } from "../../../components/Form";
import { IconsFlutuantes } from "../../../components/buttons/IconsFlutuantes";
import animationMascote from "../../assets/mascote.gif";

import { OffCanvasContato } from "../../../components/OffCanvasContato";
import { NumbersCounters } from "../../../components/NumbersCounters";
import CommentCarousel from "../../../components/CommentCarousel";

export const AboutPage = () => {
  const carrosselMap = {
    jef,
    antonelli,
    benassi,
    sansim,
    eptv,
    turbo,
    eldorado
  };
  return (
    <DefaultTemplate>
      <OffCanvasContato />
      <section id="sobre" className={styles.heroSection}>
        <div className={`${styles.heroContainer} container  d-flex flex-row`}>
          <div
            className={`${styles.heroText} uk-scrollspy-inview uk-animation-slide-left-medium`}
            uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay:200;"
          >
            <h1 className="title two mb-4">
              Sobre <span className="textLight">nós</span>
            </h1>
            <p className="paragraph textHeroAbout gray-10">
              Somos uma empresa{" "}
              <span className="textSecondary">
                inovadora no setor de tecnologia e BPO
              </span>
              , impulsionando o progresso e transformando positivamente por meio
              de soluções tecnológicas. Buscamos ser uma referência em
              excelência e impacto positivo,{" "}
              <span className="textSecondary">
                superando as expectativas dos nossos clientes
              </span>{" "}
              e contribuindo para um futuro digital mais inclusivo. Nosso
              compromisso é manter relacionamentos de sucesso com clientes,
              parceiros e colaboradores.
            </p>
          </div>
          <div
            className={`${styles.iconContainer} uk-scrollspy-inview uk-animation-slide-left-medium`}
            uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay:200;"
          >
            <div
              className={`${styles.heroImage} uk-scrollspy-inview uk-animation-slide-right-medium`}
              uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay:500;"
            >
              <div className={styles.iconDiv}>
                <img className={styles.mascote} src={animationMascote} alt="" />
                <div
                  className={`${styles.iconFlutuante1} levitate`}
                  style={{ animationDelay: "1s" }}
                >
                  <IconsFlutuantes>
                    <IconGitCherryPick />
                  </IconsFlutuantes>
                </div>

                <div
                  className={`${styles.iconFlutuante2} levitate`}
                  style={{ animationDelay: "1.7s" }}
                >
                  <IconsFlutuantes>
                    <IconAffiliate />
                  </IconsFlutuantes>
                </div>

                <div
                  className={`${styles.iconFlutuante3} levitate`}
                  style={{ animationDelay: ".7s" }}
                >
                  <IconsFlutuantes>
                    <IconSeparatorVertical />
                  </IconsFlutuantes>
                </div>

                <div
                  className={`${styles.iconFlutuante4} levitate`}
                  style={{ animationDelay: "1s" }}
                >
                  <IconsFlutuantes>
                    <IconComponents />
                  </IconsFlutuantes>
                </div>

                <div
                  className={`${styles.iconFlutuante5} levitate`}
                  style={{ animationDelay: ".2s" }}
                >
                  <IconsFlutuantes>
                    <IconBookUpload />
                  </IconsFlutuantes>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.circleContainer}>
          <img className={styles.circle1} src={Ellipse2} alt="" />
          <img className={styles.circle2} src={Ellipse1} alt="" />
        </div>
      </section>

      <section className={`${styles.sectionAbout} `}>
        <div className={`${styles.container} container`}>
          <div className={styles.aboutHeader}>
            <div>
              <h2
                className="title one uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
              >
                Nossos <span className="textLight">números</span>
              </h2>
            </div>
            <div
              className="uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
            >
              <p className="paragraph text-center">
                Presente em todo o Brasil, a Outserv oferece soluções de RH e
                software personalizadas para o seu negócio. Descubra como
                podemos impulsionar seu crescimento, onde quer que você esteja.
              </p>
            </div>
          </div>

          <div className={styles.aboutNumbers}>
            <div className={styles.numbers}>
              <NumbersCounters
                text={"Quantidade de clientes atendidos"}
                number={150}
                delayAnimation={50}
                delay={0.1}
                className={"numberAbout"}
              />

              <NumbersCounters
                text={"Número de vidas processadas"}
                number={20000}
                delayAnimation={70}
                delay={0.2}
                className={"numberAbout"}
              />

              <NumbersCounters
                text={"Quantidade de projetos realizados"}
                number={800}
                delayAnimation={90}
                delay={0.3}
                className={"numberAbout"}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="historia" className={styles.sectionHistory}>
        <div className={`${styles.container} container`}>
          <div className={styles.vetorContainer}>
            <img className={styles.img} src={abstract} alt="" />
          </div>
          <div className={styles.divParagraph}>
            <div
              className="uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
            >
              <h2 className="title one secondary">
                Nossa <span className="textLight">história</span>
              </h2>
            </div>
            <div className={styles.paragraphs}>
              <div className={styles.paragraph}>
                <p
                  className="paragraph gray-8 uk-animation-slide-left-medium"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl
                  vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui
                  et dui fringilla consectetur id nec massa. Aliquam erat
                  volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt
                  neque.
                </p>
                <p
                  className="paragraph gray-8 uk-animation-slide-left-medium"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 150;"
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl
                  vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui
                  et dui fringilla consectetur id nec massa. Aliquam erat
                  volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt
                  neque.
                </p>
              </div>

              <div className={styles.paragraph}>
                <p
                  className="paragraph gray-8 uk-animation-slide-left-medium"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 200;"
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl
                  vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui
                  et dui fringilla consectetur id nec massa. Aliquam erat
                  volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt
                  neque.{" "}
                </p>

                <p
                  className="paragraph gray-8 uk-animation-slide-left-medium"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 250;"
                >
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  hendrerit nisi sed sollicitudin pellentesque. Nunc posuere
                  purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl
                  vitae volutpat. Nulla aliquet porttitor venenatis. Donec a dui
                  et dui fringilla consectetur id nec massa. Aliquam erat
                  volutpat. Sed ut dui ut lacus dictum fermentum vel tincidunt
                  neque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionArrows}>
        <div className="container">
          <div className={styles.arrowsContaint}>
            <div>
              <div
                className={`${styles.arrowsTop} d-flex inverted uk-animation-slide-right-medium"`}
                data-uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 50;"
              >
                <svg
                  className="bgArrowSecondary"
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#21B88F"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>
              </div>
              <div
                className={`${styles.movie} uk-animation-slide-bottom-medium"`}
                data-uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay: 50;"
              >
                <iframe
                  className={styles.iframeMovie}
                  src="https://www.youtube.com/embed/RAB1igra1s4"
                  title="Vídeo Institucional OutServ"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div
                className={`${styles.arrowsBottom} d-flex uk-animation-slide-left-medium"`}
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
              >
                <svg
                  className="bgArrowSecondary"
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#21B88F"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>{" "}
                <svg
                  width="146"
                  height="223"
                  viewBox="0 0 146 223"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.14009 214.61L69.3701 112.33L69.58 112.01C70.0776 111.186 70.3405 110.242 70.3405 109.28C70.3405 108.318 70.0776 107.374 69.58 106.55L69.4001 106.27L35.54 55.48C34.9626 54.6175 34.6545 53.6029 34.6545 52.5649C34.6545 51.527 34.9626 50.5125 35.54 49.65L67.05 2.37C67.5305 1.65015 68.1811 1.06002 68.9443 0.651855C69.7075 0.243688 70.5595 0.0300293 71.425 0.0300293C72.2905 0.0300293 73.1425 0.243688 73.9057 0.651855C74.6689 1.06002 75.3195 1.65015 75.8 2.37L145.02 106.24L145.15 106.43V106.52C145.648 107.344 145.911 108.288 145.911 109.25C145.911 110.212 145.648 111.156 145.15 111.98L144.94 112.3L72.8601 220.41C72.3807 221.13 71.7311 221.72 70.9687 222.128C70.2063 222.536 69.355 222.75 68.4902 222.75H5.49019C4.545 222.744 3.61871 222.483 2.80953 221.995C2.00034 221.506 1.33827 220.808 0.89278 219.974C0.447285 219.141 0.234976 218.202 0.278522 217.258C0.322067 216.314 0.619761 215.399 1.14009 214.61Z"
                    fill="#272E48"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sectionMission}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.mission}>
              <div className={styles.textBussiness}>
                <h4
                  className="uk-animation-slide-left-medium title sobre gray-8"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
                >
                  “Nosso compromisso é com a
                  <span className="textLight">
                    {""} excelência e a responsabilidade social {""}
                  </span>
                  em todas as nossas iniciativas.”
                </h4>
                <p
                  className="uk-animation-slide-left-medium paragraph textHeroAbout gray-8"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
                >
                  Acreditamos que o avanço da nossa empresa está intrinsecamente
                  ligado ao desenvolvimento contínuo de nossos colaboradores,
                  clientes e parceiros.
                </p>
              </div>
              <div className={styles.textMission}>
                <p
                  className="uk-animation-slide-left-medium paragraph textHeroAbout gray-8"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 150;"
                >
                  Nossa <strong>missão</strong> é criar tecnologias inovadoras
                  que potencializem o sucesso e crescimento de nosso clientes,
                  oferecendo soluções inteligentes e adaptáveis ás suas
                  necessidades. Compromete a proporcionar um ambiente de
                  constantemente a excelência, a sustentabilidade e a
                  responsabilidade social em tudo o que fazemos, visando
                  contribuir para a evolução.
                </p>

                <p
                  className="uk-animation-slide-left-medium paragraph textHeroAbout gray-8"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 200;"
                >
                  Ser <strong>reconhecida como inovadora no setor</strong> de
                  tecnologia,BPO impulsionando o progresso e transformando
                  positivamente por referência em excelência,sustentabilidade e
                  impacto positivo, superando as expectativas dos nossos
                  clientes e contribuindo para um futuro digital mais inclusivo
                  e sustentável.
                </p>

                <p
                  className="uk-animation-slide-left-medium paragraph textHeroAbout gray-8"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 250;"
                >
                  <strong>
                    Pautamos nossa ações na transparência, ética e
                    responsabilidade,
                  </strong>{" "}
                  construindo relações sólidas com clientes, colaboradores e
                  parceiros baseadas na confiança mútua.
                </p>
              </div>
            </div>

            <div className={styles.commitment}>
              <div
                className={`${styles.imgHeader} uk-animation-slide-left-medium"`}
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 300;"
              >
                <img
                  className={styles.smallerAndGraeter}
                  src={smallerAndGraeter}
                  alt=""
                />
                <div className={styles.outservTeam}>
                  <img src={outservTeam} alt="" />
                </div>
              </div>
              <div className={styles.imgsBusiness}>
                <div className={styles.carrosselLogos}>
                  {Object.keys(carrosselMap).map((key, index) => (
                    <img
                      className="uk-animation-slide-bottom-medium"
                      data-uk-scrollspy={`cls: uk-animation-slide-bottom-medium; repeat: true; delay: ${
                        50 * (index + 1)
                      };`}
                      key={key}
                      src={carrosselMap[key]}
                      alt={`logo da empresa parceiras ${key}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommentCarousel/>
      <br />
      <div className={styles.form}>
        <Form />
      </div>
    </DefaultTemplate>
  );
};
