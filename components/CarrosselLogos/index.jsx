import antonelli from "../../src/assets/logos/antonelli.webp";
import benassi from "../../src/assets/logos/benassi.webp";
import ccr from "../../src/assets/logos/ccr.webp";
import cipatex from "../../src/assets/logos/cipatex.webp";
import contenco from "../../src/assets/logos/contenco.webp";
import covabra from "../../src/assets/logos/covabra.webp";
import eldorado from "../../src/assets/logos/eldorado.webp";
import eletromei from "../../src/assets/logos/eletromei.webp";
import eptv from "../../src/assets/logos/eptv.webp";
import garcia from "../../src/assets/logos/garcia.webp";
import isma from "../../src/assets/logos/isma.webp";
import jbs from "../../src/assets/logos/jbs.webp";
import jef from "../../src/assets/logos/jef.webp";
import john from "../../src/assets/logos/john.webp";
import lng from "../../src/assets/logos/lng.webp";
import obl from "../../src/assets/logos/obl.webp";
import pitney from "../../src/assets/logos/pitney.webp";
import red from "../../src/assets/logos/red.webp";
import rioverde from "../../src/assets/logos/rioverde.webp";
import sansim from "../../src/assets/logos/sansim.webp";
import sigma from "../../src/assets/logos/sigma.webp";
import turbo from "../../src/assets/logos/turbo.webp";
import madero from "../../src/assets/logos/madero.webp";

import { useEffect, useRef } from "react";
import styles from "./style.module.scss";

export const CarrosselLogos = () => {
  const empresas = [
    antonelli,
    benassi,
    ccr,
    cipatex,
    contenco,
    covabra,
    eldorado,
    eletromei,
    eptv,
    garcia,
    isma,
    jbs,
    jef,
    john,
    lng,
    madero,
    obl,
    pitney,
    red,
    rioverde,
    sansim,
    sigma,
    turbo,
  ];

  const logosSlideRef = useRef(null);

  useEffect(() => {
    const logosSlide = logosSlideRef.current;
    const firstClone = logosSlide.cloneNode(true);
    logosSlide.parentNode.appendChild(firstClone);

    const handleAnimation = () => {
      const slideWidth = logosSlide.scrollWidth / 1;
      logosSlide.parentNode.scrollLeft += 1;

      if (logosSlide.parentNode.scrollLeft >= slideWidth) {
        logosSlide.parentNode.scrollLeft = 0;
      }
    };

    const interval = setInterval(handleAnimation, 2);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="clientes" className={styles.sectionLogos}>
      <div className={styles.logosWrapper}>
        <div className={styles.logosSlide} ref={logosSlideRef}>
          {empresas.map((logoSrc, index) => (
            <img key={index} src={logoSrc} alt="Logo" className={styles.logo} />
          ))}
        </div>
      </div>
    </section>
  );
};
