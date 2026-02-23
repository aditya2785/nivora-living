"use client";

import Link from "next/link";
import { HiCheck, HiClock, HiQuestionMarkCircle } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import { useProductStore } from "../_zustand/store";
import { ProductCartItemQuantity } from "@/components";
import Image from "next/image";

const CartPage = () => {
  const products = useProductStore((state) => state.products);
  const subtotal = useProductStore((state) => state.subtotal);
  const shipping = useProductStore((state) => state.shipping);
  const tax = useProductStore((state) => state.tax);
  const total = useProductStore((state) => state.total);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  const _hasHydrated = useProductStore((state) => state._hasHydrated);

  // 🔥 Prevent hydration mismatch
  if (!_hasHydrated) {
    return <div className="py-20 text-center">Loading cart...</div>;
  }

  return (
    <div className="bg-primary">
      <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section className="lg:col-span-7">
            <ul className="divide-y divide-gray-200 border-b border-t border-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={192}
                      height={192}
                      className="h-24 w-24 object-cover object-center sm:h-48 sm:w-48"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <h3 className="text-base font-medium text-blackPrimary">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-sm text-blackPrimary">
                          {product.quantity} in cart
                        </p>

                        <p className="mt-1 text-sm font-medium text-blackPrimary">
                          ${Number(product.price).toFixed(2)}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <ProductCartItemQuantity id={product.id} />

                        <div className="absolute right-0 top-0">
                          <button
                            type="button"
                            className="-m-2 inline-flex p-2 text-blackPrimary hover:text-red-800"
                            onClick={() => removeFromCart(product.id)}
                          >
                            <HiXMark className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex space-x-2 text-sm text-blackPrimary">
                      <HiCheck className="h-5 w-5 text-green-500" />
                      <span>In stock</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section className="mt-16 rounded-lg bg-primary px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 border border-gray-200">
            <h2 className="text-lg font-medium text-blackPrimary">
              Order summary
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex justify-between">
                <dt className="text-sm text-blackPrimary">Subtotal</dt>
                <dd className="text-sm font-medium text-blackPrimary">
                  ${subtotal.toFixed(2)}
                </dd>
              </div>

              <div className="flex justify-between border-t pt-4">
                <dt className="text-sm text-blackPrimary">
                  Shipping estimate
                </dt>
                <dd className="text-sm font-medium text-blackPrimary">
                  ${shipping.toFixed(2)}
                </dd>
              </div>

              <div className="flex justify-between border-t pt-4">
                <dt className="text-sm text-blackPrimary">Tax estimate</dt>
                <dd className="text-sm font-medium text-blackPrimary">
                  ${tax.toFixed(2)}
                </dd>
              </div>

              <div className="flex justify-between border-t pt-4">
                <dt className="text-base font-medium text-blackPrimary">
                  Order total
                </dt>
                <dd className="text-base font-medium text-blackPrimary">
                  ${total.toFixed(2)}
                </dd>
              </div>
            </dl>

            <div className="mt-6">
              <Link
                href="/checkout"
                className="flex justify-center items-center w-full h-14 bg-white text-blackPrimary text-xl"
              >
                Checkout
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CartPage;