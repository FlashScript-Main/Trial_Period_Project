"use client";

// store/themeStore.ts
import { create } from 'zustand'
import { createJSONStorage, persist } from "zustand/middleware";

interface LanguageState {
    isEnglish: boolean;
    toggleLanguage: (isEnglish: boolean) => void
}

export const useLanguageStore = create<LanguageState>()(
    persist(
        (set) => ({
            isEnglish: true,
            toggleLanguage: () => set((state) => ({ isEnglish: state.isEnglish ? false : true })),
        }),
        {
            name: 'language-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);