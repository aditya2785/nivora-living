import Image from "next/image";
import FullImageSectionImage from "../public/nivora-full-image.jpg";
import { Button } from "@/components/index";

const FullImageSection = () => {
  return (
    <div className="relative h-auto">
      <Image
        src={FullImageSectionImage}
        alt="Elegant Indian-inspired metal decor styled in a modern living space"
        className="w-full h-full object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute flex flex-col gap-3 max-sm:gap-1 justify-center items-center w-full text-center bottom-12 left-1/2 transform -translate-x-1/2 max-[500px]:bottom-6 px-6">
        
        <h2 className="text-4xl font-light text-white max-xl:text-3xl max-md:text-2xl max-sm:text-xl max-[380px]:text-base">
          Transform Your Space with Timeless Detail
        </h2>

        <p className="text-7xl font-normal text-white mb-6 max-xl:text-6xl max-md:text-5xl max-sm:text-4xl max-[500px]:text-3xl max-sm:mb-4 max-[380px]:text-2xl">
          Experience the Art of Refined Living
        </p>

        <Button text="Explore Collection" />
      </div>
    </div>
  );
};

export default FullImageSection;