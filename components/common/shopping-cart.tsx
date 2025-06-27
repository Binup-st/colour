"use client";

import { ShoppingCartIcon } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/cart-context";
import CartDrawer from "./cart-drawer";

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();

  return (
    <>
      <div className="relative cursor-pointer" onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon
          size={28}
          className="text-[#F5F2E1] hover:text-white transition-colors duration-200"
        />
        {state.itemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
            {state.itemCount > 99 ? "99+" : state.itemCount}
          </span>
        )}
      </div>
      <CartDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
