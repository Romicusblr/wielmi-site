import type { FC } from "react";
import Hero from "../components/hero/hero";
import GridLines from "../components/grid-lines";
import NavBar from "../components/navbar";
// import SmartHome from "../components/smart-home";

const Page: FC = function () {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <NavBar />
      <Hero />
      <GridLines />
      {/* <SmartHome /> */}
    </main>
  );
};

export default Page;
