import AwardsSection from "./AwardsSection";
import HeroWhoWeAre from "./HeroWhoWeAre";
import HistorySection from "./HistorySection";
import TeamSection from "./TeamSection";
import { Timeline } from "./Timeline";
import WorkMethodSection from "./WorkMethodSection";

const timelineData = [
  {
    year: "1982",
    description:
      "André Krebs inicia sua trajetória no paisagismo no Rio de Janeiro",
    hasCarousel: true,
  },
  {
    year: "Anos 90",
    description:
      "Expansão para o Sul, referência em condomínios e residências de alto padrão",
  },
  {
    year: "2000-2010",
    description:
      "Diversificação para parques, shoppings, hotéis e áreas corporativas",
  },
  {
    year: "2010-2020",
    description: "+500 projetos entregues em +70 cidades e 3 países",
  },
  {
    year: "Hoje",
    description: "Nova geração soma inovação e estratégia ao legado de André",
  },
  {
    year: "Futuro",
    description:
      "Paisagismo como ativo estratégico para elevar VGV e criar experiências de vida",
  },
];

export default function WhoWeAre() {
  return (
    <div className="pt-10">
      <HeroWhoWeAre />
      <HistorySection />
      <Timeline data={timelineData} />
      <WorkMethodSection />
      <AwardsSection />
      <TeamSection />
    </div>
  );
}
