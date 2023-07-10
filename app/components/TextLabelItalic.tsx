import React from "react";
import { TLabelProps } from "../types/SushiCartTypes";

export default function TextLabelItalic({ text, isModal }: TLabelProps) {
  return (
    <span
      className={`w-fit transition-transform origin-left text-lg italic text-slate-100 bg-black px-2 ${
        isModal ? "scale-150 translate-y-3" : ""
      }`}
    >
      {text}
    </span>
  );
}
