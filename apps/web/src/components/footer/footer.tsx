import type { FC } from "react";
import { FaLocationDot, FaInstagram, FaPhone, FaEnvelope, FaFacebook } from "react-icons/fa6";

const Footer: FC = function () {
  return (
    <footer className="m-4 bg-gray-800 text-gray-300">
      <div className="container mx-auto p-4 flex items-center">
        <div className="flex-1">
          <b className="text">Kontakty:</b>
          <p>
            <FaPhone className="inline-block mr-2" />
            +48 571 780 770
          </p>
          <p>
            <FaEnvelope className="inline-block mr-2" />
            kontakt@wielmi.pl
          </p>
          <p>
            <FaLocationDot className="inline-block mr-2" />
            Kraków
          </p>
        </div>
        <div className="text-center flex-1">
          <span>{new Date().getFullYear()}</span>
        </div>
        <div className="flex-1 flex justify-end">
          <div>
            <p className="text-center flex-1 text-4xl mb-2">WiELMi</p>
            <p>
              <FaInstagram className="inline-block mr-2 text-2xl" />
              <FaFacebook className="inline-block mr-2 text-2xl" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
