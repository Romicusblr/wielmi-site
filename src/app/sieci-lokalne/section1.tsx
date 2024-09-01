import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <Heading title="SIECI LOKALNE" subtitles={["ZINTEGROWANE", "ROZWIĄZANIA", "TECHNOLOGICZNE"]} />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h3 className="text-xl font-bold mb-4">CO TO JEST SIECI LOKALNE?</h3>
        <p className="mb-4">
          W dzisiejszym świecie, gdzie każdy aspekt naszego życia jest powiązany z technologią, zintegrowane systemy
          komunikacji i przesyłania danych stają się kluczowym elementem każdego nowoczesnego domu. Od domowych kin po
          systemy monitoringu i inteligentne sieci danych - oferujemy kompleksowe rozwiązania, które wyposażą Twój dom w
          najnowsze technologie.
        </p>
      </div>
    </section>
  );
};

export default Section1;
