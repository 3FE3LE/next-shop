import React from "react";
import { TLabelProps } from "../types/SushiCartTypes";

export default function TextDescription({ text, isModal }: TLabelProps) {
  return (
    <div
      className={`absolute right-0 bottom-0 w-2/3 max-h-16 md:max-h-32 lg:max-h-fit    overflow-hidden  text-slate-100 bg-black/25 p-1 lg:p-4 ${
        isModal ? "sm:max-w-2/3 sm:p-2" : "sm:max-w-sm sm:p-2"
      }`}
    >
      <p
        className={` text-sm lg:text-4xl font-black ${
          isModal ? "md:text-3xl" : "md:text-lg"
        } `}
      >
        {text}
      </p>
    </div>
  );
}
