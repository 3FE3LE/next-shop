"use client";

import React, { createContext, useMemo, useState } from "react";
import { TProduct } from "../types/SushiCartTypes";

export type TSushiCartContext = {
  modal: boolean;
  handleChangeModal: () => void;
  products: TProduct[];
  handleAddProduct: (product: TProduct) => void;
  handleRemoveProduct: (product: TProduct) => void;
};

const SushiCartContext = createContext<TSushiCartContext>({
  modal: false,
  handleChangeModal: () => {},
  products: [],
  handleAddProduct: () => {},
  handleRemoveProduct: () => {},
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

    const handleRemoveProduct = (product: TProduct) => {
      const newProducts = products.filter(item => item !== product)
      setProducts(newProducts)
    }

    return { modal, handleChangeModal, products, handleAddProduct, handleRemoveProduct };
  }, [modal, products]);

  return (
    <SushiCartContext.Provider value={Context}>
      {children}
    </SushiCartContext.Provider>
  );
};
export { SushiCartProvider };

export default SushiCartContext;
