import ProductItem from "@/components/ProductItem";

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <div className="py-32 text-center text-sm tracking-wide text-blackPrimary/60">
        Our collection is currently being curated.
      </div>
    );
  }

  return (
    <div className="w-full">
      <div
        className="
          grid
          grid-cols-4
          gap-x-12
          gap-y-20
          max-[1400px]:grid-cols-3
          max-[1000px]:grid-cols-2
          max-[600px]:grid-cols-1
        "
      >
        {products.map((product) => (
          <ProductItem
            key={product.sys.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;