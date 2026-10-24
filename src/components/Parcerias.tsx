import type { Conteudo } from "@/data/pt";
import { Externo, Seta } from "./Marca";
import Rede from "./Rede";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

export default function Parcerias({ c }: { c: Conteudo }) {
  const p = c.parcerias;
  return (
    <section
      id="parcerias"
      className="relative isolate scroll-mt-20 overflow-hidden bg-navy-escuro py-24 text-white sm:py-32"
    >
      <Rede className="absolute inset-0 -z-10 h-full w-full" />
      <div className="pontos absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -left-40 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-azul/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Titulo
          escuro
          sobrancelha={p.sobrancelha}
          titulo={
            <>
              {p.titulo[0]}
              <span className="texto-ciano">{p.titulo[1]}</span>
              {p.titulo[2]}
            </>
          }
          texto={p.texto}
        />

        <ul className="mt-10 sm:mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {p.parceiros.map((item, i) => (
            <Reveal as="li" key={item.sigla} delay={i * 0.07}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="vidro group flex h-full flex-col p-6 transition-colors hover:border-ciano/50"
              >
                <span className="flex items-center justify-between">
                  <span className="text-2xl font-semibold tracking-tight text-white">
                    {item.sigla}
                  </span>
                  <Externo className="h-4 w-4 text-white/40 transition-colors group-hover:text-ciano" />
                </span>
                <span className="mt-3 text-sm font-medium text-ciano-claro">
                  {item.nome}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.papel}
                </span>
              </a>
            </Reveal>
          ))}
        </ul>

        {/* Como a empresa contrata: os quatro passos do modelo EMBRAPII. */}
        <div className="mt-14 sm:mt-20 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <h3 className="text-2xl font-semibold leading-tight">
              {p.chamadaTitulo}
            </h3>
            <p className="mt-4 leading-relaxed text-white/65">
              {p.chamadaTexto}
            </p>
            <a href="#contato" className="botao botao-ciano mt-8">
              {p.chamadaBotao}
              <Seta className="h-4 w-4" />
            </a>
          </Reveal>
          <ol className="grid gap-4 sm:grid-cols-2">
            {p.passos.map((passo, i) => (
              <Reveal
                as="li"
                key={passo.titulo}
                delay={i * 0.07}
                className="vidro p-6"
              >
                <span className="grid h-8 w-8 place-items-center rounded-full border border-ciano/50 text-sm font-semibold text-ciano">
                  {i + 1}
                </span>
                <p className="mt-4 font-semibold">{passo.titulo}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                  {passo.texto}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Próximos passos com o LESC. */}
        <div className="mt-16 sm:mt-24">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="sobrancelha sobrancelha-clara">
                {p.futurosSobrancelha}
              </p>
              <h3 className="mt-4 text-2xl font-semibold sm:text-3xl">
                {p.futurosTitulo}
              </h3>
            </div>
            <p className="max-w-md text-sm text-white/55">{p.futurosTexto}</p>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:mt-10 md:grid-cols-2">
            {p.futuros.map((item, i) => (
              <Reveal
                as="li"
                key={item.titulo}
                delay={(i % 2) * 0.08}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-azul/40 to-transparent p-7 transition-colors hover:border-ciano/40"
              >
                <span className="inline-flex rounded-full border border-ciano/30 px-3 py-1 text-xs text-ciano">
                  {item.tag}
                </span>
                <p className="mt-5 text-lg font-semibold">{item.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.texto}
                </p>
                <span className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-ciano/10 blur-2xl transition-opacity group-hover:opacity-100 sm:opacity-0" />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
