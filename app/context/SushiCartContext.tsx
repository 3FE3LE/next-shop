import { createContext } from "react";
import { TOrderProduct, TProduct } from "../types/SushiCartTypes";

export type TSushiCartContext = {
  total: number;
  isModalShow: boolean;
  handleChangeModal: () => void;
  products: TOrderProduct[];
  handleAddProduct: (product: TProduct) => void;
  handleRemoveProduct: (product: TProduct) => void;
  handleDeleteProduct: (product: TProduct) => void;
  currentProduct?: TProduct;
  handleSetProduct: (product: TProduct) => void;
};

const SushiCartContext = createContext<TSushiCartContext>({
  total: 0,
  isModalShow: false,
  handleChangeModal: () => {},
  products: [],
  handleAddProduct: () => {},
  handleRemoveProduct: () => {},
  handleDeleteProduct: () => {},
  currentProduct: undefined,
  handleSetProduct: () => {},
});



export default SushiCartContext;
