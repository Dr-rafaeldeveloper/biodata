"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { prefixo, totalMembros } from "@/data/comum";
import type { Conteudo } from "@/data/pt";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

export default function Equipe({ c }: { c: Conteudo }) {
  const e = c.equipe;
  const [aba, setAba] = useState(e.niveis[1].categoria);
  const grupo = e.niveis.find((g) => g.categoria === aba) ?? e.niveis[0];

  return (
    <section id="equipe" className="scroll-mt-20 bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Titulo
          sobrancelha={e.sobrancelha}
          titulo={e.titulo}
          texto={e.texto.replace("{n}", String(totalMembros))}
        />

        {/* Coluna da esquerda: líder e foto de evento, fixa enquanto a lista
            rola. Coluna da direita: abas por nível e os membros. */}
        <div className="mt-10 sm:mt-14 grid gap-8 lg:grid-cols-[22rem_1fr] lg:gap-12 xl:grid-cols-[26rem_1fr]">
          <div className="grid gap-5 self-start lg:sticky lg:top-24">
            <Reveal className="cartao cartao-vivo p-6">
              <div className="flex items-center gap-4">
                {e.lider.foto ? (
                  <Image
                    src={`${prefixo}${e.lider.foto}`}
                    alt={e.lider.nome}
                    width={400}
                    height={400}
                    unoptimized
                    className="h-16 w-16 shrink-0 rounded-2xl object-cover"
                  />
                ) : (
                  <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy to-azul text-xl font-semibold text-ciano">
                    {e.lider.iniciais}
                  </span>
                )}
                <div>
                  <p className="font-semibold leading-snug text-navy">
                    {e.lider.nome}
                  </p>
                  <p className="mt-0.5 text-sm text-cinza">{e.lider.cargo}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.lider.foco.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-fundo px-3 py-1 text-xs font-medium text-azul"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Foto de evento: zoom sutil no hover, legenda sobre um degradê. */}
            <Reveal
              delay={0.15}
              className="cartao group relative overflow-hidden"
            >
              <div className="aspect-[1000/1463] overflow-hidden">
                <Image
                  src={`${prefixo}${e.foto.src}`}
                  alt={e.foto.alt}
                  width={1000}
                  height={1463}
                  unoptimized
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-escuro/90 via-navy-escuro/50 to-transparent px-6 pb-6 pt-16 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ciano">
                  {e.foto.rotulo}
                </p>
                <p className="mt-1 font-semibold leading-snug">
                  {e.foto.titulo}
                </p>
                <p className="text-sm text-white/65">{e.foto.texto}</p>
              </div>
            </Reveal>
          </div>

          {/* Contagem por categoria, que também funciona como abas. */}
          <Reveal>
            <div
              role="tablist"
              aria-label={e.abas}
              className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
            >
              {e.niveis.map((g) => {
                const ativo = g.categoria === aba;
                return (
                  <button
                    key={g.categoria}
                    role="tab"
                    type="button"
                    aria-selected={ativo}
                    onClick={() => setAba(g.categoria)}
                    className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                      ativo
                        ? "border-navy bg-navy text-white shadow-lg"
                        : "border-linha bg-fundo text-navy hover:border-azul/40"
                    }`}
                  >
                    <span className="block text-3xl font-semibold tracking-tight">
                      {g.membros.length}
                    </span>
                    <span
                      className={`mt-1 block text-sm ${ativo ? "text-ciano" : "text-cinza"}`}
                    >
                      {g.categoria}
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={grupo.categoria}
                role="tabpanel"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="mt-6 grid gap-3 sm:grid-cols-2"
              >
                {grupo.membros.map((nome) => (
                  <li
                    key={nome}
                    className="flex items-center gap-3 rounded-xl border border-linha px-4 py-3"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-fundo text-xs font-semibold text-azul">
                      {iniciais(nome)}
                    </span>
                    <span className="text-sm font-medium text-navy">
                      {nome}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>

            <p className="mt-6 text-sm text-cinza">
              {e.colaboracao}{" "}
              {e.colaboradores
                .map((col) => `${col.nome} (${col.pais})`)
                .join(", ")}
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function iniciais(nome: string) {
  const partes = nome.split(" ").filter((p) => p.length > 2);
  return (partes[0][0] + (partes.at(-1)?.[0] ?? "")).toUpperCase();
}
