import type { FC } from "react";

const cards = [
  {
    heading: 'Opracowanie koncepcji "Inteligentnego domu"',
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
    heading: "Programowanie i uruchomienie",
    text: "Zajmujemy się programowaniem i testowaniem sprzętu, opracowujemy scenariusze jego działania oraz szkolimy użytkowników w obsłudze systemu.",
  },
  {
    heading: "Gwarancyjne i serwisowe usługi",
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
    <article className="p-4 pt-12 bg-brand-light text-sm shadow-lg relative transition-transform duration-200 hover:-translate-y-2 transform">
      <p className="absolute left-1 top-1 text-3xl text-muted-grey font-bold">{num}</p>
      <h3 className="font-semibold mb-4">{heading}</h3>
      <p>{text}</p>
    </article>
  );
};

const WorkStepsSection: FC = function () {
  return (
    <section className="grid-layout bg-[#F6FAFF]">
      <div className="lg:col-start-3 sm:col-start-2 p-12">
        <h2 className="text-2xl font-bold underline underline-offset-8 decoration-brand decoration-4">ETAPY PRACY</h2>
      </div>
      <div className="col-span-full py-12 grid lg:grid-cols-6 sm:grid-cols-3 gap-4 justify-around sm:px-4 px-12">
        {cards.map(({ heading, text }, i) => {
          const num = "0" + (i + 1);
          return <Card num={num} key={heading} heading={heading} text={text} />;
        })}
      </div>
    </section>
  );
};

export default WorkStepsSection;
