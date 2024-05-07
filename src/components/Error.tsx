import { ReactNode } from "react";

export default function Error({ children }: { children: ReactNode }) {
  return (
    <p className="ml-1 text-red-600 text-xs font-bold capitalize my-1">
      {children}
    </p>
  );
}
