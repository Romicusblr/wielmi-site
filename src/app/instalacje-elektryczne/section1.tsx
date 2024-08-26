import type { FC } from "react";

const Section1: FC = () => {
  return (
    <section className="grid-layout">
      <div className="sm:col-start-2 p-12">
        <h1 className="text-4xl font-bold underline underline-offset-8 decoration-brand decoration-4">
          INSTALACJE ELEKTRYCZNE
        </h1>
        <h2 className="text-2xl font-light mt-8">WSZECHSTRONNOŚĆ</h2>
        <h2 className="text-2xl font-light">PROJEKTOWANIA I</h2>
        <h2 className="text-2xl font-light">REALIZACJI</h2>
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-12 pt-0 lg:pt-12">
        <h3 className="text-xl font-bold mb-4">CO TO JEST INSTALACJE ELEKTRYCZNE?</h3>
        <p className="mb-4">
          Instalacje elektryczne w inteligentnym domu to zaawansowane systemy przewodów, urządzeń i osprzętu, które nie
          tylko dostarczają energię elektryczną, ale także umożliwiają automatyzację i zdalne zarządzanie różnymi
          funkcjami domu.{" "}
        </p>
        <p className="mb-4">
          Specjalizujemy się w realizacji instalacji elektrycznych zarówno na podstawie gotowych projektów, jak i w
          tworzeniu indywidualnych rozwiązań dostosowanych do potrzeb klienta.
        </p>
      </div>
    </section>
  );
};

export default Section1;
