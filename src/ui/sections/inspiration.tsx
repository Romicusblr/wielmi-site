import type { FC } from "react";
import Heading from "@/ui/common/heading";

const Inspiration: FC = function () {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          title={
            <span>
              NASZA <br /> INSPIRACJA
            </span>
          }
        />
      </div>
      <div className="content-right-half">
        <p>
          Inspirują nas oryginalne projekty designerów, którzy nie trzymają się standardowych rozwiązań, a w swojej
          pracy wykorzystują kreatywność i niestandardowe podejście.
        </p>
        <p className="mt-4">Jesteśmy otwarci na nowe projekty i gotowi do współpracy!</p>
      </div>
    </section>
  );
};

export default Inspiration;
