"use client";

import { AlignRight } from "lucide-react";
import Search from "./search";
import ThemeToggler from "./theme-toggler";
import { useRef, useState } from "react";
import Sidebar from "./sidebar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSearch } from "@/context/search-context";
import Categories from "./categories";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import NavLink from "./nav-link";
import ShoppingCart from "./shopping-cart";

gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const { search, setSearch } = useSearch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(navRef.current, {
      y: -100,
      duration: 0.5,
      delay: 0.2,
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 left-0 right-0 z-10 border-b-2 border-green-800 dark:border-gray-200 bg-[#3e2b1b]"
    >
      <div className="flex justify-between items-center gap-10 lg:gap-4  p-4 mx-auto">
        <div
          className="flex flex-none"
          onClick={() => {
            gsap.to(window, {
              scrollTo: { y: "#landing-page", offsetY: 100 },
              duration: 1,
              ease: "power2.inOut",
            });
          }}
        >
          <NavLink href="/">
            <p className="font-sans text-3xl lg:text-4xl font-extrabold text-gray-200 cursor-pointer">
              colours
            </p>
          </NavLink>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-30">
          <Search search={search} setSearch={setSearch} />
          <div className="">
            <Categories setSidebarOpen={setSidebarOpen} />
          </div>
        </div>
        <div className="flex justify-center cursor-pointer">
          <ShoppingCart />
        </div>

        <div className="flex justify-center lg:justify-end cursor-pointer">
          <ThemeToggler />
        </div>
        <div className="lg:hidden flex justify-end">
          <AlignRight
            className="cursor-pointer"
            onClick={() => setSidebarOpen((prev) => !prev)}
          />
          {sidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
        </div>
      </div>
    </nav>
  );
}
