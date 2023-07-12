import React from "react";
type TLabelProps = {
  text: string;
  isModal?: boolean;
  italic?: boolean;
};

export default function TextLabel({ text, isModal, italic }: TLabelProps) {
  return (
    <span
      className={` text-xl sm:text-2xl transition-transform origin-top-left font-bold text-slate-100 bg-black px-2 ${
        isModal ? "scale-150" : ""
      } ${italic ? "italic w-fit" : ""}`}
    >
      {text}
    </span>
  );
}
