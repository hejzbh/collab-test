import { create } from "zustand";

export type ModalType = "upload";

interface ModalStore {
  modalType: ModalType | null;
  isModalOpened: boolean;
  openModal: (modalType?: ModalType) => void; // eslint-disable-line
  closeModal: () => void;
  toggleModal: (modalType?: ModalType) => void; // eslint-disable-line
}

export const useModal = create<ModalStore>((set) => ({
  modalType: null,
  isModalOpened: false,
  openModal: (modalType) => {
    set((previousState) => ({
      ...previousState,
      modalType,
      isModalOpened: true,
    }));
  },
  closeModal: () => {
    set((previousState) => ({
      ...previousState,
      modalType: null,
      isModalOpened: false,
    }));
  },
  toggleModal: (modalType) => {
    set((previousState) => ({
      ...previousState,
      modalType: !previousState.isModalOpened ? modalType : null,
      isModalOpened: !previousState.isModalOpened,
    }));
  },
}));
