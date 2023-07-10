"use client";
import useSushiCart from "@hooks/useSushiCart";
import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList() {
  const {
    products
  } = useSushiCart();

  return (
    <section className="grid grid-flow-row grid-cols-1 gap-4">
      {products.map(( item ) => (
        <ProductItem key={item.product.img} item={item}/>
      ))}
    </section>
  );
}
