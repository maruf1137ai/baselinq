import React from "react";
import Button from "../Button";
import Link from "next/link";

const Newseleter = () => {
  return (
    <div className="bg-[url('/images/news-img.png')] bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
        <p className="text-base text-black flex items-center justify-center gap-2 mb-6">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6.6243 10.3334C6.56478 10.1026 6.44453 9.89209 6.27605 9.72361C6.10757 9.55513 5.89702 9.43488 5.6663 9.37536L1.5763 8.32069C1.50652 8.30088 1.44511 8.25886 1.40138 8.20099C1.35765 8.14312 1.33398 8.07256 1.33398 8.00002C1.33398 7.92749 1.35765 7.85693 1.40138 7.79906C1.44511 7.74119 1.50652 7.69916 1.5763 7.67936L5.6663 6.62402C5.89693 6.56456 6.10743 6.44441 6.2759 6.27605C6.44438 6.10769 6.56468 5.89728 6.6243 5.66669L7.67897 1.57669C7.69857 1.50664 7.74056 1.44492 7.79851 1.40095C7.85647 1.35699 7.92722 1.33319 7.99997 1.33319C8.07271 1.33319 8.14346 1.35699 8.20142 1.40095C8.25938 1.44492 8.30136 1.50664 8.32097 1.57669L9.37497 5.66669C9.43449 5.8974 9.55474 6.10795 9.72322 6.27644C9.8917 6.44492 10.1023 6.56517 10.333 6.62469L14.423 7.67869C14.4933 7.69809 14.5553 7.74003 14.5995 7.79807C14.6437 7.85612 14.6677 7.92706 14.6677 8.00002C14.6677 8.07298 14.6437 8.14393 14.5995 8.20197C14.5553 8.26002 14.4933 8.30196 14.423 8.32136L10.333 9.37536C10.1023 9.43488 9.8917 9.55513 9.72322 9.72361C9.55474 9.89209 9.43449 10.1026 9.37497 10.3334L8.3203 14.4234C8.3007 14.4934 8.25871 14.5551 8.20075 14.5991C8.1428 14.6431 8.07205 14.6669 7.9993 14.6669C7.92656 14.6669 7.85581 14.6431 7.79785 14.5991C7.73989 14.5551 7.69791 14.4934 7.6783 14.4234L6.6243 10.3334Z"
              stroke="#000"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.333 2V4.66667"
              stroke="#000"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.6667 3.33331H12"
              stroke="#000"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.66699 11.3333V12.6666"
              stroke="#000"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.33333 12H2"
              stroke="#000"
              strokeWidth="1.33333"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Ready to Transform Your Projects?
        </p>
        <h1 className="sm:text-5xl text-4xl lg:text-[64px] leading-tight font-normal mb-[25px]">
          Get started with Baselinq today
        </h1>
        <p className="text-xl md:text-[22px] text-hero-text max-w-4xl text-[#6A6A6A]">
          Join leading construction companies already using AI to prevent
          disputes, eliminate delays, and accelerate project delivery.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 mt-[25px]">
          <Button href="/login" title="Book a Demo" />
          <Link
            className={`justify-center items-center flex py-4 px-5 text-base rounded-[3px] gap-1.5 bg-black text-white`}
            href="#">
            <span>See AI in Action</span>
            <span className={`h-full w-[1px]  flex bg-black `}></span>
            <span className=" ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 1024 1024">
                <path
                  fill="currentColor"
                  d="M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L764.736 512L452.864 192a30.59 30.59 0 0 1 0-42.688m-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0a30.59 30.59 0 0 1 0-42.752L508.736 512L196.864 192a30.59 30.59 0 0 1 0-42.688"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Newseleter;
