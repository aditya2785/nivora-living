"use client";

import Image from "next/image";
import CustomChevronDown from "../public/chevron down 3.svg";
import CustomChevronUp from "../public/chevron up 3.svg";
import { useProductStore } from "@/app/_zustand/store";

const ProductCartItemQuantity = ({ id, showControls = true }) => {
  const { products, updateCartQuantity } = useProductStore();

  const item = products.find((product) => product.id === id);
  const quantity = item ? item.quantity : 1;

  const handleIncrement = () => {
    updateCartQuantity(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateCartQuantity(id, quantity - 1);
    }
  };

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 1) {
      updateCartQuantity(id, value);
    }
  };

  return (
    <div className="flex items-center border border-black/20 rounded-sm overflow-hidden">
      
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleChange}
        className="
          w-14 h-12
          text-center
          text-base
          bg-white
          outline-none
        "
      />

      {showControls && (
        <div className="flex flex-col border-l border-black/20">
          
          <button
            onClick={handleIncrement}
            className="
              h-6 w-8
              flex items-center justify-center
              hover:bg-black hover:text-white
              transition-all duration-200
            "
          >
            <Image
              src={CustomChevronUp}
              alt="Increase quantity"
              width={10}
              height={10}
            />
          </button>

          <button
            onClick={handleDecrement}
            className="
              h-6 w-8
              flex items-center justify-center
              hover:bg-black hover:text-white
              transition-all duration-200
            "
          >
            <Image
              src={CustomChevronDown}
              alt="Decrease quantity"
              width={10}
              height={10}
            />
          </button>

        </div>
      )}
    </div>
  );
};

export default ProductCartItemQuantity;