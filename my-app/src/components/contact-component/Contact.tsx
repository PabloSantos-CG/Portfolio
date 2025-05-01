"use client";
import ContactForm from "./Form";

export default function Contact() {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-y-8 xl:gap-x-8 text-white ">
      <div className="xl:w-1/3 max-xl:flex max-xl:flex-col max-xl:justify-center">
        <h2 className="font-bold sm:text-4xl text-3xl mb-3 max-xl:text-center">
          Entre em{" "}
          <span className="text-blue-600 inline-block xl:block">Contato</span>
        </h2>
        <p className="text-gray-300 max-xl:hidden">
          Pronto para tornar suas ideias realidade? <br />
          Vamos discutir seu projeto e criar algo incrível juntos. Entre em
          contato para começarmos!
        </p>
      </div>

      <ContactForm />
    </div>
  );
}
