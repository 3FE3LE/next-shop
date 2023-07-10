"use client";
import useSushiCart from "@hooks/useSushiCart";
import React from "react";

export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isModalShow } = useSushiCart();
  return (
    <div
      className={`w-full  transition origin-top-left  ${
        isModalShow ? "scale-66 md:scale-50 lg:scale-66 h-screen" : ""
      }`}
    >
      <div
        className={`grid grid-flow-row grid-cols-2  ${
          isModalShow ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
