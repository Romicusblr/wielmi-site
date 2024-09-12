import type { FC } from "react";
import classNames from "classnames";
import ResponsiveImage from "@/ui/common/responsive-image";
import { GridLineH } from "@/ui/sections/grid-lines";
import Heading from "@/ui/common/heading";

const services = [
  "Alarm",
  "Oświetlenie",
  "Ogrzewanie i klimatyzacja",
  "Bezpieczeństwo",
  "Inteligentne urządzenia kuchenne",
  "Kino domowe",
  "Rolety i zasłony",
  "Nagłośnienie",
  "Inteligentne folie o zmiennej transparencji",
  "Ogrzewanie podłogowe",
  "Inteligentne zamki",
  "Monitorowanie zużycia energii",
  "Basen Jacuzzi",
  "Zarządzanie zaopatrzeniem w wodę",
  "Sauna i SPA",
  "Nawadnienie",
];

const Section = () => {
  return (
    <section className="grid-layout bg-grey text-dark-grey text-left">
      <div className="sm:col-start-2 p-12">
        <Heading
          title={
            <span>
              CZYM STERUJE <br />
              INTELIGENTNY DOM?
            </span>
          }
          subtitles={["NAJWAŻNIEJSZE", "FUNKCJE"]}
        />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 lg:col-span-2">
        <ResponsiveImage
          src="/images/inteligentny-dom/dom.png" // Update with your image path
          alt="inteligentny-dom"
        >
          <div className="p-2 lg:pr-0 grid grid-cols-4 gap-2 h-full text-white lg:mr-[12vw] text-xs">
            {services.map((service, index) => (
              <div
                key={index}
                className="z-20 aspect-square border border-white flex items-center justify-center text-center p-4 bg-black bg-opacity-50"
              >
                {service}
              </div>
            ))}
          </div>
        </ResponsiveImage>
      </div>
    </section>
  );
};

export default Section;
