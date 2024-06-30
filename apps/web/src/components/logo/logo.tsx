import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = function () {
  return (
    <Link className="h-12 m-4 relative" href="/">
      <Image alt="Logo" className="object-contain" fill src="/logo-light.png" />
    </Link>
  );
};

export default Logo;
