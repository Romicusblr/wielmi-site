import type { FC } from "react";
import Hero from "../components/hero";
import SmartHome from "../components/smart-home";

const Page: FC = function () {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Hero />
      <SmartHome />
    </main>
  );
};

export default Page;
