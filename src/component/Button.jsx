import Link from "next/link";
import React from "react";

const Button = ({ href, title, isLight }) => {
  return (
    <Link
      className={`justify-center items-center flex py-4 px-5 text-base rounded-[3px] gap-1.5 ${
        isLight ? "bg-white text-black" : "bg-primary text-white"
      }`}
      href={href}>
      <span>{title}</span>
      <span
        className={`h-full w-[1px]  flex ${
          isLight ? "bg-black" : "bg-white"
        }`}></span>
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
  );
};

export default Button;
