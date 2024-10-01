import { DefaultTemplate } from "../../../components/DefaultTemplate";
import styles from "./style.module.scss";
import bannerBlog from "../../assets/blog/banner.jpg";
import CardsBlog from "../../../components/CardsBlog";

export const BlogPage = () => {
  return (
    <DefaultTemplate>
      <div className={styles.heading}>
        <img src={bannerBlog} alt="uma pessoa fazendo pesquisa de blog" />
        <h2 className="title one">
          Acompanhe nosso conteúdo de tendências e inovação
        </h2>
      </div>
      <CardsBlog />
    </DefaultTemplate>
  );
};
