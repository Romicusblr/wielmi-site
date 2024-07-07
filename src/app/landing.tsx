import type { FC } from "react";
import BrandedButton from "../ui/button";
import GridLineH from "@/ui/line-horizontal";

const cards = [
  {
    heading: "Opracowanie koncepcji „Inteligentnego domu”",
    text: "Przed podpisaniem umowy tworzymy koncepcję przyszłego systemu, uwzględniając Państwa styl życia, układ pomieszczeń i cechy architektoniczne domu.",
  },
  {
    heading: "Wykonanie projektu",
    text: "Opracowujemy indywidualny projekt w ścisłej współpracy z projektantem, architektem oraz innymi wykonawcami.",
  },
  {
    heading: "Dobór i dostawa sprzętu",
    text: "Kompletujemy sprzęt zgodnie z wymaganiami technicznymi i projektem wnętrz. Bezpośrednia współpraca z producentami pozwala nam na precyzyjne dopasowanie komponentów do Państwa potrzeb.",
  },
  {
    heading: "Wykonanie instalacji",
    text: "Realizujemy instalację systemu zgodnie ze wszystkimi regulacjami technicznymi i wymaganiami projektu. Jest to istotne, ponieważ niektóre rozwiązania konstrukcyjne są niemożliwe do zmiany po zakończeniu prac budowlanych.",
  },
  {
    heading: "Programowanie i uruchomienieProgramowanie i uruchomienie",
    text: "Zajmujemy się programowaniem i testowaniem sprzętu, opracowujemy scenariusze jego działania oraz szkolimy użytkowników w obsłudze systemu.",
  },
  {
    heading: "Gwarancyjne i serwisowe usługi:",
    text: "Oferujemy kontrolę i aktualizację oprogramowania, modernizację systemu w razie potrzeby, a także wyjazdy na miejsce na życzenie klienta w celu wykonania prac serwisowych.",
  },
];
interface CardProps {
  num: string;
  heading: string;
  text: string;
}

const Card: FC<CardProps> = function ({ num, heading, text }) {
  return (
    <article className="p-4 pt-12 w-1/6 bg-[#E4F0FF] text-sm shadow-lg relative transition-transform duration-200 hover:-translate-y-2 transform">
      <p className="absolute left-1 top-1 text-3xl text-muted-grey font-bold">{num}</p>
      <h3 className="font-semibold mb-4">{heading}</h3>
      <p>{text}</p>
    </article>
  );
};

const Landing: FC = function () {
  return (
    <>
      <section className="grid-layout">
        <div className="col-start-2 p-12">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4">O Wielmi</h2>
        </div>
        <div className="p-12">
          <h4 className="text-xl mb-4">Inteligentny dom Wielmi</h4>
          <p>
            Firma Wielmi to gwarancja kompleksowej i profesjonalnej realizacji projektów. Oferujemy pełen zakres usług,
            obejmujących:
          </p>
          <ul className="list-disc ml-8">
            <li>Projektowanie</li>
            <li>Instalacje elektryczne</li>
            <li>Uruchamianie i programowanie</li>
            <li>Owarzancja i serwis</li>
          </ul>
          <p>
            Nasze rozwiązania „pod klucz” zapewniają, że każda faza projektu jest wykonywana przez nasz zespół, co
            gwarantuje spójność i najwyższą jakość. Dbamy o każdy szczegół, aby końcowy efekt spełniał Państwa
            oczekiwania. Wybierając Wielmi, wybieracie Państwo jakość i terminowość.
          </p>
        </div>
        <GridLineH className="col-span-full" />
        <div className="col-start-2 p-12">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4">
            NASZA INSPIRACJA
          </h2>
        </div>
        <div className="p-12">
          <p className="mb-4">
            Inspirują nas oryginalne projekty designerów, którzy nie trzymają się standardowych rozwiązań, a w swojej
            pracy wykorzystują kreatywność i niestandardowe podejście.
          </p>
          <p className="mb-16">Jesteśmy otwarci na nowe projekty i gotowi do współpracy!</p>
          <div className="flex justify-center">
            <BrandedButton className="px-12">Czy masz jakiś pomysł?</BrandedButton>
          </div>
        </div>
      </section>
      <GridLineH />
      <section className="col-span-full grid-layout bg-[#F6FAFF]">
        <div className="col-start-3 p-12">
          <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4">ETAPY PRACY</h2>
        </div>
        <div className="col-span-full py-12 flex gap-4 justify-around px-4">
          {cards.map(({ heading, text }, i) => {
            const num = "0" + (i + 1);
            return <Card num={num} key={i} heading={heading} text={text} />;
          })}
        </div>
      </section>
      <GridLineH />
    </>
  );
};

export default Landing;
