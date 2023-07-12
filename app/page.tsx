"use client";
import useSushiCart from "@hooks/useSushiCart";
import { ContentWrapper } from "@components/Wrappers";
import GridItem from "@components/common/GridItem";
import { sushiPlates } from "./constants";

export default function Home() {
  const { isModalShow, handleSetProduct, products } = useSushiCart();
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
