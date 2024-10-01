import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import error from "../../assets/404.webp";

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <img className={styles.errorImg} src={error} alt="" />
        <p>Página não encontrada</p>
        <a
          href="#"
          tabindex="0"
          className="btn faleconosco bold paragraph bold"
          onClick={() => navigate("/")}
        >
          Voltar a página inicial
        </a>
      </div>
    </main>
  );
};
