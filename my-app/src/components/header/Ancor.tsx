import { ReactNode } from "react";

type Props = {
  url: string;
  children: ReactNode;
}

export default function Ancor({ children, url }: Props) {
  return (
    <a
      href={url}
      className="flex gap-x-1 hover:text-slate-400 cursor-pointer"
    >
      {children}
    </a>
  );
}
