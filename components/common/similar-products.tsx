"use client";

import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Product } from "@/lib/products";
import { useRouter } from "next/navigation";

export default function SimilarProducts({
  product,
  products,
}: {
  product: Product;
  products: Product[];
}) {
  const { category, title } = product;
  const router = useRouter();

  const similarProducts = products
    .filter((item) => item.category === category)
    .filter((item) => item.title !== title);

  const handleClick = (itemId: string | number | undefined) => {
    router.push(`/product/${itemId}`);
  };

  return (
    <section className="">
      <div className="relative border-t-2 w-full px-5 lg:px-10 mb-20">
        <h1 className="text-black dark:text-gray-200  text-4xl font-bold pt-10 mt-10 mb-8">
          Similar Products
        </h1>
        <Carousel className="mx-auto">
          <CarouselContent className=" flex-nowrap">
            {similarProducts.map((item: Product, index: number) => {
              return (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/2 lg:basis-1/3 "
                  onClick={() => handleClick(item.id)}
                >
                  <div className="p-6 flex justify-center">
                    <Card className="w-80 cursor-pointer transition hover:scale-110 hover:shadow-2xl duration-500 ease-in-out dark:bg-[#F5F2E1]">
                      <CardContent className="relative flex aspect-square items-center justify-center">
                        <Image
                          src={item.images?.[0] || "/placeholder.jpg"}
                          alt={item.title || "Product image"}
                          width={200}
                          height={200}
                          priority={item.id === "1"}
                          style={{
                            height: "200px",
                            width: "auto",
                            objectFit: "contain",
                          }}
                          className="my-2 mt-5 sm:my-10"
                        />
                        <div className="absolute bottom-0 mt-5 sm:mt-10 w-full flex mx-auto justify-between items-center px-5">
                          <h3 className="text-xs font-bold w-2/3 dark:text-black">
                            {item.title}
                          </h3>
                          <p className="text-red-500 text-xl sm:text-2xl font-sans">
                            ${item.price}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-[-40px] sm:left-[-30px]" />
          <CarouselNext className="right-[-40px] sm:right-[-20px]" />
        </Carousel>
      </div>
    </section>
  );
}
