"use client";

import background from "@/public/background.jpg";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollToPlugin);

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subHeadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const heading = "colours";
  const splitHeading = heading.split("");
  const finalHeading = splitHeading.map((char, index) => (
    <span key={index} style={{ display: "inline-block" }}>
      {char}
    </span>
  ));

  useGSAP(() => {
    if (!headingRef.current) return;
    gsap.from(headingRef.current?.querySelectorAll("span"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
    });
  }, []);

  useGSAP(() => {
    if (!subHeadingRef.current) return;
    gsap.from(subHeadingRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
    });
  }, []);

  useGSAP(() => {
    if (!buttonRef.current) return;
    gsap.from(buttonRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 0.4,
    });
  }, []);

  return (
    <div
      id="hero-section"
      className="relative flex flex-col items-center justify-center w-full h-screen"
    >
      <Image
        src={background}
        alt="background"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 dark:text-gray-500"></div>

      <div className="absolute text-center z-2 flex flex-col justify-center items-center gap-8">
        <h1
          ref={headingRef}
          className="main-heading text-gray-200  text-5xl md:text-9xl  font-extrabold uppercase font-sans"
        >
          {finalHeading}
        </h1>
        <p
          ref={subHeadingRef}
          className="text-sm sm:text-lg text-gray-100 uppercase mt-4"
        >
          Discover multiple products through our website.
        </p>
        <button
          type="button"
          ref={buttonRef}
          className="cursor-pointer w-1/3 md:px-6 md:py-3 px-4 py-2 bg-gray-200 text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#landing-page", offsetY: 100 },
              duration: 1,
              ease: "power2.inOut",
            });
          }}
        >
          Explore
        </button>
      </div>
    </div>
  );
}
