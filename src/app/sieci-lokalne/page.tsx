import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import ContactSection from "@/ui/landing/contact";

const Page: FC = function () {
  return (
    <>
      <Section1 />
      <GridLineH />
      <Section2 />
      <GridLineH />
      <Section3 />
      <GridLineH />
      <GridLineH className="mt-12" />
      <ContactSection />
    </>
  );
};

export default Page;
