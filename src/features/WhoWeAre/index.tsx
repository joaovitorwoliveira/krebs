import AwardsSection from "./AwardsSection";
import IntroductionSection from "./IntroductionSection";
import TeamSection from "./TeamSection";
import WorkMethodSection from "./WorkMethodSection";

export default function WhoWeAre() {
  return (
    <div className="pt-10">
      <IntroductionSection />
      <WorkMethodSection />
      <AwardsSection />
      <TeamSection />
    </div>
  );
}
