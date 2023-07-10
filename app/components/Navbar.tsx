"use client";
import useSushiCart from "@hooks/useSushiCart";
import Link from "next/link";
import { CartIcon } from "./Icons";

export default function Navbar() {
  const { handleChangeModal, products } = useSushiCart();

  return (
    <nav className="flex sticky top-0 justify-between p-4 h-18">
      <div className="flex gap-8 items-center">
        <h1 className="font-bold text-3xl">Sushi Shop</h1>
        <Link href={"/total"}>
          <li>Total</li>
        </Link>
        <Link href={"/resume"}>
          <li>Resume</li>
        </Link>
      </div>
      <button className="relative" onClick={() => handleChangeModal()}>
        <div className="absolute -right-2 -top-2  flex">
          <span
            className={`transition-transform ${
              products.length > 0 ? "scale-100" : "scale-0"
            }
             text-white font-bold text-xs m-auto bg-blue-500 rounded-full first-line:h-4 w-4`}
          >
            {products.length}
          </span>
        </div>
        <div className="fill-white hover:fill-slate-500 hover:scale-110 transition">
          <CartIcon/>
        </div>
      </button>
    </nav>
  );
}
