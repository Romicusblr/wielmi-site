import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Section1 from "./section1";
import ContactSection from "@/ui/sections/contact";

const Page: FC = function () {
  return (
    <>
      <Section1 />
      <ContactSection />
    </>
  );
};

export default Page;
