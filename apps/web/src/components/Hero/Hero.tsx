import classNames from "classnames";
import { FC, useState } from "react";
import Image from "next/image";
import CircleButton from "./CircleButton";

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
            "absolute object-cover transition-opacity duration-500": true,
            "opacity-0": currentSlide !== id,
          })}
          fill
          priority={i === 0}
          src={src}
          alt="cozy room"
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <ul>
          {slides.map(({ id, text }) => (
            <li key={id}>{text}</li>
          ))}
        </ul>
        <ul className="flex items-center justify-between w-64">
          {slides.map(({ id }) => (
            <li key={id}>
              <CircleButton onClick={() => setCurrentSlide(id)} isActive={currentSlide === id} text={id.toString()} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
