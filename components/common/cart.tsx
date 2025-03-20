"use client";

import { Plus } from "lucide-react";

export default function Cart() {
  return (
    <div className="absolute right-0 top-1/2 dark:bg-gray-200 dark:text-black text-white  bg-green-800 rounded-tl-lg rounded-bl-lg px-2 py-4 cursor-pointer">
      <div className="flex flex-col gap-2">
        <div
          className="flex flex-col text-xs items-center gap-2"
          onClick={() => {
            console.log("clicked");
          }}
        >
          <Plus />
          <p className="font-bold">Add to Cart</p>
        </div>
      </div>
    </div>
  );
}
