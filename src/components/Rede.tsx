"use client";

import { useEffect, useRef } from "react";

type No = { x: number; y: number; vx: number; vy: number };

/**
 * Rede de partículas do hero: pontos ciano que se ligam quando chegam perto,
 * como no elemento gráfico de "constelação" do manual. Canvas puro para não
 * pesar, pausa fora da tela e fica parada para quem pede menos movimento.
 */
export default function Rede({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const parado = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let largura = 0;
    let altura = 0;
    let nos: No[] = [];
    let frame = 0;
    let visivel = true;
    const mouse = { x: -9999, y: -9999 };

    const montar = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      largura = canvas.clientWidth;
      altura = canvas.clientHeight;
      canvas.width = largura * dpr;
      canvas.height = altura * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      /* Densidade constante: um ponto a cada ~11 mil px², com teto para a
         checagem de pares (n²) não pesar nas seções mais altas. */
      const total = Math.round(Math.min(240, (largura * altura) / 11000));
      nos = Array.from({ length: total }, () => ({
        x: Math.random() * largura,
        y: Math.random() * altura,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const desenhar = () => {
      ctx.clearRect(0, 0, largura, altura);
      const alcance = 130;
      for (let i = 0; i < nos.length; i++) {
        const a = nos[i];
        if (!parado) {
          a.x += a.vx;
          a.y += a.vy;
          if (a.x < 0 || a.x > largura) a.vx *= -1;
          if (a.y < 0 || a.y > altura) a.vy *= -1;
        }
        for (let j = i + 1; j < nos.length; j++) {
          const b = nos[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < alcance) {
            ctx.strokeStyle = `rgba(0, 228, 255, ${0.18 * (1 - d / alcance)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        const perto = Math.hypot(a.x - mouse.x, a.y - mouse.y) < 160;
        ctx.fillStyle = perto ? "rgba(107, 239, 255, 0.95)" : "rgba(0, 228, 255, 0.55)";
        ctx.beginPath();
        ctx.arc(a.x, a.y, perto ? 2.2 : 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (visivel) desenhar();
      frame = requestAnimationFrame(loop);
    };

    const aoMover = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };

    const observador = new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting;
    });
    observador.observe(canvas);

    montar();
    if (parado) desenhar();
    else frame = requestAnimationFrame(loop);

    window.addEventListener("resize", montar);
    window.addEventListener("pointermove", aoMover, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observador.disconnect();
      window.removeEventListener("resize", montar);
      window.removeEventListener("pointermove", aoMover);
    };
  }, []);

  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
