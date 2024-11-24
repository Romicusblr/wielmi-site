import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Description from "@/ui/instalacje-elektryczne/description";
import InfoSection from "@/ui/instalacje-elektryczne/infos";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import ContactBanner from "@/ui/sections/contact-banner";
import { getPageMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = getPageMetadata("Instalacje Elektryczne", "instalacje-elektryczne");

const Page: FC = function () {
  return (
    <>
      <Description />
      <GridLineH />
      <ArrowDownSection />
      <GridLineH />
      <InfoSection />
      <ContactBanner />
    </>
  );
};

export default Page;
