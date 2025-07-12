import BackgroundWrapper from "@/components/BackgroundWrapper";
import IntroductionSection from "@/components/Office/IntroductionSection";
import WorkMethodSection from "@/components/Office/WorkMethodSection";
import AwardsSection from "@/components/Office/AwardsSection";
import TeamSection from "@/components/Office/TeamSection";

export default function Office() {
  return (
    <BackgroundWrapper>
      <IntroductionSection />
      <WorkMethodSection />
      <AwardsSection />
      <TeamSection />
    </BackgroundWrapper>
  );
}
