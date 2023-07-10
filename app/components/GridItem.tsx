"use client";
import useSushiCart from "@hooks/useSushiCart";
import { TProduct } from "../types/SushiCartTypes";
import TextLabel from "./TextLabel";
import TextLabelItalic from "./TextLabelItalic";
import utils from "@utils/index";
import TextDescription from "./TextDescription";
import LabelsWrapper from "./LabelsWrapper";

type GridItemProps = {
  item: TProduct;
};

export default function GridItem({ item }: GridItemProps) {
  const { handleAddProduct, isModalShow } = useSushiCart();

  return (
    <div
      onClick={() => handleAddProduct(item)}
      className={
        item.color + " first:col-span-2 first:row-span-2 aspect-square relative"
      }
    >
      <LabelsWrapper>
        <TextLabel isModal={isModalShow} text={item.name} />
        <TextLabelItalic
          isModal={isModalShow}
          text={utils.formatPrice(item.price)}
        />
      </LabelsWrapper>
      <TextDescription isModal={isModalShow} text={item.description} />
    </div>
  );
}
