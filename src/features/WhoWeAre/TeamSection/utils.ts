export interface TeamMember {
  id: string;
  name: string;
  category: "socios" | "associados" | "equipe";
  role: string;
  description: string[];
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "andre",
    name: "André Krebs",
    category: "socios",
    role: "Fundador e Diretor Executivo",
    description: [
      "+",
      "André Krebs é sócio fundador da Krebs+ e atua com uma postura profissional marcada pela busca constante por excelência, inovação e rigor conceitual. Com mais de quatro décadas de experiência em arquitetura paisagística, conduz a empresa junto com seus sócios com um olhar estratégico, sensível ao design e profundamente comprometido com soluções autorais, inteligentes e sustentáveis, sempre orientadas a conectar pessoas e natureza. Sua atuação reflete uma liderança técnica sólida, curiosa e atualizada, que valoriza o processo, o detalhe e a qualidade como fundamentos inegociáveis da entrega final.",
      "+",
      "Arquitetura (UFRJ)",
      "Pós-graduação em Jardíneria e Paisagismo (Universidad Politecnica de Madrid)",
    ],
    image: "/images/team/andre.jpg",
  },
  {
    id: "victor",
    name: "Victor Krebs",
    category: "socios",
    role: "Diretor Comercial",
    description: [
      "+",
      "??????????????",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
    ],
    image: "/images/team/victor.jpg",
  },
  {
    id: "joao",
    name: "João Wouters",
    category: "socios",
    role: "Diretor Criativo",
    description: [
      "+",
      "João é arquiteto paisagista e entende o projeto como um exercício de leitura profunda do lugar. Sua prática investiga as relações invisíveis que moldam cada espaço, criando paisagens que não apenas acompanham a arquitetura, mas constroem atmosfera. Com uma visão contemporânea, sustentável e contemplativa, trabalha o paisagismo como estrutura sensível da experiência cotidiana, pensada para o habitar.",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
    ],
    image: "/images/team/joao-pedro.jpg",
  },
  {
    id: "eduardo",
    name: "Eduardo Schuch",
    category: "associados",
    role: "Diretor de Operações e Estratégia",
    description: [
      "+",
      "Eduardo é arquiteto paisagista e atua na operação e estratégia da empresa. Tem uma visão criativa e participa ativamente no processo inicial dos novos projetos através de suas estimativas, entendendo que transformar investimento em projeto não é só sobre números, exige sensibilidade, leitura de espaço e intenção. A partir da verdade direciona para que os projetos aconteçam dentro das condições reais de investimento de cada cliente. Sempre faz analogias sobre gastronomia para explicar melhor o seu trabalho. É um dos responsáveis por escolher os “ingredientes” certos para que se consiga “degustar” do resultado final, com previsibilidade e fidelidade com o que foi pensado.",
      "Arquiteto e Urbanista (UFPEL)",
    ],
    image: "/images/team/eduardo.jpg",
  },
  {
    id: "daniel",
    name: "Daniel Bertoldi",
    category: "associados",
    role: "Diretor de Obras e Garden Design",
    description: [
      "+",
      "Daniel é arquiteto paisagista, que traz um olhar criterioso para composições de vegetação no setor de execuções do escritório. Atua na revisão e adequação de viabilidade das espécies dos projetos e sua disponibilidade de mercado, elaborando propostas e realizando o planejamento da logística e gestão de obras. Como arquiteto se interessa por entender o funcionamento das coisas de forma prática para traduzir o projeto em realidade, com sua dupla formação em Biotecnologia traz também um conhecimento e olhar diferenciado ao planejar o uso das vegetações.",
      "+",
      "Arquitetetura e Urbanismo (UFPEL)",
      "Biotecnologista (UFPEL)",
    ],
    image: "/images/team/daniel.jpg",
  },
  {
    id: "ana-leal",
    name: "Ana Leal",
    category: "equipe",
    role: "Coordenadora Financeira",
    description: [
      "+",
      "Ana Cândida é formada em Processos Gerenciais e atua na empresa há 18 anos, contribuindo ativamente em diversas áreas. Com ampla experiência e visão estratégica, auxilia a equipe, clientes, parceiros e fornecedores, promovendo a integração entre processos e fortalecendo relações para garantir eficiência e bons resultados.",
      "+",
      "Processos Gerenciais (SENAC)",
    ],
    image: "/images/team/ana-leal.jpg",
  },
  {
    id: "ana-luiza",
    name: "Ana Luíza Cassalta",
    category: "equipe",
    role: "Consultora estratégica",
    description: [
      "+",
      "Ana Luiza é arquiteta e urbanista e atua como consultora estratégica do escritório, com foco na estruturação de processos e no desenvolvimento de soluções que ampliam a eficiência e a organização do trabalho criativo.",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
    ],
    image: "/images/team/ana-luiza.jpg",
  },
  {
    id: "amanda",
    name: "Amanda Nogueira",
    category: "equipe",
    role: "Trainee Comercial",
    description: [
      "+",
      "Amanda é estudante de arquitetura e atua na área comercial do escritório, realizando o atendimento aos clientes, a organização interna e a gestão de orçamentos, sempre alinhada aos processos e às demandas dos projetos de arquitetura. Com atenção aos detalhes e foco no relacionamento com os clientes, compreende a importância de cada comunicação entre cliente, arquitetura e equipe técnica, garantindo um processo projetual claro, eficiente e bem alinhado desde a concepção até a entrega.",
      "+",
      "Graduanda em Arquitetura e Urbanismo(UFPEL)",
    ],
    image: "/images/team/amanda.jpg",
  },
  {
    id: "beatriz",
    name: "Beatriz Moraes",
    category: "equipe",
    role: "Arquiteta Paisagista",
    description: [
      "+",
      "Para Beatriz, a arquitetura paisagística é arte, uma forma de criar espaços que dialogam com quem os observa e, ao mesmo tempo, atendem ao cotidiano. Cada projeto é único, pensado para causar sensações, com um olhar técnico e sensível que valoriza a permanência, a sustentabilidade e a autenticidade.",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
    ],
    image: "/images/team/beatriz.jpg",
  },
  {
    id: "brunna",
    name: "Brunna Oliveira",
    category: "equipe",
    role: "Arquiteta Paisagista",
    description: [
      "+",
      "Arquiteta paisagista, Brunna gosta de sair do óbvio. Criativa e estratégica, projeta paisagens com identidade e profundamente conectadas à percepção, experiência e criação de sentido a partir da interação entre corpo e espaço",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
      "Mestranda em Arquitetura e Urbanismo (PROGRAU/UFPel)",
    ],
    image: "/images/team/brunna.jpg",
  },
  {
    id: "lucas",
    name: "Lucas Isoldi",
    category: "equipe",
    role: "Arquiteto Paisagista",
    description: [
      "+",
      "Arquiteto, urbanista e paisagista, Lucas desenvolve seu trabalho a partir da investigação cuidadosa da relação entre forma, função e a experiência humana no espaço. Sua prática busca traduzir necessidades em soluções bem resolvidas, confortáveis e carregadas de significado. Para ele, cada projeto é uma oportunidade de transformar intenções em ambientes que acolhem, inspiram e qualificam a vida de quem os torna vibrantes.",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
    ],
    image: "/images/team/lucas.jpg",
  },
  {
    id: "marina",
    name: "Marina de Armas",
    category: "equipe",
    role: "Arquiteta Paisagista",
    description: [
      "+",
      "Marina compreende o projeto como um percurso da ideia ao espaço, interessada em perceber o extraordinário a partir do comum. Em sua atuação, acredita que o conceito estrutura o pensamento, a técnica sustenta a imaginação e o paisagismo transforma a rotina em experiência.",
      "+",
      "Arquiteta e Urbanista (UFPEL)",
    ],
    image: "/images/team/marina.jpg",
  },
  {
    id: "miguel",
    name: "Miguel Klee",
    category: "equipe",
    role: "Profissional 3D",
    description: [
      "Miguel é um profissional de modelagem 3D e representação visual especializado no desenvolvimento de ambientes digitais alinhados à concepção e à tomada de decisões paisagísticas e arquitetônicas. Com background em ciência da computação e arquitetura, alia curiosidade e criatividade para traduzir ideias em representações claras, sustentáveis e alinhadas ao resultado final do projeto.",
    ],
    image: "/images/team/miguel.jpg",
  },
  {
    id: "raisha",
    name: "Raisha Holz",
    category: "equipe",
    role: "Arquiteta Paisagista",
    description: [
      "+",
      "Raischa Holz é arquiteta com foco na experiência do usuário, na sustentabilidade e na riqueza dos detalhes, aliando um olhar estratégico e funcional ao processo de projeto. Seu interesse pelo microclima urbano orienta paisagens que entendem o paisagismo como agente ativo na transformação do ambiente e na qualidade de vida de quem o habita.",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
    ],
    image: "/images/team/raisha.jpg",
  },
  {
    id: "rafael",
    name: "Rafael Freitas",
    category: "equipe",
    role: "BIM Manager",
    description: [
      "+",
      "Rafael é arquiteto paisagista e BIM Manager, atuando na integração entre tecnologia e projeto. Seu trabalho transforma a complexidade técnica em soluções mais claras e inteligentes ao longo do tempo, acelerando processos e transformando a forma como a arquitetura é pensada e produzida.",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
    ],
    image: "/images/team/rafael.jpg",
  },
  {
    id: "rodrigo",
    name: "Rodrigo Reinhardt",
    category: "equipe",
    role: "Garden Designer",
    description: [
      "+",
      "Rodrigo é arquiteto paisagista responsável pelo setor de garden design, onde atua desde a concepção inicial de projeto até a curadoria de espécies em viveiros e a execução final. É reconhecido pela preocupação com o uso de espécies nativas e atenção às novidades do mercado, sempre em busca de elaborar um jardim com design e sustentabilidade.",
      "+",
      "Arquitetura e Urbanismo (UFPEL)",
      "Master em Paisagismo (IPOG)",
    ],
    image: "/images/team/rodrigo.jpg",
  },
];
