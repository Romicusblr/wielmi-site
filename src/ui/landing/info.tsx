import type { FC } from "react";
import GridLineH from "@/ui/line-horizontal";
import ResponsiveImage from "../responsive-image";
import classNames from "classnames";

const infos = [
  {
    id: "smart",
    imageSrc: "/images/landing_id.jpeg",
    heading: "INTELIGENTNY DOM",
    article: (
      <>
        <p className="text-2xl mb-8">ZARZĄDZANIE DOMEM Z DOWOLNEGO MIEJSCA NA ŚWIECIE</p>
        <p className="mb-8">
          Inteligentny dom to system, który łączy różne urządzenia elektroniczne i systemy w domu pod jednym
          zarządzaniem. Może to obejmować kontrolę oświetlenia, ogrzewania, klimatyzacji, bezpieczeństwa, systemów
          multimedialnych i wielu innych.
        </p>
        <p>
          Działanie wszystkich systemów w harmonii między sobą pozwala poczuć, czym jest komfort i wyrobić w sobie nawyk
          jego odczuwania - poczucie spokoju i pewności, że wszystko jest pod kontrolą.{" "}
        </p>
      </>
    ),
  },
  {
    id: "electric",
    imageSrc: "/images/landing_electric.png",
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
      </>
    ),
  },
  {
    id: "lan",
    imageSrc: "/images/landing_lan.png",
    heading: "SIECI LOKALNE",
    article: (
      <>
        <p className="text-3xl mb-8">ZINTEGROWANE ROZWIĄZANIA TECHOLOGICZNNE</p>
        <p className="mb-8">
          Specjalizujemy się w tworzeniu kompleksowych rozwiązań zapewniających ciągłą i wysokiej jakości pracę systemów
          w Twoim domu.
        </p>
        <p>
          Otrzymujesz komfort i technologię bez konieczności zagłębiania się w zawiłości szczegółów technicznych.
          Wyobraź sobie na przykład, że możesz stworzyć atmosferę w swoim domu na imprezę, romantyczną kolację lub
          rodzinny wieczór filmowy, nie ruszając się z kanapy.
        </p>
      </>
    ),
  },
];

interface InfoProps {
  imageSrc: string;
  heading: string;
  article: JSX.Element;
  reverse?: boolean;
  id: string;
}

const Info: FC<InfoProps> = function ({ imageSrc, heading, article, reverse, id }) {
  const classImage = reverse ? "lg:col-start-3" : "";
  const classArticle = reverse ? "lg:col-start-2" : "lg:col-start-3";

  return (
    <>
      <ResponsiveImage className={classNames("lg:h-[48rem] h-[36rem] lg:col-span-2 col-span-full", classImage)} src={imageSrc} alt={heading} />
      <article className={classNames("px-12 py-16 lg:col-start-2 sm:col-start-2", classArticle)} id={id}>
        <h2 className="text-3xl font-bold underline underline-offset-8 decoration-brand decoration-4 mb-8">
          {heading}
        </h2>
        {article}
      </article>
    </>
  );
};

const InfoSection: FC = function () {
  return (
    <section className="w-full pt-8 bg-grey text-dark-grey grid-layout grid-flow-dense">
      <GridLineH className="mt-12 col-span-full" />
      <GridLineH className="mt-12 col-span-full" />
      <Info {...infos[0]} />
      <GridLineH className="col-span-full" />
      <Info {...infos[1]} reverse/>
      <GridLineH className="col-span-full" />
      <Info {...infos[2]} />
      <GridLineH className="col-span-full" />
      <GridLineH className="mt-12 col-span-full" />
    </section>
  );
};

export default InfoSection;
