import styles from "./style.module.scss";
import { useRef, useEffect, useState } from "react";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import { ButtonPrimary } from "../../../components/buttons/ButtonPrimary";
import { IconsFlutuantes } from "../../../components/buttons/IconsFlutuantes";
import { Tag } from "../../../components/buttons/Tag";
import {
  IconClockPlus,
  IconSchool,
  IconBallpen,
  IconUserUp,
  IconGraph,
  IconUsersPlus,
  IconApps,
  IconPencilBolt,
  IconBolt,
  IconShieldHalf,
} from "@tabler/icons-react";

import Ellipse from "../../assets/Ellipse.png";
import hero from "../../assets/hero.jpg";
import PortalLight_Bcg from "../../assets/PortalImg/theme/portalLight.png";
import portalLight_element from "../../assets/PortalImg/theme/portalLight_element.png";
import PortalDark_Bcg from "../../assets/PortalImg/theme/portalDark.png";
import PortalDark_element from "../../assets/PortalImg/theme/PortalDark_element.png";
import admissao from "../../assets/videos/admissao.mp4";
import app from "../../assets/videos/app.mp4";
import vaga from "../../assets/videos/Ferias.mp4";
import assinaturas from "../../assets/videos/Ferias.mp4";
import epi from "../../assets/videos/EPI.mp4";
import registro from "../../assets/videos/abono.mp4";

import admissao_Sm from "../../assets/PortalImg/admissao.webp";
import appWeb from "../../assets/PortalImg/app.webp";
import app_Sm from "../../assets/PortalImg/app_Sm.webp";
import agilidade_Sm from "../../assets/PortalImg/registro.webp";
import ged_Sm from "../../assets/PortalImg/assinaturas.webp";
import epi_Sm from "../../assets/PortalImg/epi.webp";
import registro_Sm from "../../assets/PortalImg/abono.webp";
import smartphone from "../../assets/smartphone.webp";

import AccordionItem from "../../../components/AccordionItem";
import { CardServices } from "../../../components/CardServices";
import { CardServiceItem } from "../../../components/CardServiceItem";

import GRAND from "../../assets/GRAND.webp";

import { Form } from "../../../components/Form";
import ProgressBar from "../../../components/ProgressBar";
import { PortalVideo } from "../../../components/PortalVideo";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import CookieConsent from "../../../components/CookieModal/CookieConsent";
import { NumbersCounters } from "../../../components/NumbersCounters";
import ParallaxComponent from "../../../components/ParallaxComponent";
import { CarrosselLogos } from "../../../components/CarrosselLogos";
import CommentCarousel from "../../../components/CommentCarousel";

