import { navegacao, site } from "@/data/site";
import { Logo, Seta } from "./Marca";
import Reveal from "./Reveal";

export default function Rodape() {
  const ano = new Date().getFullYear();

  return (
    <footer id="contato" className="scroll-mt-20 bg-navy-escuro text-white">
      {/* Chamada final de contato. */}
      <div className="mx-auto max-w-7xl px-5 pt-24 sm:px-8">
        <Reveal className="grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="sobrancelha sobrancelha-clara">Contato</p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Tem um problema em saúde? <span className="texto-ciano">Fale com a gente.</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/65">
              Empresas, hospitais, pesquisadores e estudantes podem escrever para o grupo e contar
              o que querem resolver.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <a href={`mailto:${site.email}`} className="botao botao-ciano">
              {site.email}
              <Seta className="h-4 w-4" />
            </a>
            <a href={site.instagram} target="_blank" rel="noreferrer" className="botao botao-contorno">
              Instagram @_biodata_
            </a>
          </div>
        </Reveal>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo claro />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              {site.nomeCompleto}. {site.endereco}.
            </p>
            <p className="mt-4 text-sm italic text-white/40">{site.assinatura}</p>
          </div>
          <nav aria-label="Rodapé">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/70 transition-colors hover:text-ciano">
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">Vínculos</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href="https://www.ufc.br" target="_blank" rel="noreferrer" className="hover:text-ciano">
                  Universidade Federal do Ceará
                </a>
              </li>
              <li>
                <a href="https://ppgeti.ufc.br/pt/" target="_blank" rel="noreferrer" className="hover:text-ciano">
                  PPGETI, nota 7 CAPES
                </a>
              </li>
              <li>
                <a
                  href="https://embrapii.org.br/unidades/sistemas-embarcados-complexos-lesc-ufc/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-ciano"
                >
                  LESC · Unidade EMBRAPII
                </a>
              </li>
              <li>
                <a href={site.cnpq} target="_blank" rel="noreferrer" className="hover:text-ciano">
                  Espelho do grupo no CNPq
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="border-t border-white/10 py-6 text-xs text-white/40">
          © {ano} {site.nome}. Grupo de pesquisa certificado pela UFC no CNPq.
        </p>
      </div>
    </footer>
  );
}
