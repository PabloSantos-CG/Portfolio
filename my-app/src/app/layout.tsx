import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  creator: "Pablo Santos Cezar Gomes",
  title: "Pablo Santos Cezar Gomes | FullStack Developer",
  description:
    "Programador, capacitado para atender a suas demandas e executar seus projetos. Especializado em tecnologias não só do Front-End, com React.Js e Next.js, como também do Back-End, utilizando Node.Js., Python e PHP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className="scroll-smooth scrollbar-thin scrollbar-track-transparent scrollbar-thumb-slate-600"
    >
      <body className={`${inter.className} bg-black`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
