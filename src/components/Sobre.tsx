import { ciclo, historia } from "@/data/site";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

export default function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Titulo
              sobrancelha="Quem somos"
              titulo={
                <>
                  Nosso foco é <span className="text-azul">inovação aplicada</span>.
                </>
              }
              texto="Cada projeto do BioDatA começa por um problema concreto e é planejado para virar produto, processo ou política pública."
            />
            <Reveal delay={0.1}>
              <p className="mt-6 leading-relaxed text-cinza">
                Fundado em 2023 no Departamento de Engenharia de Teleinformática da UFC, o grupo
                reúne graduandos, mestrandos, doutorandos e pós-doutores que pesquisam engenharia
                biomédica orientada a dados. Somos vinculados ao PPGETI, programa com nota 7 na
                CAPES, e trabalhamos com o LESC, unidade EMBRAPII que faz projetos de P&D com
                empresas.
              </p>
            </Reveal>
          </div>

          {/* Ciclo de inovação: quatro etapas numeradas. */}
          <ol className="grid gap-4 sm:grid-cols-2">
            {ciclo.map((etapa, i) => (
              <Reveal as="li" key={etapa.titulo} delay={i * 0.08} className="cartao cartao-vivo p-7">
                <span className="text-sm font-semibold text-ciano [text-shadow:0_0_1px_var(--color-azul)]">
                  0{i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{etapa.titulo}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-cinza">{etapa.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Linha do tempo horizontal no desktop, vertical no celular. */}
        <div className="mt-24">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-cinza">
              Nossa história
            </h3>
          </Reveal>
          <ol className="relative mt-10 grid gap-10 border-l border-linha pl-8 lg:grid-cols-5 lg:gap-6 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
            {historia.map((marco, i) => (
              <Reveal as="li" key={marco.ano} delay={i * 0.07} className="relative">
                <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full border-2 border-fundo bg-azul ring-4 ring-ciano/20 lg:-top-[2.95rem] lg:left-0" />
                <p className="text-3xl font-semibold tracking-tight text-navy">{marco.ano}</p>
                <p className="mt-2 font-semibold text-azul">{marco.titulo}</p>
                <p className="mt-2 text-sm leading-relaxed text-cinza">{marco.texto}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
