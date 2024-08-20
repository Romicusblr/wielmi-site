import type { FC } from "react";
import Image from "next-export-optimize-images/image";
import GridLineH from "@/ui/line-horizontal";

const Page: FC = function () {
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
      <GridLineH className="col-span-full" />

      {/* <div className="sm:col-start-2 p-12 flex items-center justify-center bg-grey text-white">
        <Image
          alt="Interaktywny Panel Ścienny"
          src="/images/panel-scienny.png" // Update with the correct path to your image
          width={300}
          height={300}
          className="object-contain"
        />
        <div className="text-center mt-4">INTERAKTYWNY PANEL ŚCIENNY</div>
      </div>
      <div className="sm:col-start-3 lg:col-start-4 p-12">
        <h4 className="text-xl font-bold mb-4">INTERAKTYWNY PANEL ŚCIENNY</h4>
        <p className="mb-4">
          Smart-panel zastępuje tradycyjne wyłączniki, pozwalając na zarządzanie oświetleniem i innymi urządzeniami inteligentnego domu. Zapewnia dostęp do danych z czujników i stanu systemu.
        </p>
        <p>
          Uniwersalny interfejs dotykowy, dzięki naszemu oprogramowaniu, sprawia, że zarządzanie jest proste i wygodne, a różnorodne wzornictwo paneli dostosowane do wystroju wnętrza!
        </p>
      </div>

      <div className="sm:col-start-2 p-12 flex items-center justify-center bg-grey text-white">
        <div className="text-center mb-4">APLIKACJA MOBILNA</div>
        <Image
          alt="Aplikacja Mobilna"
          src="/images/mobile-app.png" // Update with the correct path to your image
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="sm:col-start-3 lg:col-start-4 p-12">
        <h4 className="text-xl font-bold mb-4">APLIKACJA MOBILNA</h4>
        <p className="mb-4">
          Mobilna aplikacja umożliwia pełne zarządzanie wszystkimi urządzeniami i systemami w Twoim domu z dowolnego miejsca na świecie.
        </p>
        <p className="mb-4">
          Intuicyjny interfejs użytkownika sprawia, że zarządzanie domem jest proste i wygodne. Możesz tworzyć i dostosowywać scenariusze działania systemów, aby dopasować je do swojego stylu życia.
        </p>
        <p>
          Dzięki mobilnej aplikacji masz pełną kontrolę nad swoim inteligentnym domem, co daje Ci poczucie spokoju i bezpieczeństwa, niezależnie od tego, gdzie się znajdujesz.
        </p>
      </div> */}
    </section>
  );
};

export default Page;
