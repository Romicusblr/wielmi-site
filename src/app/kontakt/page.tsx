import type { FC } from "react";
import DescriptionSection from "@/ui/kontakt/description";
import ContactSection from "@/ui/sections/contact";
import ArrowDownSection from "@/ui/sections/arrow-down-section";
import { GridLineH } from "@/ui/sections/grid-lines";

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
