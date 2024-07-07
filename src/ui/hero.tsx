import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrandedButton from "./button";

const Hero: FC = function () {
  return (
    <div className="relative w-full h-screen grid-layout grid-rows-6 text-dark-grey">
      <Image
        alt="cozy room"
        className="-z-10 object-cover"
        fill
        priority
        quality={100}
        src="/wielmi-1.png"
      />
      <div className="text-6xl col-span-2 col-start-2 row-start-3 flex flex-col lg:pl-36 justify-end">
        <h2>PROJEKTUJEMY</h2>
        <h2>I REALIZUJEMY</h2>
      </div>
      <div className="col-span-full row-start-4 hidden sm:flex flex-col justify-center">
        <hr />
      </div>
      <div className="flex justify-center gap-4 col-start-2 h-12 row-start-5">
        <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
          <FontAwesomeIcon className="h-8 w-8 text-grey" icon={faFacebookF} />
        </Link>
        <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
          <FontAwesomeIcon className="h-8 w-8 text-grey" icon={faInstagram} />
        </Link>
        <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
          <FontAwesomeIcon className="h-8 w-8 text-grey" icon={faWhatsapp} />
        </Link>
        <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
          <FontAwesomeIcon className="h-8 w-8 text-grey" icon={faEnvelope} />
        </Link>
      </div>
      <div className="flex h-12 justify-center lg:row-start-5 lg:col-start-3 col-start-2 row-start-6">
        <BrandedButton className="px-12">napisz do nas</BrandedButton>
      </div>
    </div>
  );
};

export default Hero;
