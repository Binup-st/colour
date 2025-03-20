"use client";

import { useCategory } from "@/context/category-context";
import gsap from "gsap";

export default function Categories() {
  const { category, setCategory } = useCategory();

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    gsap.to(window, {
      scrollTo: { y: "#landing-page", offsetY: 100 },
      duration: 1,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="relative flex justify-center items-center gap-1 dark:text-black">
      <div>
        <select
          value={category}
          onChange={(e) => handleCategoryChange(e)}
          className="border p-2 rounded-lg bg-[#F5F5F5] dark:bg-gray-400 w-64 "
        >
          <option value="all">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Smartphones</option>
          <option value="tops">Tops</option>
          <option value="vehicle">Vehicle</option>
          <option value="sunglasses">Sunglasses</option>
          <option value="motorcycle">Motorcycle</option>
          <option value="tablets">Tablets</option>
        </select>
      </div>
    </div>
  );
}
