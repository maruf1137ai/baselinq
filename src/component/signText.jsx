import Image from "next/image";
import React from "react";

const SignText = () => {
  return (
    <section className="bg-black-dark text-white-light relative px-1">
      <div className="img-box w-full">
        <img src="/images/signText-img.png" alt="" className="w-full h-full" />
      </div>
      <img
        src="/images/shadow.png"
        alt=""
        className="absolute bottom-0 z-1 max-h-[255px] w-full left-1/2 h-full -translate-x-1/2"
      />
    </section>
  );
};

export default SignText;
