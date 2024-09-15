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
    <div className="w-full section z-10 bg-whitesmoke">
      <div className="content-center-span grid lg:grid-cols-3 text-center gap-8">
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
