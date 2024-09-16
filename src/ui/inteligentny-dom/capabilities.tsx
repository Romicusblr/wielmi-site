import type { FC } from "react";
import { FaDroplet, FaLock, FaRegLightbulb, FaWarehouse, FaAsterisk } from "react-icons/fa6";
import { FaRegCheckCircle } from "react-icons/fa";
import ServiceItem from "@/ui/common/service-item";
import Heading from "@/ui/common/heading";

const services = [
  {
    icon: FaLock,
    className: "lg:col-start-1",
    title: (
      <span>
        Systemy <br />
        bezpieczeństwa
      </span>
    ),
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
    icon: FaWarehouse,
    title: "Systemy kontroli dostępu i automatyzacji",
    items: (
      <ul className="list-disc ml-5 mt-2 text-grey">
        <li>Zarządzanie i kontrola stanu bram garażowych, wjazdowych, furtki, drzwi wejściowych, okien i rolet</li>
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

const Section = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          title={
            <span>
              FUNKCJONALNE <br />
              MOŻLIWOŚCI
            </span>
          }
          subtitles={["NIEKTÓRE GŁÓWNE", "KORZYŚCI"]}
        />
      </div>
      <div className="content-center-span px-0 grid lg:grid-cols-2 lg:grid-flow-dense text-xl mt-12">
        {services.map((service, index) => (
          <ServiceItem key={index} iconSize={28} {...service} className="content-padding" />
        ))}
      </div>
    </section>
  );
};

export default Section;
