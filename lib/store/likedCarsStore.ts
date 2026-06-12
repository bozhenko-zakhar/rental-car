import { create } from "zustand";
import { persist } from "zustand/middleware";

type LikedCarsStore = {
	likedCars: string[];
	setLikedCars: (newCars: string[]) => void;
}

export const useLikedCarsStore = create<LikedCarsStore>()(persist( (set) => ({
		likedCars: [],
		setLikedCars: (newCars: string[]) => set(() => ({likedCars: newCars}))
	}), {
		name: "liked-cars",
		partialize: (state) => ({ likedCars: state.likedCars})
	}
))