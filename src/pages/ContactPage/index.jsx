import { useRef, useState, useEffect } from "react";
import PortalLight from "../../assets/portal-light.webp";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import QRCODE from "../../assets/QRCODE.svg";

export const ContactPage = () => {
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
    <section className={styles.sectionForm}>
      <div className={styles.container}>
        <div
          className={`${styles.portal} uk-scrollspy-inview uk-animation-slide-right-medium`}
          uk-scrollspy="cls: uk-animation-slide-right-medium; repeat: true; delay: 100;"
        >
          <img src={PortalLight} alt="" />
        </div>
        <div
          className={`${styles.formContainer} d-flex flex-column align-items-center justify-content-center secondary-bg`}
        >
          <Link className={`${styles.close}`} to={"/"}>
            <strong>X</strong>
          </Link>
          <div className={styles.form}>
            <div className="text-center">
              <h2
                className="title two whiteColor w-100 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 200;"
              >
                Vamos <span>começar?</span>
              </h2>
              <p
                className="paragraph whiteColor w-100 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 300;"
              >
                Procurando por uma
                <span>solução completa em RH e software</span>? Com a Outserv,
                transforme desafios em oportunidades. Nossa expertise em
                consultoria Totvs e tecnologia de ponta atende clientes em todo
                o Brasil. Vamos conversar.
              </p>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className={styles.formContent}
            >
              <div
                className="form-group col-md-12 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 400;"
              >
                <label
                  className="whiteColor w-100 labelText inputText"
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
                className="form-group col-md-12 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 500;"
              >
                <label
                  className="whiteColor w-100 labelText inputText"
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
                    <option value="Consultoria de ERP">
                      Consultoria de ERP
                    </option>
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
                  className="form-group col-md-12 uk-scrollspy-inview uk-animation-slide-left-medium"
                  data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 600;"
                >
                  <label
                    className="whiteColor w-100 labelText inputText"
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
                className="form-group col-md-12 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 700;"
              >
                <label
                  className="whiteColor w-100 labelText inputText"
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
                className="form-group col-md-12 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 800;"
              >
                <label
                  className="whiteColor w-100 labelText inputText"
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
                className="form-group col-md-12 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 1400;"
              >
                <label
                  className="whiteColor w-100 labelText inputText"
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
                className="form-group col-md-12 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 1500;"
              >
                <label
                  className="whiteColor w-100 labelText inputText"
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
                className="paragraph textAcordion whiteColor w-100 uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 500;"
              >
                A Outserv utiliza as informações de contato que você nos fornece
                para enviar atualizações sobre nossos produtos e serviços. Você
                pode optar por não receber essas comunicações a qualquer
                momento. Consulte nossa{" "}
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
                className="btn bold faleconosco text-white uk-scrollspy-inview uk-animation-slide-left-medium"
                data-uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 500;"
              >
                {isLoading ? "Enviando..." : "Enviar"}
              </button>
            </form>
          </div>
          <div className={styles.qrcode}>
            <img src={QRCODE} alt="QR Code" />
            <div className={styles.textQrCode}>
              <h3 className="paragraph acordion">
                Se preferir escaneie o QR Code
              </h3>
              <p className="paragraph labelText">
                Você será redirecionado ao contato de um consultor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
