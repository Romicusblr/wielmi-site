import classNames from "classnames";
import type { FC } from "react";

interface GridLineProps {
  className?: string;
}

const GridLine: FC<GridLineProps> = function ({ className }) {
  return (
    <div className={classNames(className, "fixed z-10 min-h-screen m-0 bg-gray-400 h-full border-none w-[1px]")} />
  );
};

export default GridLine;
