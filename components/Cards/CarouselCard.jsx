import React from "react";

export default function CarouselCard({ imgSrc, title }) {
  return (
    <div>
      <img
        src={imgSrc}
        alt={title}
        width="340px"
        height="250px"
        className="rounded-3xl"
      />
      <p>{title}</p>
    </div>
  );
}
