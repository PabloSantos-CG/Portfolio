import Midias from "./Midias";
import TextContent from "./TextContent";

export default function Footer() {
  return (
    <footer className="w-full text-white backdrop-blur-lg border-t border-gray-600 p-4">
      <div className="container flex max-lg:flex-col justify-between gap-y-8 m-auto text-left py-5">
        <TextContent />
        <Midias />
      </div>
      <div>
        <p className="text-center pb-2 pt-3 text-gray-300 text-xs sm:text-base">
          © Todos os direitos reservados. Pablo Santos.
        </p>
      </div>
    </footer>
  );
}
