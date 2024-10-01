import React, { useEffect, useState } from "react";
import { fetchPosts, fetchMedia } from "../../src/api";
import styles from "./style.module.scss";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";
import bannerBlog from "../../src/assets/blog/banner.jpg";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const CardsBlogMore = ({ currentPostSlug }) => {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState({});
  const [loading, setLoading] = useState(true);
  const limit = 5;

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();

        // Filtra posts excluindo o post atual
        const filteredPosts = data
          .filter((post) => post.slug !== currentPostSlug)
          .sort(() => 0.5 - Math.random())
          .slice(0, limit);

        const mediaIds = filteredPosts
          .map((post) => post.featured_media)
          .filter((id) => id > 0);

        if (mediaIds.length > 0) {
          const mediaData = await Promise.all(
            mediaIds.map((id) => fetchMedia(id))
          );
          const mediaMap = mediaData.reduce((acc, mediaItem) => {
            acc[mediaItem.id] = mediaItem.source_url;
            return acc;
          }, {});
          setMedia(mediaMap);
        }

        setPosts(filteredPosts);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
        setLoading(false);
      }
    };

    getPosts();
  }, [currentPostSlug]);

  if (loading) {
    return (
      <p className="w-100 text-center justify-content-center d-flex">
        <Loading
          height={"100px"}
          width={"100px"}
          type={"spin"}
          color={"#21b88f"}
        />
      </p>
    );
  }

  if (posts.length === 0) {
    return null;
  }

  return (
    <div className={`${styles.cardContainer} mt-4`}>
      <h4 className="title">Mais artigos relacionados</h4>
      <div className={`${styles.cardContainer}`}>
        {posts.length ? (
          posts.map((post) => (
            <div className={`${styles.cards} card`} key={post.id}>
              <img
                src={media[post.featured_media] || bannerBlog}
                className={`${styles.cardImg} card-img-top`}
                alt={post.title.rendered}
              />
              <div className="card-body d-flex flex-column gap-3">
                <small className="text-secondary paragraph blogData opacity-50">
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </small>
                <h5 className="card-title title">{post.title.rendered}</h5>
              </div>
              <div className="d-flex justify-content-end mt-3 me-3">
                <div className="d-flex justify-content-end p-2">
                  <Link
                    className="paragraph bold d-flex align-items-center gap-2"
                    to={`/blog/view/${post.slug}`}
                  >
                    Ler mais
                    <IconArrowNarrowRight stroke={2} />
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="w-100 text-center justify-content-center d-flex">
            Nenhum post encontrado.
          </p>
        )}
      </div>
    </div>
  );
};

export default CardsBlogMore;
