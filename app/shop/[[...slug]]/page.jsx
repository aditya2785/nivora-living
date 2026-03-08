export const metadata = {
  title: "Shop Luxury Home Decor | Nivora Living",
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
      <div className="max-w-screen-xl mx-auto mt-24 px-6">

        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl tracking-tight max-[600px]:text-3xl">
            Home Accents
          </h1>

          <p className="text-lg leading-relaxed text-neutral-600 max-[600px]:text-base">
            A refined collection of handcrafted decor designed to bring warmth,
            character, and timeless elegance to modern spaces.
          </p>
        </div>

        {/* Product Grid */}
        <div className="pb-28">
          <ProductGrid products={products} />
        </div>

      </div>
    </div>
  );
};

export default ShopPage;