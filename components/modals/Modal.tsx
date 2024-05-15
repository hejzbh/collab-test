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
      className="fixed top-0 left-0 w-full h-full z-[2000] bg-black/90 flex items-center justify-center"
    >
      <main className="p-7 bg-bgColors-modal rounded-xl shadow-xl w-[330px] sm:w-[550px]  h-[600px] md:w-[600px] md:h-[600px] flex items-center justify-center">
        {children}
      </main>
    </div>
  );
};

export default Modal;
