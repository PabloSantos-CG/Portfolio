import { Livvic } from "next/font/google";

const livvic = Livvic({
  subsets: ["latin"],
  weight: ["500"],
});

export default function Logo() {
  return (
    <div className={`${livvic.className} text-center p-2`}>
      <span className={`font-medium text-4xl`}>P</span>
      <span className={`font-medium text-4xl relative right-2`}>S</span>
      <p className="text-[.63rem] font-medium text-center">
        SOFTWARE
        <br />
        DEVELOPER
      </p>
    </div>
  );
}
