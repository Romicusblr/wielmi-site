"use client";
import Heading from "@/ui/common/heading";
import { FC, ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

interface FAQ {
  question: string;
  answer: ReactNode;
}

const faqs: FAQ[] = [
  {
    question: "Ile kosztuje zbudowanie systemu inteligentnego domu?",
    answer: (
      <p>
        Koszt inteligentnego domu może się znacznie różnić. Proponujemy przesłać nam projekt Państwa domu, a na jego
        podstawie przygotujemy dla Państwa spersonalizowaną ofertę z przybliżonym zakresem cenowym, w zależności od
        stopnia skomplikowania i liczby zautomatyzowanych systemów.
      </p>
    ),
  },
  {
    question: "Jak wkomponować system zarządzania inteligentnym domem w wystrój wnętrza?",
    answer: (
      <>
        <p>
          Włączenie systemu zarządzania inteligentnym domem w projekt wnętrza może być wykonane na kilka sposobów, aby
          zapewnić harmonijne połączenie funkcjonalności i estetyki. Oto kilka wskazówek:
        </p>
        <ul className="list-disc pl-5 mt-2">
          <li>
            Nowoczesne urządzenia: Wybieraj urządzenia o nowoczesnym designie, które mogą być częścią dekoracji, na
            przykład stylowe panelem sterowania czy głośniki.
          </li>
          <li>
            Dobór kolorów: Używaj urządzeń, które harmonizują kolorystycznie z wnętrzem lub mogą zmieniać kolor w
            zależności od oświetlenia.
          </li>
          <li>
            Materiały: Wybieraj materiały urządzeń, które odpowiadają pozostałym elementom dekoracyjnym, na przykład
            metal, drewno lub szkło.
          </li>
          <li>
            Ukryte elementy: Umieszczaj czujniki i sensory wbudowane w ściany i sufit. Wkomponuj elementy inteligentnego
            domu w meble, na przykład ładowarki w blaty czy sensoryczne włączniki w kuchenną wyspę.
          </li>
        </ul>
        <p className="mt-2">
          Dzięki tym rozwiązaniom system zarządzania inteligentnym domem będzie nie tylko funkcjonalny, ale także
          estetycznie zintegrowany z wnętrzem Państwa domu.
        </p>
      </>
    ),
  },
  {
    question: "Co się stanie, jeśli zabraknie prądu lub Internetu?",
    answer: (
      <p>
        W tym przypadku zapewniamy schemat podtrzymania zasilania urządzeń inteligentnego domu i sieci lokalnych,
        monitoringu wizyjnego czy systemów alarmowych, które w sytuacji awaryjnej w dalszym ciągu utrzymują sprawność
        całego systemu, a inteligentny dom wyśle właścicielowi powiadomienie o problemie w zasilaniu.
      </p>
    ),
  },
  {
    question: "Czy korzystanie z inteligentnego domu jest trudne?",
    answer: (
      <>
        <p>
          Korzystanie z inteligentnego domu jest zaprojektowane tak, aby było jak najprostsze i intuicyjne. Oto kilka
          powodów, dlaczego obsługa inteligentnego domu jest łatwa:
        </p>
        <ol className="list-decimal pl-5 mt-2">
          <li>
            Intuicyjny interfejs: Aplikacja na panele sterujące są zaprojektowane z myślą o użytkownikach, oferując
            prosty i intuicyjny interfejs.
          </li>
          <li>
            Komendy głosowe: Integracja z asystentami głosowymi, takimi jak Amazon Alexa, Google Assistant czy Siri,
            pozwala na sterowanie urządzeniami za pomocą prostych poleceń głosowych.
          </li>
          <li>
            Automatyczne scenariusze: Możliwość ustawiania scenariuszy automatyki, które są dostosowane do codziennych
            potrzeb.
          </li>
        </ol>
      </>
    ),
  },
];

interface Props {
  isOpen: boolean;
  faq: FAQ;
  onClick: () => void;
}

const FAQItem: FC<Props> = ({ faq, isOpen, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="flex justify-between items-center w-full py-4 border-b border-gray-600 text-left"
      >
        <span className="text-white flex-1 mr-4">{faq.question}</span>

        <FaChevronDown
          className={`flex-initial w-6 h-6 text-white transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="py-2 text-gray-400">{faq.answer}</div>}
    </div>
  );
};

const Section5 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="grid-layout bg-grey text-dark-grey text-left py-20">
      <div className="sm:col-start-2 px-12">
        <Heading
          title={
            <span>
              PYTANIE /<br />
              ODPOWIEDŹ
            </span>
          }
          titleClass="!text-5xl"
        />
        {faqs.map((faq, index) => (
          <FAQItem key={index} faq={faq} isOpen={openIndex === index} onClick={() => handleClick(index)} />
        ))}
      </div>
    </section>
  );
};

export default Section5;
