"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Props = {
  valor: number;
  sufixo?: string;
  semAgrupar?: boolean;
  locale?: string;
};

/** Número que sobe de zero até o valor quando entra na tela. */
export default function Contador({
  valor,
  sufixo = "",
  semAgrupar = false,
  locale = "pt-BR",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const naTela = useInView(ref, { once: true, margin: "-40px" });
  const semMovimento = useReducedMotion();
  /* Começa no valor final para o HTML do servidor já sair correto. */
  const [atual, setAtual] = useState(valor);
  const formatar = (n: number) =>
    semAgrupar ? String(n) : n.toLocaleString(locale);

  useEffect(() => {
    if (!naTela || semMovimento) return;
    const inicio = semAgrupar ? Math.max(0, valor - 40) : 0;
    const controle = animate(inicio, valor, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setAtual(Math.round(v)),
    });
    return () => controle.stop();
  }, [naTela, semMovimento, valor, semAgrupar]);

  return (
    <span ref={ref} className="tabular-nums">
      {formatar(atual)}
      {sufixo}
    </span>
  );
}
