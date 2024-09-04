import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Testimonials from "@/ui/landing/testimonials";
import Hero from "@/ui/landing/hero";
import AboutSection from "@/ui/sections/about";
import WorkStepsSection from "@/ui/landing/steps";
import BlackCardSection from "@/ui/landing/black-cards";
import ServicesSection from "@/ui/landing/services";
import InfoSection from "@/ui/landing/info";
import TeamSection from "@/ui/landing/team";
import ContactSection from "@/ui/sections/contact";
import StatisticsSection from "@/ui/landing/statistics";

const Landing: FC = function () {
  return (
    <>
      <Hero />
      <GridLineH />
      <AboutSection />
      <GridLineH />
      <WorkStepsSection />
      <GridLineH />
      <StatisticsSection />
      <GridLineH />
      <BlackCardSection />
      <GridLineH />
      <ServicesSection />
      <GridLineH />
      <div className="w-full h-40 bg-[#F5F5F5]"></div>
      <InfoSection />
      <TeamSection />
      <ContactSection />
      <Testimonials />
    </>
  );
};

export default Landing;
