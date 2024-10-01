import React, { useEffect, useState, useRef } from "react";
import { useCountUp } from "react-countup";

export const NumbersCounters = ({
  text,
  number,
  delay,
  delayAnimation,
  className,
}) => {
  const countUpRef = useRef(null);
  const observerRef = useRef(null);
  const containerRef = useRef(null);

  const { start, pause, reset } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: number,
    delay: delay,
    duration: 2,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    };

    observerRef.current = new IntersectionObserver(handleIntersection);
    if (containerRef.current) {
      observerRef.current.observe(containerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      start();
    } else {
      reset();
    }
  }, [isVisible, reset, start]);

  return (
    <div
      className={`uk-animation-slide-left-medium m-auto align-items-center justify-content-center d-flex flex-column numbers-counters ${
        isVisible ? "animated" : ""
      }`}
      uk-scrollspy="cls: uk-animation-slide-left-medium; repeat: false;"
      style={{ animationDelay: `${delayAnimation}ms` }}
      ref={containerRef}
    >
      <h3 ref={countUpRef} className={className}></h3>
      <p className="textNumbers">{text}</p>
    </div>
  );
};
