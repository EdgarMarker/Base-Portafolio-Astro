import React, { useRef } from "react";
import { tweenSmoother, useGSAP } from "./base";

interface Props {
  children: React.ReactNode;
}

const ScrollSmootherProvider = ({ children }: Props) => {
  const wrapper = useRef(null);
  useGSAP(() => {
    tweenSmoother();
  }, [wrapper]);
  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default ScrollSmootherProvider;
