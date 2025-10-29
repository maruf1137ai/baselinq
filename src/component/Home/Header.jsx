"use client";

import React from "react";
import Button from "../Button";
import Companies from "./companies";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Header = () => {
  return (
    <header className="relative min-h-screen overflow-hidden mt-[88px]">
      <div
        className="hero-bg flex justify-center"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}>
        {/* <img src="/images/hero-img.png" alt="" /> */}
        <div className="w-full">
          <DotLottieReact
            src="https://lottie.host/a2598697-513d-4928-96df-7cc22a1f854d/x90112SZCQ.lottie"
            loop
            autoplay
            // style={{ height: 310 }}
          />
        </div>
      </div>

      <section className="container mx-auto px-4">
        <div className="max-w-5xl">
          <h1 className="sm:text-5xl text-4xl lg:text-[64px] leading-tight font-normal mb-[25px]">
            The operational{" "}
            <span className="bg-gradient-to-r from-black via-primary to-primary bg-clip-text text-transparent">
              intelligence
            </span>{" "}
            platform for construction
          </h1>

          <p className="text-xl md:text-[22px] text-hero-text mb-12 max-w-4xl">
            Baseling unifies contracts, documents, and communications into one
            intelligent system that prevents disputes, eliminates delays, and
            accelerates delivery.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/login" title="Book a Demo" />
            <Button href="/login" title="Book a Demo" isLight={true} />
            {/* <Button size="lg" className="text-base px-8">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8">
              See AI in Action
            </Button> */}
          </div>
        </div>
      </section>

      <Companies />
    </header>
  );
};

export default Header;
