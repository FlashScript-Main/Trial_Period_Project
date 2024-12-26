import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            username: "",
            email: "",
            password: "",
            setUser: (user) => set(user),
        }),
        {
            name: "userinfo-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useUserStore;