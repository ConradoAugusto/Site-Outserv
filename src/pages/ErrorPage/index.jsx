import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import error from "../../assets/404.webp";


export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.container}>
            <img className={styles.errorImg} src={error} alt="" />
          <h1 className={styles.error}>
            <span>404</span>
          </h1>
          <p>Página não encontrada</p>
          <button
            className="btn faleconosco bold paragraph bold"
            onClick={() => navigate("/")}
          >
            Voltar a página inicial
          </button>
        </div>
      </div>
    </main>
  );
};
