import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Section2 from "./section2";
import Section3 from "./section3";
import Section1 from "./section1";
import Section4 from "./section4";
import Section5 from "./section5";
import ContactBanner from "./ContactBanner";

const Page: FC = function () {
  return (
    <>
      <Section1 />
      <GridLineH />
      <Section2 />
      <GridLineH />
      <GridLineH className="mt-8" />
      <Section3 />
      <GridLineH />
      <Section4 />
      <GridLineH />
      <Section5 />
      <ContactBanner />
    </>
  );
};

export default Page;
