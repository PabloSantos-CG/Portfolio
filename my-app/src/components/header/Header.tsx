import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg bg-[#0000007d]">
      <div className="container flex justify-between items-center m-auto pl-2 text-white">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
