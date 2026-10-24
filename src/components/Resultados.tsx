import { publicacoes } from "@/data/comum";
import type { Conteudo } from "@/data/pt";
import Contador from "./Contador";
import { Externo } from "./Marca";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

export default function Resultados({ c }: { c: Conteudo }) {
  const r = c.resultados;
  return (
    <section id="resultados" className="scroll-mt-20 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Titulo sobrancelha={r.sobrancelha} titulo={r.titulo} texto={r.texto} />

        <ul className="mt-10 sm:mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-linha bg-linha md:grid-cols-4 lg:grid-cols-7 [&>li:last-child]:col-span-2 lg:[&>li:last-child]:col-span-1">
          {r.indicadores.map((item, i) => (
            <Reveal
              as="li"
              key={item.rotulo}
              delay={i * 0.05}
              className="bg-white p-6"
            >
              <p className="flex h-9 items-end text-3xl font-semibold tracking-tight text-navy">
                {item.valor === null ? (
                  <span className="pb-1 text-sm font-medium text-cinza/70">
                    {r.emAtualizacao}
                  </span>
                ) : (
                  <Contador valor={item.valor} locale={c.lang} />
                )}
              </p>
              <p className="mt-3 text-sm font-semibold leading-snug text-navy">
                {item.rotulo}
              </p>
              <p className="mt-1 text-xs text-cinza">{item.detalhe}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-14 sm:mt-20 grid gap-14 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold text-navy">
                {r.publicacoesTitulo}
              </h3>
              <span className="text-xs text-cinza">{r.fonte}</span>
            </div>
            <ul className="mt-6 divide-y divide-linha border-y border-linha">
              {publicacoes.map((p, i) => (
                <Reveal as="li" key={p.doi} delay={i * 0.04}>
                  <a
                    href={p.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-5 py-5 transition-colors hover:bg-white"
                  >
                    <span className="mt-1 w-12 shrink-0 text-sm font-semibold text-azul">
                      {p.ano}
                    </span>
                    <span className="flex-1">
                      <span className="text-xs font-medium uppercase tracking-wider text-cinza">
                        {r.tipos[p.tipo]} · {p.veiculo}
                      </span>
                      <span className="mt-1 block font-medium leading-snug text-navy group-hover:text-azul">
                        {p.titulo}
                      </span>
                    </span>
                    <Externo className="mt-1 h-4 w-4 shrink-0 text-cinza transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-azul" />
                  </a>
                </Reveal>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-navy">
              {r.reconhecimentosTitulo}
            </h3>
            <ul className="mt-6 space-y-4">
              {r.reconhecimentos.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.titulo}
                  delay={i * 0.08}
                  className="cartao p-6"
                >
                  <p className="font-semibold text-navy">{item.titulo}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-cinza">
                    {item.texto}
                  </p>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-4 rounded-2xl bg-navy p-7 text-white">
              <p className="text-lg font-medium italic leading-snug">
                &ldquo;{r.citacao}&rdquo;
              </p>
              <p className="mt-3 text-sm text-white/55">{r.citacaoFonte}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
