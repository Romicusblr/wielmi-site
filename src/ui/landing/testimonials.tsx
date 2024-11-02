"use client";

import React, { FC, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Image from "next-export-optimize-images/image";
import Heading from "@/ui/common/heading";

interface SlideProps {
  text: string;
  name: string;
  company?: string;
  location: string;
}

const reviews: SlideProps[] = [
  {
    text: `Zleciliśmy firmie Wielmi wykonanie instalacji elektrycznej dla jednego z naszych klientów. 
    Prace zostały wykonane profesjonalnie i terminowo. Firma Wielmi wykazała się ogromnym zaangażowaniem 
    i wysoką jakością usług. Jesteśmy bardzo zadowoleni ze współpracy i na pewno będziemy polecać Wielmi 
    naszym kolejnym klientom. Dziękujemy za świetną robotę!`,
    name: "Mateusz",
    company: "Volprim Instalacje",
    location: "Kraków, Polska",
  },
  {
    text: `Firma WIELMI zapewniła naszemu lounge-karaoke barowi Angel's niezawodne systemy automatyki i oświetlenia, 
    które działają bezawaryjnie od dwóch lat. Rozwiązania idealnie odpowiadają naszym potrzebom, tworząc wyjątkową 
    atmosferę dla gości i podnosząc jakość wydarzeń. Szczególnie doceniamy stałe wsparcie oraz szybką reakcję Aleksa 
    na wszelkie nasze potrzeby, a także gotowość do modernizacji w każdej chwili. Gorąco polecamy za doskonałą pracę 
    i niezawodną współpracę`,
    name: "Angel's Karaoke & Lounge Bar",
    location: "Warszawa, Polska",
  },
  {
    text: `Niezwykle rzeczowy, pomocny właściciel firmy. Zadzwoniłem do niego z zapytaniem o jeden z elementów Smart domu, 
    wykonał testy i udzielił odpowiedzi rozwiązującej problem. Nie musiał a pomógł i to pro bono, to wiele znaczy 
    w dzisiejszych czasach. Polecam!!!`,
    name: "Xxx",
    location: "Kraków, Polska",
  },
  {
    text: `Zrobione zgodnie z projektem nowe instalacje, starannie i dokładnie wykonane i wszystko działa jak powinno`,
    name: "Anna",
    location: "Kraków, Polska",
  },
];

const Slide: FC<SlideProps> = ({ text, name, company, location }) => {
  return (
    <div className="min-w-0 lg:w-1/2 w-full flex-none p-8">
      <div className="sm:p-12 p-4 bg-grey rounded-2xl h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="inline-block w-8 h-8 mb-8"
          viewBox="0 0 975.036 975.036"
        >
          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
        </svg>
        <p>{text}</p>
        <h2 className="font-medium title-font tracking-wider mt-6">{name}</h2>
        <p className="mt-2">{company}</p>
        <p className="">{location}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          title={
            <span>
              CO MÓWIĄ <br />O NAS KLIENCI
            </span>
          }
        />
      </div>
      <div className="hidden sm:grid place-items-center row-start-2">
        <button className="p-4 rounded-lg text-brand hover:bg-brand-light" onClick={scrollPrev}>
          <SlArrowLeft className="h-8 w-8" />
        </button>
      </div>
      <div className="overflow-hidden content-center-span p-0 text-dark-grey" ref={emblaRef}>
        <div className="flex">
          {reviews.map((t) => {
            return <Slide key={t.name} {...t} />;
          })}
        </div>
      </div>
      <div className="hidden sm:grid place-items-center">
        <button className="p-4 rounded-lg text-brand hover:bg-brand-light" onClick={scrollNext}>
          <SlArrowRight className="h-8 w-8" />
        </button>
      </div>
      <div className="sm:hidden grid grid-cols-2 h-24">
        <button
          className="p-4 rounded-lg text-brand hover:bg-brand-light grid place-content-center"
          onClick={scrollPrev}
        >
          <SlArrowLeft className="h-8 w-8" />
        </button>
        <button
          className="p-4 rounded-lg text-brand hover:bg-brand-light grid place-content-center"
          onClick={scrollNext}
        >
          <SlArrowRight className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
