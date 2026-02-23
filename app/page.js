import { getAllProducts } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { ProductGrid } from "@/components";

export default async function Home() {
  const products = await getAllProducts();
const featuredProducts = products
  .filter((product) => product.fields.featured)
  .slice(0, 3);
  return (
    <>

      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center text-center">
        <Image
          src="/nivora-hero.jpg"
          alt="Nivora Living Hero"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />

        <div className="relative z-10 max-w-4xl px-6">
          <p className="text-lg tracking-wide mb-6 font-light">
            For bespoke decor inquiries, contact us at nivoraliving@gmail.com
          </p>

          <h1 className="text-6xl md:text-7xl font-light leading-tight">
            Handcrafted
          </h1>

          <h2 className="text-4xl md:text-5xl tracking-[0.3em] mt-4">
            METAL HOME DECOR
          </h2>

          <div className="mt-10">
            <Link
              href="/shop"
              className="border border-black px-10 py-4 text-lg font-light hover:bg-black hover:text-white transition"
            >
              Explore Collection
            </Link>
          </div>
        </div>
      </section>


{/* INTRO SECTION */}
<section className="py-20 pb-17 px-6 bg-white text-center">

  <div className="max-w-4xl mx-auto">

    {/* Headline */}
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight leading-snug text-black mb-10">
      Crafted by Nivora — Worth Celebrating
    </h2>

    {/* Story */}
    <div className="space-y-8 text-base md:text-lg leading-[1.9] text-black/60 font-light">


      <p>
        Some spaces deserve more than decoration. They deserve character,
        warmth, and intention. At Nivora Living, we create metal decor that
        does more than fill a room — it transforms it.
      </p>

      <p>
        Rooted in Indian craftsmanship and refined for modern global
        interiors, each piece is thoughtfully designed to reflect heritage
        while embracing contemporary elegance. Every curve, texture, and
        finish is carefully considered to create a presence that feels both
        artistic and enduring.
      </p>

      <p>
        With Nivora Living, there are no trends to chase — only timeless
        pieces designed to elevate everyday living.
      </p>

    </div>

  </div>

</section>

{/* Divider */}
<div className="border-t border-gray-300 max-w-6xl mx-auto" />

      {/* FEATURED COLLECTION */}
      <section className="py-12 px-10">
        <h2 className="text-4xl uppercase tracking-[0.3em] font-light text-center mb-10">
          Featured Pieces
        </h2>

<ProductGrid products={featuredProducts} />
      </section>


{/* EDITORIAL + CTA MERGED */}
<section className="relative min-h-screen flex items-center justify-center text-center">

  <Image
    src="/crafted-elegance.jpg"
    alt="Crafted Elegance"
    fill
    className="object-cover"
  />

  {/* Stronger overlay for contrast */}
  <div className="absolute inset-0 bg-black/40" />

  <div className="relative z-10 text-white px-6 max-w-3xl">

    <h2 className="text-5xl md:text-6xl font-light mb-6">
      Crafted with Purpose.
    </h2>

    <p className="text-xl md:text-2xl font-light mb-12 leading-relaxed">
      Designed in India. Styled for the world.
    </p>

    <Link
      href="/shop"
      className="inline-block border border-white px-12 py-4 text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
    >
      View All Products
    </Link>

  </div>

</section>

    </>
  );
}