"use client";
import useSushiCart from "@hooks/useSushiCart";
import GridItem from "@components/common/GridItem";
import { ContentWrapper } from "@components/Wrappers";
import { PlusIcon } from "@components/Icons";
import { sushiPlates } from "@constants/index";
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
      if (!currentProduct && localProduct) {
        handleSetProduct(localProduct);
      }
      if (products.length === 0 && localProducts) {
        handleSetProducts(localProducts ?? []);
      }
    }
  }, [currentProduct, handleSetProduct, handleSetProducts, products.length]);

  const categoryDishes = sushiPlates.map((product, i) => {
    if (
      currentProduct &&
      product.category === currentProduct.category &&
      product.id !== currentProduct.id
    ) {
      return product;
    }
  });

  return (
    <ContentWrapper isModalShow={isModalShow}>
      {currentProduct && (
        <>
          <GridItem
            item={currentProduct}
            handleSetProduct={handleSetProduct}
            isModalShow={isModalShow}
            isLastItem={false}
            isProductDetail
          />
          <div
            onClick={() => handleAddProduct(currentProduct)}
            className={`cursor-pointer z-10 p-16 aspect-square relative fill-black/20 hover:fill-black/40 hover:scale-110 transition flex justify-center items-center ${currentProduct.color}`}
          >
            <PlusIcon />
            <span className="absolute bottom-8">
              <h2 className="text-md sm:2xl text-white/75 hover:text-white transition-colors font-bold uppercase">
                Add to Cart
              </h2>
            </span>
          </div>
          <div className="aspect-square bg-black relative flex justify-evenly items-center pb-8 flex-col ">
            {currentProduct.ingredients.map((item) => (
              <li
                className="text-white text-xl sm:text-3xl lg:text-4xl uppercase font-bold"
                key={item}
              >
                {item}
              </li>
            ))}
            <div
              className={`absolute bottom-0 w-full py-2 h-18 flex justify-center ${currentProduct.color}`}
            >
              <h2 className="uppercase font-bold text-xl sm:text-3xl lg:text-4xl lg:py-4 text-white">
                ingredients
              </h2>
            </div>
          </div>
          <div
            className={`col-span-2 text-2xl  md:col-span-1 md:h-full md:px-4 h-16 uppercase font-bold md:text-3xl lg:text-4xl flex justify-center items-center  w-full bg-black `}
          >
            recommended dishes
          </div>
          {categoryDishes.map((product) => {
            return (
              <>
                {product && (
                  <GridItem
                    key={product.id}
                    item={product}
                    isModalShow={isModalShow}
                    handleSetProduct={handleSetProduct}
                    isLastItem={false}
                  ></GridItem>
                )}
              </>
            );
          })}
        </>
      )}
    </ContentWrapper>
  );
}
