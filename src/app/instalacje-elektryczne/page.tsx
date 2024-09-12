import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Description from "./description";
import InfoSection from "./infos";
import ContactSection from "@/ui/sections/contact";
import ArrowDownSection from "@/ui/sections/arrow-down-section";

const Page: FC = function () {
  return (
    <>
      <Description />
      <GridLineH />
      <ArrowDownSection />
      <GridLineH />
      <InfoSection />
      <ContactSection />
    </>
  );
};

export default Page;
