import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./style.module.scss";
import Loading from "../Loading/Loading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const { postId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [tag, setTag] = useState("");
  const [availableTags, setAvailableTags] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imageRemoved, setImageRemoved] = useState(false); // Estado para controlar remoção de imagem

  const navigate = useNavigate();

  useEffect(() => {
    if (postId) {
      fetchPost();
      fetchTags();
    } else {
      setError("Post ID não encontrado.");
    }
  }, [postId]);

  const fetchTags = async () => {
    try {
      const response = await fetch(
        `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/tags`
      );
      const tagsData = await response.json();
      setAvailableTags(tagsData);
    } catch (error) {
      console.error("Erro ao carregar tags:", error);
    }
  };

  const fetchPost = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/posts/${postId}`
      );
      if (!response.ok) throw new Error("Falha ao carregar o post");

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Resposta inválida do servidor");
      }

      const post = await response.json();
      setTitle(post.title.rendered);
      setContent(post.content.rendered);
      setTag(post.tags[0] || "");
      if (post.featured_media) {
        const mediaResponse = await fetch(
          `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/media/${post.featured_media}`
        );
        const media = await mediaResponse.json();
        setImageUrl(media.source_url);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleRemoveImage = () => {
    setImage(null); // Remove o arquivo de imagem carregado
    setImageUrl(""); // Remove a URL da imagem existente
    setImageRemoved(true); // Marca a imagem como removida
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem("wpToken");
      if (!token) {
        throw new Error("Token de autenticação não encontrado.");
      }

      let imageId = null;

      if (image) {
        const formData = new FormData();
        formData.append("file", image);

        const uploadResponse = await fetch(
          `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/media`,
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );

        if (!uploadResponse.ok) {
          const uploadErrorData = await uploadResponse.json();
          throw new Error(
            `Erro ao enviar imagem: ${
              uploadErrorData.message || "Falha ao enviar imagem"
            }`
          );
        }

        const uploadData = await uploadResponse.json();
        imageId = uploadData.id;
      } else if (imageRemoved) {
        imageId = 0; // Define a imagem como ausente, removendo a imagem atual no banco de dados
      }

      const response = await fetch(
        `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/posts/${postId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            content,
            status: "publish",
            featured_media: imageId !== null ? imageId : undefined,
            tags: tag ? [Number(tag)] : [],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Erro ${response.status}: ${
            errorData.message || "Falha ao atualizar o post"
          }`
        );
      }

      Swal.fire({
        icon: "success",
        title: "Post atualizado com sucesso!",
        showConfirmButton: true,
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Erro",
        text: err.message,
        showConfirmButton: true,
        confirmButtonText: "OK",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const modules = {
    toolbar: [
      [{ header: "2" }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className="paragraph bold" htmlFor="title">
        Título:
        <input
          id="title"
          className="form-control"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título do post"
          required
        />
      </label>
      <label className="paragraph bold" htmlFor="image">
        {" "}
      </label>
      {imageUrl && (
        <>
          <img className="img-fluid mb-3" src={imageUrl} alt="Imagem do Post" />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleRemoveImage}
          >
            Remover Imagem
          </button>
        </>
      )}
      <input
        id="image"
        className="form-control"
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <label className="paragraph bold" htmlFor="tags">
        Tags:
        <select
          id="tags"
          className="form-control"
          value={tag}
          onChange={handleTagChange}
        >
          <option hidden value="">
            Selecione uma tag
          </option>
          {availableTags.map((tagOption) => (
            <option key={tagOption.id} value={tagOption.id}>
              {tagOption.name}
            </option>
          ))}
        </select>
      </label>
      <label className="paragraph" htmlFor="content">
        Conteúdo:
        <ReactQuill
          value={content}
          onChange={setContent}
          className={`${styles.Content}`}
          modules={modules}
          placeholder="Conteúdo do post"
        />
      </label>
      <div className="d-flex justify-content-end gap-3">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="btn danger"
          style={{ color: "white" }}
        >
          Cancelar
        </button>
        <button type="submit" className="btn faleconosco" disabled={isLoading}>
          {isLoading ? <Loading /> : "Atualizar Post"}
        </button>
      </div>
    </form>
  );
};

export default EditPost;
