"use client";
import { useState, type FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import Logo from "../logo";
import MenuButton from "./menu-button";

const navigation = [
  { name: "Inteligentny dom", href: "#", current: false },
  { name: "Instalacje elektryczne", href: "#", current: false },
  { name: "Sieci lokalne", href: "#", current: false },
  { name: "Współpraca", href: "#", current: false },
  { name: "Kontakty", href: "#", current: false },
  { name: "O Wielmi", href: "#", current: false },
];

const NavBar: FC = function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-30 w-full text-dark-grey">
      <div className="grid-layout lg:items-center">
        <div className="h-12 lg:m-4 sm:m-2">
          <Logo />
        </div>
        <ul
          className={classNames(
            "flex-col p-4 text-2xl",
            "lg:text-base lg:px-8 lg:flex lg:flex-row lg:justify-between lg:col-span-2",
            isOpen ? "flex" : "hidden"
          )}
        >
          {navigation.map(({ name, href }) => (
            <li key={name}>
              <Link
                className="flex justify-center p-2 hover:text-brand hover:underline underline-offset-8 hover:scale-105 transform transition duration-150 ease-in-out"
                href={href}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="col-start-3 lg:col-start-4 h-12 m-4 grid place-items-center">
          <MenuButton onClick={toggleOpen} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
