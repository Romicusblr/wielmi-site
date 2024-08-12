import type { FC } from "react";
import Image from "next-export-optimize-images/image";
import BrandedButton from "@/ui/button";
import GridLineH from "@/ui/line-horizontal";
import SocialLinks from "@/ui/social-links";
import Link from "next/link";
import classnames from "classnames";
import { CONTACT_HASH } from "@/constants";

const Hero: FC = function () {
  const paddingLeft = "2xl:pl-60 xl:pl-48 lg:pl-36";
  return (
    <div className="relative w-full h-screen grid-layout grid-rows-6 text-dark-grey">
      <Image
        alt="cozy room"
        className="-z-10 object-cover"
        fill
        priority
        quality={100}
        src="/images/wielmi-1.png"
        sizes="100%"
      />
      <div
        className={classnames(
          paddingLeft,
          "sm:col-start-2 lg:col-end-4 row-start-3 flex flex-col items-center lg:items-stretch justify-end 2xl:text-7xl sm:text-6xl text-4xl"
        )}
      >
        <h2>PROJEKTUJEMY</h2>
        <h2>I REALIZUJEMY</h2>
      </div>
      <div className="col-span-full row-start-4 hidden sm:flex flex-col justify-center">
        <GridLineH />
      </div>
      <div className={classnames(paddingLeft, "h-12 flex justify-center lg:justify-start gap-4 sm:col-start-2 row-start-5")}>
        <SocialLinks iconClassName="h-8 w-8" />
      </div>
      <div className="h-12 flex justify-center lg:row-start-5 lg:col-start-3 sm:col-start-2 row-start-6">
        <Link href={CONTACT_HASH}>
          <BrandedButton className="px-12 sm:w-96 w-full">napisz do nas</BrandedButton>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
