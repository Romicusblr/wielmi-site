import type { FC } from "react";
import Image from "next-export-optimize-images/image";
import BrandedButton from "@/ui/common/button";
import { GridLineH } from "@/ui/sections/grid-lines";
import SocialLinks from "@/ui/sections/social-links";
import Link from "next/link";
import classnames from "classnames";
import { CONTACT_HASH } from "@/constants";
import { Inter } from "next/font/google";

const font = Inter({ subsets: ["latin", "latin-ext"] });

const Hero: FC = function () {
  const paddingLeft = "2xl:pl-60 xl:pl-48 lg:pl-36";
  return (
    <div className="relative w-full h-screen grid-layout grid-rows-6 text-dark-grey -mt-20">
      <Image
        alt="cozy room"
        className="-z-10 object-cover brightness-[0.5] contrast-[.75]"
        fill
        priority
        quality={100}
        src="/images/hero-bg.png"
        sizes="100%"
      />

      <div className="col-span-full row-start-4 hidden sm:flex flex-col justify-center">
        <GridLineH />
      </div>
      <div className={classnames("h-16 flex justify-center items-center gap-4 sm:col-start-2 row-start-5")}>
        <div className="relative">
          <div className={classnames(font.className, "2xl:text-7xl sm:text-6xl text-4xl absolute lg:left-0 -top-72 font-[500] tracking-wider")}>
            <h2>PROJEKTUJEMY</h2>
            <h2>I REALIZUJEMY</h2>
          </div>
          <SocialLinks iconClassName="h-8 w-8" />
        </div>
      </div>
      <div className="h-16 flex justify-center lg:row-start-5 lg:col-start-3 sm:col-start-2 row-start-6">
        <Link href={CONTACT_HASH}>
          <BrandedButton className="px-12 sm:w-96 w-full">napisz do nas</BrandedButton>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
