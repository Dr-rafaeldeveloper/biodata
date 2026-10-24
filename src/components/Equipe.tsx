"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { colaboradoresExternos, equipe, lideres } from "@/data/site";
import Reveal from "./Reveal";
import Titulo from "./Titulo";

const total = equipe.reduce((soma, grupo) => soma + grupo.membros.length, 0);

export default function Equipe() {
  const [aba, setAba] = useState(equipe[1].categoria);
  const grupo = equipe.find((g) => g.categoria === aba) ?? equipe[0];

  return (
    <section id="equipe" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Titulo
          sobrancelha="Equipe"
          titulo="Quem faz o BioDatA"
          texto={`${total} pesquisadores em formação, da iniciação científica ao pós-doutorado, liderados por professores do DETI/UFC.`}
        />

        <ul className="mt-14 grid gap-5 lg:grid-cols-2">
          {lideres.map((l, i) => (
            <Reveal as="li" key={l.nome} delay={i * 0.1} className="cartao cartao-vivo flex items-center gap-6 p-6 sm:p-8">
              {/* TODO: trocar as iniciais pelas fotos oficiais dos líderes. */}
              <span className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-navy to-azul text-2xl font-semibold text-ciano">
                {l.iniciais}
              </span>
              <span>
                <span className="block text-lg font-semibold text-navy">{l.nome}</span>
                <span className="block text-sm text-cinza">{l.cargo}</span>
                <span className="mt-3 flex flex-wrap gap-2">
                  {l.foco.map((f) => (
                    <span key={f} className="rounded-full bg-fundo px-3 py-1 text-xs font-medium text-azul">
                      {f}
                    </span>
                  ))}
                </span>
              </span>
            </Reveal>
          ))}
        </ul>

        {/* Contagem por categoria, que também funciona como abas. */}
        <Reveal className="mt-16">
          <div role="tablist" aria-label="Membros por nível" className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {equipe.map((g) => {
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
                  <span className="block text-3xl font-semibold tracking-tight">{g.membros.length}</span>
                  <span className={`mt-1 block text-sm ${ativo ? "text-ciano" : "text-cinza"}`}>
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
              className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {grupo.membros.map((nome) => (
                <li key={nome} className="flex items-center gap-3 rounded-xl border border-linha px-4 py-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-fundo text-xs font-semibold text-azul">
                    {iniciais(nome)}
                  </span>
                  <span className="text-sm font-medium text-navy">{nome}</span>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>

          <p className="mt-6 text-sm text-cinza">
            Colaboração internacional:{" "}
            {colaboradoresExternos.map((c) => `${c.nome} (${c.pais})`).join(", ")}.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function iniciais(nome: string) {
  const partes = nome.split(" ").filter((p) => p.length > 2);
  return (partes[0][0] + (partes.at(-1)?.[0] ?? "")).toUpperCase();
}
