import { create } from "zustand";

const useBasketStore = create((set) => ({
	basket: [],
	addBasket: (payload) =>
		set((state) => ({ basket: [...state.basket, payload] })),
	updateBasket: (payload) => set((state) => ({ basket: payload }))
}));

export { useBasketStore };
