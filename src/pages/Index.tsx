import {
  LandingLayout,
  SectionHero,
  SectionMission,
  SectionModel,
  SectionDivisions,
  SectionPrinciples,
  SectionTimeline,
  SectionTechStack,
  SectionTestimonials,
  SectionInvestment,
  SectionCTA,
} from "@/components/landing";

const Index = () => {
  return (
    <LandingLayout>
      <SectionHero />
      <SectionMission />
      <SectionModel />
      <SectionDivisions />
      <SectionPrinciples />
      <SectionTimeline />
      <SectionTechStack />
      <SectionTestimonials />
      <SectionInvestment />
      <SectionCTA />
    </LandingLayout>
  );
};

export default Index;
