import React, { useEffect, useState } from "react";
import { fetchPosts, fetchMedia, fetchTags, deletePost } from "../../api";
import styles from "./style.module.scss";
import Loading from "../../../components/Loading/Loading";
import imgProfile from "../../assets/blog/profile.jpg";
import bannerBlog from "../../assets/blog/banner.jpg";
import { IconLogout2, IconPlus } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardPage = () => {
  const [posts, setPosts] = useState([]);
  const [media, setMedia] = useState({});
  const [tagsMap, setTagsMap] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const userName = localStorage.getItem("wpUser");

  useEffect(() => {
    const getPostsAndTags = async () => {
      try {
        const [postsData, tagsData] = await Promise.all([
          fetchPosts(),
          fetchTags(),
        ]);

        const mediaIds = postsData
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

        const tagsMap = tagsData.reduce((acc, tag) => {
          acc[tag.id] = tag.name;
          return acc;
        }, {});
        setTagsMap(tagsMap);

        setPosts(postsData);
      } catch (error) {
        console.error("Erro ao carregar posts ou tags:", error);
      } finally {
        setLoading(false);
      }
    };

    getPostsAndTags();
  }, []);

  const handleDelete = async (postId) => {
    try {
      const result = await Swal.fire({
        title: "Tem certeza?",
        text: "Você não poderá reverter isso!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#21b88f",
        cancelButtonColor: "#ea5455",
        confirmButtonText: "Sim, excluir!",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        await deletePost(postId);
        setPosts(posts.filter((post) => post.id !== postId));
        Swal.fire("Excluído!", "O post foi excluído com sucesso.", "success");
      }
    } catch (error) {
      Swal.fire(
        "Erro!",
        `Não foi possível excluir o post: ${error.message}`,
        "error"
      );
    }
  };

  const handleEdit = (post) => {
    const wpEditUrl = `https://outserv.com.br/wordpress/wp-admin/post.php?post=${post.id}&action=edit`;
    window.open(wpEditUrl, "_blank");
  };

  const logout = () => {
    localStorage.removeItem("wpToken");
    localStorage.removeItem("wpUser");
    navigate("/blog/login");
  };

  return (
    <>
      <section className={styles.section}>
        <div className="container">
          <div className="mobileBreak d-flex justify-content-between align-items-center">
            <div className="d-flex gap-3 align-items-center">
              <span className="paragraph bold my-5">DASHBOARD</span>
              <a
                onClick={() =>
                  window.open(
                    "https://outserv.com.br/wordpress/wp-admin/post-new.php",
                    "_blank"
                  )
                }
                className="btn faleconosco paragraph bold"
              >
                <IconPlus stroke={2} /> Novo Post
              </a>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img className={styles.avatar} src={imgProfile} alt="avatar" />
              <div className="d-flex gap-3 text-white align-items-center">
                <p className="paragraph text-black bold">
                  {userName}
                  <IconLogout2
                    className={styles.iconLogout}
                    onClick={() => logout()}
                    stroke={2}
                  />
                </p>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="vh-100 d-flex justify-content-center align-items-center">
              <Loading
                height={"100px"}
                width={"100px"}
                type={"spin"}
                color={"#21b88f"}
              />
            </div>
          ) : (
            <>
              <div className={`${styles.cardContainer}`}>
                {posts.length ? (
                  posts.map((post) => (
                    <div className={`${styles.cards} card`} key={post.id}>
                      <img
                        src={media[post.featured_media] || bannerBlog}
                        className={`${styles.cardImg} card-img-top`}
                        alt={post.title.rendered}
                        style={{ maxWidth: "inherit" }}
                      />
                      <div className={`${styles.cardBody} card-body`}>
                        <div className="card-tags">
                          <div>
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
                          <h5
                            className="card-title"
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          ></h5>
                          <p
                            className={`${styles.cardContent} paragraph`}
                            dangerouslySetInnerHTML={{
                              __html: post.content.rendered,
                            }}
                          ></p>
                        </div>
                        <div className="d-flex justify-content-end gap-3">
                          <button
                            className="btn delete"
                            onClick={() => handleDelete(post.id)}
                          >
                            Deletar
                          </button>
                          <button
                            className="btn outline"
                            onClick={() => handleEdit(post)}
                          >
                            Editar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center d-flex justify-content-center align-items-center vw-100 vh-100">
                    <p className="text-center text-black d-flex p-5 border border-1 rounded-3">
                      Nenhum post encontrado.
                    </p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardPage;
