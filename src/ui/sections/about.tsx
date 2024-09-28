import type { FC } from "react";
import BrandedButton from "@/ui/common/button";
import { GridLineH } from "@/ui/sections/grid-lines";
import { CONTACT_HASH, LANDING_DESCRIPTION } from "@/constants";
import Link from "next/link";
import Heading from "@/ui/common/heading";

const About: FC = function () {
  return (
    <section className="section" id={LANDING_DESCRIPTION}>
      <div className="content-left-half">
        <Heading title="O Wielmi" />
      </div>
      <div className="content-right-half">
        <h4 className="text-3xl font-medium">
          INTELIGENTNY DOM <br /> Wielmi
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
            <b>Kompetencje</b> - Nasz zespół to doświadczeni specjaliści, którzy łączą wiedzę z innowacyjnością. Dzięki
            temu dostarczamy rozwiązania, które są dopasowane do potrzeb każdego klienta.
          </li>
          <li>
            <b>Dbałość</b> - Każdy klient jest dla nas ważny. Słuchamy, reagujemy i jesteśmy gotowi na wsparcie na
            każdym etapie współpracy, zarówno podczas realizacji projektu, jak i po jego zakończeniu.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
