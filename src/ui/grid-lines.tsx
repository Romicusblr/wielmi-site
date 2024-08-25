import type { FC } from "react";
import classNames from "classnames";

const GRID_COLOR = "bg-[#e5e5e5]"
interface GridLineProps {
  className?: string;
}

export const GridLineV: FC<GridLineProps> = function ({ className }) {
  return (
    <div className={classNames(className, "fixed min-h-screen w-[1px]", GRID_COLOR)} />
  );
};

export const GridLineH: FC<GridLineProps> = function ({ className }) {
  return (
    <hr className={classNames(className, "h-[1px] w-full", GRID_COLOR)} />
  );
};

// < small - no gridlines
// small:large - 2 gridlines
// > large - 3 gridlines
const GridLines: FC = function () {
  return (
    <>
      <GridLineV className="hidden lg:block"/>
      <GridLineV className="hidden sm:block start-[12vw]" />
      <GridLineV className="hidden sm:block end-[12vw]" />
    </>
  );
};

export default GridLines;
