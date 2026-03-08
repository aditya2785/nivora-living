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
<div className="text-center max-w-3xl mx-auto mb-24 px-6">
  <h1 className="font-serif text-5xl tracking-tight max-[600px]:text-4xl">
    Home Accents
  </h1>

  <div className="w-16 h-[1px] bg-neutral-300 mx-auto my-6"></div>

  <p className="text-lg leading-relaxed text-neutral-600 max-[600px]:text-base">
    A refined collection of handcrafted decor designed to bring warmth,
    character, and timeless elegance to modern spaces.
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