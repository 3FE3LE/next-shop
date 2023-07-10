import React from "react";
import { TLabelProps } from "../types/SushiCartTypes";

export default function TextLabel({ text, isModal }: TLabelProps) {
  return (
    <span
      className={` text-xl sm:text-2xl transition-transform origin-left font-bold text-slate-100 bg-black px-2 ${
        isModal ? "scale-150" : ""
      }`}
    >
      {text}
    </span>
  );
}
