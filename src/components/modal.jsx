import React from 'react';
import { useBoundedStore } from '../../store/store';
const Modal = ({ children }) => {
  const open = useBoundedStore((state) => state.open);
  const closeModal = useBoundedStore((state) => state.closeModal);
  return (
    <div
      className={`${
        open ? 'fixed block top-0 left-0' : 'hidden'
      } w-full h-full `}
    >
      <div
        onClick={closeModal}
        className="flex items-center justify-center w-screen h-screen bg-black/[0.5] font-ERegular"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
