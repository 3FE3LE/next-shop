"use client";
import { MinusIcon, PlusIcon } from "../Icons";
import useSushiCart from "@hooks/useSushiCart";
import { TProduct } from "../../types/SushiCartTypes";

export default function QuantityControl({
  product,
  quantity,
}: {
  product: TProduct;
  quantity?: number;
}) {
  const { handleAddProduct, handleRemoveProduct } = useSushiCart();

  return (
    <>
      <button
        onClick={() => handleRemoveProduct(product)}
        className="bg-slate-500/20 w-8 hover:bg-slate-300/80 transition-colors rounded-full aspect-square flex justify-center items-center"
      >
        <span className="fill-white p-2">
          <MinusIcon />
        </span>
      </button>
      <span className="text-slate-800 w-8 text-2xl rounded-full bg-slate-300/70 mx-2 flex justify-center items-center ">
        {quantity}
      </span>
      <button
        onClick={() => handleAddProduct(product)}
        className="bg-slate-500/20 w-8 hover:bg-slate-300/80 transition-colors rounded-full aspect-square flex justify-center items-center"
      >
        <span className="fill-white p-2">
          <PlusIcon />
        </span>
      </button>
    </>
  );
}
