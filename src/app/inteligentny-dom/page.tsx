import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Features from "@/ui/inteligentny-dom/features";
import Capabilities from "@/ui/inteligentny-dom/capabilities";
import Description from "@/ui/inteligentny-dom/description";
import Controls from "@/ui/inteligentny-dom/controls";
import Faq from "@/ui/inteligentny-dom/faq";
import ContactBanner from "@/ui/sections/contact-banner";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("Inteligentny Dom", "inteligentny-dom", [
  "Inteligentny dom Kraków",
  "Systemy inteligentnego domu Kraków",
  "Automatyka domowa Kraków",
  "Integracja urządzeń IoT w inteligentnym domu Kraków",
  "Rozwiązania smart home Kraków",
  "Zarządzanie energią w inteligentnym domu Kraków",
  "Systemy bezpieczeństwa smart home Kraków",
]);

const Page: FC = function () {
  return (
    <>
      <Description />
      <GridLineH />
      <Features />
      <GridLineH />
      <ArrowDownSection />
      <GridLineH />
      <Capabilities />
      <GridLineH />
      <Controls />
      <GridLineH />
      <Faq />
      <ContactBanner />
    </>
  );
};

export default Page;
