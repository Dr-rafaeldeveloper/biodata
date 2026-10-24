import { numerosDestaque, selos } from "@/data/site";
import Contador from "./Contador";
import { Check, Seta, Simbolo } from "./Marca";
import Rede from "./Rede";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-navy-escuro text-white">
      {/* Fundo: rede viva, brilhos e grade de pontos. */}
      <Rede className="absolute inset-0 -z-10 h-full w-full" />
      <div className="absolute -right-40 -top-40 -z-20 h-[38rem] w-[38rem] animate-deriva rounded-full bg-azul/60 blur-3xl" />
      <div className="absolute -bottom-52 -left-32 -z-20 h-[30rem] w-[30rem] rounded-full bg-ciano/10 blur-3xl" />
      <div className="pontos absolute inset-y-0 right-0 -z-10 w-1/2 opacity-40 [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-40">
        <div>
          <p className="entra sobrancelha sobrancelha-clara">Pesquisa · Dados · IA · Saúde</p>
          <h1
            className="entra mt-6 text-[2.5rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "80ms" }}
          >
            Ciência de dados que vira <span className="texto-ciano">inovação aplicada</span> em
            saúde.
          </h1>
          <p
            className="entra mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            style={{ animationDelay: "160ms" }}
          >
            Somos o Biomedical Data Analytics Research Group da UFC. Usamos inteligência
            artificial, processamento de sinais e visão computacional em problemas reais da
            medicina, e o que desenvolvemos é feito para sair do laboratório.
          </p>
          <div className="entra mt-9 flex flex-wrap gap-3" style={{ animationDelay: "240ms" }}>
            <a href="#pesquisa" className="botao botao-ciano">
              Conheça nossa pesquisa
              <Seta className="h-4 w-4" />
            </a>
            <a href="#faca-parte" className="botao botao-contorno">
              Faça parte do grupo
            </a>
          </div>
        </div>

        {/* Cartão com o símbolo e os selos, o "produto" visual do hero. */}
        <div className="entra relative hidden lg:block" style={{ animationDelay: "300ms" }}>
          <div className="absolute inset-0 m-auto h-80 w-80 animate-girar rounded-full border border-dashed border-ciano/25" />
          <div className="absolute inset-0 m-auto h-[26rem] w-[26rem] rounded-full border border-white/5" />
          <div className="relative mx-auto grid h-[26rem] w-[26rem] place-items-center">
            <Simbolo className="h-44 w-44 drop-shadow-[0_0_50px_rgba(0,228,255,0.35)]" />
          </div>
          <div className="vidro absolute -left-6 top-10 flex items-center gap-3 px-4 py-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ciano text-sm font-bold text-navy-escuro">
              7
            </span>
            <span className="text-sm leading-tight">
              Nota máxima
              <span className="block text-xs text-white/55">CAPES · PPGETI</span>
            </span>
          </div>
          <div className="vidro absolute -right-2 bottom-12 flex items-center gap-3 px-4 py-3">
            <span className="h-2.5 w-2.5 animate-pulso rounded-full bg-ciano" />
            <span className="text-sm leading-tight">
              Parceiro LESC
              <span className="block text-xs text-white/55">Unidade EMBRAPII</span>
            </span>
          </div>
        </div>
      </div>

      {/* Faixa de números, como a vitrine de indicadores dos sites de empresa. */}
      <div className="border-t border-white/10 bg-navy-escuro/60 backdrop-blur">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 lg:grid-cols-4">
          {numerosDestaque.map((n) => (
            <div key={n.rotulo} className="border-l border-white/10 pl-5">
              <dd className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                <Contador valor={n.valor} sufixo={n.sufixo} semAgrupar={n.semAgrupar} />
              </dd>
              <dt className="mt-1 text-sm text-white/55">{n.rotulo}</dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="bg-navy">
        <ul className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:px-8 md:grid-cols-3">
          {selos.map((s) => (
            <li key={s.titulo} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ciano/15 text-ciano">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-sm leading-snug">
                <strong className="font-semibold text-white">{s.titulo}</strong>
                <span className="block text-white/55">{s.texto}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
