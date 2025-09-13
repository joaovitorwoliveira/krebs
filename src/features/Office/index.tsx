import TeamSection from "../Team";
import AwardsSection from "./AwardsSection";
import IntroductionSection from "./IntroductionSection";
import WorkMethodSection from "./WorkMethodSection";

export default function Office() {
  return (
    <div className="pt-10">
      <IntroductionSection />
      <WorkMethodSection />
      <AwardsSection />
      <TeamSection />
    </div>
  );
}
