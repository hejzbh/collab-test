"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useModal } from "@/store/modal-store";
const Modal = dynamic(() => import("@/components/modals/Modal"));
const Loader = dynamic(() => import("@/components/ui/Loader"));

// Props
interface ModalProviderProps {}

const ModalProvider = ({}: ModalProviderProps) => {
  const { modalType, isModalOpened } = useModal();

  if (!isModalOpened) return null;

  switch (modalType) {
    case "upload":
      const UploadModal = dynamic(
        () => import("@/components/modals/UploadModal"),
        { loading: () => <Loader /> }
      );
      return (
        <Modal>
          <UploadModal />
        </Modal>
      );
    default:
      return null;
  }
};

export default ModalProvider;
