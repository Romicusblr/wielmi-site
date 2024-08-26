import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-brand decoration-4">
          JEŚTEŚ ARCHITECTEM, Elektrykiem, Deweloperem?
        </h1>
        <h2 className="text-2xl font-light mt-8">DOŁĄCZ DO</h2>
        <h2 className="text-2xl font-light">SYSTEMU</h2>
        <h2 className="text-2xl font-light">INTELIGENTNEGO</h2>
        <h2 className="text-2xl font-light">DOMU Wielmi</h2>
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h3 className="text-xl font-bold mb-4">DOŁĄCZ DO SYSTEMU INTELIGENTNEGO DOMU Wielmi</h3>
        <p className="mb-4">
          Zawsze jesteśmy gotowi udzielić kompetentnej porady i pomocy tam, gdzie nie ma prostych rozwiązań.
        </p>
        <p className="mb-4">Z naszymi specjalistami możesz skonsultować się w każdej sprawie. </p>
        <p className="mb-4">
          Jeżeli jesteś architektem i klient poprosi Cię o wybranie odpowiedniego kina, czy też wielostrefowego audio
          pod kątem designu, możesz się z nami umówić na konsultacje swojego projektu, dzięki czemu pomożemy Ci w
          zrealizowaniu Twojego zadania w oparciu o wytyczne jakie muszą być spełnione na danej inwestycji. Kiedy
          poszukujesz wykonawcy inteligentnego domu, bądź też okablowania - również możemy być pomocni.
        </p>
      </div>
    </section>
  );
};

export default Section1;
