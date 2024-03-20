import ProjectsSlide from "./ProjectSlide";

export default function ProjectsContent() {
  return (
    <>
      <div className="max-w-[640px] xl:w-1/3">
        <h2 className="font-bold sm:text-4xl text-3xl mb-3">
          Meus <span className="inline-block xl:block">Projetos</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-base">
          Explore minha coleção de projetos. Cada um demonstra meu compromisso
          em criar soluções eficazes e alcançar resultados cada vez melhores.
        </p>
      </div>

      <ProjectsSlide />
    </>
  );
}
