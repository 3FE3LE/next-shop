import { createContext } from "react";
import { TOrderProduct, TProduct } from "../types/SushiCartTypes";

export type TSushiCartContext = {
  totalPrice: number;
  totalQuantity: number;
  isModalShow: boolean;
  handleChangeModal: () => void;
  products: TOrderProduct[];
  handleAddProduct: (product: TProduct) => void;
  handleRemoveProduct: (product: TProduct) => void;
  handleDeleteProduct: (product: TProduct) => void;
  currentProduct?: TProduct;
  handleSetProduct: (product: TProduct) => void;
  handleSetProducts: (product: TOrderProduct[]) => void;
};

const SushiCartContext = createContext<TSushiCartContext>({
  totalPrice: 0,
  totalQuantity: 0,
  isModalShow: false,
  handleChangeModal: () => {},
  products: [],
  handleAddProduct: () => {},
  handleRemoveProduct: () => {},
  handleDeleteProduct: () => {},
  currentProduct: undefined,
  handleSetProduct: () => {},
  handleSetProducts: () => {},
});

export default SushiCartContext;
