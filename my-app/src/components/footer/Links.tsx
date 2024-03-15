import { dataNav } from "@/data/dataNav";

export default function Links() {
  return (
    <div>
      <h3 className="font-semibold text-lg text-gray-300 mb-4">SEÇÕES</h3>
      <ul className="flex justify-center gap-x-3">
        {dataNav.map((value) => (
          <li key={value.id}>
            <a
              href={`#${value.identifier}`}
              className="font-medium text-base hover:text-blue-600"
            >
              {value.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
