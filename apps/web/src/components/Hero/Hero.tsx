import classNames from "classnames";
import { FC, useState } from "react";
import Image from "next/image";
import CircleButton from "./CircleButton";
import Link from "next/link";

const slides = [
  { id: 1, text: "INTELIGENTNY DOM", src: "/wielmi-1.png" },
  { id: 2, text: "INSTALACJE ELEKTRYCZNE", src: "/wielmi-2.png" },
  { id: 3, text: "SIECI LOKALNE", src: "/wielmi-3.png" },
];

const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(slides[0].id);

  return (
    <div className="container relative w-full h-[720px]">
      {slides.map(({ id, src }, i) => (
        <Image
          key={id}
          className={classNames({
            "absolute object-cover transition-opacity duration-500 brightness-[.5]": true,
            "opacity-0": currentSlide !== id,
          })}
          fill
          priority={i === 0}
          src={src}
          alt="cozy room"
        />
      ))}
      <div className="absolute inset-0 flex flex-col pl-36">
        <div className="flex flex-col items-center mb-32 mt-8">
          <h1 className="text-4xl">WIELMI</h1>
          <h2>Inteligentny dom</h2>
        </div>
        <ul className="text-4xl mb-8 w-1/2">
          {slides.map(({ id, text }) => {
            const isActive = currentSlide === id;
            return (
              <li
                className={classNames({
                  "text-3xl mb-4 flex justify-between": true,
                  "text-gray-100/50": !isActive,
                  "text-gray-100/100": isActive,
                })}
                key={id}
              >
                <Link onClick={() => setCurrentSlide(id)} href="#" scroll={false}>
                  {text}
                </Link>
                <Link
                  className={classNames({
                    "text-sm rounded-full border px-4 py-2": true,
                    "hidden": !isActive,
                  })}
                  href="#"
                >
                  Więcej
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="flex items-center justify-between w-1/4">
          {slides.map(({ id }) => (
            <li key={id}>
              <CircleButton onClick={() => setCurrentSlide(id)} isActive={currentSlide === id} text={id.toString()} />
            </li>
          ))}
        </ul>
        <div className="self-end w-1/2 px-16">
          <h3 className="mb-4">Dlaczego Wielmi?</h3>
          <p>
            Zadbamy o wszystko za Ciebie. Nie musisz się o nic martwić. Nasi specjaliści zainstalują Twój system,
            aktywują go i pokażą, jak z niego korzystać
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
