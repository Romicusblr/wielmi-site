import classNames from "classnames";
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
      <a className="bg-dark-grey hover:bg-brand rounded-full p-2" href="https://www.facebook.com/wielmismart">
        <FaFacebookF className={classNames(iconClassName, "text-grey")} />
      </a>
      <a className="bg-dark-grey hover:bg-brand rounded-full p-2" href="https://www.instagram.com/wielmismart">
        <FaInstagram className={classNames(iconClassName, "text-grey")} />
      </a>
      <a className="bg-dark-grey hover:bg-brand rounded-full p-2" href="https://wa.me/48571780770">
        <FaWhatsapp className={classNames(iconClassName, "text-grey")} />
      </a>
      <a className="bg-dark-grey hover:bg-brand rounded-full p-2" href="mailto:kontakt@wielmi.pl">
        <FaEnvelope className={classNames(iconClassName, "text-grey")} />
      </a>
    </div>
  );
};

export default SocialLinks;
