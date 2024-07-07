import type { FC } from "react";
import BrandedButton from "../ui/button";

const Landing: FC = function () {
  return (
    <div className="grid-layout">
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
      <hr className="col-span-full bg-muted-grey" />
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
      {/* <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-lg font-bold mb-4">NASZA INSPIRACJA</h2>
          <p className="text-gray-600">
            Inspiurują nas oryginalne projekty designerów, którzy nie trzymają się standardowych rozwiązań, a w swojej
            pracy wykorzystują kreatywność i nowoczesne podejście.
          </p>
          <button className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">
            Czy masz jakiś pomysł?
          </button>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <h2 className="text-lg font-bold mb-4">ETAPY PRACY</h2>
          <ol className="list-decimal ml-4">
            <li>Opacowanie koncepcji</li>
            <li>Wykonanie projektu</li>
            <li>Dobór i dostawa sprzętu</li>
            <li>Wykonanie instalacji</li>
            <li>Programowanie i uruchomienie</li>
            <li>Gwarancje i serwisowe usługi</li>
          </ol>
        </div> */}
    </div>
  );
};

export default Landing;
