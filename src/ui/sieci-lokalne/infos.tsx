import type { FC } from "react";
import Info from "@/ui/sections/Info";

const infos = [
  {
    id: "ESTETYKA",
    imageSrc: "/images/landing_lan.png",
    heading: <span>SIECI <br />LOKALNE</span>,
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

const InfoSection: FC = function () {
  return (
    <section className="bg-grey text-dark-grey section py-0 grid-flow-dense">
      <Info {...infos[0]} />
    </section>
  );
};

export default InfoSection;
