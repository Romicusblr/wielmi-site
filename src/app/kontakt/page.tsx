import type { FC } from "react";
import DescriptionSection from "@/ui/kontakt/description";
import ContactSection from "@/ui/sections/contact";

const Page: FC = function () {
  return (
    <>
      <DescriptionSection />
      <ContactSection />
    </>
  );
};

export default Page;
