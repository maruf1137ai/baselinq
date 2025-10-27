import React from "react";

const items = [
  {
    id: 1,
    title: "<3 days",
    text: "RFI cycle time",
  },
  {
    id: 2,
    title: "≥95%",
    text: "acknowledgements in 24h",
  },
  {
    id: 3,
    title: "100%",
    text: "evidence completeness",
  },
];

const Record = () => {
  return (
    <div className="bg-[rgba(28,28,30,0.06)]">
      <div className="container mx-auto py-10 lg:py-14 px-4">
        <p className="title text-2xl lg:text-[32px] text-black mb-8 lg:mb-[57px]">
          For the Record
        </p>

        <div className="items grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ id, title, text }) => {
            return (
              <div className="item border-l-4 border-primary pl-7" key={id}>
                <div className="title sm:text-4xl text-3xl lg:text-5xl lg:text-[56px] mb-3">
                  {title}
                </div>
                <div className="text text-xl lg:text-2xl text-black">
                  {text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Record;
