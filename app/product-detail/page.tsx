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
  } = useSushiCart();

  useEffect(() => {
    if (!currentProduct) {
      const localProduct = JSON.parse(localStorage.getItem("product")!);
      handleSetProduct(localProduct);
    }
  }, [currentProduct, handleSetProduct]);

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
            className={`cursor-pointer p-16 aspect-square relative fill-black/20 flex justify-center items-center ${currentProduct.color}`}
          >
            <PlusIcon />
            <span className="absolute bottom-8">
              <h2 className="text-md sm:2xl text-white/75 hover:text-white transition-colors font-bold uppercase">
                Add to Cart
              </h2>
            </span>
          </div>
          <div className="aspect-square relative">
            <div
              className={`absolute bottom-0 w-full py-2 h-18 flex justify-center ${currentProduct.color}`}
            >
              <h2 className="uppercase text  font-bold text-white">
                {currentProduct.category}
              </h2>
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
