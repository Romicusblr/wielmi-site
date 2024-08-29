import type { FC } from "react";
import SocialLinks from "./social-links";
import Link from "next/link";

const Footer: FC = function () {
  return (
    <footer className="bg-grey min-h-96 grid-layout text-dark-grey">
      <div className="p-6 sm:col-start-2 flex justify-center items-center">
        <div>
          <h2 className="text-3xl underline underline-offset-8">KONTAKTY</h2>
          <p className="mt-4 text-brand">INTELIGENTNY DOM Wielmi</p>
          <p className="mt-8">Kraków, Polska</p>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="p-6 sm:col-start-2 lg:col-start-3 flex justify-center items-center">
        <div>
          <p>Godziny pracy: od 10:00 do 19:00</p>
          <p>Weekendy: sobota, niedziela</p>
          <p className="mt-4 flex justify-center">
            <a href="tel:+48571780770">+ 48 571 780 770</a>
          </p>
          <p className="mt-4 flex justify-center">
            <a href="mailto:kontakt@wielmi.pl">kontakt@wielmi.pl</a>
          </p>
          <p className="mt-4 flex justify-center">
            <Link href="/polityka-prywatnosci">Polityka Prywatności</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
