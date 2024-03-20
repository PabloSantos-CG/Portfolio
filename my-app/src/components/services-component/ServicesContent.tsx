import ServiceSlide from "./ServiceSlide";

export default function ServicesContent() {
  return (
    <>
      <div className="md:max-w-[640px] max-w-[440px] xl:w-1/3">
        <h2 className="font-bold sm:text-4xl text-3xl mb-3">
          Meus <span className="inline-block xl:block">Serviços</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-base">
          Explorando o vasto campo dos serviços de desenvolvimento web, serviços
          especializados que não só impulsionam, mas também elevam seu projeto a
          novos patamares. Ofereço soluções personalizadas, adaptadas para
          atender às suas necessidades,
          <strong> garantindo resultados que superam suas expectativas</strong>.
        </p>
      </div>

      <ServiceSlide />
    </>
  );
}
