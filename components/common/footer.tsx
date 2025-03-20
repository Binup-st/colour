"use client";

import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import NavLink from "./nav-link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:gap-20 lg:px-52 pt-10 pb-20 border-t border-gray-500">
        <div
          className="flex whitespace-nowrap self-center font-sans cursor-pointer"
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#hero-section", offsetY: 100 },
              duration: 1,
              ease: "power2.inOut",
            });
          }}
        >
          <h1 className="text-5xl text-black dark:text-gray-200  font-bold">
            colours
          </h1>
        </div>
        <div className="text-white flex flex-col gap-4 mt-6 sm:mt-0">
          <NavLink href="https://www.instagram.com/binup_ch/">
            <div className="flex items-center gap-2">
              <FaInstagram className="w-6 h-6 dark:text-white cursor-pointer" />
              <p className="text-sm hover:text-black dark:text-white dark:hover:text-gray-200 cursor-pointer">
                Instagram
              </p>
            </div>
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/binup-chaudhary-4b2161308/">
            <div className="flex items-center gap-2">
              <FaLinkedin className="w-6 h-6 dark:text-white hover:text-white cursor-pointer" />
              <p className="text-sm hover:text-black dark:text-white dark:hover:text-gray-200 cursor-pointer">
                Linkedin
              </p>
            </div>
          </NavLink>
          <NavLink href="https://github.com/Binup-st">
            <div className="flex items-center gap-2">
              <FaGithub className="w-6 h-6 dark:text-white hover:text-white cursor-pointer" />
              <p className="text-sm hover:text-black dark:text-white dark:hover:text-gray-200 cursor-pointer">
                Github
              </p>
            </div>
          </NavLink>
          <NavLink href="https://www.facebook.com/profile.php?id=100007855427336">
            <div className="flex items-center gap-2">
              <FaFacebook className="w-6 h-6 dark:text-white hover:text-white cursor-pointer" />
              <p className="text-sm hover:text-black dark:text-white dark:hover:text-gray-200 cursor-pointer">
                Facebook
              </p>
            </div>
          </NavLink>
        </div>
      </div>
      <div className="border-t border-gray-700" />
      <p className="container w-2/3 mx-auto flex justify-center items-center py-5">
        © 2025 Colours Pvt. Ltd. All rights reserved.
      </p>
    </div>
  );
}
