import BackgroundWrapper from "@/components/BackgroundWrapper";
import AwardsSection from "@/components/OfficeComponent/AwardsSection";
import IntroductionSection from "@/components/OfficeComponent/IntroductionSection";
import TeamSection from "@/components/OfficeComponent/TeamSection";
import WorkMethodSection from "@/components/OfficeComponent/WorkMethodSection";

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
