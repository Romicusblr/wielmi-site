import type { FC } from "react";
import BrandedButton from "@/ui/common/button";
import { GridLineH } from "@/ui/sections/grid-lines";
import { CONTACT_HASH, LANDING_DESCRIPTION } from "@/constants";
import Link from "next/link";
import Heading from "@/ui/common/heading";

const About: FC = function () {
  return (
    <>
      <section className="section" id={LANDING_DESCRIPTION}>
        <div className="content-left-half">
          <Heading title="O Wielmi" />
        </div>
        <div className="content-right-half">
          <h4 className="text-2xl sm:text-4xl">
            Inteligentny dom <br /> Wielmi
          </h4>
          <p className="mt-4">
            <strong>Jakość, kompetencje, dbałość</strong> — to wartości, które nas wyróżniają.
          </p>
          <p>Każdy projekt, który realizujemy, oparty jest na trzech filarach:</p>
          <ul className="list-disc mt-2">
            <li>
              <b>Jakość</b> - Niezawodność i precyzja na każdym etapie. Nasze rozwiązania spełniają najwyższe standardy,
              co gwarantuje trwałość i satysfakcję.
            </li>
            <li>
              <b>Kompetencje</b> - Nasz zespół to doświadczeni specjaliści, którzy łączą wiedzę z innowacyjnością.
              Dzięki temu dostarczamy rozwiązania, które są dopasowane do potrzeb każdego klienta.
            </li>
            <li>
              <b>Dbałość</b> - Każdy klient jest dla nas ważny. Słuchamy, reagujemy i jesteśmy gotowi na wsparcie na
              każdym etapie współpracy, zarówno podczas realizacji projektu, jak i po jego zakończeniu.
            </li>
          </ul>
        </div>
      </section>
      <GridLineH />
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
          <div className="mt-8">
            <Link className="w-full" href={CONTACT_HASH}>
              <BrandedButton className="px-12 w-full max-w">Czy masz jakiś pomysł?</BrandedButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
