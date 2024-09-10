import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout py-20">
      <div className="sm:col-start-2 px-12">
        <Heading title={<span>SIECI <br /> LOKALNE</span>} subtitles={["ZINTEGROWANE", "ROZWIĄZANIA", "TECHNOLOGICZNE"]} />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 px-12">
        <h3 className="text-xl font-bold">CO TO JEST SIECI LOKALNE?</h3>
        <p className="mt-4">
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
