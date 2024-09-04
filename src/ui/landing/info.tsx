import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Info from "@/ui/sections/Info";
import Link from "next/link";
import BrandedButton from "../common/button";

const infos = [
  {
    imageSrc: "/images/landing_id.png",
    heading: "INTELIGENTNY DOM",
    subtitles: ["ZARZĄDZANIE DOMEM", "Z DOWOLNEGO", "MIEJSCA NA ŚWIECIE"],
    article: (
      <div>
        <p className="mt-6">
          Inteligentny dom to system, który łączy różne urządzenia elektroniczne i systemy w domu pod jednym
          zarządzaniem. Może to obejmować kontrolę oświetlenia, ogrzewania, klimatyzacji, bezpieczeństwa, systemów
          multimedialnych i wielu innych.
        </p>
        <p className="mt-6">
          Działanie wszystkich systemów w harmonii między sobą pozwala poczuć, czym jest komfort i wyrobić w sobie nawyk
          jego odczuwania - poczucie spokoju i pewności, że wszystko jest pod kontrolą.{" "}
        </p>
        <div className="mt-10">
          <Link href="/">
            <BrandedButton className="px-12 w-full">Więcej informacji</BrandedButton>
          </Link>
        </div>
      </div>
    ),
  },
  {
    imageSrc: "/images/landing_electric.jpeg",
    heading: "INSTALACJE ELEKTRYCZNE",
    article: (
      <>
        <p className="mb-4">
          Nasze podejście do instalacji elektrycznych to połączenie profesjonalizmu z elastycznością, aby sprostać Twoim
          oczekiwaniom. Rozumiemy, że technologia jest w ciągłym ruchu i nasza praca powinna wspierać ten rozwój.
        </p>
        <ol className="list-inside list-decimal mb-4">
          Nasze Zalety:
          <li>Wysoka Jakość Wykonania;</li>
          <li>Profesjonalizm i Doświadczenie;</li>
          <li>Bezpieczeństwo;</li>
          <li>Terminowość;</li>
          <li>Innowacyjność;</li>
          <li>Transparentność.</li>
        </ol>
        <p>
          Wybierając naszą firmę, masz pewność, że otrzymasz kompleksowe, nowoczesne i niezawodne rozwiązania
          dostosowane do Twoich potrzeb.
        </p>
        <div className="mt-10">
          <Link href="/">
            <BrandedButton className="px-12 w-full">Więcej informacji</BrandedButton>
          </Link>
        </div>
      </>
    ),
  },
  {
    imageSrc: "/images/landing_lan.png",
    heading: "SIECI LOKALNE",
    subtitles: ["ZINTEGROWANE", "ROZWIĄZANIA", "TECHNOLOGICZNE"],
    article: (
      <div>
        <div>
        <p className="mb-8">
          Specjalizujemy się w tworzeniu kompleksowych rozwiązań zapewniających ciągłą i wysokiej jakości pracę systemów
          w Twoim domu.
        </p>
        <p>
          Otrzymujesz komfort i technologię bez konieczności zagłębiania się w zawiłości szczegółów technicznych.
          Wyobraź sobie na przykład, że możesz stworzyć atmosferę w swoim domu na imprezę, romantyczną kolację lub
          rodzinny wieczór filmowy, nie ruszając się z kanapy.
        </p>
        </div>
        <div className="mt-10">
          <Link href="/">
            <BrandedButton className="px-12 w-full">Więcej informacji</BrandedButton>
          </Link>
        </div>
      </div>
    ),
  },
];

const InfoSection: FC = function () {
  return (
    <section className="w-full bg-grey text-dark-grey grid-layout grid-flow-dense">
      <Info {...infos[0]} />
      <GridLineH className="col-span-full" />
      <Info {...infos[1]} reverse />
      <GridLineH className="col-span-full" />
      <Info {...infos[2]} />
      <GridLineH className="col-span-full" />
      <GridLineH className="mt-12 col-span-full" />
    </section>
  );
};

export default InfoSection;
