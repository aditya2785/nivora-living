"use client";

const SingleProductSizeChooser = ({
  sizes,
  packages,
  onSizeChange,
  selectedSize,
  setSelectedSize,
}) => {

  const selectWhiteColor = "bg-white text-blackPrimary";
  const selectBlackColor = "bg-blackPrimary text-white";

  const handleSizeSelect = (size) => {
    const price = Number(packages?.[size] || 0);

    setSelectedSize(size);

    // Always send numeric price
    onSizeChange?.(size, price);
  };

  return (
    <div className="mb-8">
      <p className="text-2xl max-sm:text-xl mb-2">Size:</p>

      <div className="flex gap-1 flex-wrap">
        {sizes.map((size) => {
          const price = Number(packages?.[size] || 0);

          return (
            <button
              type="button"
              key={size}
              onClick={() => handleSizeSelect(size)}
              className={`${
                size === selectedSize
                  ? selectBlackColor
                  : selectWhiteColor
              } py-1 px-10 text-xl max-[550px]:px-5 max-sm:text-base max-[350px]:px-3 cursor-pointer`}
            >
              {size} - ${price.toFixed(2)}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SingleProductSizeChooser;