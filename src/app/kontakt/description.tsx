import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="section">
      <div className="sm:col-start-2 p-12">
        <Heading title="Kontakty" subtitles={["Skontaktuj się", "z nami"]} />
      </div>
    </section>
  );
};

export default Section1;
