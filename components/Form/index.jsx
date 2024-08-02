import { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const Form = () => {
  const [mostrarTextarea, setMostrarTextarea] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSelectChange = (event) => {
    const valorSelecionado = event.target.value;
    setMostrarTextarea(valorSelecionado === "Outros");
  };

  const validateForm = () => {
    const formData = new FormData(form.current);
    const requiredFields = [
      "name",
      "email",
      "phone",
      "site",
      "solucao",
      "tamanho_empresa",
    ];

    for (let field of requiredFields) {
      if (!formData.get(field)) {
        Swal.fire({
          icon: "warning",
          title: "Por favor preencha todos os campos obrigatórios!",
          showConfirmButton: false,
          timer: 3000,
        });
        return false;
      }
    }

    if (mostrarTextarea && !formData.get("duvida")) {
      Swal.fire({
        icon: "warning",
        title: "Por favor preencha todos os campos obrigatórios!",
        showConfirmButton: false,
        timer: 3000,
      });
      return false;
    }

    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "default_service",
        "templateID",
        form.current,
        "gBB-rYOO6x8050lnB"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Mensagem enviada com sucesso!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.current.reset();
          setMostrarTextarea(false);
          setIsButtonDisabled(true);
          setIsLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
        }
      );
  };

  const checkFormCompletion = () => {
    const formData = new FormData(form.current);
    const requiredFields = [
      "name",
      "email",
      "phone",
      "site",
      "solucao",
      "tamanho_empresa",
    ];

    for (let field of requiredFields) {
      if (!formData.get(field)) {
        setIsButtonDisabled(true);
        return;
      }
    }

    if (mostrarTextarea && !formData.get("duvida")) {
      setIsButtonDisabled(true);
      return;
    }

    setIsButtonDisabled(false);
  };

  useEffect(() => {
    const formElement = form.current;
    const inputs = formElement.querySelectorAll("input, select, textarea");

    inputs.forEach((input) => {
      input.addEventListener("input", checkFormCompletion);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", checkFormCompletion);
      });
    };
  }, [mostrarTextarea]);

  return (
    <div
      className={`${styles.form_container} d-flex flex-column align-items-center justify-content-center secondary-bg`}
    >
      <div id="contato" className="container" style={{ zIndex: 99 }}>
        <div className={styles.containerForm}>
          <div
            className="text-center col-md-12 uk-animation-slide-left-medium"
            data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
          >
            <h2 className="title two whiteColor mt-5">
              Vamos <span>começar?</span>
            </h2>
            <p className="paragraph whiteColor mb-5">
              Procurando por uma <span> solução completa em RH e software</span>?
              Com a Outserv, transforme desafios em oportunidades. Nossa
              expertise em consultoria Totvs e tecnologia de ponta atende
              clientes em todo o Brasil. Vamos conversar.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className={styles.formContent}>
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 100;"
            >
              <label
                className="whiteColor  w-100 labelText inputText"
                htmlFor="name"
              >
                Nome*
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Insira seu nome completo"
                  required
                />
              </label>
            </div>
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 150;"
            >
              <label
                className="whiteColor  w-100 labelText inputText"
                htmlFor="solucao"
              >
                Em qual solução você tem interesse?*
                <select
                  id="solucao"
                  name="solucao"
                  className="form-control"
                  onChange={handleSelectChange}
                  required
                >
                  <option hidden defaultValue>
                    -Selecione a solução-
                  </option>
                  <option value="Consultoria de ERP">Consultoria de ERP</option>
                  <option value="BPO em RH">BPO em RH</option>
                  <option value="Alocação de Profissionais">
                    Alocação de Profissionais
                  </option>
                  <option value="Outros">Outros</option>
                </select>
              </label>
            </div>
            {mostrarTextarea && (
              <div
                className="form-group col-md-12 uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 200;"
              >
                <label
                  className="whiteColor  w-100 labelText inputText"
                  htmlFor="duvida"
                >
                  Como podemos te ajudar?*
                  <textarea
                    className="form-control"
                    id="duvida"
                    name="duvida"
                    placeholder="Compartilhe suas dúvidas sobre nossos produtos aqui..."
                    required
                  />
                </label>
              </div>
            )}
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 250;"
            >
              <label
                className="whiteColor  w-100 labelText inputText"
                htmlFor="email"
              >
                Email corporativo*
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Ex: joaodasilva@gmail.com"
                  required
                />
              </label>
            </div>
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 300;"
            >
              <label
                className="whiteColor  w-100 labelText inputText"
                htmlFor="phone"
              >
                Telefone ou celular*
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  placeholder="(xx) xxxxx-xxxx"
                  required
                />
              </label>
            </div>
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 350;"
            >
              <label
                className="whiteColor  w-100 labelText inputText"
                htmlFor="site"
              >
                Site da empresa*
                <input
                  type="text"
                  className="form-control"
                  id="site"
                  name="site"
                  placeholder="Ex: www.sitedaempresa.com.br"
                  required
                />
              </label>
            </div>
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 400;"
            >
              <label
                className="whiteColor  w-100 labelText inputText"
                htmlFor="tamanho_empresa"
              >
                Qual o tamanho da empresa?*
                <select
                  id="tamanho_empresa"
                  name="tamanho_empresa"
                  className="form-control"
                  required
                >
                  <option hidden defaultValue>
                    -Selecione o tamanho da empresa-
                  </option>
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-250">51-250</option>
                  <option value="251-1K">251-1.000</option>
                  <option value="1K-5K">1.000-5.000</option>
                  <option value="5K-10K">5.000-10.000</option>
                  <option value="10K-50K">10.000-50.000</option>
                  <option value="50K-100K">50.000-100.000</option>
                  <option value="100K+">100.000+</option>
                  <option value="Não tenho empresa">Não tenho empresa</option>
                </select>
              </label>
            </div>

            <p
              className="paragraph textAcordion whiteColor col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 450;"
            >
              A Outserv utiliza as informações de contato que você nos fornece
              para enviar atualizações sobre nossos produtos e serviços. Você
              pode optar por não receber essas comunicações a qualquer momento.
              Consulte nossa{" "}
              <span>
                <Link
                  to={"/legal/politicas-de-privacidade"}
                  rel="noopener noreferrer"
                  className="whiteColor bold underline"
                >
                  Política de Privacidade
                </Link>
              </span>{" "}
              para mais detalhes.
            </p>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className="btn bold faleconosco form-group col-md-12 "
             
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
