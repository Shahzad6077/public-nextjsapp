import React from "react";

export default function FeatureCard({ title, imgSrc, desc }) {
  return (
    <div className="flex justify-center flex-col w-[350px]">
      <img
        src={imgSrc}
        alt={"features" + title}
        width={64}
        className=" featureSvg mx-auto"
      />
      <p className="text-appblack100 font-semibold mt-4">{title}</p>
      <h1 className="text-appOrange text-5xl -mt-10">_</h1>
      <p className="text-termsP text-sm mt-6">{desc}</p>
    </div>
  );
}
