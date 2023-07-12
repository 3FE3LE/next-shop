"use client";
import useSushiCart from "@hooks/useSushiCart";
import { ContentWrapper } from "@components/Wrappers";
import GridItem from "@components/common/GridItem";
import { sushiPlates } from "./constants";
import { Fragment, useEffect } from "react";

export default function Home() {
  const { isModalShow, handleSetProducts, handleSetProduct, products } =
    useSushiCart();

  let category = "";
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
      {sushiPlates.map((item, i) => {
        // logic to set separators flag only the one time by category & after of first dish
        let categoryFlag = false;
        let lastItem = false;
        if (item.category !== category) {
          category = item.category;
          categoryFlag = true;
        }
        if (category !== "" && category !== "sushi-rolls") {
          lastItem =
            i + 1 < sushiPlates.length
              ? category !== sushiPlates[i + 1].category
              : true;
        }
        return (
          <Fragment key={item.id}>
            {categoryFlag && (
              <div
                className={`${
                  i === 0 ? " z-0" : "z-50 sticky"
                } px-4  top-0 py-2 col-span-full  ${
                  item.color
                }`}
              >
                <span className="text-3xl font-bold text-white">
                  {item.category}
                </span>
              </div>
            )}
            <GridItem
              item={item}
              isLastItem={lastItem}
              handleSetProduct={handleSetProduct}
              isModalShow={isModalShow}
            />
          </Fragment>
        );
      })}
    </ContentWrapper>
  );
}
