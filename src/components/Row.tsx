import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Row = ({ children }: Props) => (
  <div className="flex w-full border-b border-gray-300 last:border-none">
    {children}
  </div>
);

export { Row };
