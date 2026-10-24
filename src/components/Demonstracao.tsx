"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";

export type TextosDemonstracao = {
  original: string;
  ia: string;
  dica: string;
  regiao: string;
  etapas: string[];
};

const REPOUSO = 56; // onde o divisor para depois da varredura, em %

/**
 * Demonstração interativa da pesquisa em destaque: um corte de ressonância
 * estilizado com um comparador entre a imagem original e a leitura da IA.
 * Ao entrar na tela, o divisor varre a imagem uma vez, acendendo as etapas
 * do pipeline; depois o visitante arrasta o divisor à vontade.
 */
export default function Demonstracao({ t }: { t: TextosDemonstracao }) {
  const caixa = useRef<HTMLDivElement>(null);
  const naTela = useInView(caixa, { once: true, margin: "-20%" });
  const semMovimento = useReducedMotion();
  const [pos, setPos] = useState(0);
  const [varrendo, setVarrendo] = useState(true);
  const arrastando = useRef(false);

  /* Varredura inicial: 0 → 100 → ponto de repouso. */
  useEffect(() => {
    if (!naTela) return;
    if (semMovimento) {
      /* Sem varredura: o divisor já nasce no ponto de repouso. */
      const pulo = animate(REPOUSO, REPOUSO, {
        duration: 0,
        onUpdate: (v) => setPos(v),
        onComplete: () => setVarrendo(false),
      });
      return () => pulo.stop();
    }
    const ida = animate(0, 100, {
      duration: 2.4,
      ease: "easeInOut",
      onUpdate: (v) => {
        if (!arrastando.current) setPos(v);
      },
      onComplete: () => {
        animate(100, REPOUSO, {
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (v) => {
            if (!arrastando.current) setPos(v);
          },
          onComplete: () => setVarrendo(false),
        });
      },
    });
    return () => ida.stop();
  }, [naTela, semMovimento]);

  const moverPara = (clientX: number) => {
    const r = caixa.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  };

  const etapaAtiva = varrendo
    ? Math.min(t.etapas.length - 1, Math.floor((pos / 100) * t.etapas.length))
    : t.etapas.length - 1;

  return (
    <div className="select-none">
      <div
        ref={caixa}
        className="relative aspect-[4/3] cursor-col-resize touch-none overflow-hidden rounded-2xl border border-white/10 bg-navy-escuro"
        onPointerDown={(e) => {
          arrastando.current = true;
          setVarrendo(false);
          e.currentTarget.setPointerCapture(e.pointerId);
          moverPara(e.clientX);
        }}
        onPointerMove={(e) => {
          if (arrastando.current) moverPara(e.clientX);
        }}
        onPointerUp={() => {
          arrastando.current = false;
        }}
        onPointerCancel={() => {
          arrastando.current = false;
        }}
      >
        <div className="pontos absolute inset-0 opacity-40" />

        {/* Camada original, embaixo. */}
        <Corte
          ia={false}
          regiao={t.regiao}
          className="absolute inset-0 h-full w-full"
        />

        {/* Camada da IA, recortada pelo divisor. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <Corte
            ia
            regiao={t.regiao}
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Divisor com a linha de varredura. */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-ciano shadow-[0_0_18px_2px_rgba(0,228,255,0.6)]"
          style={{ left: `${pos}%` }}
        >
          <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-ciano/60 bg-navy-escuro/90 text-ciano backdrop-blur">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m9 7-5 5 5 5m6-10 5 5-5 5" />
            </svg>
          </span>
        </div>

        {/* Rótulos das duas metades. */}
        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-navy-escuro/70 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/60 backdrop-blur">
          {t.original}
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-ciano/15 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ciano backdrop-blur">
          {t.ia}
        </span>

        {/* Controle acessível por teclado, invisível mas focável. */}
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          aria-label={t.dica}
          onChange={(e) => {
            setVarrendo(false);
            setPos(Number(e.target.value));
          }}
          className="absolute inset-x-0 bottom-0 h-8 w-full cursor-col-resize opacity-0 focus-visible:opacity-100"
        />
      </div>

      {/* Etapas do pipeline, acesas conforme a varredura avança. */}
      <ol className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-4 sm:gap-2">
        {t.etapas.map((etapa, i) => {
          const ativa = i <= etapaAtiva;
          return (
            <li key={etapa} className="min-w-0">
              <span
                className={`block h-1 rounded-full transition-colors duration-500 ${
                  ativa ? "bg-ciano" : "bg-white/10"
                }`}
              />
              <span
                className={`mt-2 block text-[0.6rem] uppercase leading-tight tracking-[0.12em] transition-colors duration-500 ${
                  ativa ? "text-white/80" : "text-white/30"
                }`}
              >
                {etapa}
              </span>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-xs text-white/45">{t.dica}</p>
    </div>
  );
}

/**
 * Corte axial estilizado. A versão da IA realça a região segmentada com
 * brilho e um contorno tracejado em movimento.
 */
function Corte({
  ia,
  regiao,
  className,
}: {
  ia: boolean;
  regiao: string;
  className?: string;
}) {
  const id = useId();
  const tumor =
    "M258 96c12-6 28-2 34 10 7 12 2 26-8 33-10 8-25 7-33-2-9-10-7-26 7-41Z";
  return (
    <svg viewBox="0 0 400 300" className={className} aria-hidden="true">
      <defs>
        <radialGradient id={`${id}cerebro`} cx="50%" cy="45%" r="65%">
          <stop offset="0" stopColor={ia ? "#17446b" : "#2b3f55"} />
          <stop offset="1" stopColor={ia ? "#0a2238" : "#121f2e"} />
        </radialGradient>
        <radialGradient id={`${id}brilho`}>
          <stop offset="0" stopColor="#00e4ff" stopOpacity="0.85" />
          <stop offset="0.6" stopColor="#00e4ff" stopOpacity="0.25" />
          <stop offset="1" stopColor="#00e4ff" stopOpacity="0" />
        </radialGradient>
        <filter id={`${id}suave`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* Crânio e massa encefálica. */}
      <ellipse
        cx="200"
        cy="150"
        rx="152"
        ry="122"
        fill={ia ? "#0d2c47" : "#1a2634"}
        stroke={ia ? "#1f6a95" : "#3a4b5e"}
        strokeWidth="3"
      />
      <ellipse
        cx="200"
        cy="150"
        rx="136"
        ry="106"
        fill={`url(#${id}cerebro)`}
      />
      <path
        d="M200 46v208"
        stroke={ia ? "#071a2c" : "#0f1a26"}
        strokeWidth="3"
      />

      {/* Giros, nos dois hemisférios. */}
      <g
        fill="none"
        stroke={ia ? "#2a79a8" : "#48607a"}
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      >
        <path d="M110 110c18-22 42-26 64-12M96 150c22-14 44-12 66 2M104 190c20 12 42 14 62 4M126 226c16 6 34 6 52-2" />
        <path d="M290 110c-18-22-42-26-64-12M304 150c-22-14-44-12-66 2M296 190c-20 12-42 14-62 4M274 226c-16 6-34 6-52-2" />
        <path d="M140 72c20 0 36 6 50 20M260 72c-20 0-36 6-50 20" />
      </g>

      {/* Ventrículos. */}
      <path
        d="M186 112c-10 26-10 54 0 78 6-26 6-52 0-78Z"
        fill={ia ? "#061a2c" : "#0b1520"}
      />
      <path
        d="M214 112c10 26 10 54 0 78-6-26-6-52 0-78Z"
        fill={ia ? "#061a2c" : "#0b1520"}
      />

      {/* Lesão: discreta no original, realçada na leitura da IA. */}
      {ia ? (
        <g>
          <circle
            cx="272"
            cy="118"
            r="46"
            fill={`url(#${id}brilho)`}
            filter={`url(#${id}suave)`}
          />
          <path d={tumor} fill="#00e4ff" fillOpacity="0.35" />
          <path
            d={tumor}
            fill="none"
            stroke="#00e4ff"
            strokeWidth="2"
            strokeDasharray="6 5"
            className="animate-tracejado"
          />
          <g className="transition-opacity">
            <path
              d="M296 140l44 96h52"
              fill="none"
              stroke="#00e4ff"
              strokeWidth="1.5"
            />
            <circle cx="296" cy="140" r="3" fill="#00e4ff" />
            <text
              x="392"
              y="230"
              textAnchor="end"
              fill="#00e4ff"
              fontSize="11"
              fontFamily="var(--font-sans)"
              letterSpacing="1.5"
            >
              {regiao.toUpperCase()}
            </text>
          </g>
        </g>
      ) : (
        <path d={tumor} fill="#334c66" fillOpacity="0.9" />
      )}
    </svg>
  );
}
