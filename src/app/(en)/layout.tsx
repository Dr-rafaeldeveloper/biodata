import "../globals.css";
import Raiz, { metadados } from "@/components/Raiz";
import { en } from "@/data/en";

export { viewport } from "@/components/Raiz";
export const metadata = metadados(en);

export default function LayoutEn({ children }: LayoutProps<"/">) {
  return <Raiz c={en}>{children}</Raiz>;
}
