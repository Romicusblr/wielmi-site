import type { FC } from "react";
import BrandedButton from "@/ui/button";
import GridLineH from "@/ui/line-horizontal";
import { CONTACT_HASH } from "@/constants";
import Link from "next/link";

const AboutSection: FC = function () {
  return (
    <section className="grid-layout" id="wielmi">
      <div className="sm:col-start-2 p-12">
        <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4">O Wielmi</h2>
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h4 className="text-xl mb-4">Inteligentny dom Wielmi</h4>
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
        <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4">
          NASZA INSPIRACJA
        </h2>
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <p className="mb-4">
          Inspirują nas oryginalne projekty designerów, którzy nie trzymają się standardowych rozwiązań, a w swojej
          pracy wykorzystują kreatywność i niestandardowe podejście.
        </p>
        <p className="mb-16">Jesteśmy otwarci na nowe projekty i gotowi do współpracy!</p>
        <div className="flex justify-center">
          <Link href={CONTACT_HASH}>
            <BrandedButton className="px-6">Czy masz jakiś pomysł?</BrandedButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
