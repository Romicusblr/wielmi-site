import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Features from "@/ui/inteligentny-dom/features";
import Capabilities from "@/ui/inteligentny-dom/capabilities";
import Description from "@/ui/inteligentny-dom/description";
import Controls from "@/ui/inteligentny-dom/controls";
import Faq from "@/ui/inteligentny-dom/faq";
import ContactBanner from "@/ui/sections/contact-banner";
import ArrowDownSection from "@/ui/sections/arrow-down-section";

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
