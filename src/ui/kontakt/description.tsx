import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section: FC = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading tag="h1" title="KONTAKTY" subtitles={["SKONTAKTUJ SIĘ", "Z NAMI"]} />
      </div>
    </section>
  );
};

export default Section;
