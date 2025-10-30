import { create } from "zustand";
import { persist } from "zustand/middleware";

type userStoreState = {
  isAuthenticated: boolean;
  token: string;
  mail: string;
  name: string;
  hasHydrated: boolean;
  setHasHydrated: (hasHydrated: boolean) => void;
  setToken: (token: string) => void;
  setMail: (mail: string) => void;
  setName: (name: string) => void;
  logOut: () => void;
};

export const useUserStore = create<userStoreState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      token: "",
      mail: "",
      name: "",
      hasHydrated: false,
      setHasHydrated: (state: boolean) => set({ hasHydrated: state }),
      setToken: (token: string) =>
        set((state) => ({ ...state, token, isAuthenticated: true })),
      setMail: (mail: string) => set((state) => ({ ...state, mail })),
      setName: (name: string) => set((state) => ({ ...state, name })),

      logOut: () =>
        set((state) => ({
          token: "",
          mail: "",
          name: "",
          isAuthenticated: false,
        })),
    }),
    {
      name: "user-LocalStorage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
