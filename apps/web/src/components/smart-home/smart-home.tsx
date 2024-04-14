import type { FC } from "react";
import Card from "./card";

const cards = [
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Oszczędność energii",
    texts: [
      "Automatyczne zarządzanie systemami ogrzewania, oświetlenia i klimatyzacji pomaga zmniejszyć zużycie energii, a tym samym obniżyć koszty komunalne.",
      "Na przykład, gdy dom jest pusty, termostat automatycz﻿nie obniża temperaturę, oszczędzając energię. Kiedy zbliża się czas Twojego powrotu, system ponownie podwyższa temperaturę, zapewniając komfortowe warunki w momencie wejścia do domu. To nie tylko zmniejsza zużycie energii, ale również obniża koszty ogrzewania czy chłodzenia domu.",
    ],
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Wygodę i komfort",
    texts: [
      "System inteligentnego domu może być dostosowany do indywidualnych preferencji mieszkańców, zapewniając automatyczną kontrolę oświetlenia, temperatury, a nawet muzyki.",
      "Wyobraź sobie, że wracasz do domu po ciężkim dniu pracy, a Twój inteligentny dom automatycznie dostosowuje oświetlenie, temperaturę i nawet uruchamia relaksującą muzykę w tle, tworząc idealne środowisko do odpoczynku. Wszystko to bez konieczności ręcznego ustawiania - Twój dom zna Twoje preferencje i samodzielnie tworzy atmosferę sprzyjającą relaksowi."
    ],
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Bezpieczeństwo",
    texts: [
      "Integracja systemów bezpieczeństwa w inteligentnym domu zwiększa ochronę nie tylko przed włamaniami(monitoring, alarmy, czujniki ruchu), ale także przed awariami domowymi.",
      "Na przykład, czujniki zalania mogą nie tylko natychmiast powiadomić Cię o problemie z wyciekiem wody, ale również automatycznie wyłączyć główny zawór wodny, minimalizując potencjalne szkody. Podobnie, inteligentne detektory dymu i czadu mogą nie tylko ostrzec o pożarze czy wydobywającym się gazie, ale również zintegrować się z systemem, aby np. otworzyć okna dla wentylacji lub wyłączyć źródła ciepła. Dzięki temu system inteligentnego domu staje się kompleksowym rozwiązaniem, które zapewnia bezpieczeństwo zarówno przed zagrożeniami zewnętrznymi, jak i wewnętrznymi, znacząco zwiększając ogólną ochronę domu."
    ],
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Zdalne sterowanie",
    texts: [
      "W systemie inteligentnego domu, możesz nie tylko kontrolować urządzenia domowe za pomocą smartfona, ale również komunikować się zdalnie z osobami dzwoniącymi do Twojego domofonu.",
      "Gdy ktoś naciska dzwonek, otrzymujesz powiadomienie na telefon i możesz bezpośrednio rozmawiać z tą osobą, bez względu na to, gdzie się aktualnie znajdujesz. Daje to możliwość sprawdzenia, kto odwiedza Twój dom, czy to kurier z przesyłką czy niezapowiedziany gość, zapewniając dodatkowy poziom bezpieczeństwa i wygody."
    ],
  },
  {
    src: "/200x300.svg",
    alt: "",
    topic: "Oszczędność czasu",
    texts: [
      "Automatyzacja codziennych zadań, jak, naprzykład, automatyczne nawadnianie ogrodu lub automatyczne ogrzewanie wejscia z domu zamiast ręcznego odsnieżania, pozwala zaoszczędzić czas na inne zajęcia.",
      "jak, naprzykład, automatyczne nawadnianie ogrodu lub automatyczne ogrzewanie wejscia z domu zamiast ręcznego odsn﻿ieżania, pozwala zaoszczędzić czas na inne zajęcia."
    ],
  },
];

const SmartHome: FC = function () {
  return (
    <div className="container mx-auto max-w-5xl px-10 relative flex flex-col">
      <h3 className="text-2xl text-center my-8">Inteligentny dom</h3>
      <p className="mt-2 text-center">
        Inteligentny dom to system, który łączy różne urządzenia elektroniczne i systemy w domu pod jednym zarządzaniem.
        Może to obejmować kontrolę oświetlenia, ogrzewania, klimatyzacji, bezpieczeństwa, systemów multimedialnych i
        wielu innych. System inteligentnego domu umożliwia automatyzację wielu procesów, zwiększając komfort i
        efektywność wykorzystania zasobów.
      </p>
      {cards.map(({ src, alt, topic, texts }, i) => (
        <Card alt={alt} key={topic} reverse={Boolean(i % 2)} src={src} texts={texts} topic={topic} />
      ))}
    </div>
  );
};

export default SmartHome;
