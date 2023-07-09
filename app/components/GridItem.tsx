"use client";
import useSushiCart from "@hooks/useSushiCart";
import { TProduct } from "../types/SushiCartTypes";

type GridItemProps = {
  item: TProduct;
};

export default function GridItem({ item }: GridItemProps) {
  const { handleAddProduct } = useSushiCart();

  return (
    <div
      onClick={() => handleAddProduct(item)}
      className={
        item.color + " first:col-span-2 first:row-span-2 aspect-square"
      }
    >
      {item.color}
    </div>
  );
}
