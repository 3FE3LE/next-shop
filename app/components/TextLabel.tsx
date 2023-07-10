import React from "react";
import { TLabelProps } from "../types/SushiCartTypes";



export default function TextLabel({ text }: TLabelProps) {
  return (
    <span className="text-2xl font-bold absolute top-0 left-0 text-slate-100 bg-black px-2">
      {text}
    </span>
  );
}
