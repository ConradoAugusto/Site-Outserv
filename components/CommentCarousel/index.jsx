import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CompanyComment } from "../CompanyComment";
import styles from "./style.module.scss";
import { Tag } from "../buttons/Tag";
import Fabio from "../../src/assets/comments/Fabio.webp";
import Guilherme from "../../src/assets/comments/Guilherme.webp";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

const comments = [
  {
    image: Fabio,
    content: `
    <strong>Parceria com confiança e dedicação</strong>
    Contratamos o serviço de outsourced de folha de pagamentos da Outserv e estamos extremamente satisfeitos. A parceria tem sido marcada por confiança, profissionalismo e, acima de tudo, pela dedicação.
    Esses fatores são decisivos para essa aliança, que já dura mais de uma década e que temos a certeza de que se estenderá ainda por muitos anos.
    A precisão e a eficiência na gestão da folha de pagamentos garantem que todos os processos sejam realizados de maneira impecável e dentro dos prazos estabelecidos. Isso nos proporciona uma tranquilidade porque sabemos que podemos contar com uma equipe dedicada.
      `,
    cliente: "Fábio Rogério Fornaro",
    cargo: "Gerente Generalista de Recursos Humanos - John Crane",
  },
  {
    image: Guilherme,
    content: `
    <strong>Atendimento ágil e comprometimento</strong>
    Firmar a parceria com a Outserv foi uma excelente escolha para o Grupo Indusparquet. Desde o início, fomos atendidos com rapidez e comprometimento, características que se destacam em todos os serviços prestados pela consultoria. A Outserv nos apresenta as melhores soluções para os nossos processos, o que tem sido fundamental para a nossa operação.
    Um dos pontos que mais nos impressiona é a versatilidade dos consultores da Outserv. Eles demonstram uma capacidade notável de adaptação e inovação, sempre prontos para enfrentar novos desafios e encontrar as soluções mais adequadas para as nossas necessidades específicas.
      `,
    cliente: "Guilherme Rodrigues Belini",
    cargo: "Gerente de Recursos Humanos - Grupo Indusparquet",
  },
];

const CommentCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section
      className={`${styles.sectionComments} uk-animation-slide-left-medium`}
      uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: true; delay: 50;"
    >
      <div className={`${styles.containerSlide} container`}>
        <div className="d-flex justify-content-center mb-3">
          <Tag content={"O QUE DIZEM OS CLIENTES"} />
        </div>
        <Slider {...settings}>
          {comments.map((comment, index) => (
            <div key={index}>
              <CompanyComment
                image={comment.image}
                content={comment.content}
                cliente={comment.cliente}
                cargo={comment.cargo}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.nextArrow}`}
      onClick={onClick}
    >
      <IconChevronRight size="34" stroke={2} color={"#118a6b"} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.prevArrow}`}
      onClick={onClick}
    >
      <IconChevronLeft size="34" stroke={2} color={"#118a6b"} />
    </div>
  );
};

export default CommentCarousel;
