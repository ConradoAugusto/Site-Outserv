import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconWorldWww,
} from "@tabler/icons-react";
import styles from "./style.module.scss";
import logo from "../../assets/logoOutserv1.webp";
import Gustavo from "../../assets/LinkTree/Gustavo.webp";
import Joao from "../../assets/LinkTree/Joao.webp";
import Rafael from "../../assets/LinkTree/Rafael.webp";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const LinkTree = () => {
  useEffect(() => {
    document.documentElement.classList.add("specialPage");
    return () => {
      document.documentElement.classList.remove("specialPage");
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.divContent}>
          <h2 className={`${styles.title} title five secondary`}>Contatos</h2>
          <div className={styles.cards}>
            <div className={styles.cardItem}>
              <Link
                to={
                  "https://api.whatsapp.com/send?phone=5519971455802&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os."
                }
              >
                <img src={Gustavo} alt="" />

                <div className={styles.cardContent}>
                  <IconBrandWhatsapp stroke={2} />
                  <h3>Gustavo Pedri</h3>
                </div>
              </Link>
            </div>

            <div className={styles.cardItem}>
              <Link
                to={
                  "https://api.whatsapp.com/send?phone=5519971455802&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os."
                }
              >
                <img src={Joao} alt="" />

                <div className={styles.cardContent}>
                  <IconBrandWhatsapp stroke={2} />
                  <h3>João Paulo Faria</h3>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.redesSociais}>
            <a
              href="https://www.linkedin.com/company/outserv/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandLinkedin stroke={2} />
            </a>
            <a
              href="https://www.instagram.com/outservconsultoria/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconBrandInstagram stroke={2} />
            </a>

            <a
              href="https://dev.outserv.com.br:33443/"
              rel="noopener noreferrer"
            >
              <IconWorldWww stroke={2} />
            </a>
          </div>
        </div>
        <div className={styles.email}>
          <h4 className="secondary">Contato via e-mail</h4>
          <a href="mailto:contato@outserv.com.br">contato@outserv.com.br</a>
        </div>
      </div>
    </div>
  );
};
