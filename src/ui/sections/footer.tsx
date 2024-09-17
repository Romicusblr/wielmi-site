import type { FC } from "react";
import SocialLinks from "./social-links";
import Link from "next/link";
import { GridLineH } from "./grid-lines";
import Heading from "../common/heading";
import Logo from "@/ui/common/logo";

const Footer: FC = function () {
  return (
    <footer className="bg-grey text-dark-grey">
      <div className="section">
        <div className="content-left-half flex flex-col items-center lg:items-start">
          <Heading title="KONTAKTY" titleClass="!text-4xl font-normal lg:block flex flex-col items-center" />
          <p className="text-brand tracking-[0.1em] text-xl -mt-4">INTELIGENTNY DOM Wielmi</p>
          <p className="mt-8 text-3xl">Kraków, Polska</p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
        <div className="content-right-half flex justify-center lg:justify-start items-end text-xl">
          <div>
            <p className="text-center sm:text-left">Godziny pracy: 
              <br className="sm:hidden"/>
              od 9:00 do 20:00</p>
            <p className="text-center lg:text-start">Weekendy: sobota, niedziela</p>
            <p className="mt-4 flex justify-center lg:justify-start">
              <a href="tel:+48571780770">+ 48 571 780 770</a>
            </p>
            <p className="mt-4 flex justify-center lg:justify-start">
              <a href="mailto:kontakt@wielmi.pl">kontakt@wielmi.pl</a>
            </p>
          </div>
        </div>
      </div>
      <GridLineH />
      <div className="section py-4">
        <div className="p-2">
          <Logo />
        </div>
        <div className="content-right-half flex justify-center lg:justify-start items-center uppercase tracking-[0.05em] m-0">
          <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
