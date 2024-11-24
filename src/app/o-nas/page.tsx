import type { FC } from "react";
import AboutSection from "@/ui/sections/about";
import ContactSection from "@/ui/sections/contact";
import Team from "@/ui/landing/team";
import Testimonials from "@/ui/landing/testimonials";
import ContactBanner from "@/ui/sections/contact-banner";
import { GridLineH } from "@/ui/sections/grid-lines";
import Inspiration from "@/ui/sections/inspiration";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("O Nas", "o-nas", [
  "O nas Wielmi Smart Homes",
  "Zespół inteligentnych domów Kraków",
  "Historia Wielmi Smart Homes",
  "Misja i wizja Wielmi Kraków",
  "Nasze wartości Wielmi Smart Homes",
  "Kim jesteśmy Wielmi Kraków",
  "Doświadczenie Wielmi Smart Homes"
]);

const Page: FC = function () {
  return (
    <>
      <AboutSection />
      <GridLineH />
      <Inspiration />
      <GridLineH />
      <ArrowDownSection />
      <GridLineH />
      <ContactBanner />
      <Team />
      <GridLineH />
      <Testimonials />
    </>
  );
};

export default Page;
