import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import DescriptionSection from "@/ui/wspolpraca/description";
import ContactBanner from "@/ui/sections/contact-banner";
import PartnersSection from "@/ui/wspolpraca/partners";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wspólpraca",
};

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
