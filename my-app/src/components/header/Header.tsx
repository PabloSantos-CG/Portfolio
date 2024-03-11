import Logo from "./Logo";
import Nav from "./Nav";

export default function Header() {
  return (
    <header>
      <div className="flex justify-between max-w-6xl m-auto text-white">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
