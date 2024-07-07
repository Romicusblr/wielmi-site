import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = function () {
  return (
    <Link className="block w-full h-full relative" href="/">
      <Image alt="Logo" fill objectFit="contain" src="/logo-light.png" />
    </Link>
  );
};

export default Logo;
