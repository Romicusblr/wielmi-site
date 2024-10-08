import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section: FC = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          tag="h1"
          title="JEŚTEŚ ARCHITECTEM?"
          subtitles={["DOŁĄCZ DO", "SYSTEMU", "INTELIGENTNEGO", "DOMU Wielmi"]}
        />
      </div>
      <div className="content-right-half">
        <h3 className="text-3xl font-medium">DOŁĄCZ DO SYSTEMU INTELIGENTNEGO DOMU Wielmi</h3>
        <p className="mt-4">
          Zawsze jesteśmy gotowi udzielić kompetentnej porady i pomocy tam, gdzie nie ma prostych rozwiązań.
        </p>
        <p className="mt-4">Z naszymi specjalistami możesz skonsultować się w każdej sprawie. </p>
        <p className="mt-4">
          Jeżeli jesteś architektem i klient poprosi Cię o wybranie odpowiedniego kina, czy też wielostrefowego audio
          pod kątem designu, możesz się z nami umówić na konsultacje swojego projektu, dzięki czemu pomożemy Ci w
          zrealizowaniu Twojego zadania w oparciu o wytyczne jakie muszą być spełnione na danej inwestycji. Kiedy
          poszukujesz wykonawcy inteligentnego domu, bądź też okablowania - również możemy być pomocni.
        </p>
      </div>
    </section>
  );
};

export default Section;
