import type { FC } from "react";
import GridLines from "../ui/grid-lines";
import Landing from "./landing";
// import SmartHome from "../components/smart-home";

const Page: FC = function () {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <GridLines />
      <Landing />
    </main>
  );
};

export default Page;
