import ExpandableText from "@/ui/common/expandable-text";
import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section: FC = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          title={
            <span>
              SIECI <br /> LOKALNE
            </span>
          }
          subtitles={["ZINTEGROWANE", "ROZWIĄZANIA", "TECHNOLOGICZNE"]}
        />
      </div>
      <div className="content-right-half">
        <h3 className="text-3xl font-medium mb-4">CO TO JEST SIECI LOKALNE?</h3>
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

export default Section;
