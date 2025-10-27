import { Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonial = () => {
  return (
    <div>
      <div className="container mx-auto py-10 lg:py-14">
        <div className="py-20 lg:py-20 px-8 lg:px-14">
          <div className="text-center text-2xl sm:text-4xl lg:text-[46px] leading-[41px] lg:leading-[51px] aeonoik-fono mb-14">
            {`"Baselinq transformed our project delivery. We went from weeks of RFI
            delays to real-time responses with complete contract compliance.
            It's like having a legal expert embedded in every workflow."`}
          </div>
          <div className="profile flex flex-col items-center">
            <div className="img mb-4">
              <Image
                src="/images/testimnial-img.png"
                alt=""
                height={58}
                width={58}
                className="rounded-full"
              />
            </div>
            <div className="name aeonoik-fono text-2xl mb-1">David Ade</div>
            <div className="position aeonoik-fono text-2xl">CEO of remoo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
