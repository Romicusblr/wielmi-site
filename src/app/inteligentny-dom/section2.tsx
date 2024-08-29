import type { FC, ReactNode } from "react";
import classNames from "classnames";
import ResponsiveImage from "@/ui/common/responsive-image";
import { GridLineH } from "@/ui/sections/grid-lines";

interface Props {
  invert: boolean;
  imgSrc: string;
  heading: ReactNode;
  text: ReactNode;
}

const source = [
  {
    invert: false,
    imgSrc: "/images/inteligentny-dom/panel.png",
    heading: (
      <>
        <h3>INTERAKTYWNY</h3>
        <h3>PANEL ŚCIENNY</h3>
      </>
    ),
    text: (
      <p>
        Smart-panel zastępuje tradycyjne wyłączniki, pozwalając na zarządzanie oświetleniem i innymi urządzeniami
        inteligentnego domu. Zapewnia dostęp do danych z czujników i stanu systemu. Uniwersalny interfejs dotykowy,
        dzięki naszemu oprogramowaniu, sprawia, że zarządzanie jest proste i wygodne, a różnorodne wzornictwo paneli
        dostosowane do wystroju wnętrza!
      </p>
    ),
  },
  {
    invert: true,
    imgSrc: "/images/inteligentny-dom/app.png",
    heading: (
      <>
        <h3>APLIKACJA</h3>
        <h3>MOBILNA</h3>
      </>
    ),
    text: (
      <>
        <p className="mb-4">
          Mobilna aplikacja umożliwia pełne zarządzanie wszystkimi urządzeniami i systemami w Twoim domu z dowolnego
          miejsca na świecie.
        </p>
        <p className="mb-4">
          Intuicyjny interfejs użytkownika sprawia, że zarządzanie domem jest proste i wygodne. Możesz tworzyć i
          dostosowywać scenariusze działania systemu, aby dopasować je do swojego stylu życia.
        </p>
        <p className="mb-4">
          Dzięki mobilnej aplikacji masz pełną kontrolę nad swoim inteligentnym domem, co daje Ci poczucie spokoju i
          bezpieczeństwa, niezależnie od tego, gdzie się znajdujesz.
        </p>
      </>
    ),
  },
];

const Row: FC<Props> = function ({ imgSrc, heading, text, invert }) {
  return (
    <>
      <div
        className={classNames(
          "lg:col-start-2 lg:col-end-3 col-span-full text-dark-grey relative place-content-center",
          invert ? "lg:col-start-3 lg:col-end-4" : "lg:col-start-2 lg:col-end-3"
        )}
      >
        <div
          className={classNames(
            "bg-grey absolute inset-0 -z-10 top-1/4 h-3/4",
            // invert ? "lg:-right-1/2" : "lg:-left-1/2"
          )}
        ></div>
        <div className={classNames("flex flex-col lg:flex-row", invert ? "lg:flex-row-reverse" : "lg:flex-row")}>
          <ResponsiveImage
            className="grow m-4 h-48"
            src={imgSrc}
            alt="inteligentny-dom"
            imgClassName="object-scale-down"
          />
          <div className="grow-0 self-center 2xl:text-2xl m-4">{heading}</div>
        </div>
      </div>
      <div className={classNames("sm:col-start-2 p-12", invert ? "" : "lg:col-start-3")}>{text}</div>
    </>
  );
};

const Section2 = () => {
  return source.map((e, i) => (
    <section className="grid-layout grid-flow-dense" key={i}>
      <Row {...e} />
      <GridLineH className="col-span-full" />
    </section>
  ));
};

export default Section2;
