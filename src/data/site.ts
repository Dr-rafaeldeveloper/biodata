/**
 * Todo o conteúdo do site mora aqui. As seções só leem estes objetos, então
 * ajustar texto, número ou membro da equipe não exige mexer em componente.
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
  chamada: "Inovação aplicada em dados biomédicos",
  assinatura: "Better data. Deeper insights. Healthier tomorrows.",
  email: "victor.albuquerque@ieee.org",
  instagram: "https://www.instagram.com/_biodata_/",
  cnpq: "http://dgp.cnpq.br/dgp/espelhogrupo/3206102865554803",
  endereco: "Departamento de Engenharia de Teleinformática, Campus do Pici, Fortaleza, CE",
};

export const navegacao = [
  { rotulo: "Sobre", href: "#sobre" },
  { rotulo: "Pesquisa", href: "#pesquisa" },
  { rotulo: "Resultados", href: "#resultados" },
  { rotulo: "Parcerias", href: "#parcerias" },
  { rotulo: "Equipe", href: "#equipe" },
  { rotulo: "Faça parte", href: "#faca-parte" },
  { rotulo: "Contatos", href: "#contato" },
];

/** Selos de credibilidade logo abaixo do hero. */
export const selos = [
  { titulo: "Nota 7 CAPES", texto: "Vinculado ao PPGETI/UFC, nível de excelência internacional" },
  { titulo: "Parceiro LESC", texto: "Unidade EMBRAPII em Sistemas Embarcados Complexos" },
  { titulo: "Certificado CNPq", texto: "Grupo certificado pela UFC no Diretório de Grupos" },
];

/** Cards que orbitam o símbolo no hero. `numero` vira o selo redondo; sem
    ele, entra o ícone indicado. */
export const orbita: { numero?: string; icone?: "pulso" | "check"; titulo: string; texto: string }[] = [
  { numero: "7", titulo: "Nota máxima", texto: "CAPES · PPGETI" },
  { icone: "pulso", titulo: "Parceiro LESC", texto: "Unidade EMBRAPII" },
  { numero: "6", titulo: "Áreas de pesquisa", texto: "IA, imagem, sinais e mais" },
  { icone: "check", titulo: "Certificado", texto: "CNPq · UFC" },
  { numero: "1º", titulo: "Ranking Research.com", texto: "entre os cientistas da UFC" },
];

export const numerosDestaque = [
  { valor: 38, sufixo: "", rotulo: "pesquisadores em formação" },
  { valor: 100, sufixo: "+", rotulo: "publicações desde 2023" },
  { valor: 7, sufixo: "", rotulo: "nota CAPES do programa" },
  { valor: 2023, sufixo: "", rotulo: "ano de fundação", semAgrupar: true },
];

export const historia = [
  {
    ano: "2003",
    titulo: "Nasce o LESC",
    texto:
      "O Laboratório de Engenharia de Sistemas de Computação é criado no DETI/UFC e passa a operar em 2004 como laboratório de P&D em hardware e sistemas.",
  },
  {
    ano: "2004",
    titulo: "Engenharia de Teleinformática",
    texto:
      "O DETI abre a graduação em Engenharia de Teleinformática.",
  },
  {
    ano: "2023",
    titulo: "Fundação do BioDatA",
    texto:
      "Os professores Victor Hugo C. de Albuquerque e Paulo Cesar Cortez criam o grupo, certificado pela UFC no CNPq em janeiro, com foco em engenharia biomédica orientada a dados.",
  },
  {
    ano: "2025",
    titulo: "Mais de 30 pesquisadores",
    texto:
      "O grupo passa de 30 pesquisadores e publica em periódicos como Expert Systems with Applications, Computerized Medical Imaging and Graphics e IEEE Network.",
  },
  {
    ano: "2026",
    titulo: "Nota máxima na CAPES",
    texto:
      "O PPGETI, programa ao qual o grupo está vinculado, recebe nota 7 na Avaliação Quadrienal, a mais alta concedida pela CAPES.",
  },
];

/** O ciclo de inovação aplicada: o coração do posicionamento do grupo. */
export const ciclo = [
  { titulo: "Problema real", texto: "O projeto começa por um problema de hospital, clínica, indústria ou governo." },
  { titulo: "Pesquisa", texto: "Desenvolvemos modelos de IA, processamento de sinais e visão computacional para esse problema." },
  { titulo: "Protótipo", texto: "Testamos o software e o hardware embarcado em bancada, com dados reais." },
  { titulo: "Transferência", texto: "O resultado vira patente, registro de software ou projeto com empresa pelo LESC/EMBRAPII." },
];

export type IconeArea = "cerebro" | "imagem" | "sinal" | "dados" | "chip" | "quantico";

