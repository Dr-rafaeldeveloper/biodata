"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navegacao } from "@/data/site";
import { Logo, Seta } from "./Marca";

export default function Cabecalho() {
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
        <a href="#inicio" onClick={() => setAberto(false)} aria-label="BioDatA, início">
          <Logo claro />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm text-white/70 transition-colors hover:text-ciano"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href="#contato" className="botao botao-ciano hidden px-5 py-2.5 text-sm sm:inline-flex">
            Fale conosco
            <Seta className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
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
              {navegacao.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setAberto(false)}
                  className="block border-b border-white/10 py-4 text-lg text-white/85"
                >
                  {item.rotulo}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => setAberto(false)}
                className="botao botao-ciano mt-5 w-full"
              >
                Fale conosco
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
