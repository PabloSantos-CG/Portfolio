import { dataNav } from "@/data/dataNav";
import Ancor from "./Ancor";

type Props = {
  toggleOpen: boolean;
};

export default function Nav({ toggleOpen }: Props) {
  return (
    <nav>
      <ul
        className={`w-full max-md:bg-black max-md:py-9  max-md:left-0 max-md:top-4 ${
          !toggleOpen ? "hidden" : "flex"
        }  max-md:flex-col max-md:gap-y-4 md:gap-x-9 items-center pr-4`}
      >
        {dataNav.map((value) => (
          <li key={value.id}>
            <Ancor url={`#${value.identifier}`}>
              <span className="mt-1">{value.icon}</span>
              {value.title}
            </Ancor>
          </li>
        ))}
      </ul>
    </nav>
  );
}
