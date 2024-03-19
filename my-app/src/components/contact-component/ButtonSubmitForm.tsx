import { BsArrowRight } from "react-icons/bs";

export default function ButtonSubmitForm() {
  return (
    <button
      className="
          flex items-center justify-center gap-x-3
          xl:w-max px-5 py-1
          font-semibold
          rounded-lg border border-gray-400 hover:border-blue-600
          transition-all duration-300 
          overflow-hidden hover:border-accent group
        "
    >
      <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
        Enviar e-mail
      </span>
      <BsArrowRight
        className="
            -translate-y-[120%] opacity-0 transition-all duration-300 absolute text-[22px]
            group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 text-blue-600
          "
      />
    </button>
  );
}
