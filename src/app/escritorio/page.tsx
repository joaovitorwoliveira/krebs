import BackgroundWrapper from "@/components/BackgroundWrapper";
import AwardsSection from "@/components/office/AwardsSection";
import IntroductionSection from "@/components/office/IntroductionSection";
import TeamSection from "@/components/office/TeamSection";
import WorkMethodSection from "@/components/office/WorkMethodSection";

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
