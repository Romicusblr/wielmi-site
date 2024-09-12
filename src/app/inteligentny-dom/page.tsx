import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Features from "./features";
import Capabilities from "./capabilities";
import Description from "./description";
import Controls from "./controls";
import Faq from "./faq";
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
