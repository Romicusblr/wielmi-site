import type { FC } from "react";
import Link from "next/link";

const navigation = [
  { name: "Główna", href: "#", current: true },
  { name: "Inteligentny dom", href: "#", current: false },
  { name: "Instalacje elektryczne", href: "#", current: false },
  { name: "Sieci lokalne", href: "#", current: false },
  { name: "Współpraca", href: "#", current: false },
  { name: "O nas", href: "#", current: false },
];

const NavBar: FC = function () {
  return (
    <div className="w-full sticky top-0 z-10 bg-gray-200">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl my-4">WIELMI</h2>
        <hr className="h-px bg-gray-500 border-0 self-stretch" />
        <nav className="flex justify-between">
          {navigation.map(({ name, href }) => {
            return (
              <Link className="mt-4 mx-8" href={href} key={name}>
                {name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
