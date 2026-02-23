"use client";

import React, { useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import SingleProductQuantityInput from "./SingleProductQuantityInput";

const ProductAddToCartClient = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-end gap-8 mt-6 flex-wrap sm:flex-nowrap">

      {/* Quantity Section */}
      <div className="flex flex-col">
        <span className="text-xs tracking-widest uppercase opacity-50 mb-2">
          Quantity
        </span>

        <SingleProductQuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>

      {/* Add to Cart Button */}
      <div className="flex-1 min-w-[220px]">
        <AddToCartBtn
          quantity={quantity}
          product={product}
        />
      </div>

    </div>
  );
};

export default ProductAddToCartClient;