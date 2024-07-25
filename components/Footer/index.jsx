import styles from "./style.module.scss";
import LogoOutserv from "../../src/assets/logoOutserv1.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    if (pathname !== "/") {
      navigate("/"); 
    }

    setTimeout(() => {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 20,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const sobre = pathname === "/sobre";
  const home = pathname === "/";
  return (
    <section className={styles.footer}>
      <div
        className={`${styles.container} container form-group col-md-12 uk-animation-slide-left-medium`}
        data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 400;"
      >
        <div className={styles.content}>
          <div className={styles.infos}>
            <div className={styles.outserv}>
              <img onClick={() => navigate("/")} src={LogoOutserv} alt="" />
              <p className="paragraph gray-7">
                “Nosso compromisso é com a excelência e a responsabilidade
                social em todas as nossas iniciativas.”
              </p>
            </div>
            <div className={styles.redesSociais}>
              <div className={styles.cardItem}>
                <Link
                  to={
                    "https://api.whatsapp.com/send?phone=5519971455802&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os."
                  }
                  target="_blank"
                  aria-label="Whatsapp"
                >
                  <IconBrandWhatsapp stroke={2}  color="#82848e" />
                </Link>
              </div>
              <div className={styles.redesSociais}>
                <a
                
                  href="https://www.linkedin.com/company/outserv/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <IconBrandLinkedin stroke={2} color="#82848e" />
                </a>
                <a
                  href="https://www.instagram.com/outservconsultoria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <IconBrandInstagram stroke={2}  color="#82848e" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.navbar}>
            <div className={styles.itemOne}>
              <span className="paragraph bold gray-8">Produtos</span>
              <Link
                onClick={(e) => handleLinkClick(e, "solucao")}
                className="paragraph semiBold gray-8"
              >
                Portal RH
              </Link>
              <Link
                onClick={(e) => handleLinkClick(e, "solucao")}
                className="paragraph semiBold gray-8"
              >
                App Controle de Ponto
              </Link>
            </div>
            <div className={styles.itemTwo}>
              <span className="paragraph bold gray-8">Recurso</span>
              <Link
                onClick={(e) => handleLinkClick(e, "servicos")}
                className="paragraph semiBold gray-8"
              >
                Consultoria Totvs
              </Link>
              <Link
                onClick={(e) => handleLinkClick(e, "servicos")}
                className="paragraph semiBold gray-8"
              >
                BPO
              </Link>
              <Link
                onClick={(e) => handleLinkClick(e, "servicos")}
                className="paragraph semiBold gray-8"
              >
                Body Shop
              </Link>
            </div>
            <div className={styles.itemThree}>
              <span className="paragraph bold gray-8">Empresa</span>
              <Link to="/sobre" className="paragraph semiBold gray-8">
                Sobre nós
              </Link>
              <Link
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                className="paragraph semiBold gray-8"
              >
                Contato
              </Link>
            </div>
          </div>
        </div>
        <hr className="w-100" />
        <div className={styles.copyrigh}>
          <p className="gray-8">
            Protheus, RM e TOTVS são uma propriedade da TOTVS S/A
          </p>
          <div className={styles.contentCopyrigh}>
            <Link to={"/legal/termos-e-condicoes"} className="gray-8">Termos e condições</Link>
            <Link to={"/legal/politicas-de-privacidade"} className="gray-8">
              Politica de privacidade
            </Link>
          </div>
          <p className="gray-8">Copyright 2024 Outserv</p>
        </div>
      </div>
    </section>
  );
};
