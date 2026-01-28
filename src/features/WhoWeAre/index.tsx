import AwardsSection from "./AwardsSection";
import HeroWhoWeAre from "./HeroWhoWeAre";
import ImagesSection from "./ImagesSection";
import MapSection from "./MapSection";
import TeamSection from "./TeamSection";
import VideoSection from "./VideoSection";

export default function WhoWeAre() {
  return (
    <>
      <HeroWhoWeAre />
      <VideoSection />
      <MapSection />
      <TeamSection />
      <ImagesSection />
      <AwardsSection />
    </>
  );
}
