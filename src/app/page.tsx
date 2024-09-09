import type { FC } from "react";
import Landing from "./landing";

const Page: FC = function () {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <Landing />
    </main>
  );
};

export default Page;
