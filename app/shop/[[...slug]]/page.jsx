export const metadata = {
  title: "Shop Luxury Home Decor",
  description:
    "Explore the handcrafted collection of home decor by Nivora Living. Discover premium diya stands, candle holders, and timeless statement pieces.",
};
export const revalidate = 10;

import { ProductGrid } from "@/components";
import { getAllProducts } from "@/lib/api";

const ShopPage = async () => {
  const products = await getAllProducts();

  return (
    <div className="bg-white w-full">
    <div className="max-w-screen-2xl mx-auto mt-20 px-10 max-[500px]:px-5">
      {/* Page Heading */}
      <div className="text-center max-w-4xl mx-auto mb-20">
        <h1 className="font-light text-6xl tracking-tight max-[600px]:text-4xl">
          Home Accents
        </h1>

        <p className="text-xl font-light leading-relaxed mt-8 max-[600px]:text-lg max-[400px]:text-base">
          A curated collection of decor pieces designed to bring warmth, character, and timeless elegance to modern interiors.
        </p>
      </div>

      {/* Product Grid */}
      <div className="pb-24">
        <ProductGrid products={products} />
      </div>
    </div>
    </div>
  );
};

export default ShopPage;