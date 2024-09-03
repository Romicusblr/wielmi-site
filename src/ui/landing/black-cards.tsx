import type { FC, ReactNode } from "react";

const cards = [
  {
    heading: (
      <span>
        Bezpłatna <br />
        konsultacja
      </span>
    ),
    text: `Na etapie bezpłatnej konsultacji określamy Państwa potrzeby i oczekiwania. 
      Opowiadają nam Państwo o swoim domu marzeń i planach, które chcą zrealizować. 
      My proponujemy najlepsze rozwiązania dla inteligentnego domu.`,
  },
  {
    heading: "Indywidualna kalkulacja kosztów",
    text: `Przygotowujemy wstępną wycenę, która obejmuje koszt sprzętu, montażu 
      oraz automatyzacji domu. Używamy terminu „wstępna”, ponieważ na etapie uzgadniania 
      można dodać dodatkowe funkcje według Państwa życzeń. Gdy wszystkie szczegóły są 
      uzgodnione i przeliczone, podpisujemy umowę.`,
  },
  {
    heading: (
      <span>
        Realizacja <br />
        projektu
      </span>
    ),
    text: `Po podpisaniu umowy rozpoczynamy pracę. Proces projektowania może zająć od 
      kilku dni do kilku tygodni, w zależności od skomplikowania projektu. Następnie, 
      zgodnie z ustalonym harmonogramem i w koordynacji z innymi wykonawcami, przystępujemy
      do realizacji instalacji elektrycznej oraz montażu sprzętu. Po zakończeniu tych prac
      programujemy system i szkolimy Państwa z jego obsługi. 
      Gratulacje - Inteligentny Dom jest już Państwa!`,
  },
];

interface BlackCardProps {
  heading: ReactNode;
  text: string;
}

const BlackCard: FC<BlackCardProps> = function ({ heading, text }) {
  return (
    <article className="p-4 py-8 flex-1 bg-grey text-[13px] text-dark-grey rounded-2xl">
      <h3 className="mb-4 text-xl text-center h-16 leading-6">{heading}</h3>
      <p className="leading-4">{text}</p>
    </article>
  );
};

const BlackCardSection: FC = function () {
  return (
    <section className="grid-layout py-12">
      <div className="sm:col-start-2 lg:col-end-4 p-12 flex flex-col lg:flex-row gap-16 text-center">
        {cards.map(({ heading, text }, i) => {
          return <BlackCard key={i} heading={heading} text={text} />;
        })}
      </div>
    </section>
  );
};

export default BlackCardSection;
