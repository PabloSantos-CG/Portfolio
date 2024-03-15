import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-lg">
      <div className="flex justify-between items-center max-w-6xl m-auto text-white">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
