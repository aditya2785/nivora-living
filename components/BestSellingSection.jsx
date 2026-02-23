import { ProductGrid } from "@/components/index";

const BestSellingSection = ({ products }) => {
  return (
    <section className="py-32 px-20 max-lg:px-10 max-sm:px-6">

      {/* Section Header */}
      <div className="max-w-3xl mb-16">

        <p className="text-xs tracking-[0.3em] uppercase text-blackPrimary/60 mb-4">
          Selection
        </p>

        <h2 className="text-3xl font-light tracking-wide mb-6">
          Curated Metal Forms
        </h2>

        <p className="text-sm text-blackPrimary/70 leading-relaxed max-w-xl">
          A considered edit of handcrafted metal pieces designed
          for modern interiors and timeless spaces.
        </p>

      </div>

      {/* Product Grid */}
      <ProductGrid products={products} />

    </section>
  );
};

export default BestSellingSection;