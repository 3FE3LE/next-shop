import React from "react";
type TLabelProps = {
  text: string;
  isModal?: boolean;
  italic?: boolean;
};

export default function TextLabel({ text, isModal, italic }: TLabelProps) {
  return (
    <span
      className={` transition-transform origin-top-left font-bold text-slate-100 bg-black px-2 ${
        isModal ? "scale-115" : ""
      } ${italic ? "italic w-fit text-lg sm:text-xl" : " text-sm sm:text-lg"}`}
    >
      {text}
    </span>
  );
}
