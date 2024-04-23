import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = function () {
  // const theme = "light";

  return (
    <Link className="z-10 w-[8vw] ml-[1vw] fixed block h-12 top-0 left-0" href="/">
      <Image alt="Logo" className="object-contain mt-4" fill src="/logo-light.png" />
    </Link>
  );
};

export default Logo;
