"use client";
import useSushiCart from "@hooks/useSushiCart";
import GridItem from "@components/common/GridItem";
import { ContentWrapper } from "@components/Wrappers";
import { PlusIcon } from "@components/Icons";
import { sushiPlates } from "@constants/index";
import { TProduct } from "../types/SushiCartTypes";
import { useEffect } from "react";

export default function ProductDetail() {
  const {
    currentProduct,
    handleAddProduct,
    isModalShow,
    handleSetProduct,
    products,
    handleSetProducts,
  } = useSushiCart();

  // set current product if exist in local storage only if not defined
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localProduct = JSON.parse(localStorage.getItem("product")!);
      const localProducts = JSON.parse(localStorage.getItem("products")!);
      console.log(localProduct, localProducts)
      if (!currentProduct && localProduct) {
        handleSetProduct(localProduct);
      }
      if (products.length === 0 && localProducts) {
        handleSetProducts(localProducts ?? []);
      }
    }
  }, [currentProduct, handleSetProduct, handleSetProducts, products.length]);

  return (
    <ContentWrapper isModalShow={isModalShow}>
      {currentProduct && (
        <>
          <GridItem
            item={currentProduct}
            handleSetProduct={handleSetProduct}
            isModalShow={isModalShow}
            products={products}
          />
          <div
            onClick={() => handleAddProduct(currentProduct)}
            className={`cursor-pointer p-16 aspect-square relative fill-black/20 hover:fill-red-600 hover:scale-110 transition flex justify-center items-center ${currentProduct.color}`}
          >
            <PlusIcon />
            <span className="absolute bottom-8">
              <h2 className="text-md sm:2xl text-white/75 hover:text-white transition-colors font-bold uppercase">
                Add to Cart
              </h2>
            </span>
          </div>
          <div className="aspect-square relative flex justify-evenly items-center pb-8 flex-col ">
            {currentProduct.ingredients.map((item) => (
              <li
                className="text-white text-xl sm:text-4xl uppercase font-bold"
                key={item}
              >
                {item}
              </li>
            ))}
            <div
              className={`absolute bottom-0 w-full py-2 h-18 flex justify-center ${currentProduct.color}`}
            >
              <h2 className="uppercase font-bold text-white">ingredients</h2>
            </div>
          </div>
          {sushiPlates.map((product: TProduct) => {
            if (
              product.category === currentProduct.category &&
              product.id !== currentProduct.id
            ) {
              return (
                <GridItem
                  key={product.id}
                  item={product}
                  isModalShow={isModalShow}
                  handleSetProduct={handleSetProduct}
                ></GridItem>
              );
            }
          })}
        </>
      )}
    </ContentWrapper>
  );
}
