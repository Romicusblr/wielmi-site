import type { FC } from "react";
import { GridLineH } from "@/ui/grid-lines";
import Section1 from "./section1";

const Page: FC = function () {
  return (
    <>
      <Section1 />
      <GridLineH />
    </>
  );
};

export default Page;
