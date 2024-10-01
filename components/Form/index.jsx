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
    const requiredFields = ["name", "email", "phone", "solucao"];

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
        "service_vghcoid",
        "template_000",
        form.current,
        "jus4TJ_nSmrZeP4MW"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Mensagem enviada com sucesso!",
            showConfirmButton: false,
            timer: 1500,
          }).then(() => {
            Swal.fire({
              icon: "info",
              title: "Você será redirecionado para o WhatsApp de um consultor.",
              text: "Aguarde...",
              showConfirmButton: false,
              timer: 3000,
            }).then(() => {
              const url =
                "https://api.whatsapp.com/send?phone=5519971455802&text=Ol%C3%A1,%20vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os.";
              const newWindow = window.open(url, "_blank");

              if (newWindow) {
                newWindow.focus();
              } else {
                Swal.fire({
                  title: "Pop-up bloqueado!",
                  text: "Habilite pop-ups ou clique no botão abaixo para acessar o WhatsApp.",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonText: "Ir para WhatsApp",
                }).then((result) => {
                  if (result.isConfirmed) {
                    window.location.href = url;
                  }
                });
              }
            });
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
    const requiredFields = ["name", "email", "phone", "solucao"];

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
            data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 50;"
          >
            <h2 className="title two whiteColor mt-5 mb-4">
              Vamos <span className="textDark">começar?</span>
            </h2>
            <p className="paragraph whiteColor mb-5">
              Insira suas informações abaixo para conversar com um consultor no
              WhatsApp.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className={styles.formContent}>
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 100;"
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
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 150;"
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
                  <option hidden value="">
                    -Selecione a solução-
                  </option>
                  <option value="Sistema de gestão de RH">
                    Sistema de gestão de RH
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
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 200;"
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
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 250;"
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
                  placeholder="seunome@suaempresa.com.br"
                  required
                />
              </label>
            </div>
            <div
              className="form-group col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 300;"
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

            <p
              className="paragraph textAcordion whiteColor col-md-12 uk-animation-slide-left-medium"
              data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false; delay: 450;"
            >
              A Outserv utiliza as informações de contato que você nos fornece
              para enviar atualizações sobre nossos produtos e serviços. Você
              pode optar por não receber essas comunicações a qualquer momento.
              Consulte nossa{" "}
              <span>
                <Link
                  to={"/legal/politicas-de-privacidade"}
                  rel="noopener noreferrer"
                  className="textDark"
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
