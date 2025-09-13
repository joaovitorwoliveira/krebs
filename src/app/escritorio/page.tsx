import BackgroundWrapper from "@/common/components/BackgroundWrapper";
import AwardsSection from "@/features/Office/AwardsSection";
import IntroductionSection from "@/features/Office/IntroductionSection";
import TeamSection from "@/features/Office/TeamSection";
import WorkMethodSection from "@/features/Office/WorkMethodSection";

export default function Office() {
  return (
    <BackgroundWrapper>
      <div className="pt-10">
        <IntroductionSection />
        <WorkMethodSection />
        <AwardsSection />
        <TeamSection />
      </div>
    </BackgroundWrapper>
  );
}
