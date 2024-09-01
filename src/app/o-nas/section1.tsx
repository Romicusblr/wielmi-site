import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <Heading title="O Wielmi" />
      </div>
    </section>
  );
};

export default Section1;
