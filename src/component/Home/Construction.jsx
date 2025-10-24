import React from "react";

const items = [
  {
    id: 1,
    title: "Main Contractors",
    position: "Deliver on programme",
    image: "/images/construction-img-1.png",
    profile_img: "/images/construction-overlay.png",
    description:
      "Keep projects on track with intelligent workflow management, automated compliance checking, and real-time risk identification.",
    features: [
      "Reduce RFI cycle times by 70%",
      "Eliminate superseded drawing issues",
      "Automate compliance documentation",
      "Prevent costly delays and disputes",
    ],
  },
];

const Construction = () => {
  return (
    <div className="bg-[rgba(28,28,30,0.06)]">
      <div className="container mx-auto py-10 lg:py-14">
        <h1 className="text-[64px] leading-tight font-normal mb-[25px]">
          Built for Every Role in Construction
        </h1>
        <p className="text-[22px] text-hero-text max-w-4xl text-[#6A6A6A]">
          Tailored intelligence for every stakeholder in the construction
          process
        </p>

        <div className="items grid grid-cols-1 gap-9 mt-28">
          {items.map((item) => {
            const {
              id,
              title,
              description,
              features,
              image,
              position,
              profile_img,
            } = item;
            return (
              <div
                key={id}
                className="item py-6 px-[30px] bg-[#F9FAFB] border border-dashed border-[rgba(0,0,0,0.39)] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="image-box w-full">
                  <img src={image} alt="" className="w-full" />
                </div>
                <div className="">
                  <div className="flex items-center gap-3.5 mb-[27px]">
                    <div className="icon-box flex justify-center h-12 w-12">
                      <img
                        src={profile_img}
                        alt={title}
                        className="h-full w-full"
                      />
                    </div>
                    <div className="">
                      <h3 className="text-[22px] text-[#0D0F11]">{title}</h3>
                      <p className="text-base text-[#2F80ED]">{position}</p>
                    </div>
                  </div>

                  <p className="text-base text-[#0D0F11] mb-7">{description}</p>
                  <ul className="flex flex-col gap-2">
                    {features.map((feature, i) => (
                      <li
                        className="text-[16px] flex items-center gap-3 text-[#0D0F11]"
                        key={i}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] flex-shrink-0 text-[#0D0F11]"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Construction;
