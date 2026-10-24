import { colaboradorExterno, fotoEvento, lider, membros, site } from "./comum";
import type { Conteudo } from "./pt";

/** All site copy in English. Same shape as pt.ts, enforced by the type. */
export const en: Conteudo = {
  lang: "en-US",
  caminho: "/en",
  outroIdioma: { lang: "pt-BR", caminho: "/", rotulo: "Português" },

  meta: {
    titulo: `${site.nome} | ${site.nomeCompleto}`,
    descricao:
      "Biomedical engineering research group at the Federal University of Ceará (UFC), Brazil, focused on applied innovation. We work with AI, signal processing and computer vision. Part of PPGETI, rated 7 by CAPES, and partner of LESC/EMBRAPII.",
    palavrasChave: [
      "biomedical engineering",
      "artificial intelligence in healthcare",
      "medical imaging",
      "signal processing",
      "UFC",
      "PPGETI",
      "LESC",
      "EMBRAPII",
      "BioDatA",
    ],
    universidade: "Federal University of Ceará",
  },

  nav: [
    { rotulo: "About", href: "#sobre" },
    { rotulo: "Research", href: "#pesquisa" },
    { rotulo: "Results", href: "#resultados" },
    { rotulo: "Partners", href: "#parcerias" },
    { rotulo: "Team", href: "#equipe" },
    { rotulo: "Join us", href: "#faca-parte" },
    { rotulo: "Contact", href: "#contato" },
  ],

  cabecalho: {
    inicio: "BioDatA, home",
    abrirMenu: "Open menu",
    fecharMenu: "Close menu",
    idioma: "Language",
    portugues: "Portuguese (Brazil)",
    ingles: "English (United States)",
  },

  hero: {
    sobrancelha: "Research · Data · AI · Health",
    titulo: [
      "Data science that becomes ",
      "applied innovation",
      " in healthcare.",
    ],
    texto:
      "We are the Biomedical Data Analytics Research Group at UFC. We apply artificial intelligence, signal processing and computer vision to real problems in medicine, and what we build is meant to leave the lab.",
    botaoPesquisa: "Explore our research",
    botaoFacaParte: "Join the group",
    numeros: [
      { valor: 38, sufixo: "", rotulo: "researchers in training" },
      { valor: 100, sufixo: "+", rotulo: "publications since 2023" },
      { valor: 7, sufixo: "", rotulo: "CAPES score of the program" },
      { valor: 2023, sufixo: "", rotulo: "year founded", semAgrupar: true },
    ],
    selos: [
      {
        titulo: "CAPES score 7",
        texto:
          "Part of PPGETI/UFC, rated at the international excellence level",
      },
      {
        titulo: "LESC partner",
        texto: "EMBRAPII Unit in Complex Embedded Systems",
      },
      {
        titulo: "CNPq certified",
        texto: "Group certified by UFC in the Research Groups Directory",
      },
    ],
    orbita: [
      { numero: "7", titulo: "Top score", texto: "CAPES · PPGETI" },
      { icone: "pulso", titulo: "LESC partner", texto: "EMBRAPII Unit" },
      {
        numero: "6",
        titulo: "Research areas",
        texto: "AI, imaging, signals and more",
      },
      { icone: "check", titulo: "Certified", texto: "CNPq · UFC" },
      {
        numero: "1st",
        titulo: "Research.com ranking",
        texto: "among UFC scientists",
      },
    ],
  },

  sobre: {
    sobrancelha: "Who we are",
    titulo: ["Our focus is ", "applied innovation", "."],
    texto:
      "Every BioDatA project starts from a concrete problem and is planned to become a product, a process or a public policy.",
    paragrafo:
      "Founded in 2023 at the Department of Teleinformatics Engineering of UFC, the group brings together undergraduate, master's, doctoral and postdoctoral researchers working on data-driven biomedical engineering. We are part of PPGETI, a graduate program rated 7 by CAPES, and we work with LESC, an EMBRAPII unit that runs R&D projects with companies.",
    ciclo: [
      {
        titulo: "Real problem",
        texto:
          "The project starts from a problem brought by a hospital, a clinic, industry or government.",
      },
      {
        titulo: "Research",
        texto:
          "We develop AI models, signal processing and computer vision for that problem.",
      },
      {
        titulo: "Prototype",
        texto:
          "We test the software and the embedded hardware on the bench, with real data.",
      },
      {
        titulo: "Transfer",
        texto:
          "The result becomes a patent, a registered software or a company project through LESC/EMBRAPII.",
      },
    ],
    historiaTitulo: "Our history",
    historia: [
      {
        ano: "2003",
        titulo: "LESC is born",
        texto:
          "The Computer Systems Engineering Laboratory is created at DETI/UFC and starts operating in 2004 as an R&D lab for hardware and systems.",
      },
      {
        ano: "2004",
        titulo: "Teleinformatics Engineering",
        texto:
          "DETI opens its undergraduate program in Teleinformatics Engineering.",
      },
      {
        ano: "2023",
        titulo: "BioDatA is founded",
        texto:
          "Professors Victor Hugo C. de Albuquerque and Paulo Cesar Cortez create the group, certified by UFC at CNPq in January, focused on data-driven biomedical engineering.",
      },
      {
        ano: "2025",
        titulo: "Over 30 researchers",
        texto:
          "The group passes 30 researchers and publishes in journals such as Expert Systems with Applications, Computerized Medical Imaging and Graphics and IEEE Network.",
      },
      {
        ano: "2026",
        titulo: "Top CAPES score",
        texto:
          "PPGETI, the graduate program the group belongs to, receives score 7 in the Quadrennial Evaluation, the highest awarded by CAPES.",
      },
    ],
  },

  pesquisa: {
    sobrancelha: "Research areas",
    titulo: "What we research",
    texto:
      "We bring engineering, data science and clinical knowledge to real problems in healthcare and the life sciences.",
    contagem: "areas",
    areas: [
      {
        icone: "imagem",
        titulo: "Medical imaging",
        texto:
          "Tumor detection, segmentation and 3D fusion of MRI and radiographs.",
      },
      {
        icone: "cerebro",
        titulo: "Neuroengineering",
        texto:
          "Adaptive deep brain stimulation and gait analysis in neurodegenerative diseases.",
      },
      {
        icone: "sinal",
        titulo: "Biomedical signals",
        texto:
          "ECG, EEG and physiological signal processing to support diagnosis.",
      },
      {
        icone: "dados",
        titulo: "Health data science",
        texto:
          "Predictive models, generative AI and physics-informed learning.",
      },
      {
        icone: "chip",
        titulo: "Embedded systems",
        texto:
          "Smart devices and IoT for healthcare, in partnership with LESC.",
      },
      {
        icone: "quantico",
        titulo: "Quantum AI and security",
        texto: "Quantum pattern recognition and privacy for sensitive data.",
      },
    ],
    destaque: {
      rotulo: "Featured research",
      titulo: "Generative AI for brain tumor detection",
      texto:
        "A generative model that supports tumor detection in magnetic resonance imaging, published in Computerized Medical Imaging and Graphics (2025). We want to bring results like this into clinical routine.",
      link: "https://doi.org/10.1016/j.compmedimag.2025.102498",
      botao: "Read the paper",
    },
    demonstracao: {
      original: "Original",
      ia: "AI reading",
      dica: "Drag the divider to compare the image with the AI reading.",
      regiao: "Segmented region",
      etapas: ["Acquisition", "Preprocessing", "Model", "Segmentation"],
    },
  },

  resultados: {
    sobrancelha: "Results",
    titulo: "What the group has produced",
    texto:
      "Papers in high-impact journals, conference papers, patents, registered software and projects with companies.",
    indicadores: [
      { rotulo: "Journal articles", valor: 67, detalhe: "since 2023" },
      { rotulo: "Conference papers", valor: 30, detalhe: "since 2023" },
      { rotulo: "Books and chapters", valor: 6, detalhe: "since 2023" },
      { rotulo: "Patents", valor: null, detalhe: "filed with INPI" },
      {
        rotulo: "Registered software",
        valor: null,
        detalhe: "registered with INPI",
      },
      { rotulo: "Company projects", valor: null, detalhe: "R&D and EMBRAPII" },
      { rotulo: "Awards", valor: null, detalhe: "national and international" },
    ],
    emAtualizacao: "Being updated",
    publicacoesTitulo: "Recent publications",
    fonte: "Source: OpenAlex",
    tipos: { artigo: "Article", revisao: "Review" },
    reconhecimentosTitulo: "Recognition",
    reconhecimentos: [
      {
        titulo: "1st among UFC scientists",
        texto:
          "Prof. Victor Hugo leads the Research.com ranking of the university's researchers (2026).",
      },
      {
        titulo: "Program rated 7",
        texto:
          "PPGETI is one of the few programs of international excellence outside Brazil's South and Southeast.",
      },
      {
        titulo: "IEEE Senior Member",
        texto: "Title granted by IEEE to Prof. Victor Hugo.",
      },
    ],
    citacao: "Data can reveal patterns that change lives.",
    citacaoFonte: "From the BioDatA brand guide",
  },

  parcerias: {
    sobrancelha: "Partners",
    titulo: ["Research with companies, ", "together with LESC", "."],
    texto:
      "BioDatA is a partner of LESC, the EMBRAPII Unit in Complex Embedded Systems at UFC. Through LESC, the group's research goes into R&D projects with companies, contracted quickly and with part of the cost covered by EMBRAPII.",
    parceiros: [
      {
        sigla: "UFC",
        nome: "Federal University of Ceará",
        papel:
          "Home institution, Department of Teleinformatics Engineering (DETI).",
        href: site.ufc,
      },
      {
        sigla: "PPGETI",
        nome: "Graduate Program in Teleinformatics Engineering",
        papel:
          "Program rated 7 by CAPES that the group belongs to, with master's and doctoral degrees.",
        href: site.ppgeti,
      },
      {
        sigla: "LESC",
        nome: "Computer Systems Engineering Laboratory",
        papel: "EMBRAPII Unit and BioDatA partner in complex embedded systems.",
        href: site.lesc,
      },
      {
        sigla: "CNPq",
        nome: "Research Groups Directory",
        papel: "Group certified by the institution since 2023.",
        href: site.cnpq,
      },
    ],
    chamadaTitulo: "Does your company have a healthcare challenge?",
    chamadaTexto:
      "Under the EMBRAPII model, the company negotiates the project directly with the unit, with no call for proposals to wait for, and EMBRAPII covers part of the investment.",
    chamadaBotao: "Propose a project",
    passos: [
      {
        titulo: "First conversation",
        texto:
          "The company presents the challenge and negotiates the project directly with the unit.",
      },
      {
        titulo: "Continuous flow",
        texto:
          "No call for proposals: the project can start at any time of the year.",
      },
      {
        titulo: "Shared funding",
        texto: "EMBRAPII covers part of the investment.",
      },
      {
        titulo: "Delivery",
        texto: "The team develops, validates and transfers the technology.",
      },
    ],
    futurosSobrancelha: "Upcoming projects",
    futurosTitulo: "Next projects with LESC",
    futurosTexto:
      "They follow the four competences of the EMBRAPII Unit: embedded systems, microelectronics, fault tolerance and signal processing.",
    futuros: [
      {
        titulo: "Embedded medical devices",
        texto:
          "Physiological monitoring with AI running at the edge, low power and highly reliable.",
        tag: "Embedded systems",
      },
      {
        titulo: "Fault-tolerant hardware for healthcare",
        texto:
          "Robust architectures for critical equipment in hospital settings.",
        tag: "Fault tolerance",
      },
      {
        titulo: "Real-time signal processing",
        texto: "Biomedical signal pipelines accelerated on dedicated hardware.",
        tag: "Signal processing",
      },
      {
        titulo: "Microelectronics for clinical sensors",
        texto:
          "Analog front ends and custom sensors for biomedical data acquisition.",
        tag: "Microelectronics",
      },
    ],
  },

  equipe: {
    sobrancelha: "Team",
    titulo: "Who makes BioDatA",
    texto:
      "{n} researchers in training, from undergraduate research to postdoctoral level, led by DETI/UFC professors.",
    lider: {
      ...lider,
      cargo: "Group leader",
      foco: ["Pattern recognition", "AI", "Medical imaging"],
    },
    foto: {
      src: fotoEvento,
      alt: "Prof. Victor Hugo C. de Albuquerque next to the lectern on the stage of the 30th Brazilian Congress on Biomedical Engineering",
      rotulo: "CBEB 2026",
      titulo: "30th Brazilian Congress on Biomedical Engineering",
      texto: "Fortaleza, September 28 to October 2, 2026",
    },
    abas: "Members by level",
    niveis: [
      { categoria: "Postdoctoral", membros: membros.posDoutorado },
      { categoria: "Doctoral", membros: membros.doutorado },
      { categoria: "Master's", membros: membros.mestrado },
      { categoria: "Specialization", membros: membros.especializacao },
      { categoria: "Undergraduate", membros: membros.graduacao },
    ],
    colaboracao: "International collaboration:",
    colaboradores: [{ nome: colaboradorExterno, pais: "Bolivia" }],
  },

  facaParte: {
    sobrancelha: "Join us",
    titulo: "Come do research with us",
    texto:
      "We look for curious people who want to see research leave the page. In the group you work on applied projects and publish what you develop.",
    beneficios: [
      {
        titulo: "Program rated 7",
        texto:
          "Master's and doctoral degrees at PPGETI, a program with the top CAPES score.",
      },
      {
        titulo: "Real problems",
        texto: "Applied projects with partners in healthcare and industry.",
      },
      {
        titulo: "High-impact publishing",
        texto:
          "Close supervision to publish in Q1 journals and IEEE conferences.",
      },
      {
        titulo: "International network",
        texto: "Collaboration with researchers in Brazil and abroad.",
      },
      {
        titulo: "LESC infrastructure",
        texto: "Access to a hardware, embedded systems and prototyping lab.",
      },
      {
        titulo: "Intellectual property",
        texto:
          "Support to file patents, register software and transfer technology.",
      },
    ],
    procuramos: "Who we are looking for",
    perfis: [
      "Teleinformatics, Computer, Electrical or Biomedical Engineering",
      "Data Science, Statistics and related fields",
      "Health professionals interested in applied research",
      "Undergraduate students looking for research experience",
    ],
    ingresso:
      "For master's and doctoral degrees, admission is through the PPGETI selection calls. For undergraduate research, collaboration or postdoctoral positions, get in touch with us directly.",
    botaoEditais: "PPGETI calls",
    botaoParticipar: "I want to join",
  },

  rodape: {
    sobrancelha: "Contact",
    titulo: ["Have a healthcare problem? ", "Talk to us."],
    texto:
      "Companies, hospitals, researchers and students can write to the group and tell us what they want to solve.",
    email: "Email:",
    instagram: "Instagram @_biodata_",
    endereco:
      "Department of Teleinformatics Engineering, Pici Campus, Fortaleza, Brazil",
    navegacao: "Navigation",
    vinculos: "Affiliations",
    links: [
      { rotulo: "Federal University of Ceará", href: site.ufc },
      { rotulo: "PPGETI, CAPES score 7", href: site.ppgeti },
      { rotulo: "LESC · EMBRAPII Unit", href: site.lesc },
      { rotulo: "Group record at CNPq", href: site.cnpq },
    ],
    direitos: "Research group certified by UFC at CNPq.",
  },
};
