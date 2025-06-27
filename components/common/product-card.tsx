"use client";

import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import AddToCartButton from "./add-to-cart-button";

gsap.registerPlugin(ScrollTrigger);

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      y: 50,
      delay: 0.1,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: cardRef.current,
        scroller: "body",
        scrub: true,
        start: "top 75%",
        end: "top 25%",
      },
    });
  });

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div
      ref={cardRef}
      key={product.id}
      className={`relative border-b border-r border-green-800 dark:border-gray-200 flex flex-col justify-center items-center py-10 h-[600px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200`}
      onClick={handleClick}
    >
      {/* Product Image */}
      <div className="w-full  flex justify-center mb-5">
        <Image
          src={product.images[0]}
          alt={product.title}
          width={300}
          height={300}
          priority={product.id === "1"}
          style={{
            height: "auto",
            width: "auto",
            objectFit: "contain",
          }}
          className="my-2 mt-5 sm:my-10"
        />
      </div>

      {/* Product Details */}
      <div className="w-full">
        <div className="absolute -top-4 mt-5 sm:mt-10 w-full flex mx-auto justify-between items-center px-5">
          <h3 className="text-sm font-bold w-2/3">{product.title}</h3>
          <p className="text-red-500 text-2xl sm:text-4xl font-sans">
            ${product.price}
          </p>
        </div>

        {/* Product Description */}
        <div
          className="absolute -bottom-4 font-semibold text-justify px-8 py-10 text-xs md:text-md"
          aria-hidden="true"
        >
          <div className="flex flex-col md:flex-row md:items-start items-center justify-between gap-3 md:gap-8">
            <p>{product.description}</p>
            <div className="">
              <AddToCartButton
                product={product}
                size="sm"
                className="w-32 rounded-lg cursor-pointer hover:scale-102 transition-transform duration-200 h-8 md:h-12"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
