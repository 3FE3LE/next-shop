import React from "react";
import { TLabelProps } from "../types/SushiCartTypes";

export default function TextLabelItalic({ text }: TLabelProps) {
  return (
    <span className="text-lg italic absolute left-0 top-8 text-slate-100 bg-black px-2">
      {text}
    </span>
  );
}
