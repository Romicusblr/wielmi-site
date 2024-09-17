import type { FC } from "react";
import AboutSection from "@/ui/sections/about";
import ContactSection from "@/ui/sections/contact";
import Team from "@/ui/landing/team";
import Testimonials from "@/ui/landing/testimonials";
import ContactBanner from "@/ui/sections/contact-banner";
import { GridLineH } from "@/ui/sections/grid-lines";

const Page: FC = function () {
  return (
    <>
      <AboutSection />
      <Team />
      <Testimonials />
      <GridLineH />
      <ContactBanner />
    </>
  );
};

export default Page;
