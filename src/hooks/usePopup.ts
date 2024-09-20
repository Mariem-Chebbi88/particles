// hooks/usePopup.ts
import { useState } from 'react';

export const usePopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return { isPopupOpen, openPopup, closePopup };
};
