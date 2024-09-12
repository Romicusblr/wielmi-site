import ExpandableText from "@/ui/common/expandable-text";
import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout py-20">
      <div className="sm:col-start-2 px-12">
        <Heading
          title={
            <span>
              SIECI <br /> LOKALNE
            </span>
          }
          subtitles={["ZINTEGROWANE", "ROZWIĄZANIA", "TECHNOLOGICZNE"]}
        />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 px-12">
        <h3 className="text-xl font-bold">CO TO JEST SIECI LOKALNE?</h3>
        <div className="mt-4">
          <ExpandableText
            shortText={
              <p>
                W dzisiejszym świecie, gdzie każdy aspekt naszego życia jest powiązany z technologią, zintegrowane
                systemy komunikacji i przesyłania danych stają się kluczowym elementem każdego nowoczesnego domu. Od
                domowych kin po systemy monitoringu i inteligentne sieci danych - oferujemy kompleksowe rozwiązania,
                które wyposażą Twój dom w najnowsze technologie.
              </p>
            }
            moreText={
              <p className="mt-4">
                Specjalizujemy się w tworzeniu kompleksowych rozwiązań zapewniających ciągłą i wysokiej jakości pracę
                systemów w Twoim domu. Otrzymujesz komfort i technologię bez konieczności zagłębiania się w zawiłości
                szczegółów technicznych. Wyobraź sobie na przykład, że możesz stworzyć atmosferę w swoim domu na
                imprezę, romantyczną kolację lub rodzinny wieczór filmowy, nie ruszając się z kanapy.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Section1;
