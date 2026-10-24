"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Rolagem com inércia. Fica desligada para quem pede menos movimento no
 * sistema, e o `anchors` faz os links do menu deslizarem em vez de saltar.
 */
export default function RolagemSuave() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ duration: 1.05, anchors: true });
    let frame = 0;
    const loop = (tempo: number) => {
      lenis.raf(tempo);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
