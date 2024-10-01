import React, { useEffect, useState } from "react";
import { fetchPosts, fetchMedia, fetchTags } from "../../src/api";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import bannerBlog from "../../src/assets/blog/banner.jpg";
import Loading from "../../components/Loading/Loading";
import { IconArrowNarrowRight } from "@tabler/icons-react";

const CardsBlog = () => {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState({});
  const [tagsMap, setTagsMap] = useState({});
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    const getPostsAndTags = async () => {
      try {
        
        const [postsData, tagsData] = await Promise.all([
          fetchPosts(),
          fetchTags(),
        ]);

        // Mapeia IDs das mídias
        const mediaIds = postsData
          .map((post) => post.featured_media)
          .filter((id) => id > 0);

        // Carrega as mídias se houver IDs válidos
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

        // Mapeia as tags
        const tagsMap = tagsData.reduce((acc, tag) => {
          acc[tag.id] = tag.name;
          return acc;
        }, {});
        setTagsMap(tagsMap);

        // Configura os posts
        setPosts(postsData);
        setFilteredPosts(postsData);
        setDisplayedPosts(postsData.slice(0, postsPerPage));
      } catch (error) {
        console.error("Erro ao carregar posts ou tags:", error);
      } finally {
        setLoading(false);
      }
    };

    getPostsAndTags();
  }, []);

  // Filtragem baseada na tag selecionada
  useEffect(() => {
    if (selectedTag === null) {
      setFilteredPosts(posts);
      setDisplayedPosts(posts.slice(0, page * postsPerPage));
    } else {
      const filtered = posts.filter((post) => post.tags.includes(selectedTag));

      // Verifica se a filtragem gerou resultados
      if (filtered.length === 0) {
        console.warn("Nenhum post encontrado para a tag selecionada");
      }

      setFilteredPosts(filtered);
      setDisplayedPosts(filtered.slice(0, page * postsPerPage));
    }
  }, [selectedTag, posts, page]);

  const handleTagClick = (tagId) => {
    setSelectedTag(tagId);
    setPage(1);
  };

  const handleShowAll = () => {
    setSelectedTag(null);
    setPage(1);
  };

  const loadMorePosts = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const tagsWithPosts = Object.entries(tagsMap).filter(([id]) =>
    posts.some((post) => post.tags.includes(parseInt(id)))
  );

  return (
    <section>
      <div>
        <div className="d-flex gap-3 p-4 align-items-center flex-nowrap overflow-x-auto">
          <a
            href="#"
            tabindex="0"
            className="btn dark text-nowrap"
            onClick={handleShowAll}
          >
            Todos
          </a>
          {tagsWithPosts.map(([id, name]) => (
            <a
              href="#"
              tabindex="0"
              key={id}
              className="btn light text-nowrap"
              onClick={() => handleTagClick(parseInt(id))}
            >
              {name}
            </a>
          ))}
        </div>

        <div className={`${styles.cardContainer}`}>
          {loading ? (
            <div className="d-flex justify-content-center vw-100">
              <Loading
                height={"100px"}
                width={"100px"}
                type={"spin"}
                color={"#21b88f"}
              />
            </div>
          ) : displayedPosts.length ? (
            displayedPosts.map((post) => (
              <div className={`${styles.cards} card `} key={post.id}>
                <img
                  src={media[post.featured_media] || bannerBlog}
                  className={`${styles.cardImg} card-img-top`}
                  alt={post.title.rendered}
                  style={{ maxWidth: "inherit" }}
                />
                <div className="card-body d-flex flex-column gap-3">
                  <small className="text-secondary paragraph blogData opacity-50">
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </small>
                  <div>
                    <div className="card-tags">
                      {post.tags && post.tags.length > 0 && (
                        <p>
                          {post.tags.map((tagId) => (
                            <span key={tagId} className="tagBlog">
                              {tagsMap[tagId] || "Geral"}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                    <h5 className="card-title title">{post.title.rendered}</h5>
                  </div>
                  <p
                    className={`${styles.cardContent} paragraph`}
                    dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                  ></p>
                </div>
                <div className="d-flex justify-content-end p-3">
                  <div className="d-flex justify-content-end">
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

        {filteredPosts.length > displayedPosts.length && (
          <div className="d-flex justify-content-center mt-4">
            <a
              href="#"
              tabindex="0"
              className="btn light"
              onClick={loadMorePosts}
            >
              Carregar mais
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default CardsBlog;
