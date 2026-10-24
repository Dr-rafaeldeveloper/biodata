import type { Conteudo } from "@/data/pt";
import Cabecalho from "./Cabecalho";
import Equipe from "./Equipe";
import FacaParte from "./FacaParte";
import Hero from "./Hero";
import Parcerias from "./Parcerias";
import Pesquisa from "./Pesquisa";
import Resultados from "./Resultados";
import Rodape from "./Rodape";
import RolagemSuave from "./RolagemSuave";
import Sobre from "./Sobre";

/** A página inteira, numa língua só. As rotas / e /en passam o conteúdo. */
export default function Site({ c }: { c: Conteudo }) {
  return (
    <>
      <RolagemSuave />
      <Cabecalho c={c} />
      <main className="flex-1">
        <Hero c={c} />
        <Sobre c={c} />
        <Pesquisa c={c} />
        <Resultados c={c} />
        <Parcerias c={c} />
        <Equipe c={c} />
        <FacaParte c={c} />
      </main>
      <Rodape c={c} />
    </>
  );
}
