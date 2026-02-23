import StatsContainer from "@/components/StatsContainer";

const StatsSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center gap-16">

      {/* Heading */}
      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-light leading-snug mb-6">
          Crafting Elegant Spaces Across the Globe
        </h2>

        <p className="text-lg opacity-80 leading-relaxed">
          Designed in India. Styled for the world. Every Nivora Living
          creation blends heritage craftsmanship with contemporary refinement.
        </p>
      </div>

      {/* Stats */}
      <StatsContainer />

    </section>
  );
};

export default StatsSection;