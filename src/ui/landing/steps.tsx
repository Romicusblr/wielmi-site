import Heading from "../common/heading";

const steps = [
  {
    title: "Opracowanie koncepcji „Inteligentnego domu”",
    description:
      "Przed podpisaniem umowy tworzymy koncepcję przyszłego systemu, uwzględniając Państwa styl życia, układ pomieszczeń i cechy architektoniczne domu.",
  },
  {
    title: "Wykonanie projektu",
    description:
      "Opracowujemy indywidualny projekt w ścisłej współpracy z projektantem, architektem oraz innymi wykonawcami.",
  },
  {
    title: "Wykonanie instalacji",
    description:
      "Realizujemy instalację systemu zgodnie ze wszystkimi regulacjami technicznymi i wymaganiami projektu. Jest to istotne, ponieważ niektóre rozwiązania konstrukcyjne są niemożliwe do zmiany po zakończeniu prac budowlanych.",
  },
  {
    title: "Dobór i dostawa sprzętu",
    description:
      "Kompletujemy sprzęt zgodnie z wymaganiami technicznymi i projektem wnętrz. Bezpośrednia współpraca z producentami pozwala nam na precyzyjne dopasowanie komponentów do Państwa potrzeb.",
  },
  {
    title: "Programowanie i uruchomienie",
    description:
      "Zajmujemy się programowaniem i testowaniem sprzętu, opracowujemy scenariusze jego działania oraz szkolimy użytkowników w obsłudze systemu.",
  },
  {
    title: "Gwarancyjne i serwisowe usługi",
    description:
      "Oferujemy kontrolę i aktualizację oprogramowania, modernizację systemu w razie potrzeby, a także wyjazdy na miejsce na życzenie klienta w celu wykonania prac serwisowych.",
  },
];

const WorkSteps: React.FC = () => {
  return (
    <section className="grid-layout grid-flow-dense text-dark-grey bg-grey py-12 bg-op">
      <div className="sm:col-start-2 lg:col-start-3 p-12 items-start">
        <Heading
          title={
            <span>
              ETAPY <br /> PRACY
            </span>
          }
        />
      </div>
      <div className="sm:col-start-2 p-12 space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start">
            <div>
              <h3 className="relative font-bold before:block before:absolute before:bg-white before:-left-14 before:w-4 before:h-4 before:border-4 before:top-1/2 before:transform before:-translate-y-1/2">
                {step.title}
              </h3>
              <p className="mt-4">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSteps;
