import "./globals.css";
import Link from "next/link";

/* Com dois layouts raiz (um por idioma), o Next exige um not-found global
   fora deles, com html e body próprios. */
export default function NotFound() {
  return (
    <html lang="pt-BR">
      <body className="grid min-h-screen place-items-center bg-navy-escuro px-6 text-center text-white">
        <div>
          <p className="text-6xl font-semibold text-ciano">404</p>
          <p className="mt-4 text-lg text-white/70">
            Página não encontrada · Page not found
          </p>
          <p className="mt-8 flex justify-center gap-3">
            <Link href="/" className="botao botao-ciano">
              Início
            </Link>
            <Link href="/en" className="botao botao-contorno">
              Home
            </Link>
          </p>
        </div>
      </body>
    </html>
  );
}
