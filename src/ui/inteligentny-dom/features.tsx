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
      <div>
        <div className="font-medium text-3xl">
          <h3>INTERAKTYWNY</h3>
          <h3>PANEL ŚCIENNY</h3>
        </div>
        <p className="mt-8">
          Smart-panel zastępuje tradycyjne wyłączniki, pozwalając na zarządzanie oświetleniem i innymi urządzeniami
          inteligentnego domu. Zapewnia dostęp do danych z czujników i stanu systemu. Uniwersalny interfejs dotykowy,
          dzięki naszemu oprogramowaniu, sprawia, że zarządzanie jest proste i wygodne, a różnorodne wzornictwo paneli
          dostosowane do wystroju wnętrza!
        </p>
      </div>
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
        <div className="font-medium text-3xl">
          <h3>APLIKACJA</h3>
          <h3>MOBILNA</h3>
        </div>
        <p className="mt-8">
          Mobilna aplikacja umożliwia pełne zarządzanie wszystkimi urządzeniami i systemami w Twoim domu z dowolnego
          miejsca na świecie.
        </p>
        <p className="mt-8">
          Intuicyjny interfejs użytkownika sprawia, że zarządzanie domem jest proste i wygodne. Możesz tworzyć i
          dostosowywać scenariusze działania systemu, aby dopasować je do swojego stylu życia.
        </p>
        <p className="mt-8">
          Dzięki mobilnej aplikacji masz pełną kontrolę nad swoim inteligentnym domem, co daje Ci poczucie spokoju i
          bezpieczeństwa, niezależnie od tego, gdzie się znajdujesz.
        </p>
      </>
    ),
  },
];

const Row: FC<Props> = function ({ imgSrc, heading, text, invert }) {
  return (
    <section className="section grid-flow-dense">
      <div
        className={classNames(
          "lg:col-start-2 lg:col-end-3 col-span-full text-dark-grey relative flex items-end justify-center",
          invert ? "lg:col-start-3 lg:col-end-4" : "lg:col-start-2 lg:col-end-3"
        )}
      >
        <div className={classNames("bg-grey absolute -z-10 bottom-0 w-full h-48")}></div>
        <div className={classNames("flex flex-col lg:flex-row", invert ? "lg:flex-row-reverse" : "lg:flex-row")}>
          <ResponsiveImage
            className="grow mb-16 ml-8 w-48 h-48"
            src={imgSrc}
            alt="inteligentny-dom"
            imgClassName="object-scale-down"
          />
          <div className="grow-0 self-center 2xl:text-2xl m-4 hidden lg:block">{heading}</div>
        </div>
      </div>
      <div className={classNames("sm:col-start-2 px-12 pb-0", invert ? "" : "lg:col-start-3")}>{text}</div>
    </section>
  );
};

const Section = () => {
  return (
    <>
      <Row {...source[0]} />
      <GridLineH />
      <Row {...source[1]} />
    </>
  );
};

export default Section;
