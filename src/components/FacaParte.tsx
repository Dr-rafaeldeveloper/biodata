import { site } from "@/data/comum";
import type { Conteudo } from "@/data/pt";
import { Check, Externo, Seta } from "./Marca";
import Rede from "./Rede";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

/** Seção no espírito de uma página de carreiras: por que entrar e como entrar. */
export default function FacaParte({ c }: { c: Conteudo }) {
  const f = c.facaParte;
  return (
    <section id="faca-parte" className="scroll-mt-20 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Titulo
          centro
          sobrancelha={f.sobrancelha}
          titulo={f.titulo}
          texto={f.texto}
        />

        <ul className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {f.beneficios.map((b, i) => (
            <Reveal
              as="li"
              key={b.titulo}
              delay={(i % 3) * 0.08}
              className="cartao cartao-vivo p-7"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-ciano/15 text-azul">
                <Check className="h-5 w-5" />
              </span>
              <p className="mt-5 text-lg font-semibold text-navy">{b.titulo}</p>
              <p className="mt-2 leading-relaxed text-cinza">{b.texto}</p>
            </Reveal>
          ))}
        </ul>

        <Reveal className="relative mt-12 sm:mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-navy via-navy to-azul p-8 text-white sm:p-14">
          <Rede className="absolute inset-0 h-full w-full" />
          <div className="pontos absolute inset-y-0 right-0 w-1/2 opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]" />
          <div className="relative grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                {f.procuramos}
              </h3>
              <ul className="mt-6 space-y-3">
                {f.perfis.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-white/80">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-ciano" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center gap-4 lg:items-start">
              <p className="leading-relaxed text-white/70">{f.ingresso}</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={site.ppgeti}
                  target="_blank"
                  rel="noreferrer"
                  className="botao botao-ciano"
                >
                  {f.botaoEditais}
                  <Externo className="h-4 w-4" />
                </a>
                <a href="#contato" className="botao botao-contorno">
                  {f.botaoParticipar}
                  <Seta className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
