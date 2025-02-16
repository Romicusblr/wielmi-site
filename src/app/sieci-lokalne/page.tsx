import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import DescriptionSection from "@/ui/sieci-lokalne/description";
import ServicesSection from "@/ui/sieci-lokalne/services";
import InfoSection from "@/ui/sieci-lokalne/infos";
import ContactBanner from "@/ui/sections/contact-banner";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("Sieci Lokalne", "sieci-lokalne", [
  "Sieci lokalne Kraków",
  "Konfiguracja sieci lokalnych dla smart homes Kraków",
  "Profesjonalne sieci lokalne Kraków",
  "Bezprzewodowe sieci domowe Kraków",
  "Projektowanie sieci lokalnych Kraków",
  "Instalacja sieci lokalnych dla inteligentnych domów",
  "Bezpieczne sieci lokalne Kraków"
]);

const Page: FC = function () {
  return (
    <>
      <DescriptionSection />
      <GridLineH />
      <ServicesSection />
      <GridLineH />
      <ArrowDownSection />
      <GridLineH />
      <InfoSection />
      <GridLineH />
      <ContactBanner />
    </>
  );
};

export default Page;
