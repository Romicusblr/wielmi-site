import type { FC } from "react";
import DescriptionSection from "@/ui/kontakt/description";
import ContactSection from "@/ui/sections/contact";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { GridLineH } from "@/ui/sections/grid-lines";
import { Metadata } from "next";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("Kontakt", "kontakt", [
  "Kontakt Wielmi Kraków",
  "Skontaktuj się z nami inteligentny dom Kraków",
  "Zapytanie o smart home Kraków",
  "Umów wizytę instalacji elektrycznych Kraków",
  "Wsparcie techniczne smart home Kraków",
  "Dane kontaktowe Wielmi Smart Homes",
  "Formularz kontaktowy Wielmi Kraków"
]);

const Page: FC = function () {
  return (
    <>
      <DescriptionSection />
      <GridLineH />
      <ArrowDownSection />
      <ContactSection />
    </>
  );
};

export default Page;
