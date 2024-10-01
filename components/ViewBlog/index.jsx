import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPostBySlug } from "../../src/api"; // Atualize essa função na API
import styles from "./style.module.scss";
import Loading from "../Loading/Loading";
import bannerBlog from "../../src/assets/blog/banner.jpg";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const ViewPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const getPost = async () => {
      setLoading(true);
      setImageUrl("");

      try {
        const postData = await fetchPostBySlug(slug);

        setPost(postData[0]);

        if (postData[0].featured_media) {
          const mediaResponse = await fetch(
            `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/media/${postData[0].featured_media}`
          );
          const mediaData = await mediaResponse.json();
          setImageUrl(mediaData.source_url);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar post:", error);
        setLoading(false);
      }
    };

    getPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="w-100 text-center justify-content-center d-flex">
        <Loading
          height={"100px"}
          width={"100px"}
          type={"spin"}
          color={"#21b88f"}
        />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {post ? (
        <div className={styles.viewPage}>
          <h1 className="mb-5">{post.title.rendered}</h1>
          <img
            src={imageUrl || bannerBlog}
            alt="Imagem do Post"
            className={styles.postImage}
          />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          <a
            href="#"
            tabindex="0"
            className="d-flex align-items-center mt-5 btn outline"
            onClick={() => navigate("/blog")}
          >
            <IconArrowNarrowRight
              stroke={2}
              style={{ transform: "rotate(180deg)" }}
            />
            Voltar ao Blog
          </a>
        </div>
      ) : (
        <p>Post não encontrado.</p>
      )}
    </div>
  );
};

export default ViewPage;
