"use client";
import Image from "next/image";
import useSushiCart from "@hooks/useSushiCart";
import { LabelsWrapper } from "@components/Wrappers";
import { CrossIcon } from "@components/Icons";
import TextLabel from "@components/common/TextLabel";
import QuantityControl from "./ProductQuantityControl";
import utils from "@utils/index";
import { TOrderProduct } from "../../types/SushiCartTypes";
import { ASSETS_BASE_URI } from "@constants/index";

type TProductItemProps = {
  item: TOrderProduct;
};

export default function ProductItem({ item }: TProductItemProps) {
  const { handleDeleteProduct } = useSushiCart();

  const { product, quantity } = item;

  return (
    <div
      className={`text-black relative box-border ${product.color}`}
      key={product.img}
    >
      <button
        onClick={() => handleDeleteProduct(product)}
        className="absolute z-10 right-4 top-4"
      >
        <div className="fill-white hover:fill-red-200 transition-colors ">
          <CrossIcon />
        </div>
      </button>
      <div className="flex justify-between">
        <div className={`aspect-square relative h-32 ${product.color}`}>
          <Image
            className="aspect-square"
            src={ASSETS_BASE_URI + product.img}
            alt={product.description.en}
            width={132}
            height={132}
          />
        </div>
        <div className="flex justify-center items-center relative p-4 w-full">
          <LabelsWrapper>
            <TextLabel text={product.name.es} />
            <TextLabel italic text={utils.formatPrice(product.price)} />
          </LabelsWrapper>
          <QuantityControl product={product} quantity={quantity} />
        </div>
      </div>
    </div>
  );
}
