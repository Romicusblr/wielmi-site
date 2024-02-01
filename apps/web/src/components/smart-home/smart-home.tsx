"use client";

import type { FC } from "react";

const SmartHome: FC = function () {
  return (
    <div className="container relative w-full flex flex-col items-center px-16">
      <h2 className="text-4xl m-8">WIELMI</h2>
      <h3 className="text-2xl mb-8">Inteligentny dom</h3>
      {Array(10).fill(1).map((_, i: number) => (
        <p className="text-center my-8" key={i}>
          Inteligentny dom to system, który łączy różne urządzenia elektroniczne i systemy w domu pod jednym
          zarządzaniem. Może to obejmować kontrolę oświetlenia, ogrzewania, klimatyzacji, bezpieczeństwa, systemów
          multimedialnych i wielu innych. System inteligentnego domu umożliwia automatyzację wielu procesów, zwiększając
          komfort i efektywność wykorzystania zasobów.
        </p>
      ))}
    </div>
  );
};

export default SmartHome;
