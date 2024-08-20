import { useState } from "react";

export const useModal = (inithialValue = false) => {
  const [isOpen, setIsOpen] = useState(inithialValue);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal];
};
