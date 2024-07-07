import classNames from "classnames";
import type { FC } from "react";

interface GridLineProps {
  className?: string;
}

const GridLineH: FC<GridLineProps> = function ({ className }) {
  return (
    <hr className={classNames(className, "z-2 m-0 bg-gray-400 border-none h-[1px] w-full")} />
  );
};

export default GridLineH;
