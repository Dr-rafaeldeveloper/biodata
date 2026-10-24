import type { Conteudo } from "@/data/pt";
import Demonstracao from "./Demonstracao";
import { Externo, IconeArea } from "./Marca";
import Rede from "./Rede";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

export default function Pesquisa({ c }: { c: Conteudo }) {
  const p = c.pesquisa;
  return (
    <section id="pesquisa" className="scroll-mt-20 bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Titulo
            sobrancelha={p.sobrancelha}
            titulo={p.titulo}
            texto={p.texto}
          />
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azul">
              {p.areas.length} {p.contagem}
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {p.areas.map((area, i) => (
            <Reveal
              as="li"
              key={area.titulo}
              delay={(i % 3) * 0.08}
              className="cartao cartao-vivo group relative overflow-hidden p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-fundo text-azul transition-colors duration-300 group-hover:bg-navy group-hover:text-ciano">
                <IconeArea nome={area.icone} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-navy">
                {area.titulo}
              </h3>
              <p className="mt-2 leading-relaxed text-cinza">{area.texto}</p>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-azul to-ciano transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </ul>

        {/* Pesquisa em destaque, bloco escuro com uma "imagem" gerada em CSS. */}
        <Reveal className="relative mt-12 sm:mt-16 overflow-hidden rounded-3xl bg-navy text-white">
          <Rede className="absolute inset-0 h-full w-full" />
          <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-ciano">
                {p.destaque.rotulo}
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                {p.destaque.titulo}
              </h3>
              <p className="mt-4 leading-relaxed text-white/65">
                {p.destaque.texto}
              </p>
              <a
                href={p.destaque.link}
                target="_blank"
                rel="noreferrer"
                className="botao botao-contorno mt-8"
              >
                {p.destaque.botao}
                <Externo className="h-4 w-4" />
              </a>
            </div>
            <Demonstracao t={p.demonstracao} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
