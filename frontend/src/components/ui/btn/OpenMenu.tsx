import React from "react";
import { callMenu, useGSAP } from "../../../_lib/gsap/base";

const SVG = () => {
  return (
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      id="menu"
      data-name="Flat Line"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-line"
    >
      <path
        id="primary"
        d="M3,12H21M9,18H21M3,6H15"
        style={{
          fill: "none",
          stroke: "rgb(0, 0, 0)",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 2,
        }}
      />
    </svg>
  );
};
const OpenMenu = () => {
  const { contextSafe } = useGSAP();

  const handleOpen = contextSafe(() => {
    callMenu({ open: true });
  });
  return (
    <div className="btn btn__openMenu" onClick={() => handleOpen()}>
      <SVG />
    </div>
  );
};

export default OpenMenu;
