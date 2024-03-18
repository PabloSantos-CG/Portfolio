import Midias from "./Midias";
import TextContent from "./TextContent";

export default function Footer() {
  return (
    <footer className="w-full text-white backdrop-blur-lg border-t border-gray-600 p-4">
      <div className="container grid grid-cols-3 justify-center gap-x-4 m-auto text-left mt-10 mb-5">
        <TextContent />
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
