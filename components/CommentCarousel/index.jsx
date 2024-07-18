import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CompanyComment } from "../CompanyComment";
import styles from "./style.module.scss";
import { Tag } from "../buttons/Tag";
import madero from "../../src/assets/logos/madero.webp";
import { IconChevronLeft,IconChevronRight } from '@tabler/icons-react';


const comments = [
  {
    image: madero,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolores similique eius inventore expedita tenetur. Ea blanditiis, aut laudantium tenetur, magni voluptatibus qui voluptas, eos at incidunt eaque! Molestiae, laudantium!",
    cliente: "JBS",
    cargo: "Gerente de RH - JBS",
  },
  {
    image: "https://touc.com.br/assets/img/cta.png",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolores similique eius inventore expedita tenetur. Ea blanditiis, aut laudantium tenetur, magni voluptatibus qui voluptas, eos at incidunt eaque! Molestiae, laudantium!",
    cliente: "Pedro Afonso",
    cargo: "CEO - TOUC",
  },
];

const CommentCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
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
