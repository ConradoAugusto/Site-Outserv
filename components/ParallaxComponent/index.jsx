import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss";
import {
  IconBrightnessDown,
  IconMoon2,

} from "@tabler/icons-react";


const ParallaxComponent = ({ currentTheme, themeMap, handleThemeChange }) => {
  const parallaxBackgroundRef = useRef(null);
  const parallaxForegroundRef = useRef(null);
  

  useEffect(() => {
    const perspective = "2000px",
      deltaBackground = 110,
      deltaForeground = 110;

    const applyParallax = (e) => {
      const container = parallaxBackgroundRef.current.parentElement,
        width = container.offsetWidth,
        height = container.offsetHeight,
        midWidth = width / 2,
        midHeight = height / 2;

      const cursPosX = e.pageX,
        cursPosY = e.pageY,
        cursCenterX = (midWidth - cursPosX) / deltaBackground,
        cursCenterY = (midHeight - cursPosY) / deltaBackground;

      parallaxBackgroundRef.current.style.transform = `perspective(${perspective}) translateZ(${deltaBackground}px) rotateX(${cursCenterY}deg) rotateY(${-cursCenterX}deg)`;

      const newCursCenterX = (midWidth - cursPosX) / deltaForeground,
        newCursCenterY = (midHeight - cursPosY) / deltaForeground;

      parallaxForegroundRef.current.style.transform = `perspective(${perspective}) translateZ(${deltaForeground}px) rotateX(${newCursCenterY}deg) rotateY(${-newCursCenterX}deg)`;
    };

    const updateParallaxEffect = () => {
      document.removeEventListener("mousemove", applyParallax);
      document.addEventListener("mousemove", applyParallax);
    };

    updateParallaxEffect();

    return () => {
      document.removeEventListener("mousemove", applyParallax);
    };
  }, [currentTheme]);

  return (
    <section id="themes" className={`${styles.sectionPortalTheme} secondary-bg`}>
      <div className={`${styles.portalTheme} container`}>
        <div id="parallaxContainer" className="hero-animation-img">
          <a href="#">
            <div
              ref={parallaxBackgroundRef}
              id="heroAnimationImg"
              className="position-relative hero-dashboard-img"
            >
              {Object.keys(themeMap).map((key) => (
                <div
                  ref={currentTheme === key ? parallaxForegroundRef : null}
                  key={key}
                  style={{ display: currentTheme === key ? "block" : "none" }}
                  className={styles.imgsPotal}
                >
                  <img
                    src={themeMap[key].background}
                    alt={`Portal RH Tela de ${key}`}
                    className="animation-img"
                  />
                  <img
                    src={themeMap[key].foreground}
                    alt={`Portal RH Tela de ${key}`}
                    className="position-absolute hero-elements-img animation-img top-0 start-0"
                  />
                  <figcaption style={{ visibility: "hidden" }}>
                    {`Imagem da tela de ${key.charAt(0).toUpperCase() + key.slice(1)} do Portal RH da Outserv`}
                  </figcaption>
                </div>
              ))}
            </div>
          </a>
        </div>
        <div
          className={`${styles.themeBtn} uk-animation-slide-bottom-medium`}
          uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay: 300;" 
        >
          <a
            onClick={() => handleThemeChange("PortalLight")}
            type="button"
            className="btn light"
          >
            <IconBrightnessDown size={20} stroke={2} />
            Light mode
          </a>
          <a
            onClick={() => handleThemeChange("PortalDark")}
            type="button"
            className="btn dark"
          >
            <IconMoon2 size={20} stroke={2} />
            Dark mode
          </a>
        </div>
        <div
          className={`${styles.themeText} uk-animation-slide-bottom-medium`}
          uk-scrollspy="cls: uk-animation-slide-bottom-medium; repeat: true; delay: 300;"
        >
          <div className="d-flex justify-content-center">
            <h2 className="title two text-center ">
              Acelere sua empresa com nossas{" "}
              <span className="textDark">soluções</span>
            </h2>
          </div>
          <div className="d-flex justify-content-center">
            <p className="paragraph text-center">
              Somos especialistas em RH-DP atuação Território Nacional focado na
              Terceirização folha de pagamento – utilizando o
              <span className="primary"> TOTVS RM Labore</span>, Ponto, E-Social e
              Portal Web, implantação e manutenção TOTVS (RM), Auditoria Trabalhista
              e Benefícios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxComponent;
