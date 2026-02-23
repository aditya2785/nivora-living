"use client";

import { useState } from "react";
import { HiCheck, HiTrash } from "react-icons/hi";
import { useProductStore } from "@/app/_zustand/store";
import { useRouter } from "next/navigation";

const deliveryMethods = [
  { id: 1, title: "Standard", turnaround: "4–10 business days", price: 5 },
  { id: 2, title: "Express", turnaround: "2–5 business days", price: 16 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CheckoutPage() {
  const router = useRouter();

  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  const products = useProductStore((state) => state.products);
  const subtotal = useProductStore((state) => state.subtotal);
  const tax = useProductStore((state) => state.tax);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  const _hasHydrated = useProductStore((state) => state._hasHydrated);

  if (!_hasHydrated) {
    return <div className="py-20 text-center">Loading checkout...</div>;
  }

  const total =
    subtotal + selectedDeliveryMethod.price + tax;

const handleSubmit = async (e) => {
  e.preventDefault();

  if (products.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products,
      shippingPrice: selectedDeliveryMethod.price,
    }),
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  }
};
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-2xl font-light mb-8">
              Contact information
            </h2>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full border border-gray-300 p-3 mb-10 bg-white"
              required
            />

            <h2 className="text-2xl font-light mb-8">
              Shipping information
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="First name"
                className="border p-3 bg-white"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="border p-3 bg-white"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-3 bg-white mb-6"
              required
            />

            <div className="grid grid-cols-2 gap-4 mb-6">
              <input
                type="text"
                placeholder="City"
                className="border p-3 bg-white"
                required
              />
              <input
                type="text"
                placeholder="Country"
                className="border p-3 bg-white"
                required
              />
            </div>

            <textarea
              placeholder="Notes"
              className="w-full border p-3 bg-white mb-12"
            />

            {/* DELIVERY */}
            <h2 className="text-2xl font-light mb-6">
              Delivery method
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {deliveryMethods.map((method) => (
                <div key={method.id} className="relative">
                  <input
                    type="radio"
                    name="delivery"
                    className="sr-only"
                    checked={
                      selectedDeliveryMethod.id === method.id
                    }
                    onChange={() =>
                      setSelectedDeliveryMethod(method)
                    }
                  />

                  <div
                    className={classNames(
                      selectedDeliveryMethod.id ===
                        method.id
                        ? "border-2 border-black"
                        : "border",
                      "p-6 bg-white cursor-pointer"
                    )}
                    onClick={() =>
                      setSelectedDeliveryMethod(method)
                    }
                  >
                    <div className="flex justify-between">
                      <div>
                        <p className="font-medium">
                          {method.title}
                        </p>
                        <p className="text-sm opacity-60">
                          {method.turnaround}
                        </p>
                      </div>
                      {selectedDeliveryMethod.id ===
                        method.id && (
                        <HiCheck className="text-black" />
                      )}
                    </div>

                    <p className="mt-4 font-medium">
                      ${method.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-2xl font-light mb-8">
              Order summary
            </h2>

            <div className="bg-white border shadow-sm">
              <ul className="divide-y">
                {products.map((product) => (
                  <li
                    key={product.id}
                    className="flex p-6"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-28 h-28 object-cover"
                    />

                    <div className="ml-6 flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">
                          {product.name}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            removeFromCart(product.id)
                          }
                        >
                          <HiTrash className="text-gray-400 hover:text-red-600" />
                        </button>
                      </div>

                      <p className="text-sm mt-2 opacity-70">
                        {product.quantity} × $
                        {Number(product.price).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    $
                    {selectedDeliveryMethod.price.toFixed(
                      2
                    )}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>
                    ${tax.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between text-lg font-medium border-t pt-4">
                  <span>Total</span>
                  <span>
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="border-t p-6">
                <button
                  type="submit"
                  className="w-full bg-black text-white py-4 text-lg hover:opacity-90 transition"
                >
                  Confirm order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}