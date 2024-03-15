import { Livvic } from "next/font/google";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Logo() {
  return (
    <div className={`${livvic.className} text-center hover:text-slate-400 p-2`}>
      <a href="#Home">
        <span className={`font-medium text-3xl`}>P</span>
        <span className={`font-medium text-3xl relative right-[6px]`}>S</span>
        <p className="text-[8px] font-medium text-center">
          SOFTWARE
          <br />
          DEVELOPER
        </p>
      </a>
    </div>
  );
}
