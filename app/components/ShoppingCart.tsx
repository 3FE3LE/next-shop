"use client";
import useSushiCart from "@hooks/useSushiCart";

export default function ShoppingCart() {
  const {
    modal,
    handleChangeModal,
    products,
    handleAddProduct,
    handleRemoveProduct,
    handleDeleteProduct,
  } = useSushiCart();

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
        <div className="flex justify-between pb-8">
          <h2 className="font-bold text-xl ">
            Products:{" "}
            <span className="text-lg font-light">{products.length}</span>
          </h2>
        </div>
        <div className="grid grid-flow-row grid-cols-1 gap-4">
          {products.map(({ product, quantity }) => (
            <div
              className="bg-slate-400/75 text-black relative box-border"
              key={product.color}
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
                <div className={`aspect-square h-32 ${product.color}`}>{/* <Image/> */}</div>
                <div className="flex justify-center items-center relative p-4 w-full">
                  <span className="text-2xl font-bold absolute top-0 left-0 text-slate-100 bg-black">
                    {product.name}
                  </span>
                  <span className="text-lg italic absolute left-0 top-8 text-slate-100 bg-black">
                    {product.description}
                  </span>
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
          ))}
        </div>
      </section>
      <section className="h-32 sticky bottom-0 left-0 right-0 bg-slate-900">
        <h2 className="font-bold text-4xl text-slate-300">{"Cart Total"}</h2>
      </section>
    </div>
  );
}
