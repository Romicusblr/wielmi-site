"use client";
import { useState, type FC } from "react";
import Link from "next/link";
import classNames from "classnames";
import Logo from "./logo";
import MenuButton from "./menu-button";

const navigation = [
  { name: "O Wielmi", href: "/#wielmi" },
  { name: "Inteligentny dom", href: "/#smart" },
  { name: "Instalacje elektryczne", href: "/#electric" },
  { name: "Sieci lokalne", href: "/#lan" },
  { name: "Zespól", href: "/#team" },
  { name: "Kontakty", href: "/#contact" },
];

const phoneNumber = "+48571780770";

function formatNumber(phoneNumber: string) {
  return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}

const NavBar: FC = function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const navLiClass =
    "whitespace-nowrap flex justify-center lg:justify-end p-2 lg:p-2 hover:text-brand hover:underline underline-offset-8 hover:scale-105 transform transition duration-150 ease-in-out";
  return (
    <nav className="fixed z-30 w-full text-dark-grey bg-grey bg-opacity-90 px-2 sm:px-0">
      <div className="grid-layout items-center">
        <div className="flex items-center justify-between col-span-full lg:col-span-1">
          <div className="h-12 w-24 sm:w-[10vw] p-2">
            <Logo />
          </div>
          <div className="h-12 w-24 sm:w-[10vw] grid place-items-center lg:hidden sm:col-start-3">
            <MenuButton onClick={toggleOpen} />
          </div>
        </div>
        <ul
          className={classNames(
            "flex-col p-4 text-2xl h-[100vh] justify-start col-span-full",
            "lg:h-auto lg:text-base lg:flex lg:flex-row lg:justify-center lg:col-span-2",
            isOpen ? "flex" : "hidden"
          )}
        >
          {navigation.map(({ name, href }) => (
            <li key={name} className="xl:px-2">
              <Link className={navLiClass} href={href}>
                {name}
              </Link>
            </li>
          ))}
          <li className="mt-8 lg:hidden">
            <Link className={navLiClass} href={`tel:${phoneNumber}`}>
              {formatNumber(phoneNumber)}
            </Link>
          </li>
        </ul>
        <div className="lg:block hidden">
          <Link className={navLiClass} href={`tel:${phoneNumber}`}>
            {formatNumber(phoneNumber)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
