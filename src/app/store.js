"use client";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/features/cartSlice";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action);
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(getState().cart));
    }
    return result;
  };
};

const reHydrateStore = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      console.log("oo", storedCart);
      try {
        return {
          cart: JSON.parse(storedCart),
        };
      } catch (e) {
        console.error("Error parsing cart from localStorage:", e);
      }
    }
  }
  return undefined;
};

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
