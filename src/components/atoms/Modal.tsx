import React, { ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal when the overlay (i.e. the area outside the modal) is clicked
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <div
      onClick={handleOverlayClick}
      className="fixed z-50 top-0 left-0 w-full h-full overflow-auto bg-opacity-50 bg-gray-900 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg p-4 max-w-sm mx-auto">
        <div>{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
