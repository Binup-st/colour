"use client";

import { cn } from "@/lib/utils";
import { Search as SearchIcon } from "lucide-react";

export default function Search({
  className,
  search,
  setSearch,
}: {
  className?: string;
  search: string;
  setSearch: (search: string) => void;
}) {
  return (
    <form
      className="relative flex items-center"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="relative flex items-center">
        <SearchIcon className="absolute right-8 w-5 h-5 text-white lg:text-gray-200   cursor-pointer " />
        <input
          type="text"
          placeholder="Search"
          className={cn(
            "hidden sm:block w-64 md:w-72 lg:w-96 border-2 focus:outline-none border-gray-300 text-gray-200 rounded-4xl pl-6 md:pl-9 pr-4 py-2 md:py-3 text-sm md:text-md font-semibold",
            className
          )}
          value={search}
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
      </div>
    </form>
  );
}
