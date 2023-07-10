import React from "react";
import { TLabelProps } from "../types/SushiCartTypes";

export default function TextDescription({ text }: TLabelProps) {
  return (
    <div className="absolute right-0 bottom-0 max-w-sm text-slate-100 bg-black/25 p-4">
      <p className="text-4xl font-black ">{text}</p>
    </div>
  );
}
