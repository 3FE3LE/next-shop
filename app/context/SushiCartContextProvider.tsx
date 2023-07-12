"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import SushiCartContext from "./SushiCartContext";
import { TOrderProduct, TProduct } from "../types/SushiCartTypes";

const SushiCartProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [isModalShow, setIsModalShow] = useState<boolean>(false);
  const [products, setProducts] = useState<TOrderProduct[]>([]);
  const [currentProduct, setCurrentProduct] = useState<TProduct>();
  const [total, setTotal] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  // Add or remove a sushi from the cart and update state accordingly
  useEffect(() => {
    
    const calcTotal = (): number => {
      let sum = 0;
      products.forEach(({ product, quantity }: TOrderProduct) => {
        sum += product.price * quantity;
      });
      return sum;
    };
    setTotal(calcTotal());
    if (products.length === 0 && !currentProduct) setIsModalShow(false);

    if (pathname === "./") {
      setCurrentProduct(undefined);
      setCategory("");
    }
  }, [products, pathname, currentProduct, category]);

  const Context = useMemo(() => {
    const handleChangeModal = () => {
      setIsModalShow(!isModalShow);
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
      localStorage.setItem('products', JSON.stringify(products))
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
        localStorage.setItem('products', JSON.stringify(products))
      };
      
      const handleDeleteProduct = (product: TProduct) => {
        const newProducts = products.filter((item) => item.product !== product);
        setProducts(newProducts);
        localStorage.setItem('products', JSON.stringify(products))
      };
      
      const handleSetProduct = (product: TProduct) => {
        localStorage.setItem('product', JSON.stringify(product))
        setCurrentProduct(product);
        setCategory(product.category);
    };

    return {
      total,
      isModalShow,
      handleChangeModal,
      products,
      handleAddProduct,
      handleRemoveProduct,
      handleDeleteProduct,
      currentProduct,
      handleSetProduct,
    };
  }, [isModalShow, products, total, currentProduct]);

  return (
    <SushiCartContext.Provider value={Context}>
      {children}
    </SushiCartContext.Provider>
  );
};
export { SushiCartProvider };
