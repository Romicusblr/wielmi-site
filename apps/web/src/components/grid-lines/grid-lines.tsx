import type { FC } from "react";
import GridLine from "./line";

const GridLines: FC = function () {
  return (
    <>
      <GridLine className="hidden lg:block"/>
      <GridLine className="hidden sm:block start-[10vw]" />
      <GridLine className="hidden sm:block end-[10vw]" />
    </>
  );
};

export default GridLines;
