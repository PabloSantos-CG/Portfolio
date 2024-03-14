import { dataNav } from "@/data/dataNav";
import Ancor from "./Ancor";

export default function Nav() {
  return (
    <nav className="flex h-full gap-x-9 items-center">
      {dataNav.map((value, index) => (
        <Ancor key={index}>
          {value.icon}
          {value.title}
        </Ancor>
      ))}
    </nav>
  );
}
