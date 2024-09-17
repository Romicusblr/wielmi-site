"use client";
import { useEffect, useState, type FC } from "react";
import { throttle } from "lodash";
import { usePathname } from "next/navigation";
import Link from "next/link";
import classNames from "classnames";
import { PHONENUMBER } from "@/constants";
import Logo from "@/ui/common/logo";
import MenuButton from "@/ui/common/menu-button";

const navigation = [
  { name: "Inteligentny Dom", href: "/inteligentny-dom/" },
  { name: "Instalacje Elektryczne", href: "/instalacje-elektryczne/" },
  { name: "Sieci Lokalne", href: "/sieci-lokalne/" },
  { name: "Współpraca", href: "/wspolpraca/" },
  { name: "O Nas", href: "/o-nas/" },
  { name: "Kontakt", href: "/kontakt/" },
];

export function formatNumber(phoneNumber: string) {
  return phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{3})/, "$1 $2 $3 $4");
}

const NavBar: FC = function () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (): void => {
    setIsOpen(!isOpen);
  };

  const close = (): void => {
    setIsOpen(false);
  };

  const THRESHOLD = 100; // px
  const THROTTLE_THRESHOLD = 100; // ms
  const [isTop, setIsTop] = useState(false);
  const path = usePathname();
  useEffect(() => {
    if (path === "/") {
      const scroll = throttle(() => {
        const { scrollY } = window;
        setIsTop(scrollY < THRESHOLD);
      }, THROTTLE_THRESHOLD);
      document.addEventListener("scroll", scroll);
      scroll();
      return () => document.removeEventListener("scroll", scroll);
    } else {
      setIsTop(false);
    }
  }, [path]);

  const navLiClass =
    "whitespace-nowrap flex justify-center lg:justify-end p-2 lg:p-2 hover:text-brand hover:underline underline-offset-8 hover:scale-105 transform transition duration-150 ease-in-out";
  return (
    <nav
      className={classNames(
        "h-20 p-2 fixed z-30 w-full text-dark-grey bg-grey px-8 sm:px-0 transition-all duration-500",
        isTop && "bg-opacity-0",
        isOpen && "bg-[#242424] bg-opacity-100 h-auto"
      )}
    >
      <div className="grid-layout items-center">
        <div className="flex items-center lg:justify-center justify-between col-span-full lg:col-span-1 min-w-[350px]">
          <div className="h-12 w-24 sm:w-[10vw] p-2">
            <Logo />
          </div>
          <div className="h-12 w-20 sm:w-[10vw] grid place-items-center lg:hidden sm:col-start-3">
            <MenuButton onClick={toggleOpen} />
          </div>
        </div>
        <ul
          onClick={close}
          className={classNames(
            "flex-col p-0 text-2xl h-[100vh] justify-center col-span-full",
            "lg:h-auto lg:text-base lg:flex lg:flex-row lg:justify-center lg:col-span-2",
            isOpen ? "flex uppercase" : "hidden"
          )}
        >
          {navigation.map(({ name, href }) => (
            <li key={name} className="xl:px-2">
              <Link className={classNames(navLiClass, path === href && 'text-brand')} href={href} >
                {name}
              </Link>
            </li>
          ))}
          <li className="mt-16 lg:hidden">
            <Link className={navLiClass} href={`tel:${PHONENUMBER}`}>
              {formatNumber(PHONENUMBER)}
            </Link>
          </li>
        </ul>
        <div className="lg:flex lg:justify-end xl:justify-center hidden">
          <Link className={navLiClass} href={`tel:${PHONENUMBER}`}>
            {formatNumber(PHONENUMBER)}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
