import type { FC } from "react";
import Link from "next/link";
import Image from "next/image";

const Logo: FC = function () {
  // const theme = "light";

  return (
    <Link className="z-10 h-12 w-[10vw] fixed top-0 left-0 p-2" href="/">
      <div className="relative w-full h-full min-w-12">
        <Image alt="Logo" className="object-contain" fill src="/logo-light.png" />
      </div>
    </Link>
  );
};

export default Logo;
