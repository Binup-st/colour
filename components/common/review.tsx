import { Product } from "@/lib/products";

export default function Review({ product }: { product: Product }) {
  return (
    <section className="">
      <div className="relative border-t-2 w-full px-5 lg:px-10 mb-20">
        <h1 className="text-black dark:text-gray-200  text-4xl font-bold mt-10 mb-8">
          Review
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.reviews?.map((review, index) => {
            return (
              <div
                key={index}
                className="bg-gray-400 dark:bg-gray-300 text-black rounded-2xl px-8 py-4 h-48"
              >
                <div className="flex flex-col sm:flex-row justify-between items-baseline gap-4 mb-6 overflow-hidden w-full">
                  <h3 className="text-2xl font-bold">{review.reviewerName}</h3>
                  <p className="text-xs text-gray-800">
                    {review.reviewerEmail}
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  Rating : {review.rating} / 5
                </p>
                <h2 className="font-extrabold mt-3">{review.comment}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
