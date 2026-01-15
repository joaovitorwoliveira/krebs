import AwardsSection from "./AwardsSection";
import HeroWhoWeAre from "./HeroWhoWeAre";
import ImagesSection from "./ImagesSection";
import MapSection from "./MapSection";
import TeamSection from "./TeamSection";

export default function WhoWeAre() {
  return (
    <>
      <HeroWhoWeAre />
      <MapSection />
      <TeamSection />
      <ImagesSection />
      <AwardsSection />
    </>
  );
}
