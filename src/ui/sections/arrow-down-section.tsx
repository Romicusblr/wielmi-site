import React from "react";
import classNames from "classnames";
import ArrowDown from "../common/arrow-down";

interface ArrowDownSectionProps {
  className?: string;
}

const ArrowDownSection: React.FC<ArrowDownSectionProps> = function ({ className }) {
  return (
    <div className={classNames("w-full h-32 grid place-content-center", className)}>
      <ArrowDown />
    </div>
  );
};

export default ArrowDownSection;
