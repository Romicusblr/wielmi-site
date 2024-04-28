"use client";
import { useState, type FC } from "react";
import Link from "next/link";
import classNames from "classnames";

const navigation = [
  { name: "Główna", href: "#", current: true },
  { name: "Inteligentny dom", href: "#", current: false },
  { name: "Instalacje elektryczne", href: "#", current: false },
  { name: "Sieci lokalne", href: "#", current: false },
  { name: "Współpraca", href: "#", current: false },
  { name: "O nas", href: "#", current: false },
];

const NavBar: FC = function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (): void => { setIsOpen(!isOpen); };

  return (
    <div className="z-20 fixed top-0 right-0 flex items-center">
      <button
        aria-controls="mobile-menu"
        aria-expanded="false"
        className="relative sm:w-[10vw] p-2 inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white"
        onClick={toggleOpen}
        type="button"
      >
        <span className="sr-only">Open main menu</span>

        <svg
          aria-hidden="true"
          className={classNames("h-12", isOpen ? "hidden" : "block")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <svg
          aria-hidden="true"
          className={classNames("h-12", isOpen ? "block" : "hidden")}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
    // <div className="container mx-auto flex flex-col items-center">
    //   <nav className="flex justify-between">
    //     {navigation.map(({ name, href }) => {
    //       return (
    //         <Link className="mt-4 mx-8" href={href} key={name}>
    //           {name}
    //         </Link>
    //       );
    //     })}
    //   </nav>
    // </div>
  );
};

export default NavBar;
