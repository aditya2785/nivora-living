export const metadata = {
  title: "Shop Luxury Indian Metal Home Decor",
  description:
    "Explore the handcrafted collection of Indian-inspired metal home decor by Nivora Living. Discover premium diya stands, candle holders, and timeless statement pieces.",
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
        <h1 className="font-light text-6xl tracking-wide max-[600px]:text-4xl">
          Shop Nivora Living – Luxury Indian Metal Home Decor
        </h1>

        <p className="text-xl font-light leading-relaxed mt-8 max-[600px]:text-lg max-[400px]:text-base">
          Discover Nivora Living’s curated range of Indian-inspired metal home decor.
          From intricately crafted diya stands to sculptural candle holders and statement
          pieces, each design blends heritage artistry with contemporary global styling.
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