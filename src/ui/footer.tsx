import Link from "next/link";
import type { FC } from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer: FC = function () {
  return (
    <footer className="bg-grey min-h-96 grid-layout text-dark-grey">
      <div className="sm:col-start-2 lg:col-end-4 flex sm:flex-row flex-col justify-between">
        <div className="flex flex-col lg:p-24 p-12 justify-center">
          <h2 className="text-3xl underline underline-offset-8">KONTAKTY</h2>
          <p className="mt-4 text-brand">INTELIGENTNY DOM Wielmi</p>
          <p className="mt-8">Kraków, Polska</p>
          <div className="flex justify-start gap-4 h-8 mt-2">
            <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
              <FaFacebookF className="h-4 w-4 text-grey" />
            </Link>
            <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
              <FaInstagram className="h-4 w-4 text-grey" />
            </Link>
            <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
              <FaWhatsapp className="h-4 w-4 text-grey" />
            </Link>
            <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
              <FaEnvelope className="h-4 w-4 text-grey" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:p-24 p-12 justify-center">
          <p>Godziny pracy: od 10:00 do 19:00</p>
          <p>Weekendy: sobota, niedziela</p>
          <p className="mt-4">
            <a href="tel:+48571780770">+ 48 571 780 770</a>
          </p>
          <p className="mt-4">
            <a href="mailto:kontakt@wielmi.pl">kontakt@wielmi.pl</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
