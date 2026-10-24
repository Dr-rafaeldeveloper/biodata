import "../globals.css";
import Raiz, { metadados } from "@/components/Raiz";
import { pt } from "@/data/pt";

export { viewport } from "@/components/Raiz";
export const metadata = metadados(pt);

export default function LayoutPt({ children }: LayoutProps<"/">) {
  return <Raiz c={pt}>{children}</Raiz>;
}
