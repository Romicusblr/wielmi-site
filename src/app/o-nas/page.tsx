import type { FC } from "react";
import AboutSection from "@/ui/sections/about";
import ContactSection from "@/ui/sections/contact";

const Page: FC = function () {
  return (
    <>
      <AboutSection />
      <ContactSection />
    </>
  );
};

export default Page;
