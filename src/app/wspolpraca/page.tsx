import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import DescriptionSection from "./description";
import ContactSection from "@/ui/sections/contact";
import PartnersSection from "./partners";

const Page: FC = function () {
  return (
    <>
      <DescriptionSection />
      <GridLineH />
      <ContactSection />
      <PartnersSection />
    </>
  );
};

export default Page;
