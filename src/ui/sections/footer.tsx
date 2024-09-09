import type { FC } from "react";
import SocialLinks from "./social-links";
import Link from "next/link";
import { GridLineH } from "./grid-lines";
import Heading from "../common/heading";
import Logo from "@/ui/common/logo";

const Footer: FC = function () {
  return (
    <footer className="bg-grey min-h-96 grid-layout text-dark-grey">
      <div className="sm:col-start-2 flex lg:justify-start justify-center items-center p-12">
        <div className="flex flex-col items-center lg:block">
          <Heading title="KONTAKTY" titleClass="!text-4xl font-normal lg:block flex flex-col items-center" />
          <p className="text-brand tracking-[0.1em] text-xl -mt-4">INTELIGENTNY DOM Wielmi</p>
          <p className="mt-8 text-3xl">Kraków, Polska</p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="p-12 sm:col-start-2 lg:col-start-3 flex justify-center items-end text-xl">
        <div>
          <p>Godziny pracy: od 10:00 do 19:00</p>
          <p className="text-center lg:text-start">Weekendy: sobota, niedziela</p>
          <p className="mt-4 flex justify-center lg:justify-start">
            <a href="tel:+48571780770">+ 48 571 780 770</a>
          </p>
          <p className="mt-4 flex justify-center lg:justify-start">
            <a href="mailto:kontakt@wielmi.pl">kontakt@wielmi.pl</a>
          </p>
        </div>
      </div>
      <GridLineH className="col-span-full" />
      <div className="p-2">
        <Logo />
      </div>
      <div className="sm:col-start-2 lg:col-start-3 p-4">
        <p className="flex justify-center uppercase tracking-[0.05em]">
          <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
