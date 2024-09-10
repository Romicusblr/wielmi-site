import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import ResponsiveImage from "@/ui/common/responsive-image";
import classNames from "classnames";
import Info from "@/ui/sections/Info";

const infos = [
  {
    id: "ESTETYKA",
    imageSrc: "/images/landing_lan.png",
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

const InfoSection: FC = function () {
  return (
    <section className="w-full bg-grey text-dark-grey grid-layout grid-flow-dense">
      <Info {...infos[0]} />
    </section>
  );
};

export default InfoSection;
