import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useProductStore = create()(
  persist(
    (set, get) => ({
      products: [],
      allQuantity: 0,
      subtotal: 0,
      shipping: 0,
      tax: 0,
      total: 0,
      _hasHydrated: false,

      setHasHydrated: (state) => {
        set({ _hasHydrated: state });
      },

      addToCart: (newProduct) => {
        const { products } = get();

        const existing = products.find(
          (item) => item.id === newProduct.id
        );

        let updatedProducts;

        if (existing) {
          updatedProducts = products.map((item) =>
            item.id === newProduct.id
              ? {
                  ...item,
                  quantity: item.quantity + newProduct.quantity,
                }
              : item
          );
        } else {
          updatedProducts = [...products, newProduct];
        }

        set(calculateAll(updatedProducts));
      },

      removeFromCart: (id) => {
        const updatedProducts = get().products.filter(
          (item) => item.id !== id
        );

        set(calculateAll(updatedProducts));
      },

      updateCartQuantity: (id, amount) => {
        const updatedProducts = get().products.map((item) =>
          item.id === id ? { ...item, quantity: amount } : item
        );

        set(calculateAll(updatedProducts));
      },

      clearCart: () => {
        set({
          products: [],
          allQuantity: 0,
          subtotal: 0,
          shipping: 0,
          tax: 0,
          total: 0,
        });
      },
    }),
    {
      name: "products-storage",
      storage: createJSONStorage(() => sessionStorage),

      onRehydrateStorage: () => (state) => {
        state.setHasHydrated(true);
      },
    }
  )
);

function calculateAll(products) {
  const subtotal = products.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const shipping = products.length > 0 ? 5 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const allQuantity = products.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return {
    products,
    subtotal,
    shipping,
    tax,
    total,
    allQuantity,
  };
}