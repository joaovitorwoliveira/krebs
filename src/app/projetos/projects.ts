export interface Project {
  slug: string;
  title: string;
  texto: string;
  date: string;
  place: string;
  architecture?: string;
  photo: string;
  coverPhoto: string;
  images: string[];
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "jardim-svg",
    title: "Jardim SVG",
    texto: `
      Localizada na Praia da Barrinha, próxima a Garopaba, esta residência de
      veraneio recebeu um projeto de paisagismo que atua de forma integrada à
      arquitetura e ao entorno natural. A composição valoriza espécies nativas e
      adaptadas ao clima litorâneo, organizadas em maciços densos, com variações
      de textura, altura e tonalidade ao longo dos percursos. Na fachada, o
      paisagismo desempenha papel funcional e estético: suaviza os volumes
      construídos, cria transições com o terreno e contribui para a privacidade
      dos ambientes internos. Na área da piscina, a vegetação envolve o espaço
      com sutileza, oferecendo proteção visual, sombra e sensação de abrigo —
      sem perder a permeabilidade da paisagem. A linguagem adotada prioriza
      linhas orgânicas, baixa manutenção e uma relação fluida entre interior e
      exterior, reforçando o caráter acolhedor e contemporâneo da casa. Mais do
      que um jardim decorativo, trata-se de um sistema vivo, que acompanha o
      tempo da casa e amplia sua experiência de uso ao longo das estações.
    `,
    date: "2023",
    place: "Praia da Barra - Garopaba, SC",
    architecture: "Marcia Barbieri - Arte Arquitetura",
    photo: "Lucas Daneris",
    coverPhoto: "/images/projects/jardim-svg/foto-5.jpg",
    tags: ["residencial", "jardim", "praia", "piscina"],
    images: [
      "/images/projects/jardim-svg/foto-1.jpg",
      "/images/projects/jardim-svg/foto-2.jpg",
      "/images/projects/jardim-svg/foto-3.jpg",
      "/images/projects/jardim-svg/foto-4.jpg",
      "/images/projects/jardim-svg/foto-5.jpg",
      "/images/projects/jardim-svg/foto-6.jpg",
      "/images/projects/jardim-svg/foto-7.jpg",
      "/images/projects/jardim-svg/foto-8.jpg",
    ],
  },
  {
    slug: "jardim-atj",
    title: "Jardim ATJ",
    texto: `
      Na Praia da Silveira, em Garopaba, o projeto parte da paisagem para
      esculpir sua própria forma. A piscina orgânica, principal gesto do
      desenho, nasce da topografia e se curva em harmonia com os contornos do
      morro e da enseada à frente. A implantação respeita o relevo natural e
      propõe uma conexão sutil entre arquitetura e natureza. O jardim, mínimo em
      sua intervenção, atua como transição entre o terreno construído e o bosque
      nativo já existente — costurando o novo ao lugar. A vegetação foi mantida
      como protagonista, reforçando a sensação de imersão e pertencimento. O
      projeto valoriza a contenção formal e material, deixando que o entorno
      assuma o protagonismo da experiência.
    `,
    date: "2018",
    place: "Praia da Silvera - Garopaba, SC",
    photo: "Lucas Daneris",
    coverPhoto: "/images/projects/jardim-atj/foto-8.jpg",
    tags: ["residencial", "jardim", "praia", "piscina", "bosque"],
    images: [
      "/images/projects/jardim-atj/foto-1.jpg",
      "/images/projects/jardim-atj/foto-2.jpg",
      "/images/projects/jardim-atj/foto-3.jpg",
      "/images/projects/jardim-atj/foto-4.jpg",
      "/images/projects/jardim-atj/foto-5.jpg",
      "/images/projects/jardim-atj/foto-6.jpg",
      "/images/projects/jardim-atj/foto-7.jpg",
      "/images/projects/jardim-atj/foto-8.jpg",
    ],
  },
  {
    slug: "jardim-ltx",
    title: "Jardim LTX",
    texto: `
      Em Xangri-lá, a revitalização deste jardim partiu do diálogo com a
      pré-existência para propor novas camadas de vida e uso. A vegetação foi
      reorganizada com sutileza, respeitando as espécies consolidadas e
      reforçando o caráter tropical e praiano do terreno. A nova piscina, agora
      protagonista do espaço externo, assume um traçado generoso e convida ao
      convívio. Duas cascatas em rocha natural trazem sonoridade e movimento ao
      jardim, reforçando a presença da água como elemento central. A composição
      vegetal se estrutura em diferentes planos, com espécies de grande porte,
      folhagens densas e variações de textura que criam profundidade e fluidez
      visual. O resultado é um jardim exuberante e funcional, que valoriza a
      casa, acolhe a família e potencializa a vivência ao ar livre.
    `,
    date: "2018",
    place: "Xangri-la, RS",
    photo: "Lucas Daneris",
    coverPhoto: "/images/projects/jardim-ltx/foto-8.jpg",
    tags: ["residencial", "jardim", "praia", "piscina", "revitalização"],
    images: [
      "/images/projects/jardim-ltx/foto-1.jpg",
      "/images/projects/jardim-ltx/foto-2.jpg",
      "/images/projects/jardim-ltx/foto-3.jpg",
      "/images/projects/jardim-ltx/foto-4.jpg",
      "/images/projects/jardim-ltx/foto-5.jpg",
      "/images/projects/jardim-ltx/foto-6.jpg",
      "/images/projects/jardim-ltx/foto-7.jpg",
      "/images/projects/jardim-ltx/foto-8.jpg",
      "/images/projects/jardim-ltx/foto-9.jpg",
      "/images/projects/jardim-ltx/foto-10.jpg",
      "/images/projects/jardim-ltx/foto-11.jpg",
    ],
  },
  {
    slug: "jardim-malu",
    title: "Jardim MALU",
    texto: `
      Em Punta del Este, o paisagismo desta residência amplia os horizontes do
      morar ao integrar esporte, natureza e contemplação em uma mesma linguagem.
      O extenso terreno abriga quadras de tênis, futebol, poliesportiva e até
      uma área para paintball, compondo um programa ousado, mas equilibrado pela
      presença constante do verde. A escolha por espécies nativas e adaptadas ao
      clima costeiro garantiu rusticidade, autonomia e unidade visual ao
      conjunto. Maciços de gramíneas e vegetações de textura fina conduzem o
      olhar e definem os percursos com leveza, enquanto os planos abertos
      dialogam com a vastidão do entorno. O uso pontual de muros de pedra e
      revestimentos naturais reforça a materialidade local, trazendo solidez e
      elegância à composição. Trata-se de um jardim de grandes proporções e
      intenções claras, onde o paisagismo atua como mediador entre a vivência
      ativa e o silêncio da paisagem uruguaia.
    `,
    date: "2020",
    place: "Punta del Este, UY",
    architecture: "Estudio Obra Prima",
    photo: "Lucas Daneris",
    coverPhoto: "/images/projects/jardim-malu/foto-2.jpg",
    tags: ["residencial", "jardim", "esporte", "internacional"],
    images: [
      "/images/projects/jardim-malu/foto-1.jpg",
      "/images/projects/jardim-malu/foto-2.jpg",
      "/images/projects/jardim-malu/foto-3.jpg",
      "/images/projects/jardim-malu/foto-4.jpg",
      "/images/projects/jardim-malu/foto-5.jpg",
      "/images/projects/jardim-malu/foto-6.jpg",
    ],
  },
  {
    slug: "colegio-farroupilha",
    title: "Colégio Farroupilha",
    texto: `
      No coração do bairro Três Figueiras, em Porto Alegre, a primeira etapa do
      paisagismo do Colégio Farroupilha revela um novo gesto urbano. Mais do que
      uma intervenção estética, o projeto propõe uma reconfiguração sensível da
      relação entre escola, cidade e comunidade. O que antes era apenas fachada
      torna-se espaço de convivência e permanência. As calçadas expandem sua
      função e se transformam em ambientes de estar, onde bancos, vegetações,
      sombras e mobiliários compõem uma ambiência acolhedora — um convite à
      pausa, ao encontro e à observação. As linhas orgânicas do traçado e a
      escolha criteriosa das espécies revelam um paisagismo autoral que suaviza
      o ritmo da cidade e acolhe quem por ali passa. Em uma capital marcada por
      contrastes e escassez de áreas públicas de qualidade, abrir-se ao entorno
      é um ato de generosidade. Cada decisão — do desenho fluido ao mobiliário
      integrado — reflete um compromisso com a gentileza urbana, transformando o
      cotidiano com sutileza e intenção. É um lugar pensado para todos, onde o
      projeto encontra seu sentido na experiência compartilhada.
    `,
    date: "2025",
    place: "Porto Alegre, RS",
    architecture: "ZeBL+",
    photo: "Lucas Daneris",
    coverPhoto: "/images/projects/colegio-farroupilha/foto-1.jpg",
    tags: ["institucional", "urbano", "escola", "público"],
    images: [
      "/images/projects/colegio-farroupilha/foto-1.jpg",
      "/images/projects/colegio-farroupilha/foto-2.jpg",
      "/images/projects/colegio-farroupilha/foto-3.jpg",
      "/images/projects/colegio-farroupilha/foto-4.jpg",
      "/images/projects/colegio-farroupilha/foto-5.jpg",
      "/images/projects/colegio-farroupilha/foto-6.jpg",
      "/images/projects/colegio-farroupilha/foto-7.jpg",
    ],
  },
  {
    slug: "varanda-fek",
    title: "Varanda FEK",
    texto: `
      Em Porto Alegre, o projeto parte da premissa de criar um espaço externo que una funcionalidade e sofisticação. 
      O braseiro em pedra natural, de linhas curvilíneas e proteção em vidro, é o elemento central da composição. 
      Posicionado sobre um leito de vegetação, cria a sensação de peça flutuante, trazendo elegância e identidade ao ambiente.

      O paisagismo foi desenhado para envolver o braseiro e acompanhar o perímetro da varanda, utilizando espécies tropicais de 
      baixa manutenção que garantem textura, volume e permanência estética ao longo do ano. O mobiliário, de linhas puras 
      e materiais resistentes, mantém a unidade visual e dialoga com o concreto aparente e o piso neutro. 
      O resultado é um espaço coeso, confortável e visualmente equilibrado, pensado para contemplação e convivência.
    `,
    date: "2024",
    place: "Porto Alegre, RS",
    architecture: "Ambidestro",
    photo: "Lucas Daneris",
    coverPhoto: "/images/projects/varanda-fek/foto-1.jpg",
    tags: ["residencial", "varanda", "urbano", "terraço"],
    images: [
      "/images/projects/varanda-fek/foto-1.jpg",
      "/images/projects/varanda-fek/foto-2.jpg",
      "/images/projects/varanda-fek/foto-3.jpg",
      "/images/projects/varanda-fek/foto-4.jpg",
    ],
  },
  {
    slug: "rampa",
    title: "Rampa",
    texto: `
      Em Pelotas, o projeto Rampa transforma a cobertura do edifício em espaço público ativo e acessível. 
      A circulação vertical é o gesto principal: uma escadaria que se prolonga em degraus–bancos, patamares 
      de estar e mirantes, conectando níveis e convidando à permanência. Guarda-corpos em vidro e elementos 
      metálicos mantêm a transparência das bordas e reforçam a leitura contínua do percurso, valorizando a vista e o pôr do sol.

      O paisagismo organiza a cobertura em faixas: maciços estruturais de folhagem escultural junto às circulações e, 
      ao fundo, gramíneas e capins ornamentais de textura e porte variados. As espécies foram selecionadas pela 
      adaptação ao clima do sul e pela baixa manutenção — alta resistência ao vento, insolação e uso intensivo. 
      O conjunto equilibra robustez técnica e elegância material, resultando em um terraço público coeso, generoso e durável.
    `,
    date: "2024",
    place: "Pelotas, RS",
    photo: "Lucas Daneris",
    coverPhoto: "/images/projects/rampa/foto-3.jpg",
    tags: ["público", "terraço", "urbano", "cobertura"],
    images: [
      "/images/projects/rampa/foto-1.jpg",
      "/images/projects/rampa/foto-2.jpg",
      "/images/projects/rampa/foto-3.jpg",
      "/images/projects/rampa/foto-4.jpg",
      "/images/projects/rampa/foto-5.jpg",
      "/images/projects/rampa/foto-6.jpg",
      "/images/projects/rampa/foto-7.jpg",
    ],
  },
  {
    slug: "shopping-iguatemi",
    title: "Shopping Iguatemi",
    texto: `
      Em Porto Alegre, a intervenção no acesso do Shopping Iguatemi buscou qualificar 
      a experiência urbana e integrar o paisagismo à arquitetura existente. 
      Floreiras lineares com bancos incorporados abrigam exemplares de sibipiruna, 
      espécie de grande porte e floração delicada, que proporciona sombra e identidade visual ao espaço.

      Complementando a composição, vasos com espécies floríferas trazem cor e vitalidade ao percurso. 
      O tratamento urbanístico incluiu bicicletários, iluminação e mobiliário de apoio, garantindo 
      conforto, funcionalidade e incentivo ao uso do espaço por diferentes públicos. O resultado é um 
      acesso mais convidativo, com equilíbrio entre estética, uso e durabilidade.
    `,
    date: "2017",
    place: "Porto Alegre, RS",
    photo: "Vanessa Bohn",
    coverPhoto: "/images/projects/shopping-iguatemi/foto-4.jpg",
    tags: ["comercial", "urbano", "público", "acesso"],
    images: [
      "/images/projects/shopping-iguatemi/foto-1.jpg",
      "/images/projects/shopping-iguatemi/foto-2.jpg",
      "/images/projects/shopping-iguatemi/foto-3.jpg",
      "/images/projects/shopping-iguatemi/foto-4.jpg",
      "/images/projects/shopping-iguatemi/foto-5.jpg",
    ],
  },
];
