import type { FC } from "react";
import Link from "next/link";
import Image from "next-export-optimize-images/image";

const Logo: FC = function () {
  return (
    <Link className="block w-full h-full relative" href="/">
      <Image alt="Logo" className="object-contain" fill src="/logo-light.png" sizes="100%" />
    </Link>
  );
};

export default Logo;
