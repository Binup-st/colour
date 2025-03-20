"use client";

import { AlignRight } from "lucide-react";
import NavLink from "./nav-link";
import Search from "./search";
import ThemeToggler from "./theme-toggler";
import { useRef, useState } from "react";
import Sidebar from "./sidebar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSearch } from "@/context/search-context";
import Categories from "./categories";

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
      className="absolute top-0 left-0 right-0 z-10 border-b-2 border-green-800 dark:border-gray-200"
    >
      <div className="flex justify-between items-center p-4 mx-auto">
        <NavLink href="/" className="flex flex-1 lg:flex-none">
          <p className="font-sans text-3xl lg:text-4xl font-extrabold text-gray-200">
            colours
          </p>
        </NavLink>
        <div className="hidden lg:flex justify-center items-center gap-30">
          <Search search={search} setSearch={setSearch} />
          <div className="">
            <Categories />
          </div>
        </div>

        <div className="flex justify-end cursor-pointer">
          <ThemeToggler />
        </div>
        <div className="lg:hidden flex flex-1 justify-end">
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
