"use client";
import useSushiCart from "@hooks/useSushiCart";
import { TProduct } from "../types/SushiCartTypes";
import TextLabel from "./TextLabel";
import TextLabelItalic from "./TextLabelItalic";
import utils from "@utils/index";
import TextDescription from "./TextDescription";

type GridItemProps = {
  item: TProduct;
};

export default function GridItem({ item }: GridItemProps) {
  const { handleAddProduct } = useSushiCart();

  return (
    <div
      onClick={() => handleAddProduct(item)}
      className={
        item.color + " first:col-span-2 first:row-span-2 aspect-square relative"
      }
    >
      <TextLabel text={item.name} />
      <TextLabelItalic text={utils.formatPrice(item.price)} />
      <TextDescription text={item.description} />
    </div>
  );
}
