import Image from "next/image";
import { Button } from "@/components/index";

const ImageTextSection = ({
  image,
  mode,
  text,
  title,
  imageWidth,
  imageHeight,
}) => {
  return (
    <section className="flex justify-center items-center px-10 gap-16 min-h-[650px] max-[1330px]:flex-col max-[1330px]:py-14 max-[500px]:px-5">
      
      {mode === "imageLeft" && (
        <Image
          src={image}
          alt="Nivora Living premium metal home decor styled in an elegant interior"
          width={imageWidth}
          height={imageHeight}
          className="object-cover max-w-full h-auto"
        />
      )}

      <div className="flex flex-col gap-6 max-w-[600px]">
        <h2 className="text-6xl font-light text-blackPrimary leading-tight max-sm:text-5xl max-[450px]:text-4xl">
          {title}
        </h2>

        <p className="text-xl font-light leading-relaxed text-blackPrimary/80 max-sm:text-lg max-[450px]:text-base max-[400px]:text-sm">
          {text}
        </p>

        <div className="pt-2">
          <Button text="Discover More" />
        </div>
      </div>

      {mode === "imageRight" && (
        <Image
          src={image}
          alt="Nivora Living handcrafted Indian-inspired decor piece"
          width={imageWidth}
          height={imageHeight}
          className="object-cover max-w-full h-auto"
        />
      )}

    </section>
  );
};

export default ImageTextSection;