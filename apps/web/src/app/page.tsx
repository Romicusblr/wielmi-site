import type { FC } from "react";
import Hero from "../components/hero";

const Page: FC = function () {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Hero />
    </main>
  );
};

export default Page;
