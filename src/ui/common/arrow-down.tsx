"use client";
import React from "react";
import classNames from "classnames";
import { BsChevronDown } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

interface ArrowDownProps {
  className?: string;
}

const ArrowDown: React.FC<ArrowDownProps> = function ({ className, ...props }) {
  const baseClass = "text-red";
  return (
    <IconContext.Provider value={{ color: "#75A4DC", className: "animate-move-up-down" }}>
      <BsChevronDown className={classNames(baseClass, className)} {...props} size={75} />
    </IconContext.Provider>
  );
};

export default ArrowDown;