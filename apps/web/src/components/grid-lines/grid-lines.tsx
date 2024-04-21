import type { FC } from "react";
import GridLine from "./line";

const GridLines: FC = function () {
  return (
    <>
      <GridLine />
      <GridLine className="start-[10vw]" />
      <GridLine className="end-[10vw]" />
    </>
  );
};

export default GridLines;
