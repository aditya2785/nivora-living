import { HiArrowSmallRight } from "react-icons/hi2";

const JoinCommunityFooter = () => {
  return (
    <div className="text-blackPrimary flex flex-col gap-6 max-w-[500px]">

      <h2 className="text-2xl font-medium tracking-wide">
        Join the Nivora Circle
      </h2>

      <p className="text-sm leading-relaxed opacity-80">
        Be the first to discover new collections, exclusive releases,
        and curated styling inspiration for refined living spaces.
      </p>

      <div className="flex border-b border-blackPrimary max-w-[420px]">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent h-12 outline-none text-sm tracking-wide placeholder:opacity-50"
        />
        <button className="flex items-center justify-center w-10 h-12 transition-transform duration-300 hover:translate-x-1">
          <HiArrowSmallRight className="text-lg" />
        </button>
      </div>

    </div>
  );
};

export default JoinCommunityFooter;