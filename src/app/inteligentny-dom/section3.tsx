import type { FC } from "react";
import { FaDroplet, FaLock, FaRegLightbulb, FaWarehouse, FaAsterisk } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import ServiceItem from "@/ui/common/service-item";

const services = [
  {
    icon: FaLock,
    className: "lg:col-start-1",
    title: "Systemy bezpieczeństwa",
    items: (
      <ul className="list-disc ml-5 mt-2 text-grey">
        <li>Inteligentne zamki i systemy zamykania</li>
        <li>Systemy nadzoru wideo</li>
        <li>Czujniki ruchu i alarmy</li>
        <li>Inteligentne dzwonki do drzwi</li>
      </ul>
    ),
  },
  {
    icon: FaRegCheckCircle,
    className: "lg:col-start-1",
    title: "Oszczędność energii i kontrola klimatu",
    items: (
      <ul className="list-disc ml-5 mt-2 text-grey">
        <li>Inteligentne termostaty</li>
        <li>Sterowanie ogrzewaniem, klimatyzacją i wentylacją</li>
        <li>Inteligentne wtyczki i przełączniki</li>
        <li>Inteligentne gniazdka i przełączniki</li>
      </ul>
    ),
  },
  {
    icon: FaRegLightbulb,
    className: "lg:col-start-1",
    title: "Oświetlenie",
    items: (
      <ul className="list-disc ml-5 mt-2 text-grey">
        <li>Systemy sterowania oświetleniem za pomocą harmonogramów lub czujników ruchu i natężenia światła.</li>
        <li>Sterowanie oświetleniem przy użyciu komend głosowych lub mobilnej aplikacji</li>
      </ul>
    ),
  },
  {
    icon: FaDroplet,
    title: "Systemy zaopatrzenia w wodę i kontroli wody",
    items: (
      <ul className="list-disc ml-5 mt-2 text-grey">
        <li>Czujniki wycieku wody</li>
        <li>Automatyczne zarządzanie zaworami wody</li>
        <li>Inteligentne systemy nawadniania ogrodów</li>
      </ul>
    ),
  },
  {
    icon: FaWarehouse,
    title: "Systemy kontroli dostępu i automatyzacji",
    items: (
      <ul className="list-disc ml-5 mt-2 text-grey">
        <li>Zarządzanie i kontrola stanu bram garażowych, wjazdowych, furtki, drzwi wejściowych, okien i rolet</li>
      </ul>
    ),
  },
  {
    icon: FaAsterisk,
    title: "Sterowanie urządzeniami domowymi",
    items: (
      <ul className="list-disc ml-5 mt-2 text-grey">
        <li>Nagłośnienie</li>
        <li>Urządzenia kuchenne</li>
        <li>I wiele, wiele innych różnych urządzeń!</li>
      </ul>
    ),
  },
];

const Section3 = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-brand decoration-4">
          FUNKCJONALNE MOŻLIWOŚCI
        </h1>
        <h2 className="text-2xl font-light mt-4">NIEKTÓRE GŁÓWNE KORZYŚCI</h2>
      </div>
      <div className="p-4 sm:col-start-2 lg:col-end-4 grid lg:grid-cols-2 lg:grid-flow-dense">
        {services.map((service, index) => (
          <ServiceItem key={index}  iconSize={28} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Section3;
