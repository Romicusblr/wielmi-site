"use client";

import classNames from "classnames";
import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CircleButton from "./circle-button";

const slides = [
  { id: 1, text: "INTELIGENTNY DOM", src: "/wielmi-1.png" },
  { id: 2, text: "INSTALACJE ELEKTRYCZNE", src: "/wielmi-2.png" },
  { id: 3, text: "SIECI LOKALNE", src: "/wielmi-3.png" },
];

const Hero: FC = function () {
  const [currentSlide, setCurrentSlide] = useState(slides[0].id);

  return (
    <div className="relative w-full h-screen text-gray-100 grid lg:grid-cols-[10vw_1fr_1fr_10vw] sm:grid-cols-[10vw_1fr_10vw]">
      {slides.map(({ id, src }, i) => (
        <Image
          alt="cozy room"
          className={classNames("z-0 absolute object-cover transition-opacity duration-1000 brightness-[.5]", {
            "opacity-0": currentSlide !== id,
          })}
          fill
          key={id}
          priority={i === 0}
          src={src}
        />
      ))}
      <div className="z-10 flex flex-col place-content-center sm:col-start-2">
        <ul className="p-12 text-4xl w-full">
          {slides.map(({ id, text }) => {
            const isActive = currentSlide === id;
            return (
              <li
                className={classNames("text-3xl mb-4 flex justify-between", {
                  "text-gray-100/50": !isActive,
                  "text-gray-100/100": isActive,
                })}
                key={id}
              >
                <Link
                  href="#"
                  onClick={() => {
                    setCurrentSlide(id);
                  }}
                  scroll={false}
                >
                  {text}
                </Link>
                {/* <Link
                    className={classNames({
                      "text-sm rounded-full border px-4 py-2": true,
                      hidden: !isActive,
                    })}
                    href="#"
                  >
                    Więcej
                  </Link> */}
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-around">
          {slides.map(({ id }) => (
            <li key={id}>
              <CircleButton
                isActive={currentSlide === id}
                onClick={() => {
                  setCurrentSlide(id);
                }}
                text={id.toString()}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
