import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import ResponsiveImage from "@/ui/common/responsive-image";
import classNames from "classnames";

const infos = [
  {
    id: "ESTETYKA",
    imageSrc: "/images/sieci-lokalne/sieci.png",
    heading: "SIECI LOKALNE",
    article: (
      <>
        <p className="mb-8">Oprócz tego, łącząc różne technologie, można osiągnąć niemal nieograniczone możliwości.</p>
        <p>
          Pracujemy z najnowocześniejszymi technologiami i sprzętem, aby zapewnić, że każdy aspekt Twojego
          zintegrowanego systemu będzie działał bezbłędnie i harmonijnie współdziałał z innymi systemami w Twoim domu.
          Wybierając nasze zintegrowane systemy, wybierasz przyszłość, w której technologia nie tylko ułatwia codzienne
          życie, ale także otwiera nowe możliwości dla rozrywki i bezpieczeństwa.
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
      <ResponsiveImage
        className={classNames("lg:h-[48rem] h-[36rem] lg:col-span-2 col-span-full", classImage)}
        src={imageSrc}
        alt={heading}
      />
      <article className={classNames("px-12 py-16 lg:col-start-2 sm:col-start-2", classArticle)}>
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
    <section className="w-full bg-grey text-dark-grey grid-layout grid-flow-dense">
      <Info {...infos[0]} />
    </section>
  );
};

export default InfoSection;
