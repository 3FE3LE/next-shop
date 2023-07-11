"use client";
import useSushiCart from "@hooks/useSushiCart";
import { TProduct } from "../types/SushiCartTypes";
import TextLabel from "./TextLabel";
import TextLabelItalic from "./TextLabelItalic";
import utils from "@utils/index";
import TextDescription from "./TextDescription";
import LabelsWrapper from "./LabelsWrapper";
import Image from "next/image";
import { ASSETS_BASE_URI } from "@constants/index";

type GridItemProps = {
  item: TProduct;
};

export default function GridItem({ item }: GridItemProps) {
  const { handleAddProduct, isModalShow, products } = useSushiCart();

  return (
    <div
      onClick={() => handleAddProduct(item)}
      className={`
        ${
          item.color
        } first:col-span-2 first:row-span-2 aspect-square relative ${
        products.length % 2 === 0 ? "last:col-span-2 sm:last:col-span-1" : ""
      }
      `}
    >
      <Image src={ASSETS_BASE_URI + item.img} alt={item.description.es} fill />
      <LabelsWrapper>
        <TextLabel isModal={isModalShow} text={item.name.es} />
        <TextLabelItalic
          isModal={isModalShow}
          text={utils.formatPrice(item.price)}
        />
      </LabelsWrapper>
      <TextDescription isModal={isModalShow} text={item.description.es} />
    </div>
  );
}
