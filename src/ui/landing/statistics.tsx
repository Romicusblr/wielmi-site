import React from "react";
import { Inter } from "next/font/google";
import classNames from "classnames";

const font = Inter({ subsets: ["latin", "latin-ext"] });

const statistics = [
  { value: "50+", label: "Wykonanych projektów" },
  { value: "∞", label: "Godzin pracy" },
  { value: "10+", label: "Lat doświadczenia" },
];

const StatisticsSection: React.FC = () => {
  return (
    <div className={classNames(font.className, "w-full grid-layout p-12")}>
      <div className="sm:col-start-2 lg:col-end-4 grid sm:grid-cols-3 text-center gap-8">
        {statistics.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-7xl">{stat.value}</span>
            <span className="mt-2 text-lg">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
