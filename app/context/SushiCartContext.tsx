"use client";

import React, { createContext, useMemo, useState } from "react";
import { TProduct } from "../types/SushiCartTypes";

export type TSushiCartContext = {
  modal: boolean;
  handleChangeModal: () => void;
  products: TProduct[];
  handleAddProduct: (product: TProduct) => void;
};

const SushiCartContext = createContext<TSushiCartContext>({
  modal: false,
  handleChangeModal: () => {},
  products: [],
  handleAddProduct: () => {},
});

const SushiCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [products, setProducts] = useState<TProduct[]>([]);

  const Context = useMemo(() => {
    const handleChangeModal = () => {
      setModal(!modal);
    };

    const handleAddProduct = (product: TProduct) => {
      const newProducts = [...products, product];
      setProducts(newProducts);
    };

    return { modal, handleChangeModal, products, handleAddProduct };
  }, [modal, products]);

  return (
    <SushiCartContext.Provider value={Context}>
      {children}
    </SushiCartContext.Provider>
  );
};
export { SushiCartProvider };

export default SushiCartContext;
