import Link from "next/link";
import type { FC } from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const SocialMedia: FC = function () {
  return (
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
  );
};

export default SocialMedia;
