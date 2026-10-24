import Cabecalho from "@/components/Cabecalho";
import Equipe from "@/components/Equipe";
import FacaParte from "@/components/FacaParte";
import Hero from "@/components/Hero";
import Parcerias from "@/components/Parcerias";
import Pesquisa from "@/components/Pesquisa";
import Resultados from "@/components/Resultados";
import Rodape from "@/components/Rodape";
import RolagemSuave from "@/components/RolagemSuave";
import Sobre from "@/components/Sobre";

export default function Home() {
  return (
    <>
      <RolagemSuave />
      <Cabecalho />
      <main className="flex-1">
        <Hero />
        <Sobre />
        <Pesquisa />
        <Resultados />
        <Parcerias />
        <Equipe />
        <FacaParte />
      </main>
      <Rodape />
    </>
  );
}
