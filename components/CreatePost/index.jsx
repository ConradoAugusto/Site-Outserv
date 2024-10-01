import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import styles from "./style.module.scss";
import Loading from "../Loading/Loading";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [availableTags, setAvailableTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toolbarRef = useRef(null);
  const editorRef = useRef(null);

  const DEFAULT_TAG = { id: 7, name: "geral" };

  useEffect(() => {
    const handleScroll = () => {
      if (toolbarRef.current && editorRef.current) {
        const toolbarHeight = toolbarRef.current.clientHeight;
        const editorTop = editorRef.current.getBoundingClientRect().top;

        if (editorTop <= toolbarHeight) {
          toolbarRef.current.classList.add("toolbar-fixed");
        } else {
          toolbarRef.current.classList.remove("toolbar-fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(
          `https://testeoffline.outserv.com.br:33443/wp-json/wp/v2/tags`
        );
        const tagsData = await response.json();
        setAvailableTags(tagsData);
      } catch (error) {
        console.error("Erro ao carregar tags:", error);
      }
    };

    fetchTags();
  }, []);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      const previewUrl = URL.createObjectURL(file);
      setImagePreviewUrl(previewUrl);
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImagePreviewUrl(null);
  };

  const handleTagChange = (e) => {
    const selectedTagId = e.target.value;
    const selectedTag = availableTags.find(
      (tag) => tag.id === Number(selectedTagId)
    );
    setSelectedTag(
      selectedTag ? { id: selectedTag.id, name: selectedTag.name } : null
    );
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
          `https://testeoffline.outserv.com.br:33443/wp-json/wp/v2/media`,
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
      }

      const response = await fetch(
        `https://testeoffline.outserv.com.br:33443/wp-json/wp/v2/posts`,
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
            featured_media: imageId || undefined,
            tags: selectedTag ? [selectedTag.id] : [DEFAULT_TAG.id],
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Erro ${response.status}: ${
            "A imagem é muito grande, por favor selecione uma imagem de até 1Mb." ||
            "Falha ao criar o post"
          }`
        );
      }

      Swal.fire({
        icon: "success",
        title: "Post criado com sucesso!",
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
        {imagePreviewUrl && (
          <div>
            <img
              className="img-fluid mb-3"
              src={imagePreviewUrl}
              alt="Prévia da Imagem do Post"
            />
            <button
              type="button"
              className="btn btn-danger"
              onClick={handleRemoveImage}
            >
              Remover Imagem
            </button>
          </div>
        )}
        <input
          id="image"
          className="form-control"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
      </label>
      <label className="paragraph bold" htmlFor="tags">
        Tag:
        <select
          id="tags"
          className="form-control"
          value={selectedTag ? selectedTag.id : ""}
          onChange={handleTagChange}
        >
          <option hidden value="">
            Selecione uma tag
          </option>
          {availableTags.map((tag) => (
            <option key={tag.id} value={tag.id}>
              {tag.name}
            </option>
          ))}
        </select>
      </label>
      <label className="paragraph" htmlFor="content">
        Conteúdo:
        <div ref={editorRef}>
          <ReactQuill
            value={content}
            onChange={setContent}
            className={`${styles.Content}`}
            modules={modules}
            placeholder="Conteúdo do post"
          />
        </div>
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
          {isLoading ? <Loading /> : "Criar Post"}
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
