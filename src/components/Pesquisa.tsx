import { areas, projetoDestaque } from "@/data/site";
import { Externo, IconeArea } from "./Marca";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

export default function Pesquisa() {
  return (
    <section id="pesquisa" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Titulo
            sobrancelha="Áreas de pesquisa"
            titulo="Em que pesquisamos"
            texto="Trabalhamos com engenharia, ciência de dados e conhecimento clínico em problemas reais de saúde e ciências da vida."
          />
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-azul">
              {areas.length} áreas
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, i) => (
            <Reveal
              as="li"
              key={area.titulo}
              delay={(i % 3) * 0.08}
              className="cartao cartao-vivo group relative overflow-hidden p-8"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-fundo text-azul transition-colors duration-300 group-hover:bg-navy group-hover:text-ciano">
                <IconeArea nome={area.icone} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-navy">{area.titulo}</h3>
              <p className="mt-2 leading-relaxed text-cinza">{area.texto}</p>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-azul to-ciano transition-transform duration-500 group-hover:scale-x-100" />
            </Reveal>
          ))}
        </ul>

        {/* Pesquisa em destaque, bloco escuro com uma "imagem" gerada em CSS. */}
        <Reveal className="mt-16 overflow-hidden rounded-3xl bg-navy text-white">
          <div className="grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-ciano">{projetoDestaque.rotulo}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight sm:text-3xl">
                {projetoDestaque.titulo}
              </h3>
              <p className="mt-4 leading-relaxed text-white/65">{projetoDestaque.texto}</p>
              <a
                href={projetoDestaque.link}
                target="_blank"
                rel="noreferrer"
                className="botao botao-contorno mt-8"
              >
                Ler o artigo
                <Externo className="h-4 w-4" />
              </a>
            </div>
            <Varredura />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Ilustração abstrata de uma ressonância: anéis concêntricos e uma linha de varredura. */
function Varredura() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-navy-escuro">
      <div className="pontos absolute inset-0 opacity-50" />
      <div className="absolute inset-0 grid place-items-center">
        {[88, 70, 52, 34].map((tamanho, i) => (
          <span
            key={tamanho}
            className="absolute rounded-[46%] border border-ciano/30"
            style={{
              width: `${tamanho}%`,
              height: `${tamanho * 0.85}%`,
              opacity: 0.35 + i * 0.15,
            }}
          />
        ))}
        <span className="absolute h-[22%] w-[18%] translate-x-[40%] -translate-y-[30%] rounded-full bg-ciano/40 blur-xl" />
        <span className="absolute h-[9%] w-[7%] translate-x-[100%] -translate-y-[75%] rounded-full border-2 border-ciano" />
      </div>
      <div className="absolute inset-x-0 top-0 h-1/3 animate-varre bg-gradient-to-b from-transparent via-ciano/15 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
        <span>RM · T1 · axial</span>
        <span className="text-ciano">segmentação automática</span>
      </div>
    </div>
  );
}
