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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-serif text-5xl tracking-tight max-[600px]:text-4xl">
            Home Accents
          </h1>

          <div className="w-16 h-[1px] bg-neutral-300 mx-auto my-6"></div>


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