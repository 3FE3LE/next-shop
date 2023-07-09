"use client";
import useSushiCart from "@hooks/useSushiCart";

export default function ShoppingCart() {
  const { modal, handleChangeModal, products } = useSushiCart();

  return (
    <div
      className={`fixed bg-black  h-vh w-1/3 right-0 top-0 bottom-0 transition-transform ${
        !modal ? "translate-x-full" : ""
      }`}
    >
      <div className="flex justify-between p-4">
        <h1 className="font-bold text-2xl">Shopping Cart</h1>
        <button onClick={() => handleChangeModal()} className="">
          <div className="fill-white hover:fill-slate-500 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.75em"
              viewBox="0 0 384 512"
            >
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          </div>
        </button>
      </div>
      <section className="h-full overflow-auto px-4">
        <h2 className="font-bold text-xl pb-8">Products</h2>
        <div className="grid grid-flow-row grid-cols-1 gap-4">
          {products.map((item) => (
            <div
              className="bg-slate-400 aspect-video text-black"
              key={item.color}
            >
              hola
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
