import classNames from "classnames";
import { FC, useState } from "react";
import Image from "next/image";
import CircleButton from "./CircleButton";

const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="container relative w-full h-[720px]">
      {[1, 2, 3].map((n, i) => (
        <Image
          key={n}
          className={classNames({
            "absolute transition-opacity duration-500": true,
            "opacity-0": currentSlide !== n,
          })}
          fill
          objectFit="cover"
          priority={i === 0}
          src={`/wielmi-${n}.png`}
          alt="hero"
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        <ul></ul>
        <ul className="flex items-center justify-between w-64">
          {[1, 2, 3].map((n) => (
            <li key={n}>
              <CircleButton onClick={() => setCurrentSlide(n)} isActive={currentSlide === n} text={n.toString()} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
