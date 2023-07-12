"use client";
import useSushiCart from "@hooks/useSushiCart";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowLeftIcon, CartIcon } from "./Icons";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {
  const { handleChangeModal, totalQuantity } = useSushiCart();

  const pathname = usePathname();

  return (
    <>
      <nav className="flex sticky top-0 justify-between p-4  z-40 bg-black">
        <div className="flex gap-8 items-center">
          <Link className="flex items-center" href={"/"}>
            {pathname === "/" ? (
              <h1 className="text-white font-bold text-2xl"> Sushi Shop</h1>
            ) : (
              <>
                <span className="fill-white ">
                  <ArrowLeftIcon />
                </span>
                <h1 className="text-white font-bold pl-4 text-2xl">back to menu</h1>
              </>
            )}
          </Link>
        </div>
        <button className="relative" onClick={() => handleChangeModal()}>
          <div className="absolute -right-2 -top-2  flex">
            <span
              className={`transition-transform ${
                totalQuantity > 0 ? "scale-100" : "scale-0"
              }
            text-white font-bold text-xs m-auto bg-blue-500 rounded-full first-line:h-4 w-4`}
            >
              {totalQuantity}
            </span>
          </div>
          <div className="fill-white hover:fill-slate-500 hover:scale-110 transition">
            <CartIcon />
          </div>
        </button>
        <ShoppingCart />
      </nav>
    </>
  );
}
