import React from "react";
import classNames from "classnames";
import { GoInfinity } from "react-icons/go";

const statistics = [
  { value: "50+", label: "Wykonanych projektów" },
  { value: <GoInfinity />, label: "Godzin pracy" },
  { value: "10+", label: "Lat doświadczenia" },
];

const StatisticsSection: React.FC = () => {
  return (
    <div className={classNames( "w-full grid-layout p-20")}>
      <div className="sm:col-start-2 lg:col-end-4 grid lg:grid-cols-3 text-center gap-8">
        {statistics.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-7xl">{stat.value}</span>
            <span className="mt-2 text-2xl">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
