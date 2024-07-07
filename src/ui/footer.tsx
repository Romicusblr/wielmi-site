import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { FC } from "react";

const Footer: FC = function () {
  return (
    <footer className="bg-grey h-96 grid-layout text-dark-grey">
      <div className="col-start-2 flex flex-col lg:p-24 justify-center">
        <h2 className="text-3xl underline underline-offset-8">KONTAKTY</h2>
        <p className="mt-4 text-brand">INTELIGENTNY DOM Wielmi</p>
        <p className="mt-8">Kraków, Polska</p>
        <div className="flex justify-start gap-4 col-start-2 h-8 row-start-5 mt-2">
          <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
            <FontAwesomeIcon className="h-4 w-4 text-grey" icon={faFacebookF} />
          </Link>
          <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
            <FontAwesomeIcon className="h-4 w-4 text-grey" icon={faInstagram} />
          </Link>
          <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
            <FontAwesomeIcon className="h-4 w-4 text-grey" icon={faWhatsapp} />
          </Link>
          <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
            <FontAwesomeIcon className="h-4 w-4 text-grey" icon={faEnvelope} />
          </Link>
        </div>
      </div>
      <div className="col-start-3 flex flex-col lg:p-24 justify-center">
        <p>Godziny pracy: od 10:00 do 19:00</p>
        <p>Weekendy: sobota, niedziela</p>
        <p className="text-center mt-4"><a href="tel:+48571780770">+ 48 571 780 770</a></p>
        <p className="text-center mt-4"><a href="mailto:kontakt@wielmi.pl">kontakt@wielmi.pl</a></p>
      </div>
    </footer>
  );
};

export default Footer;
