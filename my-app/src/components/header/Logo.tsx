import { Livvic } from "next/font/google";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Logo() {
  return (
    <div
      className={`${livvic.className} text-center hover:text-slate-400 w-max mr-auto p-2`}
    >
      <a href="/">
        <span className={`font-medium text-xl sm:text-3xl`}>P</span>
        <span
          className={`font-medium text-xl sm:text-3xl relative right-1 sm:right-[6px]`}
        >
          S
        </span>
        <p className="sm:text-[8px] text-[6px] font-medium text-center">
          SOFTWARE
          <br />
          DEVELOPER
        </p>
      </a>
    </div>
  );
}
