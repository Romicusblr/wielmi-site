import type { FC } from "react";
import Card from "./card";

const cards = [
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Oszczędność energii",
    text: "Automatyczne zarządzanie systemami ogrzewania, oświetlenia i klimatyzacji pomaga zmniejszyć zużycie energii, a tym samym obniżyć koszty komunalne...",
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Wygodę i komfort",
    text: "System inteligentnego domu może być dostosowany do indywidualnych preferencji mieszkańców, zapewniając automatyczną kontrolę oświetlenia, temperatury, a nawet muzyki...",
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Bezpieczeństwo",
    text: "Integracja systemów bezpieczeństwa w inteligentnym domu zwiększa ochronę nie tylko przed włamaniami(monitoring, alarmy, czujniki ruchu), ale także przed awariami domowymi...",
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Zdalne sterowanie",
    text: "W systemie inteligentnego domu, możesz nie tylko kontrolować urządzenia domowe za pomocą smartfona, ale również komunikować się zdalnie z osobami dzwoniącymi do Twojego domofonu...",
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Oszczędność czasu",
    text: "Automatyzacja codziennych zadań, jak, naprzykład, automatyczne nawadnianie ogrodu lub automatyczne ogrzewanie wejscia z domu zamiast ręcznego odsnieżania, pozwala zaoszczędzić czas na inne zajęcia.",
  },
];

const SmartHome: FC = function () {
  return (
    <div className="container relative w-full flex flex-col">
      <h3 className="text-2xl text-center my-8">Inteligentny dom</h3>
      <p className="mt-2 text-center">
        Inteligentny dom to system, który łączy różne urządzenia elektroniczne i systemy w domu pod jednym zarządzaniem.
        Może to obejmować kontrolę oświetlenia, ogrzewania, klimatyzacji, bezpieczeństwa, systemów multimedialnych i
        wielu innych. System inteligentnego domu umożliwia automatyzację wielu procesów, zwiększając komfort i
        efektywność wykorzystania zasobów.
      </p>
      <p className="mt-8">Korzyści z inteligentnego domu:</p>
      {cards.map(({ src, alt, topic, text }, i) => (
        <Card alt={alt} key={topic} reverse={Boolean(i % 2)} src={src} text={text} topic={topic} />
      ))}
    </div>
  );
};

export default SmartHome;