export const areas: { icone: IconeArea; titulo: string; texto: string }[] = [
  {
    icone: "imagem",
    titulo: "Imagem médica",
    texto: "Detecção de tumores, segmentação e fusão 3D de ressonância e radiografia.",
  },
  {
    icone: "cerebro",
    titulo: "Neuroengenharia",
    texto: "Estimulação cerebral profunda adaptativa e análise de marcha em doenças neurodegenerativas.",
  },
  {
    icone: "sinal",
    titulo: "Sinais biomédicos",
    texto: "Processamento de ECG, EEG e sinais fisiológicos para apoio ao diagnóstico.",
  },
  {
    icone: "dados",
    titulo: "Ciência de dados em saúde",
    texto: "Modelos preditivos, IA generativa e aprendizado informado pela física.",
  },
  {
    icone: "chip",
    titulo: "Sistemas embarcados",
    texto: "Dispositivos inteligentes e IoT em saúde, em parceria com o LESC.",
  },
  {
    icone: "quantico",
    titulo: "IA quântica e segurança",
    texto: "Reconhecimento de padrões quântico e privacidade de dados sensíveis.",
  },
];

export const projetoDestaque = {
  rotulo: "Pesquisa em destaque",
  titulo: "IA generativa para detecção de tumores cerebrais",
  texto:
    "Um modelo generativo que apoia a detecção de tumores em ressonância magnética, publicado em Computerized Medical Imaging and Graphics (2025). Queremos levar resultados como este para a rotina clínica.",
  link: "https://doi.org/10.1016/j.compmedimag.2025.102498",
};

/**
 * Indicadores de produção. `valor: null` aparece como "em atualização" no site
 * até alguém preencher. TODO: confirmar patentes, programas de computador,
 * projetos com empresas e prêmios no Lattes dos líderes.
 */
export const indicadores: { rotulo: string; valor: number | null; detalhe: string }[] = [
  { rotulo: "Artigos em periódicos", valor: 67, detalhe: "desde 2023" },
  { rotulo: "Trabalhos em conferências", valor: 30, detalhe: "desde 2023" },
  { rotulo: "Livros e capítulos", valor: 6, detalhe: "desde 2023" },
  { rotulo: "Patentes", valor: null, detalhe: "depositadas no INPI" },
  { rotulo: "Programas de computador", valor: null, detalhe: "registrados no INPI" },
  { rotulo: "Projetos com empresas", valor: null, detalhe: "P&D e EMBRAPII" },
  { rotulo: "Prêmios", valor: null, detalhe: "nacionais e internacionais" },
];

export const reconhecimentos = [
  {
    titulo: "1º lugar entre os cientistas da UFC",
    texto: "Prof. Victor Hugo lidera o ranking Research.com de pesquisadores da universidade (2026).",
  },
  {
    titulo: "Programa nota 7",
    texto: "O PPGETI é um dos poucos programas de excelência internacional fora do eixo Sul e Sudeste.",
  },
  {
    titulo: "IEEE Senior Member",
    texto: "Título concedido pelo IEEE ao Prof. Victor Hugo.",
  },
];

export const publicacoes = [
  {
    tipo: "Artigo",
    titulo: "A novel generative model for brain tumor detection using magnetic resonance imaging",
    veiculo: "Computerized Medical Imaging and Graphics",
    ano: 2025,
    doi: "https://doi.org/10.1016/j.compmedimag.2025.102498",
  },
  {
    tipo: "Artigo",
    titulo:
      "Reinforcement learning-based adaptive deep brain stimulation computational model for the treatment of tremor in Parkinson's disease",
    veiculo: "Expert Systems with Applications",
    ano: 2024,
    doi: "https://doi.org/10.1016/j.eswa.2024.126154",
  },
  {
    tipo: "Artigo",
    titulo: "Unsupervised physics-informed deep learning for assessing pulmonary artery hemodynamics",
    veiculo: "Expert Systems with Applications",
    ano: 2024,
    doi: "https://doi.org/10.1016/j.eswa.2024.125079",
  },
  {
    tipo: "Artigo",
    titulo:
      "Advances in 3D fusion of multimodal medical images: 3D reconstruction of bone, muscle, and ligament structures under load",
    veiculo: "Research on Biomedical Engineering",
    ano: 2025,
    doi: "https://doi.org/10.1007/s42600-025-00405-7",
  },
  {
    tipo: "Artigo",
    titulo: "Why consider quantum instead classical pattern recognition techniques?",
    veiculo: "Applied Soft Computing",
    ano: 2024,
    doi: "https://doi.org/10.1016/j.asoc.2024.112096",
  },
  {
    tipo: "Revisão",
    titulo: "A review on recent advancements of ChatGPT and datafication in healthcare applications",
    veiculo: "Computers in Biology and Medicine",
    ano: 2025,
    doi: "https://doi.org/10.1016/j.compbiomed.2025.110885",
  },
];

