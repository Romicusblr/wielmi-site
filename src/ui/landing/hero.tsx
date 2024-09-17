import type { FC } from "react";
import Image from "next-export-optimize-images/image";
import BrandedButton from "@/ui/common/button";
import { GridLineH } from "@/ui/sections/grid-lines";
import SocialLinks from "@/ui/sections/social-links";
import Link from "next/link";
import classnames from "classnames";
import { CONTACT_HASH, LANDING_DESCRIPTION } from "@/constants";
import { Inter } from "next/font/google";
import ArrowDown from "../common/arrow-down";

const font = Inter({ subsets: ["latin", "latin-ext"] });

const Hero: FC = function () {
  return (
    <div className="relative w-full h-screen section grid-rows-12 text-dark-grey -mt-20">
      <Image
        alt="cozy room"
        className="-z-10 object-cover brightness-[0.5] contrast-[.75]"
        fill
        priority
        quality={100}
        src="/images/hero-bg.png"
        sizes="100%"
      />

      <div
        className={classnames(
          font.className,
          "col-span-full text-4xl font-[500] tracking-wider lg:hidden row-start-6 flex flex-col justify-end items-center"
        )}
      >
        <h2>PROJEKTUJEMY</h2>
        <h2>I REALIZUJEMY</h2>
      </div>

      <div className="col-span-full row-start-7 flex flex-col justify-center">
        <GridLineH />
      </div>
      <div className="h-16 hidden lg:flex justify-center items-center gap-4 sm:col-start-2 row-start-10 lg:row-start-8">
        <div className="relative">
          <div
            className={classnames(
              font.className,
              "lg:text-7xl sm:text-5xl absolute left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none lg:-top-80 -top-48 font-[500] tracking-wider"
            )}
          >
            <h2>PROJEKTUJEMY</h2>
            <h2>I REALIZUJEMY</h2>
          </div>
          <SocialLinks iconClassName="h-8 w-8" />
        </div>
      </div>
      <div className="h-16 flex justify-center lg:col-start-3 sm:col-start-2 row-start-8 px-12">
        <Link className="w-full flex place-content-center" href={CONTACT_HASH}>
          <BrandedButton className="px-12 w-full lg:max-w-[416px] max-w-[320px]">napisz do nas</BrandedButton>
        </Link>
      </div>
      <div className="row-start-11 col-span-full grid place-content-center z-10">
        <Link href={`#${LANDING_DESCRIPTION}`}>
          <ArrowDown />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
