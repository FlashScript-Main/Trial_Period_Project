import { create } from "zustand";
  
const useCreateAccountModal = create<CreateAccountModalType>()(
    (set) => ({
        isModalActive: false, 
        setIsModalActive: (value) => set({ isModalActive: value }),
    }),
);

export default useCreateAccountModal;