import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  const { fields } = product;

  let price = null;

  // 1️⃣ Direct price
  if (
    fields.price !== undefined &&
    fields.price !== null &&
    fields.price !== ""
  ) {
    const parsed = Number(fields.price);
    if (!isNaN(parsed)) {
      price = parsed;
    }
  }

  // 2️⃣ Fallback to packages
  if (price === null && fields.packages) {
    const packageValues = Object.values(fields.packages);
    if (packageValues.length > 0) {
      const parsed = Number(packageValues[0]);
      if (!isNaN(parsed)) {
        price = parsed;
      }
    }
  }

  return (
    <div className="group flex flex-col h-full">

      {/* IMAGE */}
      <Link
        href={`/product/${fields.slug}`}
        className="overflow-hidden bg-[#f5f2ec]"
      >
        <Image
          src={`https:${fields.image.fields.file.url}`}
          alt={fields.title}
          width={800}
          height={800}
          className="w-full aspect-square object-contain transition-all duration-700 group-hover:scale-[1.03]"
        />
      </Link>

      {/* CONTENT */}
      <div className="flex flex-col flex-grow pt-6">

        {/* TITLE */}
        <h3 className="text-base tracking-wide font-light leading-snug min-h-[56px]">
          {fields.title}
        </h3>

        {/* PRICE */}
        <p className="mt-3 text-sm text-blackPrimary/70 tracking-wide">
          {price !== null
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)
            : "Price on request"}
        </p>

        {/* BUTTON */}
        <Link
          href={`/product/${fields.slug}`}
          className="mt-auto pt-6 text-xs tracking-[0.2em] uppercase transition-opacity duration-300 hover:opacity-60"
        >
          View Product
        </Link>

      </div>
    </div>
  );
};

export default ProductItem;