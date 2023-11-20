import { FC, ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <main className="my-32 flex flex-col gap-16 md:gap-32">{children}</main>
  );
};
