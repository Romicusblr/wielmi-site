import type { FC } from "react";
import GridLineH from "@/ui/line-horizontal";
import Testimonials from "@/ui/landing/testimonials";
import Hero from "@/ui/landing/hero";
import AboutSection from "@/ui/landing/about";
import WorkStepsSection from "@/ui/landing/steps";
import BlackCardSection from "@/ui/landing/black-cards";
import IconCardSection from "@/ui/landing/icon-cards";
import InfoSection from "@/ui/landing/info";
import TeamSection from "@/ui/landing/team";
import ContactSection from "@/ui/landing/contact";

const Landing: FC = function () {
  return (
    <>
      <Hero />
      <GridLineH />
      <AboutSection />
      <WorkStepsSection />
      <GridLineH />
      <BlackCardSection />
      <GridLineH />
      <IconCardSection />
      <InfoSection />
      <TeamSection />
      <ContactSection />
      <Testimonials />
    </>
  );
};

export default Landing;
