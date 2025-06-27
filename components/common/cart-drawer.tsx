"use client";

import { useRef, useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingCartIcon } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { state, removeItem, updateQuantity, clearCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      gsap
        .timeline()
        .to(overlayRef.current, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          drawerRef.current,
          {
            x: 0,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.1"
        );
    } else {
      document.body.style.overflow = "unset";
      gsap
        .timeline()
        .to(drawerRef.current, {
          x: "100%",
          duration: 0.3,
          ease: "power2.in",
        })
        .to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          },
          "-=0.1"
        );
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 h-[500px]">
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-green bg-opacity-10 opacity-0"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 h-full w-full max-w-md bg-white dark:bg-gray-900 shadow-xl transform translate-x-full flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Shopping Cart ({state.itemCount})
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingCartIcon size={64} className="text-gray-400 mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Your cart is empty
              </p>
              <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
                Add some products to get started
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <Image
                      src={item.product.images?.[0] || "/placeholder.jpg"}
                      alt={item.product.title || "Product"}
                      width={60}
                      height={60}
                      className="rounded-md object-contain bg-white"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {item.product.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      ${item.product.price}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        handleQuantityChange(
                          item.product.id!,
                          item.quantity - 1
                        )
                      }
                    >
                      <Minus size={12} />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() =>
                        handleQuantityChange(
                          item.product.id!,
                          item.quantity + 1
                        )
                      }
                    >
                      <Plus size={12} />
                    </Button>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
                    onClick={() => removeItem(item.product.id!)}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-200 dark:border-gray-700 p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                Total: ${state.total.toFixed(2)}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={clearCart}
                className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                Clear Cart
              </Button>
            </div>
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
