import type { FC } from "react";
import Image from 'next-export-optimize-images/image'
import BrandedButton from "@/ui/button";
import GridLineH from "@/ui/line-horizontal";
import SocialLinks from "@/ui/social-links";

const Hero: FC = function () {
  return (
    <div className="relative w-full h-screen grid-layout grid-rows-6 text-dark-grey">
      <Image alt="cozy room" className="-z-10 object-cover" fill priority quality={100} src="/wielmi-1.png" sizes="100%"/>
      <div className="sm:col-start-2 lg:col-end-4 row-start-3 flex flex-col justify-end mx-auto lg:pr-72 sm:text-5xl lg:text-6xl text-4xl">
        <h2>PROJEKTUJEMY</h2>
        <h2>I REALIZUJEMY</h2>
      </div>
      <div className="col-span-full row-start-4 hidden sm:flex flex-col justify-center">
        <GridLineH />
      </div>
      <div className="h-12 flex justify-center gap-4 sm:col-start-2 row-start-5">
        <SocialLinks iconClassName="h-8 w-8" />
      </div>
      <div className="h-12 flex justify-center lg:row-start-5 lg:col-start-3 sm:col-start-2 row-start-6">
        <BrandedButton className="px-12">napisz do nas</BrandedButton>
      </div>
    </div>
  );
};

export default Hero;
