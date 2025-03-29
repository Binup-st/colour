"use client";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { Button } from "../ui/button";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import gsap from "gsap";

gsap.registerPlugin(ScrollToPlugin);

interface PaginationProps {
  currentPage: number;
  paginate: (pageNumber: number) => void;
  totalPage: number;
  setCurrentPage: (currentPage: number) => void;
}

export default function Pagination({
  currentPage,
  paginate,
  totalPage,
  setCurrentPage,
}: PaginationProps) {
  const getVisiblePages = () => {
    const visiblePages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPage <= maxVisible) {
      return Array.from({ length: totalPage }, (_, i) => i + 1);
    }

    visiblePages.push(1);

    if (currentPage > 3) {
      visiblePages.push("...");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPage - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    if (currentPage < totalPage - 2) {
      visiblePages.push("...");
    }

    visiblePages.push(totalPage);

    return visiblePages;
  };

  const handleButtonClick = (page: number | string) => {
    if (typeof page === "number") {
      setCurrentPage(page);
      gsap.to(window, {
        scrollTo: { y: "#landing-page", offsetY: 100 },
        duration: 1,
        ease: "power2.inOut",
      });
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-2 py-4">
      {/* Previous Button */}
      <Button
        onClick={() => {
          paginate(currentPage - 1);
          gsap.to(window, {
            scrollTo: { y: "#landing-page", offsetY: 100 },
            duration: 1,
            ease: "power2.inOut",
          });
        }}
        className={`p-2 rounded-md ${
          currentPage === 1 ? "opacity-50" : "cursor-pointer hover:bg-gray-600"
        }`}
      >
        <ChevronLeft size={20} />
      </Button>

      {/* Page Numbers */}
      {visiblePages.map((page, index) => {
        if (page === "...") {
          return (
            <div
              key={`ellipsis-${index}`}
              className="w-8 h-8 flex justify-center items-center"
            >
              <MoreHorizontal size={20} className="text-gray-500" />
            </div>
          );
        }

        return (
          <div
            key={page}
            className={`border-2 border-gray-600 dark:bg-green-200 dark:hover:bg-green-300 text-gray-800 dark:text-black w-8 h-8 relative flex justify-center items-center hover:bg-green-200 cursor-pointer transition-all ${
              currentPage === page
                ? "bg-gray-300 dark:bg-green-800 scale-110 font-bold"
                : ""
            }`}
            onClick={() => handleButtonClick(page)}
          >
            <button type="button" className="cursor-pointer">
              {page}
            </button>
          </div>
        );
      })}

      {/* Next Button */}
      <Button
        onClick={() => {
          paginate(currentPage + 1);
          gsap.to(window, {
            scrollTo: { y: "#landing-page", offsetY: 100 },
            duration: 1,
            ease: "power2.inOut",
          });
        }}
        className={`p-2 rounded-md ${
          currentPage === totalPage
            ? "opacity-50"
            : "cursor-pointer hover:bg-gray-600"
        }`}
      >
        <ChevronRight size={20} />
      </Button>
    </div>
  );
}
