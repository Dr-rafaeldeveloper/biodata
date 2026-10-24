"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Conteudo } from "@/data/pt";
import { BandeiraBR, BandeiraUS, Logo } from "./Marca";

export default function Cabecalho({ c }: { c: Conteudo }) {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  /* Trava a rolagem enquanto o menu do celular estiver aberto. */
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou || aberto
          ? "border-b border-white/10 bg-navy-escuro/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8">
        <a
          href="#inicio"
          onClick={() => setAberto(false)}
          aria-label={c.cabecalho.inicio}
        >
          <Logo claro />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {c.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-white/70 transition-colors hover:text-ciano"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <SeletorIdioma c={c} />
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? c.cabecalho.fecharMenu : c.cabecalho.abrirMenu}
            aria-expanded={aberto}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white lg:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  aberto ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${
                  aberto ? "top-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {aberto ? (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <div className="px-5 pb-6 pt-2">
              {c.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="block border-b border-white/10 py-4 text-lg text-white/85"
                >
                  {item.rotulo}
                </a>
              ))}
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

/**
 * Bandeiras de Brasil e Estados Unidos. São links para a outra versão do
 * site (/ e /en); o Link cuida do basePath no GitHub Pages.
 */
function SeletorIdioma({ c }: { c: Conteudo }) {
  const opcoes = [
    {
      lang: "pt-BR",
      caminho: "/",
      rotulo: c.cabecalho.portugues,
      Bandeira: BandeiraBR,
    },
    {
      lang: "en-US",
      caminho: "/en",
      rotulo: c.cabecalho.ingles,
      Bandeira: BandeiraUS,
    },
  ];
  return (
    <div
      role="group"
      aria-label={c.cabecalho.idioma}
      className="flex items-center gap-1 rounded-full border border-white/15 p-1"
    >
      {opcoes.map((o) => {
        const ativo = o.lang === c.lang;
        return (
          <Link
            key={o.lang}
            href={o.caminho}
            hrefLang={o.lang}
            lang={o.lang}
            aria-label={o.rotulo}
            aria-current={ativo ? "page" : undefined}
            title={o.rotulo}
            className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${
              ativo ? "bg-white/15" : "opacity-60 hover:opacity-100"
            }`}
          >
            <o.Bandeira className="h-4 w-4 rounded-full" />
          </Link>
        );
      })}
    </div>
  );
}
