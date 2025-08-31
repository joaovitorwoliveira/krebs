export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "André Krebs",
    role: "Diretor Executivo - Fundador",
    imageUrl: "/images/team/andre.jpg",
  },
  {
    name: "Victor Krebs",
    role: "Diretor Comercial - Sócio",
    imageUrl: "/images/team/victor.jpg",
  },
  {
    name: "João Pedro Wouters",
    role: "Diretor de Projetos - Sócio",
    imageUrl: "/images/team/jp.jpg",
  },
];
