import type { FC } from "react";
import Hero from "../components/hero/hero";
import GridLines from "../components/grid-lines";
// import SmartHome from "../components/smart-home";

const Page: FC = function () {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Hero />
      <GridLines />
      {/* <SmartHome /> */}
    </main>
  );
};

export default Page;
