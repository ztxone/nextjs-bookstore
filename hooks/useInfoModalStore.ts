import { create } from "zustand";

export interface ModalStoreInterface {
  bookId?: string;
  isOpen: boolean;
  openModal: (bookId: string) => void;
  closeModal: () => void;
}

const useInfoModalStore = create<ModalStoreInterface>((set) => ({
  bookId: undefined,
  isOpen: false,
  openModal: (bookId: string) => set({ isOpen: true, bookId }),
  closeModal: () => set({ isOpen: false, bookId: undefined }),
}));

export default useInfoModalStore;
