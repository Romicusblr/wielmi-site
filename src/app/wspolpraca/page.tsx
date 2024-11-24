import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import DescriptionSection from "@/ui/wspolpraca/description";
import ContactBanner from "@/ui/sections/contact-banner";
import PartnersSection from "@/ui/wspolpraca/partners";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("Współpraca", "wspolpraca", [
  "Współpraca Wielmi Kraków",
  "Partnerzy smart home Kraków",
  "Oferta współpracy Wielmi Smart Homes",
  "Program partnerski inteligentny dom Kraków",
  "Partnerstwo biznesowe Wielmi Kraków",
  "Współpraca technologiczna Wielmi Smart Homes",
  "Dołącz do Wielmi Smart Homes"
]);

const Page: FC = function () {
  return (
    <>
      <DescriptionSection />
      <GridLineH />
      <ArrowDownSection />
      <PartnersSection />
      <GridLineH />
      <ContactBanner />
    </>
  );
};

export default Page;
