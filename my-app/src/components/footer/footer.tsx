import Links from "./Links";
import Midias from "./Midias";
import TextContent from "./TextContent";

export default function Footer() {
  return (
    <footer className="w-full text-white backdrop-blur-lg border-t border-gray-600">
      <div className="grid grid-cols-3 justify-center gap-x-4 max-w-6xl m-auto text-center my-10">
        <TextContent />
        <Links />
        <Midias />
      </div>
      <div>
        <p className="text-center py-6 text-gray-300 ">
          © Todos os direitos reservados. Pablo Santos.
        </p>
      </div>
    </footer>
  );
}
