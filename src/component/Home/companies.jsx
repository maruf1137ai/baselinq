import Image from "next/image";
import React from "react";

const images = [
  { id: 1, image: "/images/company-1.png" },
  { id: 2, image: "/images/company-2.png" },
  { id: 3, image: "/images/company-3.png" },
  { id: 4, image: "/images/company-4.png" },
  { id: 5, image: "/images/company-5.png" },
  { id: 6, image: "/images/company-6.png" },
  { id: 7, image: "/images/company-7.png" },
];

const Companies = () => {
  return (
    <div className="container mx-auto px-4 py-14 lg:py-20">
      <p className="title text-sm text-black-light mb-4">
        Trusted by leading construction standards
      </p>
      <div className="flex items-center gap-10 justify-between flex-wrap">
        {images.map(({ id, image }) => {
          return (
            <div className="item h-[28px]" key={id}>
              <Image src={image} alt="" width={100} height={100} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Companies;
