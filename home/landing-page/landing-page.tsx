"use client";

import products from "./products.json";
import ProductCard from "@/components/common/product-card";
import { useSearch } from "@/context/search-context";
import { useCategory } from "@/context/category-context";
import { useState } from "react";
import Pagination from "@/components/common/pagination";

export default function LandingPage() {
  const { search } = useSearch();
  const { category } = useCategory();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const filteredProducts = products
    .filter(
      (product) =>
        (category === "all" || product.category === category) &&
        product.title.toLowerCase().includes(search.toLowerCase())
    )
    .map((product) => ({ ...product, id: String(product.id) }));

  const totalProducts = filteredProducts.length;
  const totalPage = Math.ceil(totalProducts / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div id="landing-page" className="flex flex-col w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-screen lg:grid-cols-3 items-center justify-center">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-black h-screen text-4xl font-bold mt-10">
            No products found.
          </p>
        )}
      </div>

      {totalPage > 1 && (
        <Pagination
          currentPage={currentPage}
          paginate={paginate}
          totalPage={totalPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
