import type { FC } from "react";
import { GridLineH } from "@/ui/grid-lines";
import Section1 from "./section1";
import Section2 from "./section2";
import ContactSection from "@/ui/landing/contact";

const Page: FC = function () {
  return (
    <>
      <Section1 />
      <GridLineH className="mb-12"/>
      <Section2 />
      <ContactSection />
    </>
  );
};

export default Page;
