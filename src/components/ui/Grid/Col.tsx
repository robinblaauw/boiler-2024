import React, { FC, ReactNode } from "react";
import classNames from "classnames";

interface ColProps {
  spanClasses?: string;
  children: ReactNode;
}

export const Col: FC<ColProps> = ({ spanClasses, children }) => {
  const rowStyles = classNames("gap-y-8 flex flex-col", {
    "col-span-12": !spanClasses,
  });
  const colClasses = classNames(spanClasses);

  return <div className={`${colClasses} ${rowStyles}`}>{children}</div>;
};