export const parceiros = [
  {
    sigla: "UFC",
    nome: "Universidade Federal do Ceará",
    papel: "Instituição sede, Departamento de Engenharia de Teleinformática (DETI).",
    href: "https://www.ufc.br",
  },
  {
    sigla: "PPGETI",
    nome: "Pós-Graduação em Engenharia de Teleinformática",
    papel: "Programa nota 7 na CAPES ao qual o grupo é vinculado, com mestrado e doutorado.",
    href: "https://ppgeti.ufc.br/pt/",
  },
  {
    sigla: "LESC",
    nome: "Laboratório de Engenharia de Sistemas de Computação",
    papel: "Unidade EMBRAPII parceira do BioDatA em sistemas embarcados complexos.",
    href: "https://embrapii.org.br/unidades/sistemas-embarcados-complexos-lesc-ufc/",
  },
  {
    sigla: "CNPq",
    nome: "Diretório dos Grupos de Pesquisa",
    papel: "Grupo certificado pela instituição desde 2023.",
    href: site.cnpq,
  },
];

/** Como uma empresa contrata P&D pelo modelo EMBRAPII, via LESC. */
export const passosEmbrapii = [
  { titulo: "Conversa inicial", texto: "A empresa apresenta o desafio e negocia o projeto direto com a unidade." },
  { titulo: "Fluxo contínuo", texto: "Sem edital: o projeto pode começar a qualquer momento do ano." },
  { titulo: "Recurso compartilhado", texto: "A EMBRAPII cobre parte do investimento." },
  { titulo: "Entrega", texto: "A equipe desenvolve, valida e transfere a tecnologia." },
];

export const projetosFuturos = [
  {
    titulo: "Dispositivos médicos embarcados",
    texto: "Monitoramento fisiológico com IA rodando na borda, de baixo consumo e alta confiabilidade.",
    tag: "Sistemas embarcados",
  },
  {
    titulo: "Hardware tolerante a falhas para saúde",
    texto: "Arquiteturas robustas para equipamentos críticos em ambiente hospitalar.",
    tag: "Tolerância a falhas",
  },
  {
    titulo: "Processamento de sinais em tempo real",
    texto: "Pipelines de sinais biomédicos acelerados em hardware dedicado.",
    tag: "Processamento de sinais",
  },
  {
    titulo: "Microeletrônica para sensores clínicos",
    texto: "Front ends analógicos e sensores customizados para aquisição de dados biomédicos.",
    tag: "Microeletrônica",
  },
];

export const lideres = [
  {
    nome: "Prof. Dr. Victor Hugo C. de Albuquerque",
    cargo: "Líder do grupo",
    foco: ["Reconhecimento de padrões", "IA", "Imagem médica"],
    iniciais: "VH",
    lattes: "", // TODO: link do Lattes
  },
  {
    nome: "Prof. Dr. Paulo Cesar Cortez",
    cargo: "Colíder, LESC/UFC",
    foco: ["Processamento de sinais", "Sistemas embarcados", "Engenharia biomédica"],
    iniciais: "PC",
    lattes: "",
  },
];

/** Estudantes por nível, conforme o espelho do CNPq em out/2026. */
export const equipe: { categoria: string; membros: string[] }[] = [
  {
    categoria: "Pós-doutorado",
    membros: ["Francisco Nauber Bernardo Gois", "Marcello Carvalho dos Reis"],
  },
  {
    categoria: "Doutorado",
    membros: [
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
  },
  {
    categoria: "Mestrado",
    membros: [
      "Antonio Ermeson Pereira Alves",
      "Cezario Luiz Mourão Carvalhêdo Mesquita",
      "Marcus Alexandre Gabriel dos Santos",
      "Nicolle Alves",
      "Paulo Cirillo Souza Barbosa",
      "Pedro Lino Azevedo Landim",
      "Raniere Rocha Guimarães",
    ],
  },
  {
    categoria: "Especialização",
    membros: ["Tiago Garcia Guimarães Lima"],
  },
  {
    categoria: "Graduação",
    membros: [
      "Antonio Lucas Martins da Silva",
      "Caio dos Santos Nascimento",
      "Carlos Victor Gonçalves Moura",
      "Italo Lucena Duarte Delmiro",
      "Pedro Florencio de Almeida Neto",
      "Ramiro Campos de Castro",
    ],
  },
];

export const colaboradoresExternos = [
  { nome: "Luis Ramiro Aliendre Santiváñez", pais: "Bolívia" },
];

export const beneficios = [
  { titulo: "Programa nota 7", texto: "Mestrado e doutorado no PPGETI, programa com nota máxima na CAPES." },
  { titulo: "Problemas reais", texto: "Projetos aplicados com parceiros da saúde e da indústria." },
  { titulo: "Publicação de alto impacto", texto: "Orientação próxima para publicar em periódicos Q1 e conferências IEEE." },
  { titulo: "Rede internacional", texto: "Colaboração com pesquisadores no Brasil e no exterior." },
  { titulo: "Infraestrutura LESC", texto: "Acesso a laboratório de hardware, embarcados e prototipagem." },
  { titulo: "Propriedade intelectual", texto: "Apoio para depositar patente, registrar software e transferir tecnologia." },
];

export const perfis = [
  "Engenharia de Teleinformática, Computação, Elétrica ou Biomédica",
  "Ciência de Dados, Estatística e áreas afins",
  "Profissionais de saúde interessados em pesquisa aplicada",
  "Estudantes de graduação em busca de iniciação científica",
];
