import type { FC } from "react";
import Link from "next/link";
import Image from "next-export-optimize-images/image";

const Logo: FC = function () {
  return (
    <Link className="block w-full h-[42px] relative" href="/">
      <Image alt="Logo" className="object-contain" fill src="/images/logo-light.png" sizes="100%" />
    </Link>
  );
};

export default Logo;
