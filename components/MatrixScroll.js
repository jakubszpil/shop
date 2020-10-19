import React, { useRef, useEffect } from "react";

const MatrixScroll = ({ children }) => {
  const container = useRef();

  useEffect(() => {
    requestAnimationFrame(() => matrixScrolling());
  }, []);

  const matrixConfig = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const matrixScrolling = () => {
    matrixConfig.current = window.scrollY;
    matrixConfig.previous += (matrixConfig.current - matrixConfig.previous) * matrixConfig.ease;
    matrixConfig.rounded = Math.round(matrixConfig.previous);

    const diff = matrixConfig.current - matrixConfig.rounded;
    const acc = diff / window.innerWidth;
    const vel = +acc;
    const matrix = vel * 100;

    container.current.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${matrix}, 0, 1)`;
    requestAnimationFrame(() => matrixScrolling());
  };
  return <div ref={container}>{children}</div>;
};

export default MatrixScroll;
