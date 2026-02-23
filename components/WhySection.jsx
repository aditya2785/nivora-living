const WhySection = () => {
  return (
    <section className="flex items-center flex-col gap-6 text-center text-blackPrimary border-t border-white pt-24 my-24 px-10 max-[500px]:px-5">
      <h2 className="text-5xl font-light mb-6 max-[500px]:text-4xl">
        Why Nivora Living?
      </h2>

      <p className="text-xl font-light max-w-[750px] max-[500px]:text-lg max-[400px]:text-base leading-relaxed">
        We don’t just create decor — we craft statement pieces rooted in
        heritage and refined for modern global homes. Every detail reflects
        intention, artistry, and elevated living.
      </p>

      <div className="flex gap-10 mt-16 max-[1350px]:flex-col">
        
        <div className="flex flex-col gap-3 border-white border-2 px-6 py-10">
          <h3 className="text-xl max-[400px]:text-lg font-medium">
            Timeless Indian Craftsmanship
          </h3>
          <p className="font-light max-w-96 max-[400px]:text-sm leading-relaxed">
            Our metal decor pieces are inspired by India’s rich artistic
            heritage and meticulously designed to blend seamlessly into
            contemporary interiors around the world.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-white border-2 px-6 py-10">
          <h3 className="text-xl max-[400px]:text-lg font-medium">
            Premium Metal Finishing
          </h3>
          <p className="font-light max-w-96 max-[400px]:text-sm leading-relaxed">
            Crafted using high-quality metals with detailed hand-finished
            touches, each piece is built to offer durability, elegance,
            and lasting visual impact.
          </p>
        </div>

        <div className="flex flex-col gap-3 border-white border-2 px-6 py-10">
          <h3 className="text-xl max-[400px]:text-lg font-medium">
            Designed for Global Interiors
          </h3>
          <p className="font-light max-w-96 max-[400px]:text-sm leading-relaxed">
            Whether styled in a New York apartment, a London townhouse,
            or a Dubai villa, Nivora Living pieces add warmth,
            sophistication, and cultural depth to every space.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhySection;