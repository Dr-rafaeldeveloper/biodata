/**
 * O que não muda entre português e inglês: identidade, links, publicações,
 * nomes das pessoas e números. O texto de cada língua fica em pt.ts e en.ts.
 *
 * Fontes usadas na primeira versão (out/2026):
 * - Espelho do grupo no CNPq: dgp.cnpq.br/dgp/espelhogrupo/3206102865554803
 * - PPGETI, nota 7 na Quadrienal 2025: ppgeti.ufc.br
 * - Unidade EMBRAPII LESC UFC: embrapii.org.br/unidades/sistemas-embarcados-complexos-lesc-ufc
 * - Publicações: OpenAlex, autor A5045093520, a partir de 2023
 */

export const site = {
  nome: "BioDatA",
  nomeCompleto: "Biomedical Data Analytics Research Group",
  url: "https://biodata.ufc.br", // TODO: domínio definitivo
  assinatura: "Better data. Deeper insights. Healthier tomorrows.",
  email: "victor.albuquerque@ieee.org",
  instagram: "https://www.instagram.com/_biodata_/",
  cnpq: "http://dgp.cnpq.br/dgp/espelhogrupo/3206102865554803",
  ufc: "https://www.ufc.br",
  ppgeti: "https://ppgeti.ufc.br/pt/",
  lesc: "https://embrapii.org.br/unidades/sistemas-embarcados-complexos-lesc-ufc/",
};

/** Prefixo dos arquivos em public/ (no GitHub Pages o site mora em /biodata).
    O next/image não acrescenta isso sozinho no export estático. */
export const prefixo = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type IconeArea =
  "cerebro" | "imagem" | "sinal" | "dados" | "chip" | "quantico";

export const publicacoes: {
  tipo: "artigo" | "revisao";
  titulo: string;
  veiculo: string;
  ano: number;
  doi: string;
}[] = [
  {
    tipo: "artigo",
    titulo:
      "A novel generative model for brain tumor detection using magnetic resonance imaging",
    veiculo: "Computerized Medical Imaging and Graphics",
    ano: 2025,
    doi: "https://doi.org/10.1016/j.compmedimag.2025.102498",
  },
  {
    tipo: "artigo",
    titulo:
      "Reinforcement learning-based adaptive deep brain stimulation computational model for the treatment of tremor in Parkinson's disease",
    veiculo: "Expert Systems with Applications",
    ano: 2024,
    doi: "https://doi.org/10.1016/j.eswa.2024.126154",
  },
  {
    tipo: "artigo",
    titulo:
      "Unsupervised physics-informed deep learning for assessing pulmonary artery hemodynamics",
    veiculo: "Expert Systems with Applications",
    ano: 2024,
    doi: "https://doi.org/10.1016/j.eswa.2024.125079",
  },
  {
    tipo: "artigo",
    titulo:
      "Advances in 3D fusion of multimodal medical images: 3D reconstruction of bone, muscle, and ligament structures under load",
    veiculo: "Research on Biomedical Engineering",
    ano: 2025,
    doi: "https://doi.org/10.1007/s42600-025-00405-7",
  },
  {
    tipo: "artigo",
    titulo:
      "Why consider quantum instead classical pattern recognition techniques?",
    veiculo: "Applied Soft Computing",
    ano: 2024,
    doi: "https://doi.org/10.1016/j.asoc.2024.112096",
  },
  {
    tipo: "revisao",
    titulo:
      "A review on recent advancements of ChatGPT and datafication in healthcare applications",
    veiculo: "Computers in Biology and Medicine",
    ano: 2025,
    doi: "https://doi.org/10.1016/j.compbiomed.2025.110885",
  },
];

export const lider = {
  nome: "Prof. Dr. Victor Hugo C. de Albuquerque",
  iniciais: "VH",
  foto: "/equipe/victor-hugo.jpg",
  lattes: "", // TODO: link do Lattes
};

export const fotoEvento = "/equipe/cbeb-2026.jpg";

/** Estudantes por nível, conforme o espelho do CNPq em out/2026. */
export const membros = {
  posDoutorado: [
    "Francisco Nauber Bernardo Gois",
    "Marcello Carvalho dos Reis",
  ],
  doutorado: [
    "Alan Marques da Rocha",
    "Artur Gomes Barreto",
    "Bruno Luiz Faustino",
    "Bruno Riccelli dos Santos Silva",
    "Caíke Damião Nascimento Silva",
    "Carlos Alfredo Cordeiro de Vasconcelos Filho",
    "Daniel Santos da Silva",
    "Débora Ferreira de Assis",
    "Elias Paulino Medeiros",
    "Eugenio Peixoto Junior",
    "Francisco Estêvão Simão Pereira",
    "Gilderlanio Barbosa Alves Palacio",
    "Jackson Henrique Braga da Silva",
    "Jefferson Silva Almeida",
    "Jocelani Dorigo de Castilhos",
    "Juliana Martins de Oliveira",
    "Júlio Peixoto da Silva Júnior",
    "Lucas Salvador Bernardo",
    "Pedro Crosara Motta",
    "Rafael Domingos de Carvalho Silva",
    "Renê Ripardo Calixto",
    "Tiago de Oliveira Nogueira",
  ],
  mestrado: [
    "Antonio Ermeson Pereira Alves",
    "Cezario Luiz Mourão Carvalhêdo Mesquita",
    "Marcus Alexandre Gabriel dos Santos",
    "Nicolle Alves",
    "Paulo Cirillo Souza Barbosa",
    "Pedro Lino Azevedo Landim",
    "Raniere Rocha Guimarães",
  ],
  especializacao: ["Tiago Garcia Guimarães Lima"],
  graduacao: [
    "Antonio Lucas Martins da Silva",
    "Caio dos Santos Nascimento",
    "Carlos Victor Gonçalves Moura",
    "Italo Lucena Duarte Delmiro",
    "Pedro Florencio de Almeida Neto",
    "Ramiro Campos de Castro",
  ],
};

export const totalMembros = Object.values(membros).reduce(
  (soma, lista) => soma + lista.length,
  0,
);

export const colaboradorExterno = "Luis Ramiro Aliendre Santiváñez";
