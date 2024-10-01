import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DefaultTemplate } from "../../../components/DefaultTemplate";
import ViewBlog from "../../../components/ViewBlog";
import styles from "./style.module.scss";
import CardsBlogMore from "../../../components/CardsBlogMore";
import { IconArrowNarrowRight } from "@tabler/icons-react";

export const ViewPage = () => {
  const { slug } = useParams();

  const navigate = useNavigate();

  return (
    <DefaultTemplate>
      <div className="mx-5" style={{ marginTop: "7rem", width: "fit-content" }}>
        <a
          href="#"
          tabindex="0"
          className="d-flex align-items-center"
          onClick={() => navigate("/blog")}
        >
          <IconArrowNarrowRight
            stroke={2}
            style={{ transform: "rotate(180deg)" }}
          />
          Voltar ao Blog
        </a>
      </div>
      <div className={styles.container}>
        <ViewBlog />
        <div>
          <CardsBlogMore currentPostSlug={slug} limit={4} />
        </div>
      </div>
    </DefaultTemplate>
  );
};

export default ViewPage;
