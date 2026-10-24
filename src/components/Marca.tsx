import { useId } from "react";
import type { IconeArea } from "@/data/site";

/**
 * Símbolo do BioDatA redesenhado em vetor a partir do manual: duas ondas que
 * se encaixam, lembrando ao mesmo tempo um cérebro e um fluxo de dados.
 * TODO: trocar pelo SVG oficial quando o arquivo da marca chegar.
 */
export function Simbolo({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}a`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6BEFFF" />
          <stop offset="1" stopColor="#00A9D6" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1B6C9C" />
          <stop offset="1" stopColor="#0B4164" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${id}b)`}
        d="M10 26c0-11 10-18 22-18 9 0 17 4 21 10-6-3-13-3-19 1-5 3-9 4-14 2-4-2-8 0-10 5Z"
      />
      <path
        fill={`url(#${id}a)`}
        d="M6 36c4-9 13-12 22-8 7 3 12 3 18-1 6-4 12-2 14 4 1 9-7 18-19 20-6 1-10-2-9-6 1-3 5-4 8-5-6 0-12 2-17 3-8 2-15-1-17-7Z"
      />
      <path
        fill={`url(#${id}b)`}
        d="M20 50c5 0 9-2 13-3-2 2-3 5-2 7-5 1-9-1-11-4Z"
        opacity="0.9"
      />
    </svg>
  );
}

export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Simbolo className="h-9 w-9 shrink-0" />
      <span className={`leading-tight ${claro ? "text-white" : "text-navy"}`}>
        <span className="block text-[0.95rem] font-semibold tracking-tight">BioDatA</span>
        <span
          className={`block text-[0.6rem] font-medium uppercase tracking-[0.16em] ${
            claro ? "text-white/55" : "text-cinza"
          }`}
        >
          Research Group
        </span>
      </span>
    </span>
  );
}

const traco = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Ícones de linha fina no estilo do manual. */
export function IconeArea({ nome, className }: { nome: IconeArea; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...traco}>
      {nome === "cerebro" && (
        <>
          <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V6a2 2 0 0 0-3-2Z" />
          <path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1" />
          <path d="M12 9h2m-2 5h3" />
        </>
      )}
      {nome === "imagem" && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <circle cx="9" cy="9.5" r="1.6" />
          <path d="m3.5 17 5-5 4 4 2.5-2.5L20.5 19" />
        </>
      )}
      {nome === "sinal" && <path d="M2 12h4l2-5 3 10 3-14 2.5 9H22" />}
      {nome === "dados" && (
        <>
          <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
          <path d="M4.5 5.5v6.5c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8V5.5" />
          <path d="M4.5 12v6.5c0 1.6 3.4 2.8 7.5 2.8s7.5-1.2 7.5-2.8V12" />
        </>
      )}
      {nome === "chip" && (
        <>
          <rect x="6" y="6" width="12" height="12" rx="2" />
          <rect x="9.5" y="9.5" width="5" height="5" rx="1" />
          <path d="M9 2.5V6m6-3.5V6M9 18v3.5m6-3.5v3.5M2.5 9H6m-3.5 6H6m12-6h3.5M18 15h3.5" />
        </>
      )}
      {nome === "quantico" && (
        <>
          <circle cx="12" cy="12" r="1.8" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" transform="rotate(120 12 12)" />
        </>
      )}
    </svg>
  );
}

export function Seta({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...traco} strokeWidth={2}>
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function Externo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...traco} strokeWidth={2}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...traco} strokeWidth={2.2}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
