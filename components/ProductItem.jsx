import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product }) => {
  const { fields } = product;

let price = null;

// 1️⃣ Direct price
if (fields.price !== undefined && fields.price !== null && fields.price !== "") {
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
    <div className="group flex flex-col text-blackPrimary transition-all duration-300">

      <Link
        href={`/product/${fields.slug}`}
        className="overflow-hidden"
      >
        <Image
          src={`https:${fields.image.fields.file.url}`}
          alt={fields.title}
          width={500}
          height={600}
          className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="mt-6 flex flex-col gap-3">

        <h3 className="text-base tracking-wide font-light">
          {fields.title}
        </h3>

        <p className="text-sm text-blackPrimary/70 tracking-wide">
          {price !== null
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)
            : "Price on request"}
        </p>

        <Link
          href={`/product/${fields.slug}`}
          className="inline-block text-xs tracking-[0.2em] uppercase mt-2 transition-opacity duration-300 hover:opacity-60"
        >
          View Product
        </Link>

      </div>
    </div>
  );
};

export default ProductItem;