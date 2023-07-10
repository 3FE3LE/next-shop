import React from "react";

export default function LabelsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="absolute left-0 top-0 flex flex-col">{children}</div>;
}
