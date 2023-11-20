import React, { FC, ReactNode } from "react";
import classNames from "classnames";
import { RowStyles } from "../../../constants/rowStyles";

interface RowProps {
  children: ReactNode;
  style?: RowStyles;
  classes?: string;
}

export const Row: FC<RowProps> = ({ children, style, classes }) => {
  const gridClasses = classNames("grid grid-row grid-cols-12", {
    classes: classes,
    "gap-y-8 md:gap-x-8 lg:gap-x-16": !classes,
  });

  const rowStyles = classNames("", {
    "py-16 md:py-32 bg-green-800 bg-primary text-primary-foreground":
      style === RowStyles.DEFAULT,
    "py-16 md:py-32 bg-red-800": style === RowStyles.SECONDARY,
  });
  return (
    <>
      <section className={rowStyles}>
        <div className="container mx-auto px-8">
          <div className={gridClasses}>{children}</div>
        </div>
      </section>
    </>
  );
};
