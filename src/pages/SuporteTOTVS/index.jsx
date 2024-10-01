import { DefaultTemplate } from "../../../components/DefaultTemplate";
import styles from "./style.module.scss";
import smallerAndGraeter from "../../assets/smallerAndGraeter.webp";
import outservTeam from "../../assets/consultor.jpg";
import { NumbersCounters } from "../../../components/NumbersCounters";
import CommentCarousel from "../../../components/CommentCarousel";
import { Tag } from "../../../components/buttons/Tag";
import { OffCanvasContato } from "../../../components/OffCanvasContato";
import logo from "../../assets/logoOutserv1.webp";
import { FormVendas } from "../../../components/FormVendas";

export const SuporteTOTVS = () => {
  return (
    <DefaultTemplate>
      <OffCanvasContato />
      <section id="top" className={`${styles.heroSection}`}>
        <div
          className={`${styles.heroContainer} container  d-flex flex-row  `}
        >
          <div
            className={`${styles.heroText} uk-scrollspy-inview `}
            uk-scrollspy="cls: ; repeat: false; delay: 100;"
          >
            <Tag className="secondary" content="Consultoria" />
            <h1 className="title one text-white mt-3">
              Suporte TOTVS RM Outserv
            </h1>
            <p className="paragraph text-white">
              Flexibilidade, agilidade e experiência
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionMission}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.mission}>
              <div className={styles.textBussiness}>
                <h4 className=" title sobre gray-8">
                  <span className="textDark">Foque na estratégia</span> e deixe
                  o suporte operacional conosco!
                </h4>
                <p className=" paragraph textHeroAbout gray-8">
                  Oferecemos atendimento com soluções rápidas, práticas e
                  eficientes no universo TOTVS RM. Aqui você encontra
                  transparência, flexibilidade e o nosso diferencial, a gestão
                  total sobre suas requisições através do GSDC - Gestão Service
                  Desk do Cliente. Com o GSDC toda a gestão de chamados da sua
                  equipe estará na palma da sua mão, sendo possível a sua
                  validação e visualização do progresso em tempo real.
                </p>
              </div>
              <div className={styles.commitment}>
                <div
                  className={`${styles.imgHeader} "`}
                >
                  <img
                    className={styles.smallerAndGraeter}
                    src={smallerAndGraeter}
                    alt=""
                  />
                  <div className={styles.outservTeam}>
                    <img src={outservTeam} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.services}>
              <h4 className=" title sobre gray-8 mb-5 text-center">
                Serviços Personalizados com Cobrança Justa e Transparente
              </h4>
              <div className={styles.servicesText}>
                <div>
                  <p className=" paragraph textHeroAbout gray-8">
                    Acreditamos que a prestação de serviço tem 3 pilares
                    fundamentais: Flexibilidade, Transparência e Serviço de
                    Qualidade.
                    <p className="paragraph ">
                      Por isso, embasados nos 3 pilares, criamos um modelo
                      promocional de cobrança flexível, sem a imposição de
                      quantidade mínima de chamados, feito de forma justa,
                      eficiente e personalizada. Na Outserv, cada projeto é
                      único, e nossa abordagem reflete isso, focando no que
                      realmente importa!
                    </p>
                  </p>
                </div>

                <ul className="gray-8">
                  <li className="paragraph li">
                    <span className="paragraph gray-9 li bold">
                      Flexibilidade Total:
                    </span>{" "}
                    Cada tarefa ou projeto é cuidadosamente avaliado e tudo é
                    feito sob medida. Não exigimos quantidade mínima de horas
                    contratadas. Nosso compromisso é garantir que você tenha a
                    melhor experiencia e consiga evoluir e automatizar cada vez
                    mais seus processos!{" "}
                  </li>
                  <br />
                  <li className="paragraph li">
                    <span className="paragraph li bold gray-9">
                      {" "}
                      Transparência Absoluta:
                    </span>{" "}
                    Desde o primeiro contato, você tem clareza sobre como será
                    feita a cobrança, garantindo que você tenha exatamente o que
                    contratou. Utilizamos uma metodologia clara para mensurar o
                    trabalho necessário e manter você informado sobre cada etapa
                    do processo. Nossos serviços incluem validação documental e
                    homologação assistida, através de práticas claras e
                    descomplicadas.
                  </li>
                  <br />
                  <li className="paragraph li">
                    <span className="paragraph li bold gray-9">
                      {" "}
                      Serviços de Qualidade:
                    </span>{" "}
                    Contamos com profissionais capacitados, experientes no
                    universo TOTVS, advindos de setores de gestão e RH,
                    garantindo a empatia necessária para atuar em cada processo
                    com o cliente, estabelecendo grande organização e precisão
                    de prazos e expectativas.{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className={`${styles.sectionOutserv} container  gray-8`}>
          <div>
            <img src={logo} className={styles.logo} alt="" />
          </div>
          <p className="paragraph">
            Estamos há mais de 13 anos atuando no mercado, oferecendo
            consultoria e suporte personalizado em soluções TOTVS RM, além de
            atuarmos também em soluções para automatizar e desburocratizar o RH
            e afins, via softwares, portais, APIS, integrações e muito mais
            dentro do universo TOTVS RM e Protheus.
          </p>
          <p className="paragraph">
            Contamos com analistas de suporte altamente especializados, além de
            contar com profissionais de gestão, comercial e coordenação, para
            cada etapa da sua experiência com os nossos serviços e produtos.
          </p>
        </div>
      </section>

      <div className="mt-5">
        <FormVendas />
      </div>

      <section className={`${styles.sectionAbout} `}>
        <div className={`${styles.container} container `}>
          <div className={styles.aboutHeader}>
            <div>
              <h2 className="title one ">
                Nossos <span className="textLight">números</span>
              </h2>
            </div>
            <div className="">
              <p className="paragraph text-center">
                Presente em todo o Brasil, a Outserv oferece soluções de RH e
                software personalizadas para o seu negócio. Descubra como
                podemos impulsionar seu crescimento, onde quer que você esteja.
              </p>
            </div>
          </div>

          <div className={styles.aboutNumbers}>
            <div className={styles.numbers}>
              <NumbersCounters
                text={"Quantidade de clientes atendidos"}
                number={150}
                delayAnimation={50}
                delay={0.1}
                className={"numberAbout"}
              />

              <NumbersCounters
                text={"Número de vidas processadas"}
                number={20000}
                delayAnimation={70}
                delay={0.2}
                className={"numberAbout"}
              />

              <NumbersCounters
                text={"Quantidade de projetos realizados"}
                number={800}
                delayAnimation={90}
                delay={0.3}
                className={"numberAbout"}
              />
            </div>
          </div>
        </div>
      </section>

      <CommentCarousel />
      <br />
      <br />
    </DefaultTemplate>
  );
};
