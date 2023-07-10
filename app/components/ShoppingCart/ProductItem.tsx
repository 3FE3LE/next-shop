"use client";
import React from "react";
import useSushiCart from "@hooks/useSushiCart";
import LabelsWrapper from "@components/LabelsWrapper";
import TextLabel from "@components/TextLabel";
import TextLabelItalic from "@components/TextLabelItalic";
import utils from "@utils/index";
import { TOrderProduct } from "../../types/SushiCartTypes";

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
        <div className="fill-white hover:fill-slate-500 transition-colors ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.75em"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </div>
      </button>
      <div className="flex justify-between">
        <div className={`aspect-square h-32 ${product.color}`}>
          {/* <Image/> */}
        </div>
        <div className="flex justify-center items-center relative p-4 w-full">
          <LabelsWrapper>
            <TextLabel text={product.name} />
            <TextLabelItalic text={utils.formatPrice(product.price)} />
          </LabelsWrapper>
          <button
            onClick={() => handleRemoveProduct(product)}
            className="bg-slate-500 w-8 hover:bg-slate-300 rounded-full aspect-square flex justify-center items-center"
          >
            <span className="fill-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
              </svg>
            </span>
          </button>
          <span className="text-slate-800 w-8 text-2xl rounded-full bg-slate-300 mx-2 flex justify-center items-center ">
            {quantity}
          </span>
          <button
            onClick={() => handleAddProduct(product)}
            className="bg-slate-500 w-8 hover:bg-slate-300 rounded-full aspect-square flex justify-center items-center"
          >
            <span className="fill-white p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
