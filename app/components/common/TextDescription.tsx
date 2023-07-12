type TLabelDescriptionProps = {
  text: string;
  isModal: boolean;
};
export default function TextDescription({
  text,
  isModal,
}: TLabelDescriptionProps) {
  return (
    <div
      className={`absolute right-0 bottom-0 w-2/3 max-h-16 md:max-h-32 lg:max-h-fit overflow-hidden text-slate-100 bg-black/25 p-1 lg:p-4 ${
        isModal ? "sm:max-w-2/3 lg:p-2 lg:max-w-lg " : "sm:max-w-sm  sm:p-2"
      }`}
    >
      <p
        className={` leading-none md:leading-none text-sm lg:text-xl xl:text-2xl font-black ${
          isModal ? "md:text-2xl  lg:text-xl " : "md:text-lg"
        } `}
      >
        {text}
      </p>
    </div>
  );
}
