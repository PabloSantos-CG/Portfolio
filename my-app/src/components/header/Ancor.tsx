import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

export default function Ancor({ children }: Props) {
  return (
    <a
      href="Projects"
      className="flex gap-x-1 hover:text-slate-400 cursor-pointer"
    >
      {children}
    </a>
  );
}