export const HomePage = () => {
  const [currentTheme, setCurrentTheme] = useState("PortalLight");
  const [currentImage, setCurrentImage] = useState("admissao");
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [progress, setProgress] = useState(0);
  const intervalTime = 10000;
  const totalAccordions = 6;
  const progressInterval = 100;

  const handleAccordionClick = (index) => {
    setActiveAccordion(index);
    setProgress(0);
  };

  useEffect(() => {
    const totalIntervals = intervalTime / progressInterval;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 100 / totalIntervals;
        if (newProgress >= 100) {
          const nextAccordion = (activeAccordion % totalAccordions) + 1;
          setActiveAccordion(nextAccordion);
          return 0;
        }
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [intervalTime, progressInterval, activeAccordion, totalAccordions]);

  useEffect(() => {
    const imageMapKeys = [
      "admissao",
      "app",
      "agilidade",
      "ged",
      "epi",
      "registro",
    ];
    setCurrentImage(imageMapKeys[activeAccordion - 1]);
  }, [activeAccordion]);

  const handleImageChange = (imageId) => {
    setCurrentImage(imageId);
  };

  const handleThemeChange = (themeId) => {
    setCurrentTheme(themeId);
  };

  const imageMap = {
    admissao,
    app,
    agilidade: vaga,
    ged: assinaturas,
    epi,
    registro,
  };

  const videoRefs = useRef([]);

  useEffect(() => {
    const currentVideoRef = videoRefs.current.find(
      (ref) => ref && ref.dataset.key === currentImage
    );

    if (currentVideoRef && window.innerWidth > 1000) {
      currentVideoRef.play();
    } else {
      currentVideoRef.pause();
      currentVideoRef.currentTime = 0;
    }
  }, [currentImage, videoRefs]);

  const themeMap = {
    PortalLight: {
      background: PortalLight_Bcg,
      foreground: portalLight_element,
    },
    PortalDark: {
      background: PortalDark_Bcg,
      foreground: PortalDark_element,
    },
  };

  const [buttonContent, setButtonContent] = useState("Agendar demonstração");

  const updateContent = () => {
    if (window.innerWidth < 1044) {
      setButtonContent("Fale com consultor");
    } else {
      setButtonContent("Agendar demonstração");
    }
  };

  useEffect(() => {
    updateContent();
    window.addEventListener("resize", updateContent);
    return () => {
      window.removeEventListener("resize", updateContent);
    };
  }, []);

  return (
    <DefaultTemplate className={styles.homePage}>
      <OffCanvasContato />
      {/* <CookieConsent /> */}

      <section id="top" className={`${styles.heroSection}`}>
        <div
          className={`${styles.heroContainer} container  d-flex flex-row  uk-animation-slide-left-medium`}
        >
          <div
            className={`${styles.heroText} uk-scrollspy-inview uk-animation-slide-left-medium`}
            uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
          >
            <Tag className="secondary" content="PORTAL RH" />
            <h1 className="title one mt-3">
              Sua <span className="textLight">gestão de RH completa</span> em
              uma única plataforma
            </h1>
            <p className="paragraph">
              Otimize processos, aumente a produtividade e transforme a sua
              gestão com tecnologia, inovação e estratégia.
            </p>
            <ButtonPrimary
              className="faleconosco paragraph bold responsiveContent"
              href="https://api.whatsapp.com/send?phone=5519996844020&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."
              target="_blank"
              type="button"
              content={buttonContent}
            />
          </div>
          <div
            className={`${styles.heroImage} uk-scrollspy-inview uk-animation-slide-right-medium`}
            uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay:100;"
          >
            <div className={styles.iconContainer}>
              <div className={`${styles.tagsIcons}`}>
                <div>
                  <div
                    className={`${styles.iconFlutuante1} levitate`}
                    style={{ animationDelay: ".3s" }}
                  >
                    <IconsFlutuantes>
                      <IconClockPlus size={30} stroke={2} />
                    </IconsFlutuantes>
                  </div>
                  <div
                    className={`${styles.iconFlutuante2} levitate`}
                    style={{ animationDelay: ".5s" }}
                  >
                    <IconsFlutuantes>
                      <IconSchool size={30} stroke={2} />
                    </IconsFlutuantes>
                  </div>
                  <div
                    className={`${styles.iconFlutuante3} levitate`}
                    style={{ animationDelay: "1s" }}
                  >
                    <IconsFlutuantes>
                      <IconBallpen size={30} stroke={2} />
                    </IconsFlutuantes>
                  </div>
                  <div
                    className={`${styles.iconFlutuante4} levitate`}
                    style={{ animationDelay: "1.1s" }}
                  >
                    <IconsFlutuantes>
                      <IconUserUp size={30} stroke={2} />
                    </IconsFlutuantes>
                  </div>
                  <div
                    className={`${styles.iconFlutuante5} levitate`}
                    style={{ animationDelay: ".2s" }}
                  >
                    <IconsFlutuantes>
                      <IconGraph size={30} stroke={2} />
                    </IconsFlutuantes>
                  </div>
                </div>
                <div className="">
                  <div
                    className={`${styles.tag1} cosmosTop`}
                    style={{ animationDelay: ".2s" }}
                  >
                    <Tag content={"PDI"} />
                  </div>

                  <div
                    className={`${styles.tag2} cosmosRight`}
                    style={{ animationDelay: ".5s" }}
                  >
                    <Tag content={"Ponto"} />
                  </div>
                  <div
                    className={`${styles.tag3} cosmosLeft`}
                    style={{ animationDelay: "9s" }}
                  ></div>
                  <div
                    className={`${styles.tag4} cosmosRight`}
                    style={{ animationDelay: "3s" }}
                  >
                    <Tag content={"Férias"} />
                  </div>
                  <div
                    className={`${styles.tag5} cosmosLeft`}
                    style={{ animationDelay: ".1s" }}
                  ></div>
                  <div
                    className={`${styles.tag6} cosmosBottom`}
                    style={{ animationDelay: "2s" }}
                  >
                    <Tag content={"E mais..."} />
                  </div>
                </div>
              </div>

              <img
                className={`${styles.rosquinha} circleLeft`}
                src={Ellipse}
                alt="circulo"
              />
            </div>
          </div>
        </div>
      </section>

      <ParallaxComponent
        currentTheme={currentTheme}
        themeMap={themeMap}
        styles={styles}
        handleThemeChange={handleThemeChange}
      />

      <section id="solucao" className={styles.sectionConheça}>
        <div className="container">
          <div className="w-100 text-center my-5">
            <Tag content={"CONHEÇA NOSSO PORTAL RH"} />
          </div>
          <div className="d-flex gap-3 mt-3  ">
            <div
              className="accordion z-3 uk-animation-slide-left-medium"
              style={{ width: "30%" }}
              id="accordionDiv"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
            >
              <AccordionItem
                data={"delay: 100;"}
                icon={<IconApps stroke={2} />}
                onClick={() => {
                  handleImageChange("app");
                  handleAccordionClick(2);
                }}
                isOpen={activeAccordion === 2}
                key={2}
                id={"app"}
                header={"App de Controle de Ponto"}
                body={
                  "Gerencie o tempo com facilidade em qualquer lugar. Nosso app de ponto com localização permite que você monitore e registre presenças com precisão."
                }
              />
              <AccordionItem
                data={"delay: 50;"}
                icon={<IconUsersPlus stroke={2} />}
                onClick={() => {
                  handleImageChange("admissao");
                  handleAccordionClick(1);
                }}
                isOpen={activeAccordion === 1}
                key={1}
                id={"admissao"}
                header={"Admissão digital descomplicada"}
                body={
                  "Modernize suas admissões sem estresse. Diga adeus aos formulários em papel e dê as boas-vindas a uma entrada digital intuitiva."
                }
              />

              <AccordionItem
                data={"delay: 150;"}
                icon={<IconPencilBolt stroke={2} />}
                onClick={() => {
                  handleImageChange("agilidade");
                  handleAccordionClick(3);
                }}
                isOpen={activeAccordion === 3}
                key={3}
                id={"agilidade"}
                header={"Agilidade em requisições"}
                body={
                  "Agilize suas solicitações com eficiência. Simplifique o processo para uma operação sem obstáculos."
                }
              />
              <AccordionItem
                data={"delay: 200;"}
                icon={<IconBolt stroke={2} />}
                onClick={() => {
                  handleImageChange("ged");
                  handleAccordionClick(4);
                }}
                isOpen={activeAccordion === 4}
                key={4}
                id={"ged"}
                header={"GED com assinaturas eletrônicas"}
                body={
                  "Gerencie documentos de forma simples e segura. Assine digitalmente e gerencie arquivos de maneira intuitiva."
                }
              />
              <AccordionItem
                data={"delay: 250;"}
                icon={<IconShieldHalf stroke={2} />}
                onClick={() => {
                  handleImageChange("epi");
                  handleAccordionClick(5);
                }}
                isOpen={activeAccordion === 5}
                key={5}
                id={"epi"}
                header={"EPI Personalizado"}
                body={
                  "Proteja sua equipe com precisão e facilidade. Personalize a entrega e o controle de EPIs para garantir segurança no trabalho."
                }
              />
              <AccordionItem
                data={"delay: 300;"}
                icon={<IconUsersPlus stroke={2} />}
                onClick={() => {
                  handleImageChange("registro");
                  handleAccordionClick(6);
                }}
                isOpen={activeAccordion === 6}
                key={6}
                id={"registro"}
                header={"Registro de atestados simplificado"}
                body={
                  "Gerencie atestados médicos com praticidade. Simplifique o lançamento e controle de atestados de forma eficiente e organizada."
                }
              />
            </div>
            <div
              className="w-50 uk-animation-slide-right-medium"
              uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 100;"
            >
              {Object.keys(imageMap).map((key, index) => (
                <div
                  key={key}
                  style={{ display: currentImage === key ? "block" : "none" }}
                >
                  {key === "app" ? (
                    <div style={{ position: "relative", left: "30px" }}>
                      <div className={styles.smartphone}>
                        <img
                          src={smartphone}
                          alt="Celular"
                          className="uk-animation-slide-right-medium"
                          uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 200;"
                          style={{
                            position: "absolute",
                            zIndex: 3,
                            height: "532px",
                          }}
                        />
                        <PortalVideo
                          imageMap={imageMap[key]}
                          ref={(el) => (videoRefs.current[index] = el)}
                          className={`${styles.demoApp} uk-animation-slide-right-medium`}
                          uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 200;"
                          data-key={key}
                        />
                      </div>
                      <img
                        src={appWeb}
                        alt="Celular"
                        className="uk-animation-scale-up"
                        uk-scrollspy="cls: uk-animation-scale-up; repeat: true; delay: 100;"
                        style={{
                          position: "absolute",
                          top: "-8px",
                          left: "-3%",
                          zIndex: 1,
                          height: "679px",
                          border: "10px solid var(--colorSecondary)",
                          borderRadius: "4px",
                        }}
                      />
                    </div>
                  ) : (
                    <video
                      ref={(el) => (videoRefs.current[index] = el)}
                      data-key={key}
                      className={`${styles.demo} uk-animation-slide-right-medium`}
                      uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 200;"
                      muted
                      style={{ display: "block" }}
                    >
                      <source src={imageMap[key]} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solucao_sm" className={styles.sectionConheça_Sm}>
        <div className="container ">
          <div className="w-100 text-center my-5">
            <Tag content={"CONHEÇA NOSSO PORTAL RH"} />
          </div>
          <div className="d-flex flex-column gap-3 mt-3">
            <div className="accordion  d-flex flex-column-reverse">
              <AccordionItem
                className={`${styles.btnTitleAccordion} show`}
                icon={<IconApps stroke={2} />}
                onClick={() => {
                  handleImageChange("app");
                  handleAccordionClick(2);
                }}
                isOpen={activeAccordion === 2}
                key={2}
                id={"app"}
                header={"App de Controle de Ponto"}
                body={
                  <>
                    <p>
                      Gerencie o tempo com facilidade em qualquer lugar. Nosso
                      app de ponto com localização permite que você monitore e
                      registre presenças com precisão.
                    </p>
                    {activeAccordion === 2 && <ProgressBar />}
                  </>
                }
              />
              <div className={styles.imgSmall}>
                <img src={app_Sm} alt="" />
              </div>
            </div>

            <div className="accordion  d-flex flex-column-reverse">
              <AccordionItem
                className={`${styles.btnTitleAccordion} show`}
                icon={<IconUsersPlus stroke={2} />}
                onClick={() => {
                  handleImageChange("admissao");
                  handleAccordionClick(1);
                }}
                isOpen={activeAccordion === 1}
                key={1}
                id={"admissao"}
                header={"Admissão digital descomplicada"}
                body={
                  <>
                    <p>
                      Modernize suas admissões sem estresse. Diga adeus aos
                      formulários em papel e dê as boas-vindas a uma entrada
                      digital intuitiva.
                    </p>
                    {activeAccordion === 1 && <ProgressBar />}
                  </>
                }
              />
              <div className={styles.imgSmall}>
                <img src={admissao_Sm} alt="" />
              </div>
            </div>

            <div className="accordion  d-flex flex-column-reverse">
              <AccordionItem
                className={`${styles.btnTitleAccordion} show`}
                icon={<IconPencilBolt stroke={2} />}
                onClick={() => {
                  handleImageChange("agilidade");
                  handleAccordionClick(3);
                }}
                isOpen={activeAccordion === 3}
                key={3}
                id={"agilidade"}
                header={"Agilidade em requisições"}
                body={
                  <>
                    <p>
                      Agilize suas solicitações com eficiência. Simplifique o
                      processo para uma operação sem obstáculos.
                    </p>
                    {activeAccordion === 3 && <ProgressBar />}
                  </>
                }
              />
              <div className={styles.imgSmall}>
                <img src={agilidade_Sm} alt="" />
              </div>
            </div>

            <div className="accordion  d-flex flex-column-reverse">
              <AccordionItem
                className={`${styles.btnTitleAccordion} show`}
                icon={<IconBolt stroke={2} />}
                onClick={() => {
                  handleImageChange("ged");
                  handleAccordionClick(4);
                }}
                isOpen={activeAccordion === 4}
                key={4}
                id={"ged"}
                header={"GED com assinaturas eletrônicas"}
                body={
                  <>
                    <p>
                      Gerencie documentos de forma simples e segura. Assine
                      digitalmente e gerencie arquivos de maneira intuitiva.
                    </p>
                    {activeAccordion === 3 && <ProgressBar />}
                  </>
                }
              />
              <div className={styles.imgSmall}>
                <img src={ged_Sm} alt="" />
              </div>
            </div>

            <div className="accordion  d-flex flex-column-reverse">
              <AccordionItem
                className={`${styles.btnTitleAccordion} show`}
                icon={<IconShieldHalf stroke={2} />}
                onClick={() => {
                  handleImageChange("epi");
                  handleAccordionClick(5);
                }}
                isOpen={activeAccordion === 5}
                key={5}
                id={"epi"}
                header={"EPI Personalizado"}
                body={
                  <>
                    <p>
                      Proteja sua equipe com precisão e facilidade. Personalize
                      a entrega e o controle de EPIs para garantir segurança no
                      trabalho.
                    </p>
                    {activeAccordion === 3 && <ProgressBar />}
                  </>
                }
              />
              <div className={styles.imgSmall}>
                <img src={epi_Sm} alt="" />
              </div>
            </div>

            <div className="accordion  d-flex flex-column-reverse">
              <AccordionItem
                className={`${styles.btnTitleAccordion} show`}
                icon={<IconUsersPlus stroke={2} />}
                onClick={() => {
                  handleImageChange("registro");
                  handleAccordionClick(6);
                }}
                isOpen={activeAccordion === 6}
                key={6}
                id={"registro"}
                header={"Registro de atestados simplificado"}
                body={
                  <>
                    <p>
                      Gerencie atestados médicos com praticidade. Simplifique o
                      lançamento e controle de atestados de forma eficiente e
                      organizada.
                    </p>
                    {activeAccordion === 3 && <ProgressBar />}
                  </>
                }
              />
              <div className={styles.imgSmall}>
                <img src={registro_Sm} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="servicos"
        className={`${styles.sectionServices} secondary-bg`}
      >
        <div className="container">
          <div
            className="uk-animation-slide-right-medium"
            uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 100;"
          >
            <div
              className={`${styles.tag} d-flex justify-content-center text-center uk-animation-scale-up`}
            >
              <button
                type="button"
                className="btn tagDark  text-white paragraph bold"
              >
                SERVIÇOS
              </button>
            </div>

            <div
              className={`${styles.servicesHeader} d-flex justify-content-center flex-column mt-5`}
            >
              <div>
                <h2 className="title three whiteColor text-center">
                  Transformação <span className="textDark">digital</span>
                </h2>
              </div>
              <div>
                <p className=" paragraph labelText whiteColor text-center">
                  Um{" "}
                  <span className="textDark">time altamente qualificado</span> e
                  de alta disponibilidade apresenta as soluções mais assertivas
                  para otimizar os processos da sua empresa.
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-3 justify-content-center mb-5">
            <CardServices
              data={"delay: 50;"}
              title="CONSULTORIA DE ERP"
              text="Excelência e proximidade"
              slogan="Tenha um sistema de gestão customizado e aderente ao seu negócio"
            >
              <CardServiceItem content="Especialistas em TI e RH oferecem soluções mais assertivas." />
              <CardServiceItem content="Inovação para melhorar processos e automatizar fluxos de trabalho." />
              <CardServiceItem content="Tenha um ERP otimizado e acelere o fechamento da sua folha." />
            </CardServices>

            <CardServices
              data={"delay: 70;"}
              title="BPO EM RH"
              text="Foco nos negócios"
              slogan="Cuidamos da sua operação administrativa e financeira"
            >
              <CardServiceItem content="Economia de 30% nos gastos com gestão de RH." />
              <CardServiceItem content="Aumento de eficiência e melhoria contínua na execução dos processos." />
              <CardServiceItem content="Transparência, previsibilidade e cumprimento de prazos." />
            </CardServices>

            <CardServices
              data={"delay: 100;"}
              title="BODY SHOP"
              text="Elimine riscos trabalhistas"
              slogan="Selecionamos e treinamos os melhores especialistas do mercado"
            >
              <CardServiceItem content="Encontramos o profissional adequado às suas necessidades." />
              <CardServiceItem content="Treinamos e gerenciamos o desempenho da sua equipe." />
              <CardServiceItem content="Redução de até 25% nos gastos com mão de obra." />
            </CardServices>
          </div>
        </div>
      </section>

      <CarrosselLogos />

      <section className={styles.sectionAbout}>
        <div className={styles.grand}>
          <img src={GRAND} alt="" />
          <img src={GRAND} alt="" />
        </div>
        <div
          className={`${styles.container} container uk-animation-slide-left-medium`}
          uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
        >
          <div className={styles.aboutHeader}>
            <div
              className="uk-animation-slide-left-medium"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
            >
              <h2 className="title one text-center">
                Nossos <span className=" title one textLight">números</span>
              </h2>
            </div>
            <div
              className="uk-animation-slide-left-medium"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 150;"
            >
              <p className="paragraph text-center">
                Presente em todo o Brasil, a{" "}
                <span className="textLight">
                  Outserv oferece soluções de RH e software
                </span>{" "}
                personalizadas para o seu negócio. Descubra como podemos
                impulsionar seu crescimento, onde quer que você esteja.
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
                className={"number"}
              />

              <NumbersCounters
                text={"Número de vidas processadas"}
                number={20000}
                delayAnimation={70}
                delay={0.2}
                className={"number"}
              />

              <NumbersCounters
                text={"Quantidade de projetos realizados"}
                number={800}
                delayAnimation={100}
                delay={0.3}
                className={"number"}
              />
            </div>
          </div>
        </div>
      </section>

      <CommentCarousel />

      <section
        className={`${styles.sectionArrows} uk-animation-slide-left-medium`}
        uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
      >
        <div className="container">
          <div className={`${styles.arrows} d-flex inverted`}>
            <svg
              className="bgArrowSecondary uk-animation-slide-left-medium"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
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
              className="uk-animation-slide-left-medium"
              width="146"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 130;"
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
              className="uk-animation-slide-left-medium"
              width="146"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 110;"
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
              className="uk-animation-slide-left-medium"
              width="146"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 90;"
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
              className="uk-animation-slide-left-medium"
              width="146"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 70;"
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
              className="uk-animation-slide-left-medium"
              width="146"
              uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
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
      </section>

      <section className={styles.sectionForms}>
        <Form />
      </section>
    </DefaultTemplate>
  );
};
