"use client";

import background from "@/public/background.jpg";
import Image from "next/image";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

export default function HeroSection() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen">
      <Image src={background} alt="background" fill className="object-cover" />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 dark:text-gray-500"></div>

      <div className="absolute text-center z-10 flex flex-col justify-center items-center gap-8">
        <h1 className="text-gray-200  text-5xl md:text-7xl font-extrabold uppercase font-sans">
          colours
        </h1>
        <p className="text-lg text-gray-200 mt-4">
          Discover multiple products through our website.
        </p>
        <button
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
