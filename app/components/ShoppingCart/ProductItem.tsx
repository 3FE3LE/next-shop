"use client";
import React from "react";
import useSushiCart from "@hooks/useSushiCart";
import LabelsWrapper from "@components/LabelsWrapper";
import TextLabel from "@components/TextLabel";
import TextLabelItalic from "@components/TextLabelItalic";
import utils from "@utils/index";
import { TOrderProduct } from "../../types/SushiCartTypes";
import { CrossIcon, MinusIcon, PlusIcon } from "@components/Icons";
import Image from "next/image";
import { ASSETS_BASE_URI } from "@constants/index";

type TProductItemProps = {
  item: TOrderProduct;
};

export default function ProductItem({ item }: TProductItemProps) {
  const { handleAddProduct, handleDeleteProduct, handleRemoveProduct } =
    useSushiCart();

  const { product, quantity } = item;

  return (
    <div
      className="bg-slate-400/75 text-black relative box-border"
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
        <div className={`aspect-square  h-32 ${product.color}`}>
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
            <TextLabelItalic text={utils.formatPrice(product.price)} />
          </LabelsWrapper>
          <button
            onClick={() => handleRemoveProduct(product)}
            className="bg-slate-500 w-8 hover:bg-slate-300 transition-colors rounded-full aspect-square flex justify-center items-center"
          >
            <span className="fill-white p-2">
              <MinusIcon />
            </span>
          </button>
          <span className="text-slate-800 w-8 text-2xl rounded-full bg-slate-300 mx-2 flex justify-center items-center ">
            {quantity}
          </span>
          <button
            onClick={() => handleAddProduct(product)}
            className="bg-slate-500 w-8 hover:bg-slate-300 transition-colors rounded-full aspect-square flex justify-center items-center"
          >
            <span className="fill-white p-2">
              <PlusIcon />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
