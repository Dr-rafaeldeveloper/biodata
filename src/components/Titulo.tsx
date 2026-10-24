import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  sobrancelha: string;
  titulo: ReactNode;
  texto?: ReactNode;
  escuro?: boolean;
  centro?: boolean;
};

/** Cabeçalho padrão das seções: rótulo, título e um parágrafo de apoio. */
export default function Titulo({
  sobrancelha,
  titulo,
  texto,
  escuro = false,
  centro = false,
}: Props) {
  return (
    <Reveal className={centro ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`sobrancelha ${escuro ? "sobrancelha-clara" : ""}`}>
        {sobrancelha}
      </p>
      <h2
        className={`mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-[2.75rem] ${
          escuro ? "text-white" : "text-navy"
        }`}
      >
        {titulo}
      </h2>
      {texto ? (
        <p
          className={`mt-5 text-lg leading-relaxed ${escuro ? "text-white/65" : "text-cinza"}`}
        >
          {texto}
        </p>
      ) : null}
    </Reveal>
  );
}
