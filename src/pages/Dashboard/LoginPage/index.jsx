import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "@tabler/icons-react";
import styles from "./style.module.scss";
import { IconEyeClosed, IconEye } from "@tabler/icons-react";

const API_URL =
  "https://outserv.com.br/wordpress/index.php/wp-json/jwt-auth/v1/token";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });
      const data = await response.json();

      if (!response.ok) {
        console.log(response.data.data.authorization)
        throw new Error(data.message || "Falha na autenticação");
        
      }

      if (data.token) {
        localStorage.setItem("wpToken", data.token);
        localStorage.setItem("wpUser", data.user_nicename);
        navigate("/dashboard");
      } else {
        throw new Error("Token não encontrado na resposta");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      className={`${styles.section} min-vh-100 d-flex flex-column align-items-center justify-content-center`}
    >
      <button
        onClick={() => navigate("/")}
        type="button"
        className="btn tagDark paragraph bold my-5"
      >
        <IconArrowLeft stroke={2} /> Voltar ao site
      </button>
      <div className="card w-100" style={{ maxWidth: "400px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Faça login na sua conta</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Nome do usuário</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="form-control"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label htmlFor="password">Senha</label>
              <div className="input-group">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="form-control"
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    onClick={togglePasswordVisibility}
                    style={{ cursor: "pointer" }}
                  >
                    {showPassword ? (
                      <IconEye stroke={2} />
                    ) : (
                      <IconEyeClosed stroke={2} />
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="btn faleconosco w-100"
                disabled={isLoading}
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </div>
          </form>
          {error && <div className="text-danger text-center mt-3">{error}</div>}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
