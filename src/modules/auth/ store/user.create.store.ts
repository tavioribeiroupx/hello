// src/stores/signupStore.ts
"use client";

import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type SignUpPersisted = {
  firstName: string;
  lastName: string;
  email: string;
  isChecked: boolean;
};

type SignUpStore = SignUpPersisted & {
  setField: <K extends keyof SignUpPersisted>(key: K, v: SignUpPersisted[K]) => void;
  setAll: (partial: Partial<SignUpPersisted>) => void;
  clear: () => void;
};

export const STORE_KEY = "signup-form";

export const useSignUpStore = create<SignUpStore>()(
  persist(
    (set) => ({
      firstName: "",
      lastName: "",
      email: "",
      isChecked: false,

      setField: (key, v) => set({ [key]: v } as any),
      setAll: (partial) => set(partial),
      clear: () => set({ firstName: "", lastName: "", email: "", isChecked: false }),
    }),
    {
      name: STORE_KEY,
      storage: createJSONStorage(() => localStorage),
      partialize: (s) => ({
        firstName: s.firstName,
        lastName: s.lastName,
        email: s.email,
        isChecked: s.isChecked,
      }),
    }
  )
);
