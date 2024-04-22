import type { FC } from "react";
import GridLineV from "./line-vertical";

const GridLines: FC = function () {
  return (
    <>
      <GridLineV className="hidden lg:block"/>
      <GridLineV className="hidden sm:block start-[10vw]" />
      <GridLineV className="hidden sm:block end-[10vw]" />
    </>
  );
};

export default GridLines;
