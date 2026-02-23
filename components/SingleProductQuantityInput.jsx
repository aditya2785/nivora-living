"use client";

import Image from "next/image";
import CustomChevronDown from "../public/chevron down 3.svg";
import CustomChevronUp from "../public/chevron up 3.svg";

const SingleProductQuantityInput = ({ quantity, setQuantity }) => {

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex h-11 border border-black/20 rounded-sm overflow-hidden">

      {/* Number Input */}
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={handleChange}
        className="
          w-14
          text-center
          text-base
          font-light
          outline-none
          appearance-none
        "
      />

      {/* Custom Arrows */}
      <div className="flex flex-col border-l border-black/20">

        <button
          type="button"
          onClick={handleIncrement}
          className="
            h-1/2 w-8
            flex items-center justify-center
            hover:bg-black hover:text-white
            transition-all duration-200
          "
        >
          <Image
            src={CustomChevronUp}
            alt="Increase"
            width={10}
            height={10}
          />
        </button>

        <button
          type="button"
          onClick={handleDecrement}
          className="
            h-1/2 w-8
            flex items-center justify-center
            hover:bg-black hover:text-white
            transition-all duration-200
          "
        >
          <Image
            src={CustomChevronDown}
            alt="Decrease"
            width={10}
            height={10}
          />
        </button>

      </div>

    </div>
  );
};

export default SingleProductQuantityInput;