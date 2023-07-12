"use client";
import useSushiCart from "@hooks/useSushiCart";
import ProductList from "./ProductList";
import utils from "@utils/index";
import { CrossIcon } from "@components/Icons";

export default function ShoppingCart() {
  const { totalPrice, isModalShow, handleChangeModal, totalQuantity } = useSushiCart();

  return (
    <div
      className={`fixed bg-black h-screen w-full md:w-1/2 lg:w-1/3 right-0 top-0 bottom-0 pt-16 transition-transform ${
        !isModalShow ? "translate-x-full" : ""
      }`}
    >
      <div className="absolute top-0 right-0 w-full flex justify-between p-4">
        <h1 className="text-white font-bold text-2xl">Shopping Cart</h1>
        <button onClick={() => handleChangeModal()} className="">
          <div className="fill-white hover:fill-slate-500 transition-colors">
            <CrossIcon />
          </div>
        </button>
      </div>
      <div className="box-border px-4 overflow-scroll h-full">
        <section className="flex justify-between pb-8">
          <h2 className="text-white font-bold text-xl ">
            Products:{" "}
            <span className="text-lg font-light">{totalQuantity}</span>
          </h2>
        </section>
        <ProductList />
        <section className="h-32 sticky z-20 bottom-0 mt-4 border-t-2 bg-black border-white left-0 right-0 py-4">
          <h2 className="font-bold text-4xl text-right text-slate-300">
            Total: {utils.formatPrice(totalPrice)}
          </h2>
        </section>
      </div>
    </div>
  );
}
