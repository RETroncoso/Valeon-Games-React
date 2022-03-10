import { useState } from "react";

export const useOpenProduct = () => {
  const [openedProduct, setOpenedProduct] = useState(null);
  return {
    openedProduct,
    setOpenedProduct,
  };
};
