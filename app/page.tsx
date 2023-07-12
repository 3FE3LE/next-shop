"use client";
import useSushiCart from "@hooks/useSushiCart";
import { ContentWrapper } from "@components/Wrappers";
import GridItem from "@components/common/GridItem";
import { sushiPlates } from "./constants";
import { useEffect } from "react";

export default function Home() {
  const { isModalShow, handleSetProducts, handleSetProduct, products } =
    useSushiCart();

  // set products if exist in local storage only if is empty
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const localProducts = JSON.parse(localStorage.getItem("products")!);
      if (products.length === 0 && localProducts) {
        handleSetProducts(localProducts ?? []);
      }
    }
  }, [products, handleSetProducts]);

  return (
    <ContentWrapper isModalShow={isModalShow}>
      {sushiPlates.map((item) => (
        <GridItem
          key={item.id}
          item={item}
          handleSetProduct={handleSetProduct}
          isModalShow={isModalShow}
          products={products}
        />
      ))}
    </ContentWrapper>
  );
}
