import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export { useGSAP };

//* ScrollSmoother
export const tweenSmoother = () => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  });
};

//* Calling Menu
export const callMenu = ({ open }) => {
  const mobileActive = document.querySelector(".mobileActive");
  const mobile = document.querySelector(".mobile");

  const tl = gsap.timeline();
  tl.to(mobile, {
    display: open ? "none" : "flex",
    top: open ? "-100%" : "0%",
  });
  tl.to(mobileActive, {
    display: open ? "flex" : "none",
    right: open ? "0%" : "-100%",
    duration: 0.25,
  });
};
