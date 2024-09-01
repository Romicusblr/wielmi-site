import Heading from "@/ui/common/heading";
import SocialLinks from "@/ui/sections/social-links";
import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <Heading title="Kontakty" subtitles={["INTELIGENTNY DOM", "Wielmi"]} />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h3 className="text-xl font-bold mb-4">Kraków, Polska</h3>
        <p>Godziny pracy: od 10:00 do 19:00 </p>
        <p>Weekendy: sobota, niedziela</p>
        <div className="mt-12">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default Section1;
