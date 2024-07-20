import classNames from "classnames";
import Link from "next/link";
import type { FC } from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const SocialLinks: FC<SocialLinksProps> = function ({ className, iconClassName = "h-4 w-4" }) {
  const cls = classNames("flex justify-start gap-4", className);
  return (
    <div className={cls}>
      <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
        <FaFacebookF className={classNames(iconClassName, "text-grey")} />
      </Link>
      <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
        <FaInstagram className={classNames(iconClassName, "text-grey")} />
      </Link>
      <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
        <FaWhatsapp className={classNames(iconClassName, "text-grey")} />
      </Link>
      <Link className="bg-dark-grey hover:bg-brand rounded-full p-2" href="#">
        <FaEnvelope className={classNames(iconClassName, "text-grey")} />
      </Link>
    </div>
  );
};

export default SocialLinks;
