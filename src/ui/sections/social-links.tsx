import classNames from "classnames";
import type { FC } from "react";
import React from "react";
import { FaEnvelope, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa6";

interface SocialLink {
  icon: JSX.Element;
  href: string;
}

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

const socialLinksData: SocialLink[] = [
  { icon: <FaFacebookF />, href: "https://www.facebook.com/wielmismart" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/wielmi.pl/" },
  { icon: <FaWhatsapp />, href: "https://wa.me/48571780770" },
  { icon: <FaEnvelope />, href: "mailto:kontakt@wielmi.pl" },
];

const SocialLinks: FC<SocialLinksProps> = ({ className, iconClassName = "h-4 w-4" }) => {
  const containerClass = classNames("flex justify-start gap-4", className);
  const linkClass = "bg-dark-grey hover:bg-brand rounded-full p-2 text-grey";

  return (
    <div className={containerClass}>
      {socialLinksData.map((link, index) => (
        <a key={index} className={linkClass} href={link.href}>
          {React.cloneElement(link.icon, { className: iconClassName })}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
