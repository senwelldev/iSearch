import React, { useEffect, useRef } from "react";

const CountUp = ({ start, end, duration }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            customCountUp(counterRef.current, start, end, duration);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(counterRef.current);

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [start, end, duration]);

  function customCountUp(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let currentValue = start;

    const timer = setInterval(() => {
      currentValue += increment;
      element.textContent = currentValue;

      if (currentValue === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  return (
    <h1 className="user-number" ref={counterRef}>
      0
    </h1>
  );
};

export default CountUp;