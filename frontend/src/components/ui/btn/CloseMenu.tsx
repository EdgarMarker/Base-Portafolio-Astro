import React from "react";
import { callMenu, useGSAP } from "../../../_lib/gsap/base";

const CloseMenu = () => {
  const { contextSafe } = useGSAP();

  const handleClose = contextSafe(() => {
    callMenu({ open: false });
  });
  return <div className="btn" onClick={() => handleClose()}>CloseMenu</div>;
};

export default CloseMenu;
