import ProductInfo from "@/components/common/product-info";
import Review from "@/components/common/review";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { notFound } from "next/navigation";
import SimilarProducts from "@/components/common/similar-products";
import RecommendedProducts from "@/components/common/recommended-products";
import { Product } from "@/lib/products";

type PageProps = {
  params: {
    productId: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function ProductDetails({ params }: PageProps) {
  const productId = params.productId;

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  let products: Product[] = [];
  try {
    const response = await fetch(`${baseUrl}/data/products.json`);
    products = await response.json();
  } catch (error) {
    console.error("Error loading products:", error);
    return notFound();
  }

  const product = products.find(
    (product) => String(product.id) === String(productId)
  );

  if (!product) {
    return notFound();
  }

  return (
    <section className="container mx-auto mt-10">
      <div className="relative flex flex-col md:flex-row justify-center items-center">
        <div className="w-full flex justify-center">
          <Image
            src={product.images?.[0] || "/placeholder.jpg"}
            alt={product.title || "Product image"}
            width={300}
            height={300}
            priority
            style={{
              height: "auto",
              width: "auto",
              objectFit: "contain",
            }}
            className="my-2 mt-5 sm:my-10 bg-[#F5F5F5] rounded-2xl p-4 transition hover:scale-105 hover:shadow-md duration-200 ease-in-out"
          />
        </div>

        {(product.images ?? []).length > 1 && (
          <div className="w-30 h-30 absolute top-9 left-2 hidden lg:block">
            {product.images?.slice(1, 3).map((image: string, index: number) => (
              <div
                key={index}
                className="flex justify-center items-center transition hover:scale-105 duration-500 ease-in-out"
              >
                <Image
                  src={image}
                  alt={product.title || "Product image"}
                  width={300}
                  height={300}
                  priority={String(product.id) === "1"}
                  style={{
                    height: "90px",
                    width: "100px",
                    objectFit: "contain",
                  }}
                  className="my-3 bg-gray-400 dark:bg-[#3e2b1b]/100"
                />
              </div>
            ))}
          </div>
        )}

        <div className="w-full max-w-4xl mx-auto text-center md:text-left md:pr-18 px-10 mb-10">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-red-500">${product.price}</p>
          <Button className="mt-7 w-52">Add to Cart</Button>
        </div>
      </div>

      <ProductInfo product={product} />
      <Review product={product} />
      <SimilarProducts product={product} products={products} />
      <RecommendedProducts product={product} products={products} />
    </section>
  );
}
