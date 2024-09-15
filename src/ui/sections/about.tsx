import type { FC } from "react";
import BrandedButton from "@/ui/common/button";
import { GridLineH } from "@/ui/sections/grid-lines";
import { CONTACT_HASH, LANDING_ABOUT } from "@/constants";
import Link from "next/link";
import Heading from "@/ui/common/heading";

const AboutSection: FC = function () {
  return (
    <section className="section pt-24 -scroll-mt-20" id={LANDING_ABOUT}>
      <div className="sm:col-start-2 p-12">
        <Heading title="O Wielmi" />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h4 className="text-2xl sm:text-4xl mb-4 text-left">
          Inteligentny dom <br /> Wielmi
        </h4>
        <p>
          <strong>Jakość, kompetencje, dbałość</strong> — to wartości, które nas wyróżniają.
        </p>
        <p>Każdy projekt, który realizujemy, oparty jest na trzech filarach:</p>
        <ul className="list-disc mt-2">
          <li>
            <b>Jakość</b> - Niezawodność i precyzja na każdym etapie. Nasze rozwiązania spełniają najwyższe standardy,
            co gwarantuje trwałość i satysfakcję.
          </li>
          <li>
            <b>Kompetencje</b> - Nasz zespół to doświadczeni specjaliści, którzy łączą wiedzę z innowacyjnością. Dzięki
            temu dostarczamy rozwiązania, które są dopasowane do potrzeb każdego klienta.
          </li>
          <li>
            <b>Dbałość</b> - Każdy klient jest dla nas ważny. Słuchamy, reagujemy i jesteśmy gotowi na wsparcie na
            każdym etapie współpracy, zarówno podczas realizacji projektu, jak i po jego zakończeniu.
          </li>
        </ul>
      </div>
      <GridLineH className="col-span-full" />
      <div className="sm:col-start-2 p-12">
        <Heading
          title={
            <span>
              NASZA <br /> INSPIRACJA
            </span>
          }
        />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <p className="mb-4">
          Inspirują nas oryginalne projekty designerów, którzy nie trzymają się standardowych rozwiązań, a w swojej
          pracy wykorzystują kreatywność i niestandardowe podejście.
        </p>
        <p className="mb-16">Jesteśmy otwarci na nowe projekty i gotowi do współpracy!</p>
        <Link className="w-full" href={CONTACT_HASH}>
          <BrandedButton className="px-12 w-full max-w">Czy masz jakiś pomysł?</BrandedButton>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
