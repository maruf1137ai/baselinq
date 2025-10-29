"use client";

import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const items = [
  {
    id: 1,
    image: "/images/intelligence-1.png",
  },
  {
    id: 2,
    image: "/images/intelligence-2.png",
  },
  {
    id: 3,
    image: "/images/intelligence-3.png",
  },
];

const Intelligence = () => {
  return (
    <div className="mt-16 lg:mt-24">
      <h3 className="text-[22px] text-[#0D0F11]">See Intelligence in Action</h3>

      <div className="w-full">
        <DotLottieReact
          src="https://lottie.host/e1ab05bc-254e-408f-9974-d76c735b4842/nXnJpAk6lS.lottie"
          loop
          autoplay
        />
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
        {items.map(({ id, image }) => (
          <div className="item w-full" key={id}>
            <img src={image} alt="" className="w-full" />
          </div>
        ))}
      </div> */}
    </div>
  );
};
// intelligence
export default Intelligence;
