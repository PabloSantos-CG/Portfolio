import Banner from "./banner-component/Banner";
import ParticlesContainer from "@/components/ParticlesContainer";

export default function HomeSection() {
  return (
    <section className="max-w-6xl m-auto h-full-Home">
      <Banner />
      <ParticlesContainer />
    </section>
  );
}
