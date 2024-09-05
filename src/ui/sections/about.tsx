import type { FC } from "react";
import BrandedButton from "@/ui/common/button";
import { GridLineH } from "@/ui/sections/grid-lines";
import { CONTACT_HASH } from "@/constants";
import Link from "next/link";
import Heading from "@/ui/common/heading";

const AboutSection: FC = function () {
  return (
    <section className="grid-layout pt-24">
      <div className="sm:col-start-2 p-12">
        <Heading title="O Wielmi" />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h4 className="text-2xl sm:text-4xl mb-4 text-left">
          Inteligentny dom <br /> Wielmi
        </h4>
        <p>
          Firma Wielmi to gwarancja kompleksowej i profesjonalnej realizacji projektów. Oferujemy pełen zakres usług,
          obejmujących:
        </p>
        <ul className="list-disc ml-8">
          <li>Projektowanie</li>
          <li>Instalacje elektryczne</li>
          <li>Uruchamianie i programowanie</li>
          <li>Gwarzancja i serwis</li>
        </ul>
        <p>
          Nasze rozwiązania „pod klucz” zapewniają, że każda faza projektu jest wykonywana przez nasz zespół, co
          gwarantuje spójność i najwyższą jakość. Dbamy o każdy szczegół, aby końcowy efekt spełniał Państwa
          oczekiwania. Wybierając Wielmi, wybieracie Państwo jakość i terminowość.
        </p>
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
