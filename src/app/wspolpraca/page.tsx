import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import DescriptionSection from "@/ui/wspolpraca/description";
import ContactBanner from "@/ui/sections/contact-banner";
import PartnersSection from "@/ui/wspolpraca/partners";

const Page: FC = function () {
  return (
    <>
      <DescriptionSection />
      <GridLineH />
      <PartnersSection />
      <GridLineH />
      <ContactBanner />
    </>
  );
};

export default Page;
