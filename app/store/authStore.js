import { create } from "zustand";

const useAuthStore = create((set) => ({
	user: null,
	jwt: 1,
	updateJwt: (payload) => set(() => ({ jwt: payload })),
	updateUser: (payload) => set(() => ({ user: payload }))
}));

export { useAuthStore };
