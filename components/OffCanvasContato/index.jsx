import styles from "./style.module.scss";
import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp, IconMail, IconMapPin } from "@tabler/icons-react"
import { ButtonPrimary } from "../buttons/ButtonPrimary"
import hero_bcg from "../../src/assets/hero_bcg.png";
import logo from "../../src/assets/logoOutserv1.webp";
import Offcanvas from "../../src/assets/Offcanvas.webp";
import { Link } from "react-router-dom";

export const OffCanvasContato = () => {
    return (
        <div
        className={`${styles.offcanvas} offcanvas offcanvas-end`}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <img className={styles.imgOffcanvas} src={Offcanvas} alt="" />

        <div className={styles.headerOffcanvas}>
          <div className={styles.logoOffcanvas}>
            <img src={logo} alt="logo outserv" />
          </div>
          <a
            type="button"
            className="btn-close text-reset "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></a>
        </div>
        <div className={`${styles.offcanvasBody} offcanvas-body`}>
          <div className={styles.contato}>
            <h2 className="paragraph acordion primary">Contatos</h2>
            <p className="bold">Americana - SP</p>
            <p className="secondary">
              <IconMapPin stroke={2} size={20} className="primary" />{" "}
              
              <a
                href="https://maps.app.goo.gl/SoV1rnJUeLeVP9Co7"
                target="_blank"
                rel="noopener noreferrer"
              >
               Rua 4, nº 1544 . Piso Superior - Centro
              </a>
            </p>
            <p className="bold">Rio Claro - SP</p>
            <p className="secondary">
              <IconMapPin stroke={2} size={20} className="primary" />{" "}
              <a
                href="https://maps.app.goo.gl/SoV1rnJUeLeVP9Co7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rua Honduras, 185 – 11 Andar | Centro Empresarial Av. Office -
              </a>
            </p>
            <p className="secondary">
              <IconMail stroke={2} size={20} className="primary" />{" "}
              <a href="mailto:contato@outserv.com.br">contato@outserv.com.br</a>
            </p>
          </div>
          <div className={styles.cta}>
            <ButtonPrimary
              className={`${styles.btn} paragraph bold linkNavbar noWrap`}
              content={"Fale com consultor"}
            />
          </div>
          <div className={styles.redesSociais}>
            <Link
              to={"https://api.whatsapp.com/send?phone=5519996844020&text=Olá,%20vim%20através%20do%20site%20e%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços."}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandWhatsapp stroke={2} />
            </Link>
            <Link to={"https://www.linkedin.com/company/outserv/mycompany/"} target="_blank" rel="noopener noreferrer">
              <IconBrandLinkedin stroke={2} />
            </Link>
            <Link to={"https://www.instagram.com/outservconsultoria/"} target="_blank" rel="noopener noreferrer">
              <IconBrandInstagram stroke={2} />
            </Link>
          </div>
        </div>
        <img className={styles.imgOffcanvasLine} src={hero_bcg} alt="" />
      </div>
    )
}

