import styles from "./style.module.scss";

const AccordionItemSM = ({ header, body, className }) => {
  return (
    <div
      className={`accordion-item mb-3 uk-animation-slide-left-mediu`}
      data-uk-scrollspy={`cls: uk-animation-slide-left-medium; repeat: false;`}
    >
      <div className={`${styles.accordion} d-flex align-items-center gap-2`}>
        <h2 className="mt-4 title five">
          <a href="#" tabindex="0">
            {header}
          </a>
        </h2>
      </div>
      <div className={`${className} accordion-collapse collapse `}>
        <div className=" paragraph textAcordion">{body}</div>
      </div>
    </div>
  );
};

export default AccordionItemSM;
