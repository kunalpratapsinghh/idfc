import { create } from "zustand";

type SearchStore = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export const useSearchStore = create<SearchStore>(set => ({
  open: false,
  setOpen: value => set({ open: value })
}));

type StencilHydrated = {
  hydrated: boolean;
  setHydrated: (value: boolean) => void;
};

export const useStencilHydratedStore = create<StencilHydrated>(set => ({
  hydrated: false,
  setHydrated: value => set({ hydrated: value })
}));
