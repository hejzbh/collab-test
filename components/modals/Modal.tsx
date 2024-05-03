import { useModal } from "@/store/modal-store";
import React from "react";

// Props
interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const { closeModal } = useModal();

  function onModalClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const clickedOutModalContent = !(e as any).target.closest("main");

    if (clickedOutModalContent) {
      closeModal();
    }
  }

  return (
    <div
      onClick={onModalClose}
      className="fixed top-0 left-0 w-full h-full z-20 bg-black/70 flex items-center justify-center"
    >
      <main className="p-20 bg-white">{children}</main>
    </div>
  );
};

export default Modal;
