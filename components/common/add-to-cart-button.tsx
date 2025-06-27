"use client";

import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import { Product } from "@/lib/products";
import { ShoppingCart, Check } from "lucide-react";
import { useState } from "react";

interface AddToCartButtonProps {
  product: Product;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
}

export default function AddToCartButton({
  product,
  className,
  variant = "default",
  size = "default",
}: AddToCartButtonProps) {
  const { addItem, isInCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);
  const inCart = isInCart(product.id!);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem(product);

    // Show feedback for a brief moment
    setTimeout(() => {
      setIsAdding(false);
    }, 1000);
  };

  return (
    <Button
      onClick={handleAddToCart}
      className={className}
      variant={variant}
      size={size}
      disabled={isAdding}
    >
      {isAdding ? (
        <>
          <Check size={16} className="mr-2" />
          Added!
        </>
      ) : inCart ? (
        <>
          <Check size={16} className="mr-2" />
          In Cart
        </>
      ) : (
        <>
          <ShoppingCart size={16} className="mr-2" />
          Add to Cart
        </>
      )}
    </Button>
  );
}
