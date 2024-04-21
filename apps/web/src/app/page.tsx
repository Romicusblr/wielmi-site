import type { FC } from "react";
import Hero from "../components/hero/hero-placeholder";
// import SmartHome from "../components/smart-home";
// import NavBar from "../components/navbar";

const Page: FC = function () {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* <NavBar /> */}
      <Hero />
      {/* <SmartHome /> */}
    </main>
  );
};

export default Page;
