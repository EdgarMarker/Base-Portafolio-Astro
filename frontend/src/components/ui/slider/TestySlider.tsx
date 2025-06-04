// @ts-nocheck
import "@splidejs/react-splide/css";
import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import CustomImg from "../img/CustomImg";
import CustomPortableText from "../portableText/CustomPortableText";
import "../../../styles/testimonials.css";

export interface Props {
  data: {
    arrRef_testimonials: {
      img_stars: { media: { url: string } }[];
      block_info: any;
      string_name: string;
    }[];
  };
}
const TestySlider = ({ data }) => {
  const [optionScreen, setOptionScreen] = React.useState({
    perPage: 3,
    type: "loop",
    gap: "5%",
    perMove: 1,
    pagination: true,
  });
  useEffect(() => {
    const updateOptions = () => {
      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const isTablet = window.matchMedia("(min-width: 768px)").matches;
      setOptionScreen((prevOptions) => ({
        ...prevOptions,
        perPage: isDesktop ? 3 : isTablet ? 2 : 1,
      }));
    };
    updateOptions();
    window.addEventListener("resize", updateOptions);
    return () => {
      window.removeEventListener("resize", updateOptions);
    };
  }, []);
  return (
    <Splide className="testy__wrapper" options={optionScreen}>
      {data.arrRef_testimonials.map((item, idx) => (
        <SplideSlide key={idx}>
          <div className="testy__card radius__24">
            <div className="testy__cardHead">
              <div className="testy__stars">
                <div style={{width: `${item.grade}%`}}></div>
              </div>
              <CustomPortableText hasImg={false} data={item.block_info} />
            </div>
            <p className="testy__cardName">{item.string_name}</p>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default TestySlider;
