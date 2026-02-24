export const metadata = {
  title: "About Nivora Living | Indian-Inspired Luxury Metal Home Decor Brand",
  description:
    "Learn about Nivora Living — a premium Indian-inspired metal home decor brand blending heritage craftsmanship with modern global design aesthetics.",
};
import {
  ImageTextSection,
  StatsSection,
  FullImageSection,
} from "@/components";

export default function AboutUsPage() {
  return (
    <div>

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[90vh] w-full overflow-hidden">

        {/* Background Image */}
        
        <img
          src="/about-nivora.jpg"
          alt="About Nivora Living"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

          <p className="text-white/80 uppercase tracking-[0.5em] text-xs mb-6">
            About
          </p>

          <h1 className="text-white text-6xl md:text-7xl font-light leading-tight tracking-wide mb-8">
            Nivora Living
          </h1>

          <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
            Timeless Indian-inspired metal artistry reimagined for modern global interiors.
            We believe decor is not merely ornamental — it is an expression of
            identity, heritage, and refined living.
          </p>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest animate-bounce">
          ↓
        </div>

      </div>

      {/* ================= OUR STORY ================= */}
        <div className="pt-36 pb-28 px-32 max-lg:px-12 max-sm:px-6 text-center border-b border-black/10">

        <p className="uppercase tracking-[0.7em] text-xs opacity-60 mb-6">
            Our Story
        </p>

        <h2 className="text-5xl font-light mb-12 tracking-wide max-sm:text-4xl">
            Crafted With Intention
        </h2>

        <p className="text-lg font-light leading-relaxed max-w-4xl mx-auto opacity-80">
            Our journey began with a deep appreciation for handcrafted metal artistry 
            and the quiet elegance it brings to a space. Inspired by India's rich cultural 
            craftsmanship and reimagined for contemporary homes, each Nivora Living piece 
            is thoughtfully designed to balance tradition with modern minimalism. 
            <br /><br />
            We curate designs that add warmth, character, and depth to interiors 
            across the world — creating objects that feel timeless, intentional, and refined.
        </p>

        </div>



{/* ================= STATS IMAGE SECTION ================= */}
<div className="relative w-full overflow-hidden py-24">

  {/* Background Image */}
  <img
    src="/nivora-full-image.jpg"
    alt="Nivora Craftsmanship"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Softer Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/50" />

  {/* Stats Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
    <StatsSection />
  </div>

</div>


{/* ================= OUR MISSION ================= */}
<div className="py-28 px-32 max-lg:px-12 max-sm:px-6 text-center">

  <p className="uppercase tracking-[0.4em] text-xs opacity-60 mb-6">
    Our Mission
  </p>

  <h2 className="text-5xl font-light mb-10 tracking-wide max-sm:text-4xl">
    Designing With Purpose
  </h2>

  <p className="text-lg font-light leading-relaxed max-w-4xl mx-auto opacity-80">
    Our mission is to craft meaningful decor that transforms spaces into curated environments.
    We focus on premium metal finishes, intentional design, and enduring quality —
    creating pieces that feel equally at home in a London townhouse, a New York apartment,
    or a Dubai villa.
  </p>

</div>

{/* ================= PHILOSOPHY IMAGE SECTION ================= */}
<div className="relative h-[80vh] w-full overflow-hidden">

  {/* Background Image */}
  <img
    src="/Screenshot 2026-02-22 194117.png"
    alt="Nivora Philosophy"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Soft Overlay */}
  <div className="absolute inset-0 bg-black/40" />

  {/* Text Content */}
  <div className="relative z-10 flex items-center justify-center h-full px-6">

    <div className="max-w-3xl text-center text-white">

      <p className="uppercase tracking-[0.4em] text-xs opacity-70 mb-6">
        The Philosophy
      </p>

      <h2 className="text-5xl md:text-6xl font-light mb-10 leading-tight">
        The Nivora Philosophy
      </h2>

      <p className="text-lg md:text-xl leading-relaxed opacity-90">
        We believe that a well-designed space influences how we live, feel,
        and connect. Our goal is not just to decorate homes, but to elevate
        environments — adding warmth, balance, and subtle luxury through
        refined metal artistry.
      </p>

    </div>

  </div>

</div>

      {/* ================= VALUES ================= */}
<div className="py-24 px-32 max-lg:px-12 max-sm:px-6 text-center">

  <p className="uppercase tracking-[0.4em] text-xs opacity-60 mb-6">
          Our Values
  </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

          <div className="text-center">
            <h3 className="text-2xl font-medium mb-6">
              Craftsmanship
            </h3>
            <p className="text-lg font-light leading-relaxed opacity-80">
              We honor traditional Indian metal artistry while refining it
              for contemporary interiors. Every detail reflects care,
              intention, and authenticity.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-medium mb-6">
              Timeless Design
            </h3>
            <p className="text-lg font-light leading-relaxed opacity-80">
              We create decor that transcends trends — pieces that remain
              elegant and relevant for years, not seasons.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-medium mb-6">
              Global Perspective
            </h3>
            <p className="text-lg font-light leading-relaxed opacity-80">
              Designed in India and styled for the world, our collections
              reflect a balance between heritage depth and international
              sophistication.
            </p>
          </div>

        </div>
      </div>


      {/* ================= CTA ================= */}
      <div className="py-28 px-10 max-sm:px-6 text-center bg-[#111111] text-white">

        <p className="uppercase tracking-[0.4em] text-xs opacity-60 mb-6">
          Let’s Connect
        </p>

        <h2 className="text-4xl md:text-5xl font-light mb-8">
          Let’s Create Beautiful Spaces
        </h2>

        <p className="text-lg opacity-80 mb-10 max-w-2xl mx-auto leading-relaxed">
          Have questions about our collections or need assistance selecting
          the perfect piece? Our team is here to help you style with confidence.
        </p>

        <p className="text-lg tracking-wide">
          Reach out to us — we’d love to connect.
        </p>

      </div>

    </div>
  );
}