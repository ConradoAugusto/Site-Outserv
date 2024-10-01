import axios from "axios";

const API_URL =
  "https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/posts";
const TAG =
  "https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/tags?per_page=20";

export const fetchMedia = async (id) => {
  const response = await fetch(
    `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/media/${id}`
  );
  if (!response.ok) {
    throw new Error(`Erro ao buscar mídia ${id}`);
  }
  return response.json();
};

export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw error;
  }
};

export const fetchPostBySlug = async (slug) => {
  try {
    const response = await fetch(
      `https://outserv.com.br/wordpress/index.php/wp-json/wp/v2/posts?slug=${slug}`
    );
    console.log(response);
    const post = await response.json();
    return post;
  } catch (error) {
    console.error("Erro ao buscar post por slug:", error);
    return null;
  }
};

export const fetchTags = async () => {
  try {
    const response = await axios.get(`${TAG}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar tags:", error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("wpToken")}`,
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao criar post:", error);
    throw error;
  }
};

export const updatePost = async (postId, post) => {
  try {
    const response = await fetch(`${API_URL}/${postId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("wpToken")}`,
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Erro ao atualizar post");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro ao atualizar post:", error);
    throw error;
  }
};

export const deletePost = async (postId) => {
  const token = localStorage.getItem("wpToken");
  const response = await fetch(`${API_URL}/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir o post");
  }
};
