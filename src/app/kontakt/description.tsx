import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section: FC = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading title="Kontakty" subtitles={["Skontaktuj się", "z nami"]} />
      </div>
    </section>
  );
};

export default Section;
