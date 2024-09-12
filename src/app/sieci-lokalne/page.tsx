import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import DescriptionSection from "./description";
import ServicesSection from "./services";
import InfoSection from "./infos";
import ContactSection from "@/ui/sections/contact";
import ArrowDownSection from "@/ui/sections/arrow-down-section";

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
      <ContactSection />
    </>
  );
};

export default Page;
