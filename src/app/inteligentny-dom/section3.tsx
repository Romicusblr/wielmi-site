import type { FC } from "react";
import classNames from "classnames";
import ResponsiveImage from "@/ui/responsive-image";
import { GridLineH } from "@/ui/grid-lines";

// interface Props {
//   invert: boolean;
//   imgSrc: string;
//   heading: React.ReactNode;
//   text: React.ReactNode;
// }

const services = [
  {
    icon: "🔒", // Placeholder for icon
    title: "Systemy bezpieczeństwa",
    items: [
      "Inteligentne zamki i systemy zamykania",
      "Systemy nadzoru wideo",
      "Czujniki ruchu i alarmy",
      "Inteligentne dzwonki do drzwi",
    ],
  },
  {
    icon: "✔️", // Placeholder for icon
    title: "Oszczędność energii i kontrola klimatu",
    items: [
      "Inteligentne termostaty",
      "Sterowanie ogrzewaniem, klimatyzacją i wentylacją",
      "Inteligentne wtyczki i przełączniki",
      "Inteligentne gniazdka i przełączniki",
    ],
  },
  {
    icon: "💡", // Placeholder for icon
    title: "Oświetlenie",
    items: [
      "Systemy sterowania oświetleniem za pomocą harmonogramów lub czujników ruchu i natężenia światła.",
      "Sterowanie oświetleniem przy użyciu komend głosowych lub mobilnej aplikacji",
    ],
  },
];

const services2 = [
  {
    icon: "💧", // Placeholder for icon
    title: "Systemy zaopatrzenia w wodę i kontroli wody",
    items: [
      "Czujniki wycieku wody",
      "Automatyczne zarządzanie zaworami wody",
      "Inteligentne systemy nawadniania ogrodów",
    ],
  },
  {
    icon: "🏠", // Placeholder for icon
    title: "Systemy kontroli dostępu i automatyzacji",
    items: ["Zarządzanie i kontrola stanu bram garażowych, wjazdowych, furtki, drzwi wejściowych, okien i rolet"],
  },
  {
    icon: "✳️", // Placeholder for icon
    title: "Sterowanie urządzeniami domowymi",
    items: ["Nagłośnienie", "Urządzenia kuchenne", "I wiele, wiele innych różnych urządzeń!"],
  },
];

const ServiceItem: FC<{ icon: string; title: string; items: string[] }> = ({ icon, title, items }) => {
  return (
    <div className="flex items-start mb-8">
      <div className="flex-shrink-0 bg-dark-grey text-white rounded-full w-16 h-16 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-grey">{title}</h3>
        <ul className="list-disc ml-5 mt-2 text-grey">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const ServicesList: FC = () => {
  return (
    <>
      <div className="p-8"></div>
      <div className="p-8">
        {services2.map((service, index) => (
          <ServiceItem key={index} icon={service.icon} title={service.title} items={service.items} />
        ))}
      </div>
    </>
  );
};

const Section3 = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-brand decoration-4">
          FUNKCJONALNE MOŻLIWOŚCI
        </h1>
        <h2 className="text-2xl font-light mt-4">NIEKTÓRE GŁÓWNE KORZYŚCI</h2>
      </div>
      <div className="p-4 lg:col-start-2 sm:col-start-2">
        {services.map((service, index) => (
          <ServiceItem key={index} icon={service.icon} title={service.title} items={service.items} />
        ))}
      </div>
      <div className="p-4 lg:col-start-3 sm:col-start-2">
        {services2.map((service, index) => (
          <ServiceItem key={index} icon={service.icon} title={service.title} items={service.items} />
        ))}
      </div>
    </section>
  );
};

export default Section3;
