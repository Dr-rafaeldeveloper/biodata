import { useId } from "react";
import { formas, viewBox } from "./simbolo-formas";

/**
 * Trilhas de circuito de cada forma, no sistema de coordenadas do símbolo.
 * Todas seguem a mesma regra: segmentos retos ou a 45°, começando e
 * terminando num ponto de solda. O que passar do contorno é recortado.
 */
const trilhas: [number, number][][][] = [
  // 0: arco de cima
  [
    [
      [135, 190],
      [175, 150],
      [240, 150],
      [280, 110],
      [330, 110],
    ],
    [
      [300, 55],
      [340, 55],
      [380, 95],
      [440, 95],
      [470, 125],
    ],
    [
      [200, 80],
      [240, 80],
      [270, 50],
    ],
    [
      [500, 185],
      [520, 165],
      [520, 140],
    ],
    [
      [150, 120],
      [120, 150],
      [100, 150],
    ],
    [
      [380, 60],
      [420, 60],
      [450, 80],
    ],
  ],
  // 1: fita do meio
  [
    [
      [60, 240],
      [90, 240],
      [130, 280],
      [200, 280],
      [240, 240],
      [300, 240],
    ],
    [
      [220, 255],
      [260, 215],
      [330, 215],
      [360, 245],
    ],
    [
      [280, 275],
      [330, 275],
      [370, 235],
    ],
    [
      [40, 280],
      [60, 260],
      [80, 260],
    ],
    [
      [310, 195],
      [340, 195],
      [370, 215],
    ],
  ],
  // 2: meia-lua da direita
  [
    [
      [320, 340],
      [360, 340],
      [400, 300],
      [460, 300],
      [490, 270],
    ],
    [
      [440, 330],
      [480, 330],
      [520, 370],
    ],
    [
      [500, 300],
      [540, 300],
      [560, 320],
    ],
    [
      [540, 270],
      [560, 290],
    ],
  ],
  // 3: base
  [
    [
      [90, 350],
      [130, 350],
      [160, 380],
      [220, 440],
      [280, 440],
      [330, 400],
      [400, 400],
    ],
    [
      [200, 480],
      [240, 480],
      [300, 420],
      [360, 420],
    ],
    [
      [250, 500],
      [300, 470],
      [370, 460],
    ],
    [
      [80, 330],
      [110, 330],
      [130, 350],
    ],
    [
      [420, 400],
      [440, 420],
    ],
  ],
];

/** Versão "placa de circuito" do símbolo, usada na troca por hover no hero. */
export default function SimboloCircuito({ className }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox={viewBox} className={className} aria-hidden="true">
      <defs>
        {formas.map((f, i) => (
          <clipPath key={i} id={`${id}c${i}`}>
            <path d={f.d} />
          </clipPath>
        ))}
        <linearGradient id={`${id}fundo`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1240c4" />
          <stop offset="1" stopColor="#1d6ae8" />
        </linearGradient>
        <filter id={`${id}brilho`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      {formas.map((f, i) => (
        <g key={i} clipPath={`url(#${id}c${i})`}>
          {/* Miolo azul e borda ciano que brilha para dentro. */}
          <path d={f.d} fill={`url(#${id}fundo)`} />
          <path
            d={f.d}
            fill="none"
            stroke="#3fe9ff"
            strokeWidth="14"
            opacity="0.9"
            filter={`url(#${id}brilho)`}
          />
          <path d={f.d} fill="none" stroke="#7df2ff" strokeWidth="2" />

          {/* Trilhas e pontos de solda. */}
          <g
            fill="none"
            stroke="#d6f9ff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {trilhas[i].map((pontos, j) => (
              <path
                key={j}
                className="traco"
                pathLength={1}
                d={pontos
                  .map(([x, y], k) => `${k === 0 ? "M" : "L"}${x} ${y}`)
                  .join(" ")}
              />
            ))}
          </g>
          <g fill="#0b2a66" stroke="#d6f9ff" strokeWidth="2.6">
            {trilhas[i].flatMap((pontos, j) =>
              [pontos[0], pontos[pontos.length - 1]].map(([x, y], k) => (
                <circle
                  key={`${j}-${k}`}
                  className="solda"
                  cx={x}
                  cy={y}
                  r="5"
                />
              )),
            )}
          </g>
        </g>
      ))}
    </svg>
  );
}
