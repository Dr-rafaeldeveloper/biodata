import {
  colaboradorExterno,
  fotoEvento,
  lider,
  membros,
  site,
  type IconeArea,
} from "./comum";

/**
 * Todo o texto do site em português. As seções só leem este objeto, então
 * ajustar um texto não exige mexer em componente. A versão em inglês, en.ts,
 * segue exatamente o mesmo formato (o TypeScript garante).
 *
 * Títulos em três partes: [antes, trecho destacado, depois].
 */
export const pt = {
  lang: "pt-BR",
  caminho: "/",
  outroIdioma: { lang: "en-US", caminho: "/en", rotulo: "English" },

  meta: {
    titulo: `${site.nome} | ${site.nomeCompleto}`,
    descricao:
      "Grupo de pesquisa da UFC em engenharia biomédica, com foco em inovação aplicada. Trabalha com IA, processamento de sinais e visão computacional. Vinculado ao PPGETI, nota 7 na CAPES, e parceiro do LESC/EMBRAPII.",
    palavrasChave: [
      "engenharia biomédica",
      "inteligência artificial em saúde",
      "imagem médica",
      "processamento de sinais",
      "UFC",
      "PPGETI",
      "LESC",
      "EMBRAPII",
      "BioDatA",
    ],
    universidade: "Universidade Federal do Ceará",
  },

  nav: [
    { rotulo: "Sobre", href: "#sobre" },
    { rotulo: "Pesquisa", href: "#pesquisa" },
    { rotulo: "Resultados", href: "#resultados" },
    { rotulo: "Parcerias", href: "#parcerias" },
    { rotulo: "Equipe", href: "#equipe" },
    { rotulo: "Faça parte", href: "#faca-parte" },
    { rotulo: "Contatos", href: "#contato" },
  ],

  cabecalho: {
    inicio: "BioDatA, início",
    abrirMenu: "Abrir menu",
    fecharMenu: "Fechar menu",
    idioma: "Idioma",
    portugues: "Português (Brasil)",
    ingles: "Inglês (Estados Unidos)",
  },

  hero: {
    sobrancelha: "Pesquisa · Dados · IA · Saúde",
    titulo: ["Ciência de dados que vira ", "inovação aplicada", " em saúde."],
    texto:
      "Somos o Biomedical Data Analytics Research Group da UFC. Usamos inteligência artificial, processamento de sinais e visão computacional em problemas reais da medicina, e o que desenvolvemos é feito para sair do laboratório.",
    botaoPesquisa: "Conheça nossa pesquisa",
    botaoFacaParte: "Faça parte do grupo",
    numeros: [
      { valor: 38, sufixo: "", rotulo: "pesquisadores em formação" },
      { valor: 100, sufixo: "+", rotulo: "publicações desde 2023" },
      { valor: 7, sufixo: "", rotulo: "nota CAPES do programa" },
      { valor: 2023, sufixo: "", rotulo: "ano de fundação", semAgrupar: true },
    ],
    selos: [
      {
        titulo: "Nota 7 CAPES",
        texto: "Vinculado ao PPGETI/UFC, nível de excelência internacional",
      },
      {
        titulo: "Parceiro LESC",
        texto: "Unidade EMBRAPII em Sistemas Embarcados Complexos",
      },
      {
        titulo: "Certificado CNPq",
        texto: "Grupo certificado pela UFC no Diretório de Grupos",
      },
    ],
    /* Cards que orbitam o símbolo. `numero` vira o selo redondo; sem ele,
       entra o ícone indicado. */
    orbita: [
      { numero: "7", titulo: "Nota máxima", texto: "CAPES · PPGETI" },
      { icone: "pulso", titulo: "Parceiro LESC", texto: "Unidade EMBRAPII" },
      {
        numero: "6",
        titulo: "Áreas de pesquisa",
        texto: "IA, imagem, sinais e mais",
      },
      { icone: "check", titulo: "Certificado", texto: "CNPq · UFC" },
      {
        numero: "1º",
        titulo: "Ranking Research.com",
        texto: "entre os cientistas da UFC",
      },
    ] as {
      numero?: string;
      icone?: "pulso" | "check";
      titulo: string;
      texto: string;
    }[],
  },

  sobre: {
    sobrancelha: "Quem somos",
    titulo: ["Nosso foco é ", "inovação aplicada", "."],
    texto:
      "Cada projeto do BioDatA começa por um problema concreto e é planejado para virar produto, processo ou política pública.",
    paragrafo:
      "Fundado em 2023 no Departamento de Engenharia de Teleinformática da UFC, o grupo reúne graduandos, mestrandos, doutorandos e pós-doutores que pesquisam engenharia biomédica orientada a dados. Somos vinculados ao PPGETI, programa com nota 7 na CAPES, e trabalhamos com o LESC, unidade EMBRAPII que faz projetos de P&D com empresas.",
    ciclo: [
      {
        titulo: "Problema real",
        texto:
          "O projeto começa por um problema de hospital, clínica, indústria ou governo.",
      },
      {
        titulo: "Pesquisa",
        texto:
          "Desenvolvemos modelos de IA, processamento de sinais e visão computacional para esse problema.",
      },
      {
        titulo: "Protótipo",
        texto:
          "Testamos o software e o hardware embarcado em bancada, com dados reais.",
      },
      {
        titulo: "Transferência",
        texto:
          "O resultado vira patente, registro de software ou projeto com empresa pelo LESC/EMBRAPII.",
      },
    ],
    historiaTitulo: "Nossa história",
    historia: [
      {
        ano: "2003",
        titulo: "Nasce o LESC",
        texto:
          "O Laboratório de Engenharia de Sistemas de Computação é criado no DETI/UFC e passa a operar em 2004 como laboratório de P&D em hardware e sistemas.",
      },
      {
        ano: "2004",
        titulo: "Engenharia de Teleinformática",
        texto: "O DETI abre a graduação em Engenharia de Teleinformática.",
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
    ],
  },

  pesquisa: {
    sobrancelha: "Áreas de pesquisa",
    titulo: "Em que pesquisamos",
    texto:
      "Trabalhamos com engenharia, ciência de dados e conhecimento clínico em problemas reais de saúde e ciências da vida.",
    contagem: "áreas",
    areas: [
      {
        icone: "imagem",
        titulo: "Imagem médica",
        texto:
          "Detecção de tumores, segmentação e fusão 3D de ressonância e radiografia.",
      },
      {
        icone: "cerebro",
        titulo: "Neuroengenharia",
        texto:
          "Estimulação cerebral profunda adaptativa e análise de marcha em doenças neurodegenerativas.",
      },
      {
        icone: "sinal",
        titulo: "Sinais biomédicos",
        texto:
          "Processamento de ECG, EEG e sinais fisiológicos para apoio ao diagnóstico.",
      },
      {
        icone: "dados",
        titulo: "Ciência de dados em saúde",
        texto:
          "Modelos preditivos, IA generativa e aprendizado informado pela física.",
      },
      {
        icone: "chip",
        titulo: "Sistemas embarcados",
        texto:
          "Dispositivos inteligentes e IoT em saúde, em parceria com o LESC.",
      },
      {
        icone: "quantico",
        titulo: "IA quântica e segurança",
        texto:
          "Reconhecimento de padrões quântico e privacidade de dados sensíveis.",
      },
    ] as { icone: IconeArea; titulo: string; texto: string }[],
    destaque: {
      rotulo: "Pesquisa em destaque",
      titulo: "IA generativa para detecção de tumores cerebrais",
      texto:
        "Um modelo generativo que apoia a detecção de tumores em ressonância magnética, publicado em Computerized Medical Imaging and Graphics (2025). Queremos levar resultados como este para a rotina clínica.",
      link: "https://doi.org/10.1016/j.compmedimag.2025.102498",
      botao: "Ler o artigo",
    },
    /* Demonstração interativa: comparador entre a imagem e a leitura da IA. */
    demonstracao: {
      original: "Original",
      ia: "Leitura da IA",
      dica: "Arraste o divisor para comparar a imagem com a leitura da IA.",
      regiao: "Região segmentada",
      etapas: ["Aquisição", "Pré-processamento", "Modelo", "Segmentação"],
    },
  },

  resultados: {
    sobrancelha: "Resultados",
    titulo: "O que o grupo já produziu",
    texto:
      "Artigos em periódicos de alto impacto, trabalhos em conferências, patentes, registros de software e projetos com empresas.",
    /* `valor: null` aparece como "em atualização" até alguém preencher.
       TODO: confirmar patentes, programas de computador, projetos com
       empresas e prêmios no Lattes dos líderes. */
    indicadores: [
      { rotulo: "Artigos em periódicos", valor: 67, detalhe: "desde 2023" },
      { rotulo: "Trabalhos em conferências", valor: 30, detalhe: "desde 2023" },
      { rotulo: "Livros e capítulos", valor: 6, detalhe: "desde 2023" },
      { rotulo: "Patentes", valor: null, detalhe: "depositadas no INPI" },
      {
        rotulo: "Programas de computador",
        valor: null,
        detalhe: "registrados no INPI",
      },
      {
        rotulo: "Projetos com empresas",
        valor: null,
        detalhe: "P&D e EMBRAPII",
      },
      { rotulo: "Prêmios", valor: null, detalhe: "nacionais e internacionais" },
    ] as { rotulo: string; valor: number | null; detalhe: string }[],
    emAtualizacao: "Em atualização",
    publicacoesTitulo: "Publicações recentes",
    fonte: "Fonte: OpenAlex",
    tipos: { artigo: "Artigo", revisao: "Revisão" },
    reconhecimentosTitulo: "Reconhecimentos",
    reconhecimentos: [
      {
        titulo: "1º lugar entre os cientistas da UFC",
        texto:
          "Prof. Victor Hugo lidera o ranking Research.com de pesquisadores da universidade (2026).",
      },
      {
        titulo: "Programa nota 7",
        texto:
          "O PPGETI é um dos poucos programas de excelência internacional fora do eixo Sul e Sudeste.",
      },
      {
        titulo: "IEEE Senior Member",
        texto: "Título concedido pelo IEEE ao Prof. Victor Hugo.",
      },
    ],
    citacao: "Dados podem revelar padrões que mudam vidas.",
    citacaoFonte: "Frase do manual da marca BioDatA",
  },

  parcerias: {
    sobrancelha: "Parcerias",
    titulo: ["Pesquisa com empresas, ", "junto com o LESC", "."],
    texto:
      "O BioDatA é parceiro do LESC, Unidade EMBRAPII em Sistemas Embarcados Complexos da UFC. Com o LESC, a pesquisa do grupo entra em projetos de P&D com empresas, contratados rápido e com parte do custo coberta pela EMBRAPII.",
    parceiros: [
      {
        sigla: "UFC",
        nome: "Universidade Federal do Ceará",
        papel:
          "Instituição sede, Departamento de Engenharia de Teleinformática (DETI).",
        href: site.ufc,
      },
      {
        sigla: "PPGETI",
        nome: "Pós-Graduação em Engenharia de Teleinformática",
        papel:
          "Programa nota 7 na CAPES ao qual o grupo é vinculado, com mestrado e doutorado.",
        href: site.ppgeti,
      },
      {
        sigla: "LESC",
        nome: "Laboratório de Engenharia de Sistemas de Computação",
        papel:
          "Unidade EMBRAPII parceira do BioDatA em sistemas embarcados complexos.",
        href: site.lesc,
      },
      {
        sigla: "CNPq",
        nome: "Diretório dos Grupos de Pesquisa",
        papel: "Grupo certificado pela instituição desde 2023.",
        href: site.cnpq,
      },
    ],
    chamadaTitulo: "Sua empresa tem um desafio em saúde?",
    chamadaTexto:
      "Pelo modelo EMBRAPII, a empresa negocia o projeto direto com a unidade, sem esperar edital, e a EMBRAPII cobre parte do investimento.",
    chamadaBotao: "Proponha um projeto",
    passos: [
      {
        titulo: "Conversa inicial",
        texto:
          "A empresa apresenta o desafio e negocia o projeto direto com a unidade.",
      },
      {
        titulo: "Fluxo contínuo",
        texto: "Sem edital: o projeto pode começar a qualquer momento do ano.",
      },
      {
        titulo: "Recurso compartilhado",
        texto: "A EMBRAPII cobre parte do investimento.",
      },
      {
        titulo: "Entrega",
        texto: "A equipe desenvolve, valida e transfere a tecnologia.",
      },
    ],
    futurosSobrancelha: "Projetos futuros",
    futurosTitulo: "Próximos projetos com o LESC",
    futurosTexto:
      "Seguem as quatro competências da Unidade EMBRAPII: sistemas embarcados, microeletrônica, tolerância a falhas e processamento de sinais.",
    futuros: [
      {
        titulo: "Dispositivos médicos embarcados",
        texto:
          "Monitoramento fisiológico com IA rodando na borda, de baixo consumo e alta confiabilidade.",
        tag: "Sistemas embarcados",
      },
      {
        titulo: "Hardware tolerante a falhas para saúde",
        texto:
          "Arquiteturas robustas para equipamentos críticos em ambiente hospitalar.",
        tag: "Tolerância a falhas",
      },
      {
        titulo: "Processamento de sinais em tempo real",
        texto:
          "Pipelines de sinais biomédicos acelerados em hardware dedicado.",
        tag: "Processamento de sinais",
      },
      {
        titulo: "Microeletrônica para sensores clínicos",
        texto:
          "Front ends analógicos e sensores customizados para aquisição de dados biomédicos.",
        tag: "Microeletrônica",
      },
    ],
  },

  equipe: {
    sobrancelha: "Equipe",
    titulo: "Quem faz o BioDatA",
    /* {n} vira o total de membros. */
    texto:
      "{n} pesquisadores em formação, da iniciação científica ao pós-doutorado, liderados por professores do DETI/UFC.",
    lider: {
      ...lider,
      cargo: "Líder do grupo",
      foco: ["Reconhecimento de padrões", "IA", "Imagem médica"],
    },
    foto: {
      src: fotoEvento,
      alt: "Prof. Victor Hugo C. de Albuquerque ao lado do púlpito, no palco do 30º Congresso Brasileiro de Engenharia Biomédica",
      rotulo: "CBEB 2026",
      titulo: "30º Congresso Brasileiro de Engenharia Biomédica",
      texto: "Fortaleza, 28 de setembro a 2 de outubro de 2026",
    },
    abas: "Membros por nível",
    niveis: [
      { categoria: "Pós-doutorado", membros: membros.posDoutorado },
      { categoria: "Doutorado", membros: membros.doutorado },
      { categoria: "Mestrado", membros: membros.mestrado },
      { categoria: "Especialização", membros: membros.especializacao },
      { categoria: "Graduação", membros: membros.graduacao },
    ],
    colaboracao: "Colaboração internacional:",
    colaboradores: [{ nome: colaboradorExterno, pais: "Bolívia" }],
  },

  facaParte: {
    sobrancelha: "Faça parte",
    titulo: "Venha pesquisar com a gente",
    texto:
      "Procuramos gente curiosa que quer ver a pesquisa sair do papel. No grupo você trabalha em projetos aplicados e publica o que desenvolve.",
    beneficios: [
      {
        titulo: "Programa nota 7",
        texto:
          "Mestrado e doutorado no PPGETI, programa com nota máxima na CAPES.",
      },
      {
        titulo: "Problemas reais",
        texto: "Projetos aplicados com parceiros da saúde e da indústria.",
      },
      {
        titulo: "Publicação de alto impacto",
        texto:
          "Orientação próxima para publicar em periódicos Q1 e conferências IEEE.",
      },
      {
        titulo: "Rede internacional",
        texto: "Colaboração com pesquisadores no Brasil e no exterior.",
      },
      {
        titulo: "Infraestrutura LESC",
        texto: "Acesso a laboratório de hardware, embarcados e prototipagem.",
      },
      {
        titulo: "Propriedade intelectual",
        texto:
          "Apoio para depositar patente, registrar software e transferir tecnologia.",
      },
    ],
    procuramos: "Quem procuramos",
    perfis: [
      "Engenharia de Teleinformática, Computação, Elétrica ou Biomédica",
      "Ciência de Dados, Estatística e áreas afins",
      "Profissionais de saúde interessados em pesquisa aplicada",
      "Estudantes de graduação em busca de iniciação científica",
    ],
    ingresso:
      "Para mestrado e doutorado, a entrada é pelos editais de seleção do PPGETI. Para iniciação científica, colaboração ou pós-doutorado, fale direto com a gente.",
    botaoEditais: "Editais do PPGETI",
    botaoParticipar: "Quero participar",
  },

  rodape: {
    sobrancelha: "Contato",
    titulo: ["Tem um problema em saúde? ", "Fale com a gente."],
    texto:
      "Empresas, hospitais, pesquisadores e estudantes podem escrever para o grupo e contar o que querem resolver.",
    email: "E-mail:",
    instagram: "Instagram @_biodata_",
    endereco:
      "Departamento de Engenharia de Teleinformática, Campus do Pici, Fortaleza, CE",
    navegacao: "Navegação",
    vinculos: "Vínculos",
    links: [
      { rotulo: "Universidade Federal do Ceará", href: site.ufc },
      { rotulo: "PPGETI, nota 7 CAPES", href: site.ppgeti },
      { rotulo: "LESC · Unidade EMBRAPII", href: site.lesc },
      { rotulo: "Espelho do grupo no CNPq", href: site.cnpq },
    ],
    direitos: "Grupo de pesquisa certificado pela UFC no CNPq.",
  },
};

export type Conteudo = typeof pt;
