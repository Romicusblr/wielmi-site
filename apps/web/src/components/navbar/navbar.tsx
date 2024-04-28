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
  { name: "Kontakty", href: "#", current: false },
];

const NavBar: FC = function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="z-30 fixed top-0 right-0 flex items-center">
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
      <div
        className={classNames(
          "z-20 fixed inset-0 bg-black bg-opacity-75 transition-opacity grid lg:grid-cols-[10vw_1fr_1fr_10vw] sm:grid-cols-[10vw_1fr_10vw]",
          isOpen ? "block" : "hidden"
        )}
      >
        <div className="p-16 flex flex-col justify-center lg:col-start-3 sm:col-start-2">
          {navigation.map(({ name, href }) => {
            return (
              <Link className="mt-4 text-gray-300 hover:text-gray-50" href={href} key={name}>
                {name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
