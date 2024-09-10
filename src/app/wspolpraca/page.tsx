import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Section1 from "./section1";
import ContactSection from "@/ui/sections/contact";
import Partners from "./partners";

const Page: FC = function () {
  return (
    <>
      <Section1 />
      <GridLineH />
      <ContactSection />
      <Partners />
    </>
  );
};

export default Page;
