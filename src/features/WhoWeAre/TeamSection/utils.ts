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
    role: "Sócio Fundador",
    description: [
      "Diretor Executivo",
      "Surfista pioneiro",
      "+",
      "Arquiteto e Urbanista (UFPEL)",
      "Mestrado (UFPEL)",
    ],
    image: "/images/team/andre.jpg",
  },
  {
    id: "victor",
    name: "Victor Krebs",
    category: "socios",
    role: "Sócio",
    description: [
      "Diretor de Projetos",
      "Especialista em Urbanismo",
      "+",
      "Arquiteto e Urbanista (UFRGS)",
    ],
    image: "/images/team/victor.jpg",
  },
  {
    id: "joao",
    name: "João Wouters",
    category: "socios",
    role: "Sócio",
    description: [
      "Diretor de Operações",
      "Especialista em Gestão",
      "+",
      "Administrador (FGV)",
    ],
    image: "/images/team/joao-pedro.jpg",
  },
  {
    id: "eduardo",
    name: "Eduardo Schuch",
    category: "associados",
    role: "Associado",
    description: [
      "Coordenador de Projetos",
      "+",
      "Arquiteto e Urbanista (UFPEL)",
    ],
    image: "/images/team/eduardo.jpg",
  },
  {
    id: "daniel",
    name: "Daniel Bertoldi",
    category: "associados",
    role: "Associado",
    description: [
      "Coordenador de Desenvolvimento",
      "+",
      "Engenheiro Civil (UFRGS)",
    ],
    image: "/images/team/daniel.jpg",
  },
  {
    id: "ana-leal",
    name: "Ana Leal",
    category: "equipe",
    role: "Arquiteta",
    description: [
      "Projetos Residenciais",
      "+",
      "Arquiteta e Urbanista (PUC-RS)",
    ],
    image: "/images/team/ana-leal.jpg",
  },
  {
    id: "ana-luiza",
    name: "Ana Luíza Cassalta",
    category: "equipe",
    role: "Arquiteta",
    description: ["Projetos Comerciais", "+", "Arquiteta e Urbanista (UFPEL)"],
    image: "/images/team/ana-luiza.jpg",
  },
  {
    id: "amanda",
    name: "Amanda Nogueira",
    category: "equipe",
    role: "Designer",
    description: ["Design de Interiores", "+", "Designer (UNISINOS)"],
    image: "/images/team/amanda.jpg",
  },
  {
    id: "beatriz",
    name: "Beatriz Moraes",
    category: "equipe",
    role: "Arquiteta",
    description: ["Projetos Urbanos", "+", "Arquiteta e Urbanista (UFRGS)"],
    image: "/images/team/beatriz.jpg",
  },
  {
    id: "brunna",
    name: "Brunna Oliveira",
    category: "equipe",
    role: "Engenheira",
    description: ["Estruturas", "+", "Engenheira Civil (UFPEL)"],
    image: "/images/team/brunna.jpg",
  },
  {
    id: "lucas",
    name: "Lucas Isoldi",
    category: "equipe",
    role: "Arquiteto",
    description: ["Modelagem 3D", "+", "Arquiteto e Urbanista (UCPel)"],
    image: "/images/team/lucas.jpg",
  },
  {
    id: "marina",
    name: "Marina de Armas",
    category: "equipe",
    role: "Arquiteta",
    description: [
      "Projetos Paisagísticos",
      "+",
      "Arquiteta e Urbanista (UFPEL)",
    ],
    image: "/images/team/marina.jpg",
  },
  {
    id: "miguel",
    name: "Miguel Klee",
    category: "equipe",
    role: "Arquiteto",
    description: ["Projetos Comerciais", "+", "Arquiteto e Urbanista (UFRGS)"],
    image: "/images/team/miguel.jpg",
  },
  {
    id: "raisha",
    name: "Raisha Holz",
    category: "equipe",
    role: "Designer",
    description: ["Design Gráfico", "+", "Designer (FURG)"],
    image: "/images/team/raisha.jpg",
  },
  {
    id: "rodrigo",
    name: "Rodrigo Reinhardt",
    category: "equipe",
    role: "Arquiteto",
    description: [
      "Projetos Residenciais",
      "+",
      "Arquiteto e Urbanista (UFPEL)",
    ],
    image: "/images/team/rodrigo.jpg",
  },
];
