"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const TAGS = {
  div: motion.div,
  li: motion.li,
  section: motion.section,
  article: motion.article,
  span: motion.span,
  p: motion.p,
};

type Props = {
  children: ReactNode;
  delay?: number;
  as?: keyof typeof TAGS;
  className?: string;
};

/** Sobe e revela o conteúdo quando ele entra na tela, uma vez só. */
export default function Reveal({ children, delay = 0, as = "div", className }: Props) {
  const semMovimento = useReducedMotion();
  const Tag = TAGS[as];

  if (semMovimento) {
    return <Tag className={className}>{children}</Tag>;
  }

  /* `revela` é o gancho que o globals.css usa para deixar tudo visível quando
     não há JS, já que aí o whileInView nunca dispara. */
  return (
    <Tag
      className={className ? `revela ${className}` : "revela"}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.62, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
