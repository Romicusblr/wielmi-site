import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import DescriptionSection from "@/ui/sieci-lokalne/description";
import ServicesSection from "@/ui/sieci-lokalne/services";
import InfoSection from "@/ui/sieci-lokalne/infos";
import ContactBanner from "@/ui/sections/contact-banner";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sieci Lokalne",
};

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
