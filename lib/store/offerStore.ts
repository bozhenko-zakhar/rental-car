import { NewOffer } from "@/types/offer";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type DraftStore = {
	draft: NewOffer;
	setDraft: (offer: NewOffer) => void;
	clearDraft: () => void
}

const initialDraft: NewOffer = {
  name: '',
  email: '',
  comment: '',
};

export const useDraftStore = create<DraftStore>()(persist( (set) => ({
		draft: initialDraft,
		setDraft: (offer: NewOffer) => set(() => ({draft: offer})),
		clearDraft: () => set(() => ({draft: initialDraft}))
	}), {
		name: "draft-offer",
		partialize: (state) => ({ draft: state.draft})
	}
))