"use client";

import products from "./products.json";
import ProductCard from "@/components/common/product-card";
import { useSearch } from "@/context/search-context";
import { useCategory } from "@/context/category-context";

export default function LandingPage() {
  const { search } = useSearch();
  const { category } = useCategory();
  const productsPerPage = 12;

  const filteredProducts = products
    .filter(
      (product) =>
        (category === "all" || product.category === category) &&
        product.title.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, productsPerPage)
    .map((product) => ({ ...product, id: String(product.id) }));

  return (
    <div id="landing-page" className="flex flex-col w-full mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-screen lg:grid-cols-3 items-center justify-center">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-black h-screen text-4xl font-bold mt-10">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
}
