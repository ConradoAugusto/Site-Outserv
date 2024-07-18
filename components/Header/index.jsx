import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import LogoOutserv from "../../src/assets/logoOutserv.webp";
import LogoOutserv1 from "../../src/assets/logoOutserv1.webp";
import { ButtonPrimary } from "../buttons/ButtonPrimary";

export const Header = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solucaoId, setSolucaoId] = useState("solucao");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const updateSolucaoId = () => {
      if (window.innerWidth < 1000) {
        setSolucaoId("solucao_sm");
      } else {
        setSolucaoId("solucao");
      }
    };
  
    updateSolucaoId();
    window.addEventListener("resize", updateSolucaoId);
  
    return () => {
      window.removeEventListener("resize", updateSolucaoId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { pathname } = useLocation();

  const handleLinkClick = (event, id) => {
    event.preventDefault();
    if (pathname !== "/") {
      navigate("/");
    }

    setTimeout(() => {
      const targetSection = document.getElementById(id);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 75,
          behavior: "smooth",
        });
      }
    }, 100);

    setMenuOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <header
        className={`${styles.header} ${
          scrolled ? styles.scrolled : styles.default
        }`}
      >
        <div id="navbar" className={`${styles.containerHeader} container`}>
          <div className={styles.menu}>
            <div className={styles.menuItens}>
              <img
                onClick={(e) => handleLinkClick(e, "top")}
                className={`${styles.logo} ${
                  scrolled ? styles.scrolled : styles.default
                }`}
                alt="Logo Outserv"
                src={scrolled ? LogoOutserv1 : LogoOutserv}
              />
              <nav
                className={`${styles.navbar} ${
                  scrolled ? styles.scrolled : styles.default
                } ${menuOpen ? styles.open : styles.close}`}
              >
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  href="/"
                  onClick={(e) => handleLinkClick(e, "top")}
                  aria-label="Tela inicial"
                >
                  Home
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  onClick={(e) => handleLinkClick(e, solucaoId)}
                  aria-label="Soluções"
                >
                  Soluções
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  onClick={(e) => handleLinkClick(e, "servicos")}
                  aria-label="Serviços"
                >
                  Serviços
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  onClick={(e) => handleLinkClick(e, "clientes")}
                  aria-label="Clientes"
                >
                  Clientes
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  to="/sobre"
                  aria-label="Sobre nós"
                >
                  Sobre nós
                </Link>
                <Link
                  className={`paragraph bold linkNavbar noWrap ${
                    styles.linkNav
                  } ${scrolled ? styles.scrolled : styles.default}`}
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  aria-label="Contato"
                >
                  Contato
                </Link>
              </nav>
              <div
                className={`${styles.burger} ${
                  scrolled ? styles.scrolled : styles.default
                }`}
                onClick={toggleMenu}
              >
                <div
                  className={`${styles.burgerLine} ${
                    menuOpen ? styles.open : ""
                  }`}
                ></div>
                <div
                  className={`${styles.burgerLine} ${
                    menuOpen ? styles.open : ""
                  }`}
                ></div>
                <div
                  className={`${styles.burgerLine} ${
                    menuOpen ? styles.open : ""
                  }`}
                ></div>
              </div>
              <ButtonPrimary
                className={`${styles.button} faleconosco paragraph bold linkNavbar noWrap`}
                content={"Fale com consultor"}
              />
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      ></div>
    </>
  );
};

export default Header;
