import React from "react";
import FeatureCard from "../Cards/FeatureCard";

export default function Features({ list }) {
  return (
    <div className='bg-termsBg'>
      <div className='app-container text-center py-[100px]'>
        <h2 className='text-appblack100 text-4xl font-semibold title-bottom-line center-line mb-10'>
          FEATURES
        </h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {list.map((obj, i) => {
            return <FeatureCard {...obj} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
}
