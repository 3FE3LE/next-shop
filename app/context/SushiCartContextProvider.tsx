"use client";
import { useEffect, useMemo, useState } from "react";
import SushiCartContext from "./SushiCartContext";
import { TOrderProduct, TProduct } from "../types/SushiCartTypes";

const SushiCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [products, setProducts] = useState<TOrderProduct[]>([]);
  const [currentProduct, setCurrentProduct] = useState<TProduct>();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // Update total price when adding new items to the cart
  useEffect(() => {
    const calcTotal = (): { totalPrice: number; totalQuantity: number } => {
      let totalPrice = 0;
      let totalQuantity = 0;
      products.forEach(({ product, quantity }: TOrderProduct) => {
        totalPrice += product.price * quantity;
        totalQuantity += quantity;
      });
      return {
        totalPrice,
        totalQuantity,
      };
    };
    setTotalPrice(calcTotal().totalPrice);
    setTotalQuantity(calcTotal().totalQuantity);
    // close modal when not have products on cart
    if (products.length === 0 && !currentProduct) setIsModalShow(false);
  }, [products, currentProduct]);

  // Add or remove a sushi from the cart and update state accordingly
  const Context = useMemo(() => {
    const handleChangeModal = () => {
      setIsModalShow(!isModalShow);
    };

    const handleAddProduct = (product: TProduct) => {
      const ProductExist = products.find(
        (item) => item.product.id === product.id
      );
      if (ProductExist) {
        setProducts(
          products.map((item) =>
            item.product.id === product.id
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
      localStorage.setItem("products", JSON.stringify(products));
    };

    const handleRemoveProduct = (product: TProduct) => {
      const ProductExist = products.find(
        (item) => item.product.id === product.id
      );
      if (ProductExist && ProductExist.quantity > 1) {
        setProducts(
          products.map((item) =>
            item.product.id === product.id
              ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
              : item
          )
        );
        localStorage.setItem("products", JSON.stringify(products));
      } else {
        handleDeleteProduct(product);
      }
    };

    const handleDeleteProduct = (product: TProduct) => {
      const newProducts = products.filter(
        (item) => item.product.id !== product.id
      );
      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
    };

    const handleSetProduct = (product: TProduct) => {
      localStorage.setItem("product", JSON.stringify(product));
      setCurrentProduct(product);
    };

    const handleSetProducts = (localProducts: TOrderProduct[]) => {
      if (localProducts.length > 0) setProducts(localProducts);
    };
    return {
      totalPrice,
      isModalShow,
      handleChangeModal,
      products,
      handleAddProduct,
      handleRemoveProduct,
      handleDeleteProduct,
      currentProduct,
      handleSetProduct,
      handleSetProducts,
      totalQuantity,
    };
  }, [isModalShow, products, totalPrice, totalQuantity, currentProduct]);

  return (
    <SushiCartContext.Provider value={Context}>
      {children}
    </SushiCartContext.Provider>
  );
};
export { SushiCartProvider };
