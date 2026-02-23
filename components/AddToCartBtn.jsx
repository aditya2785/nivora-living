"use client";

import { useState } from "react";
import { useProductStore } from "@/app/_zustand/store";

const AddToCartBtn = ({ product, quantity }) => {
  const { addToCart } = useProductStore();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      quantity: quantity,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        w-full 
        h-14 
        rounded-sm
        text-sm 
        tracking-[0.2em] 
        uppercase
        transition-all 
        duration-500
        shadow-md
        ${
          added
            ? "bg-emerald-600 text-white"
            : "bg-black text-white hover:bg-neutral-800 hover:shadow-xl"
        }
      `}
    >
      {added ? "Added to Cart ✓" : "Add to Cart"}
    </button>
  );
};

export default AddToCartBtn;