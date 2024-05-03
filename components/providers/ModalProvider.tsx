"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useModal } from "@/store/modal-store";
const Modal = dynamic(() => import("@/components/modals/Modal"));
const UploadModal = dynamic(() => import("@/components/modals/UploadModal"));

// Props
interface ModalProviderProps {}

const ModalProvider = ({}: ModalProviderProps) => {
  const { modalType, isModalOpened } = useModal();

  if (!isModalOpened) return null;

  switch (modalType) {
    case "upload":
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

// KOD UKOLIKO U BUDUCNOSTI BUDE VISE MODALA

/**const ModalProvider = ({}: ModalProviderProps) => {
  const { modalType, isModalOpened } = useModal();

  if (!isModalOpened) return null;

  switch (modalType) {
    case "upload":
      const UploadModal = dynamic(
        () => import("@/components/modals/UploadModal"),
        {
          loading: () => <Loader />,
        }
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
 */
