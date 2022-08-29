import React, { useRef } from "react";
import Slider from "react-slick";
import CarouselCard from "../Cards/CarouselCard";

const settings = {
  dots: false,
  infinite: true,
  variableWidth: true,
  arrows: false,
  autoplaySpeed: 3500,
  autoplay: true,
  speed: 1500,
};

export default function Carousel({ list }) {
  const sliderRef = useRef();

  return (
    <div className="bg-termsBg h-[350px] overflow-hidden">
      <div className="app-container">
        <div className="px-10 pt-[50px]">
          <Slider {...settings} ref={sliderRef}>
            {list.map((obj, i) => {
              return <CarouselCard key={i} {...obj} />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
