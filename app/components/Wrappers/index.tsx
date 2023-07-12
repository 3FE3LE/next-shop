export const ContentWrapper = ({
  children,
  isModalShow,
}: {
  children: React.ReactNode;
  isModalShow: boolean;
}) => {
  return (
    <main
      className={`bg-black h-screen w-full transition origin-top-left  ${
        isModalShow
          ? "scale-66 md:scale-50 lg:scale-66 "
          : "xl:scale-66"
      }`}
    >
      <div
        className={` xl:transition-transform grid grid-flow-row grid-cols-2  ${
          isModalShow
            ? "md:grid-cols-2 lg:grid-cols-3   "
            : "md:grid-cols-3 xl:translate-x-1/4"
        }`}
      >
        {children}
      </div>
    </main>
  );
};

export const LabelsWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="absolute left-0 top-0 flex flex-col">{children}</div>;
};
