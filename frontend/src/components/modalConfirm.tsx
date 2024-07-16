import React from 'react';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string[];
  onConfirm: () => void;
  confirmLabel: string;
  cancelLabel: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  onConfirm,
  confirmLabel,
  cancelLabel
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-10 rounded-lg flex flex-col justify-center items-center relative">
        <Image
          src="/assets/icons/x-close.svg"
          alt="Close Icon"
          className="cursor-pointer absolute top-5 right-7"
          onClick={onClose}
          width={25}
          height={25}
        />

        <div className="flex flex-col items-center gap-4">
          <Image 
            src="/assets/icons/delete-Icon.svg" 
            alt="Trash Icon" 
            width={60} 
            height={60} 
          />

          <h2 className="text-lg font-semibold text-stone-900">{title}</h2>
          <div className="alert flex flex-col items-center font-normal">
            {description.map((line, index) => (
              <p key={index} className="text-sm text-stone-600">{line}</p>
            ))}
          </div>

          <div className="flex gap-4 mt-4">
            <button
              className="px-16 py-2 text-lg text-stone-800 border border-stone-600 rounded-md hover:bg-stone-100"
              onClick={onClose}
            >
              {cancelLabel}
            </button>
            <button
              className="px-16 py-2 text-lg text-white bg-red-500 rounded-md hover:bg-red-600"
              onClick={onConfirm}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
