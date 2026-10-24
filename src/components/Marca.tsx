import { useId } from "react";
import { site, type IconeArea } from "@/data/comum";
import { formas, viewBox } from "./simbolo-formas";

/**
 * Símbolo oficial do BioDatA, vetorizado a partir da arte enviada pelo grupo.
 * Fica embutido no HTML em vez de carregado por URL: assim não depende do
 * basePath do GitHub Pages nem de cache, e não gera requisição extra.
 */
export function Simbolo({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true">
      <defs>
        {formas.map((f, i) => (
          <linearGradient key={i} id={`${id}${i}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor={f.cores[0]} />
            <stop offset="0.5" stopColor={f.cores[1]} />
            <stop offset="1" stopColor={f.cores[2]} />
          </linearGradient>
        ))}
      </defs>
      {formas.map((f, i) => (
        <path key={i} fill={`url(#${id}${i})`} d={f.d} />
      ))}
    </svg>
  );
}

/** Símbolo, sigla e, de md para cima, o nome completo separado por uma barra. */
export function Logo({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Simbolo className="h-9 w-9 shrink-0" />
      <span
        className={`flex items-baseline gap-2 leading-tight ${claro ? "text-white" : "text-navy"}`}
      >
        <span className="text-[0.95rem] font-semibold tracking-tight">
          BioDatA
        </span>
        <span
          className={`hidden md:inline ${claro ? "text-white/30" : "text-linha"}`}
        >
          |
        </span>
        <span
          className={`hidden text-xs md:inline ${claro ? "text-white/60" : "text-cinza"}`}
        >
          {site.nomeCompleto}
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
export function IconeArea({
  nome,
  className,
}: {
  nome: IconeArea;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...traco}
    >
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
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(120 12 12)"
          />
        </>
      )}
    </svg>
  );
}

export function Seta({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...traco}
      strokeWidth={2}
    >
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function Externo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...traco}
      strokeWidth={2}
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function IconeEmail({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...traco}
      strokeWidth={1.8}
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function IconeInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...traco}
      strokeWidth={1.8}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Bandeiras simplificadas para o seletor de idioma, desenhadas num círculo. */
export function BandeiraBR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#009C3B" />
      <path d="M12 4.5 20.5 12 12 19.5 3.5 12Z" fill="#FFDF00" />
      <circle cx="12" cy="12" r="4.2" fill="#002776" />
      <path
        d="M8.2 11.2c2.6-.7 5.3-.2 7.4 1.3"
        stroke="#fff"
        strokeWidth=".9"
        fill="none"
      />
    </svg>
  );
}

export function BandeiraUS({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <clipPath id="bandeira-us">
        <circle cx="12" cy="12" r="12" />
      </clipPath>
      <g clipPath="url(#bandeira-us)">
        <rect width="24" height="24" fill="#fff" />
        {[0, 2, 4, 6, 8, 10, 12].map((i) => (
          <rect
            key={i}
            y={(i * 24) / 13}
            width="24"
            height={24 / 13}
            fill="#B22234"
          />
        ))}
        <rect width="11" height="13" fill="#3C3B6E" />
        {[2, 5, 8].flatMap((x) =>
          [2.5, 5.5, 8.5].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r=".75" fill="#fff" />
          )),
        )}
      </g>
    </svg>
  );
}

export function Check({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...traco}
      strokeWidth={2.2}
    >
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}
