import type { FC } from "react";
import BrandedButton from "../ui/button";
import GridLineH from "@/ui/line-horizontal";
import ResponsiveImage from "@/ui/responsive-image";
import Image from "next/image";
import Testimonials from "@/ui/landing/testimonials";
import SocialMedia from "@/ui/social-media";
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
