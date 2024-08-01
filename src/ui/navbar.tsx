"use client";
import { type FC } from "react";
import Logo from "./logo";

const NavBar: FC = function () {
  return (
    <nav className="p-2 fixed z-30 w-full text-dark-grey bg-grey bg-opacity-90 px-2 sm:px-0">
      <div className="grid place-items-center">
        <div className="h-12 w-24 sm:w-[10vw] p-2">
          <Logo />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
