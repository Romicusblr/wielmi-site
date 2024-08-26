import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-brand decoration-4">
          INTELIGENTNY DOM
        </h1>
        <h2 className="text-2xl font-light mt-4">ZWYCZAJ KOMFORTU</h2>
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h3 className="text-xl font-bold mb-4">CO TO JEST INTELIGENTNY DOM?</h3>
        <p className="mb-4">
          Przede wszystkim, system inteligentnego domu pozwala na oszczędne gospodarowanie zasobami oraz własnym czasem.
        </p>
        <p className="mb-4">
          Łatwo i bezpiecznie zarządzaj swoim urządzeniami inteligentnego domu za pomocą aplikacji, będąc w dowolnym
          miejscu na świecie, lub z interaktywnego panelu ściennego po pomieszczeniu.
        </p>
        <p className="mb-4">
          Na przykład, możesz zdalnie sprawdzić kamery domofonu, ustawić komfortową temperaturę w domu podczas wyjazdu z
          biura na koniec dnia, wyłączyć światło w domu, upewnić się, że drzwi garażu są zamknięte, oraz otrzymać
          powiadomienia o alarmie, jeśli coś pójdzie nie tak.
        </p>
        <p className="mb-4">
          System inteligentnego domu integruje różne akcesoria od różnych producentów, a liczba możliwych scenariuszy
          ograniczona jest jedynie Twoją wyobraźnią.
        </p>
        <p>
          Działanie wszystkich systemów pozwala poczuć, czym jest komfort i wyrobić nawyk jego odczuwania - poczucie
          spokoju i pewności, że wszystko jest pod kontrolą.
        </p>
      </div>
    </section>
  );
};

export default Section1;
