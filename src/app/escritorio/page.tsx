import BackgroundWrapper from "@/components/office/BackgroundWrapper";
import IntroductionSection from "@/components/office/IntroductionSection";
import WorkMethodSection from "@/components/office/WorkMethodSection";
import AwardsSection from "@/components/office/AwardsSection";
import TeamSection from "@/components/office/TeamSection";

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
