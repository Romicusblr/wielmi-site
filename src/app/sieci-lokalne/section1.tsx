import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-brand decoration-4">SIECI LOKALNE</h1>
        <h2 className="text-2xl font-light mt-8">ZINTEGROWANE</h2>
        <h2 className="text-2xl font-light">ROZWIĄZANIA</h2>
        <h2 className="text-2xl font-light">TECHNOLOGICZNE</h2>
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
