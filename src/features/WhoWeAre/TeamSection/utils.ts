export interface TeamMember {
  id: string;
  name: string;
  category: "socios" | "associados" | "equipe";
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "andre",
    name: "André Krebs",
    category: "socios",
    image: "/images/team/andre.jpg",
  },
  {
    id: "victor",
    name: "Victor Krebs",
    category: "socios",
    image: "/images/team/victor.jpg",
  },
  {
    id: "joao",
    name: "João Wouters",
    category: "socios",
    image: "/images/team/joao-pedro.jpg",
  },
  {
    id: "eduardo",
    name: "Eduardo Schuch",
    category: "associados",
    image: "/images/team/eduardo.jpg",
  },
  {
    id: "daniel",
    name: "Daniel Bertoldi",
    category: "associados",
    image: "/images/team/daniel.jpg",
  },
  {
    id: "ana-leal",
    name: "Ana Leal",
    category: "equipe",
    image: "/images/team/ana-leal.jpg",
  },
  {
    id: "ana-luiza",
    name: "Ana Luíza Cassalta",
    category: "equipe",
    image: "/images/team/ana-luiza.jpg",
  },
  {
    id: "amanda",
    name: "Amanda Nogueira",
    category: "equipe",
    image: "/images/team/amanda.jpg",
  },
  {
    id: "beatriz",
    name: "Beatriz Moraes",
    category: "equipe",
    image: "/images/team/beatriz.jpg",
  },
  {
    id: "brunna",
    name: "Brunna Oliveira",
    category: "equipe",
    image: "/images/team/brunna.jpg",
  },
  {
    id: "lucas",
    name: "Lucas Isoldi",
    category: "equipe",
    image: "/images/team/lucas.jpg",
  },
  {
    id: "marina",
    name: "Marina de Armas",
    category: "equipe",
    image: "/images/team/marina.jpg",
  },
  {
    id: "miguel",
    name: "Miguel Klee",
    category: "equipe",
    image: "/images/team/miguel.jpg",
  },
  {
    id: "raisha",
    name: "Raisha Holz",
    category: "equipe",
    image: "/images/team/raisha.jpg",
  },
  {
    id: "rafael",
    name: "Rafael Freitas",
    category: "equipe",
    image: "/images/team/rafael.jpg",
  },
  {
    id: "rodrigo",
    name: "Rodrigo Reinhardt",
    category: "equipe",
    image: "/images/team/rodrigo.jpg",
  },
];
