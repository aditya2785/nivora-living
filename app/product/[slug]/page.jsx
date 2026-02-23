import {
    ProductGrid,
} from "@/components";
import ProductAddToCartClient from "@/components/ProductAddToCartClient";
import Image from "next/image";
import React from "react";
import { HiMiniStar } from "react-icons/hi2";
import { getAllProducts, getProductBySlug } from "@/lib/api";

const SingleProductPage = async ({ params }) => {

    const { slug } = await params;

    const product = await getProductBySlug(slug);
    const products = await getAllProducts();

    if (!product) {
        return <div className="py-40 text-center text-xl">Product not found</div>;
    }

    const price = product.fields.price ?? null;

    return (
        <div className="bg-white">

            {/* FIRST VIEW */}
            <div className="min-h-[80vh] flex items-center">
                <div className="max-w-5xl mx-auto px-10 w-full max-lg:px-6">

                    <div className="grid grid-cols-2 gap-12 items-center max-xl:grid-cols-1 max-xl:gap-10">

                        {/* IMAGE */}
                        <div className="w-full flex justify-center">
                            <div className="bg-[#f3efe9] p-5 w-full max-w-md">
                                <Image
                                    src={`https:${product.fields.image.fields.file.url}`}
                                    width={750}
                                    height={650}
                                    alt={product.fields.title}
                                    className="w-full h-[380px] object-contain"
                                    priority
                                />
                            </div>
                        </div>

                        {/* INFO */}
                        <div className="flex flex-col justify-center pt-6">

                            <h1 className="text-2xl md:text-3xl font-light tracking-wide leading-snug mb-5 max-w-lg">
                                {product.fields.title}
                            </h1>

                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <HiMiniStar
                                            key={i}
                                            className="text-amber-500 text-base"
                                        />
                                    ))}
                                </div>
                                <p className="text-xs tracking-wide opacity-40 uppercase">
                                    125 Reviews
                                </p>
                            </div>

                            <p className="text-xl font-light tracking-wide mb-5">
                                {price !== null
                                    ? new Intl.NumberFormat("en-US", {
                                          style: "currency",
                                          currency: "USD",
                                      }).format(price)
                                    : "Currently unavailable"}
                            </p>

                            <p className="text-sm font-light leading-relaxed opacity-70 mb-6 max-w-md">
                                {product.fields.shortDescription}
                            </p>

                            {/* Quantity + Button */}
                            <ProductAddToCartClient
                                product={{
                                    id: product.sys.id,
                                    name: product.fields.title,
                                    price: price || 0,
                                    image: `https:${product.fields.image.fields.file.url}`,
                                    brand: "Nivora Living",
                                    category: "Home Decor",
                                    quantity: 1,
                                }}
                            />

                        </div>
                    </div>
                </div>
            </div>

            {/* DOWN ARROW */}
            <div className="flex justify-center -mt-4 mb-4">
                <div className="animate-bounce text-black opacity-50 text-xl">
                    ↓
                </div>
            </div>

{/* Description Section */}
<div className="border-t border-black/10 mt-10">
    <div className="max-w-5xl mx-auto px-12 pt-16 pb-20 max-lg:px-8 max-md:px-6">

        <h2 className="text-lg uppercase tracking-[0.25em] font-light mb-8">
            The Presence It Brings
        </h2>

        <p className="text-sm font-light leading-loose opacity-70">
            {product.fields.description}
        </p>

    </div>
</div>

            {/* RELATED */}
            <div className="border-t border-black/10 py-20">

                <h2 className="text-lg uppercase tracking-[0.3em] font-light text-center mb-12">
                    You May Also Like
                </h2>

                <div className="max-w-6xl mx-auto px-8">
                    <ProductGrid products={products.slice(3)} />
                </div>

            </div>

        </div>
    );
};

export default SingleProductPage;