import { create } from "zustand";
import { persist } from "zustand/middleware";

type userStoreState = {
  token: string;
  mail: string;
  name: string;
  setToken: (token: string) => void;
  setMail: (mail: string) => void;
  setName: (name: string) => void;
  logOut: () => void;
};

export const useUserStore = create<userStoreState>()(
  persist(
    (set) => ({
      token: "",
      mail: "",
      name: "",
      setToken: (token: string) => set((state) => ({ ...state, token })),
      setMail: (mail: string) => set((state) => ({ ...state, mail })),
      setName: (name: string) => set((state) => ({ ...state, name })),
      logOut: () => set((state) => ({ token: "", mail: "", name: "" })),
    }),
    { name: "user-LocalStorage" }
  )
);
