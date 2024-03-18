import { dataNav } from "@/data/dataNav";
import Ancor from "./Ancor";

export default function Nav() {
  return (
    <nav className="flex h-full gap-x-9 items-center pr-4">
      {dataNav.map((value) => (
        <Ancor key={value.id} url={`#${value.identifier}`}>
          <span className="mt-1">{value.icon}</span>
          {value.title}
        </Ancor>
      ))}
    </nav>
  );
}
