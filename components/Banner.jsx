import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="relative h-[85vh] min-h-[650px] flex items-center">

      {/* Background Image */}
      <Image
        src="/nivora-hero.jpg"
        alt="Elegant Indian-inspired metal home decor by Nivora Living"
        fill
        priority
        className="object-cover"
      />

      {/* Softer Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="relative z-10 px-20 max-lg:px-10 max-sm:px-6 max-w-4xl">

        {/* Small Top Line */}
        <p className="text-white/80 tracking-[0.3em] text-xs uppercase mb-6">
          Handcrafted Indian Metal Decor
        </p>

        {/* Main Heading */}
        <h1 className="text-white text-6xl max-lg:text-5xl max-sm:text-4xl font-light leading-tight mb-8">
          Timeless Pieces <br />
          For Refined Living
        </h1>

        {/* Subtext */}
        <p className="text-white/90 text-lg max-sm:text-base max-w-xl leading-relaxed mb-10">
          Nivora Living blends traditional Indian craftsmanship with
          contemporary global interiors — creating metal decor that
          feels intentional, elegant, and enduring.
        </p>

        {/* Luxury Button */}
        <Link
          href="/shop"
          className="inline-block border border-white px-10 py-4 text-white text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black"
        >
          Explore Collection
        </Link>

      </div>
    </section>
  );
};

export default Banner;