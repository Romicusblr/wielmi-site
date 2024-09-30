import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section: FC = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          tag="h1"
          title={
            <span>
              INTELIGENTNY <br />
              DOM
            </span>
          }
          subtitles={["ZWYCZAJ", "KOMFORTU"]}
        />
      </div>
      <div className="content-right-half">
        <h3 className="text-3xl font-medium mb-4">CO TO JEST INTELIGENTNY DOM?</h3>
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

export default Section;
