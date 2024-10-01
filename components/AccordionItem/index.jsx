import React, { useState, useEffect } from "react";
import ProgressBar from "../ProgressBar";
import styles from "./style.module.scss";

const AccordionItem = ({
  icon,
  id,
  header,
  body,
  onClick,
  isOpen,
  className,
  data,
}) => {
  const [progress, setProgress] = useState(0);
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1000);

  const intervalTime = 10000;
  const progressInterval = 100;

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1000);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setProgress(0);
  }, [id]);

  useEffect(() => {
    const totalIntervals = intervalTime / progressInterval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / totalIntervals;
        if (newProgress >= 100) {
          return 0;
        }
        return newProgress;
      });
    }, progressInterval);

    return () => clearInterval(timer);
  }, [intervalTime, progressInterval, id]);

  return (
    <div
      className={`accordion-item mb-3 uk-animation-slide-left-medium p-3 ${
        isOpen ? styles.active : ""
      }, ${isOpen ? styles.accordionItem : ""}`}
      data-uk-scrollspy={`${data} cls: uk-animation-slide-left-medium; repeat: false;`}
    >
      <div className={`${styles.accordion} d-flex align-items-center gap-2`}>
        <span>{icon}</span>
        <h2 className="accordion-header title five" id={`heading${id}`}>
          <a
            className={`accordion-button ${isOpen ? "" : "collapsed"}`}
            type="button"
            onClick={() => {
              onClick();
              setProgress(0);
            }}
            {...(isScreenSmall
              ? {}
              : {
                  "aria-expanded": isOpen,
                  "aria-controls": `collapse${id}`,
                })}
          >
            {header}
          </a>
        </h2>
      </div>
      <div
        id={`collapse${id}`}
        className={`${className} accordion-collapse collapse ${
          isOpen ? "show" : ""
        }`}
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionDiv"
      >
        <div className="accordion-body paragraph textAcordion">
          {body}
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
