import Heading from "@/ui/common/heading";
import type { FC } from "react";

const Section: FC = () => {
  return (
    <section className="section">
      <div className="content-left-half">
        <Heading
          tag="h1"
          title="INSTALACJE ELEKTRYCZNE"
          subtitles={["WSZECHSTRONNOŚĆ", "PROJEKTOWANIA I", "REALIZACJI"]}
        />
      </div>
      <div className="content-right-half">
        <h3 className="text-3xl font-medium mb-4">CO TO JEST INSTALACJE ELEKTRYCZNE?</h3>
        <p className="mb-4">
          Instalacje elektryczne w inteligentnym domu to zaawansowane systemy przewodów, urządzeń i osprzętu, które nie
          tylko dostarczają energię elektryczną, ale także umożliwiają automatyzację i zdalne zarządzanie różnymi
          funkcjami domu.
        </p>
        <p className="mb-4">
          Specjalizujemy się w realizacji instalacji elektrycznych zarówno na podstawie gotowych projektów, jak i w
          tworzeniu indywidualnych rozwiązań dostosowanych do potrzeb klienta.
        </p>
      </div>
    </section>
  );
};

export default Section;
