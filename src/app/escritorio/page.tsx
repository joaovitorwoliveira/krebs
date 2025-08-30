import BackgroundWrapper from "@/components/BackgroundWrapper";
import AwardsSection from "@/components/Office/AwardsSection";
import IntroductionSection from "@/components/Office/IntroductionSection";
import TeamSection from "@/components/Office/TeamSection";
import WorkMethodSection from "@/components/Office/WorkMethodSection";

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
