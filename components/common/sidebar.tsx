"use client";

import { CircleX } from "lucide-react";
import Search from "./search";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Categories from "./categories";
import { useSearch } from "@/context/search-context";

export default function Sidebar({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
}) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { search, setSearch } = useSearch();

  useGSAP(() => {
    gsap.timeline().from(sidebarRef.current, {
      x: 350,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="overflow-y-hidden">
      <div
        ref={sidebarRef}
        className="absolute flex flex-col z-100 items-center gap-10 w-screen sm:w-86 h-screen bg-[#646F58] dark:bg-gray-800 top-0 right-0 shadow-xl"
      >
        <CircleX
          className="absolute w-8 h-8 top-4 right-4 text-white dark:text-gray-200 cursor-pointer transition transform duration-200 ease-in-out hover:rotate-90"
          onClick={() => setSidebarOpen(false)}
        />
        <div className="mt-16">
          <Search
            search={search}
            setSearch={setSearch}
            className="border-[#F5F5F5] dark:border-gray-200 text-white dark:text-gray-200"
          />
        </div>
        <div className="border-b-2 border-[#F5F5F5] dark:border-gray-200 w-11/12"></div>
        <div className="flex flex-col gap-6">
          <h2 className="text-white dark:text-gray-200 text-5xl text-center font-bold font-sans">
            Categories
          </h2>
          <div className="flex flex-col gap-2 text-right">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}
