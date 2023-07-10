"use client";

import React, { createContext, useEffect, useMemo, useState } from "react";
import { TOrderProduct, TProduct } from "../types/SushiCartTypes";

export type TSushiCartContext = {
  total: number;
  modal: boolean;
  handleChangeModal: () => void;
  products: TOrderProduct[];
  handleAddProduct: (product: TProduct) => void;
  handleRemoveProduct: (product: TProduct) => void;
  handleDeleteProduct: (product: TProduct) => void;
};

const SushiCartContext = createContext<TSushiCartContext>({
  total: 0,
  modal: false,
  handleChangeModal: () => {},
  products: [],
  handleAddProduct: () => {},
  handleRemoveProduct: () => {},
  handleDeleteProduct: () => {},
});

const SushiCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<boolean>(false);
  const [products, setProducts] = useState<TOrderProduct[]>([]);
  const [total, setTotal] = useState<number>(0);
  // Add or remove a sushi from the cart and update state accordingly
  useEffect(() => {
    const calcTotal = (): number => {
      let sum = 0;
      products.forEach(({ product, quantity }: TOrderProduct) => {
        sum += product.price  * quantity;
      });
      return sum;
    };
    if (products.length === 0) {
      setModal(false);
    }
    setTotal(calcTotal());
  }, [products]);

  const Context = useMemo(() => {
    const handleChangeModal = () => {
      setModal(!modal);
    };

    const handleAddProduct = (product: TProduct) => {
      const ProductExist = products.find((item) => item.product === product);
      if (ProductExist) {
        setProducts(
          products.map((item) =>
            item.product === product
              ? {
                  ...ProductExist,
                  quantity:
                    ProductExist.quantity < 9
                      ? ProductExist.quantity + 1
                      : ProductExist.quantity,
                }
              : item
          )
        );
      } else {
        setProducts([
          ...products,
          {
            product,
            quantity: 1,
          },
        ]);
      }
    };

    const handleRemoveProduct = (product: TProduct) => {
      const ProductExist = products.find((item) => item.product === product);
      if (ProductExist && ProductExist.quantity > 1) {
        setProducts(
          products.map((item) =>
            item.product === product
              ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
              : item
          )
        );
      } else {
        handleDeleteProduct(product);
      }
    };

    const handleDeleteProduct = (product: TProduct) => {
      const newProducts = products.filter((item) => item.product !== product);
      setProducts(newProducts);
    };

    return {
      total,
      modal,
      handleChangeModal,
      products,
      handleAddProduct,
      handleRemoveProduct,
      handleDeleteProduct,
    };
  }, [modal, products, total]);

  return (
    <SushiCartContext.Provider value={Context}>
      {children}
    </SushiCartContext.Provider>
  );
};
export { SushiCartProvider };

export default SushiCartContext;
