import type { FC } from "react";
import { GridLineH } from "@/ui/sections/grid-lines";
import Info from "@/ui/sections/Info";

const infos = [
  {
    id: "ESTETYKA",
    imageSrc: "/images/instalacje-elektryczne/estetyka.jpeg",
    heading: "ESTETYKA I CABLE MENAGMENT",
    article: (
      <p className="mb-8">
        Estetyka i precyzyjne zarządzanie okablowaniem to dla nas kluczowe aspekty każdej instalacji. Dbałość o te
        elementy zwiększa nie tylko walory estetyczne, ale również zapewnia efektywność, redukuje ryzyko błędów i
        zabezpiecza przed uszkodzeniami. Nasze rozwiązania gwarantują, że instalacja jest nie tylko funkcjonalna i
        wysokiej jakości, ale także pięknie wykończona.
      </p>
    ),
  },
  {
    id: "electric",
    imageSrc: "/images/instalacje-elektryczne/profesjonalizm.jpeg",
    heading: "PROFESJONALIZM I DOKŁADNOŚĆ",
    article: (
      <p className="mb-4">
        Niezmiennie stawiamy na najwyższą jakość usług. Nie skracamy czasu pracy kosztem jakości czy ignorując standardy
        instalacji elektrycznych. Stosujemy najlepsze materiały i standardy, co przekłada się na trwałość i niezawodność
        instalacji. Każdy etap pracy jest dokładnie kontrolowany, co zapewnia efektywność i eliminuje błędy.
      </p>
    ),
  },
  {
    id: "lan",
    imageSrc: "/images/instalacje-elektryczne/instalacje.jpeg",
    heading: "INSTALACJE PRZYGOTOWANE NA PRZYSZŁOŚĆ",
    article: (
      <>
        <p className="mb-8">
          Rozumiemy, że każdy klient ma inne potrzeby. Dlatego oprócz klasycznej instalacji elektrycznej oferujemy
          możliwość wykonania prac elektroinstalacyjnych z możliwością łatwej integracji z systemem inteligentnego domu
          w przyszłości. Jest to ważna opcja, ponieważ technologia nieustannie się rozwija i staje się coraz bardziej
          dostępna.
        </p>
        <p>
          Dostosowanie instalacji do możliwości przyszłego rozwoju to inwestycja w przyszłość, umożliwiająca późniejsze
          oszczędności i większy komfort życia.
        </p>
      </>
    ),
  },
];

const InfoSection: FC = function () {
  return (
    <section className="w-full bg-grey text-dark-grey section grid-flow-dense">
      <Info {...infos[0]} />
      <GridLineH className="col-span-full" />
      <Info {...infos[1]} reverse />
      <GridLineH className="col-span-full" />
      <Info {...infos[2]} />
      <GridLineH className="col-span-full" />
    </section>
  );
};

export default InfoSection;
