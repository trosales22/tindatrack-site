import { create } from 'zustand';

type ModalState = {
  openSuccessRegister: boolean;
  setOpenSuccessRegister: (open: boolean) => void;
};

export const useModalStore = create<ModalState>((set) => ({
  openSuccessRegister: false,
  setOpenSuccessRegister: (open) => set({ openSuccessRegister: open }),
}));
