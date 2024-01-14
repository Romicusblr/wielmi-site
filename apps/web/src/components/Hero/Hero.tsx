import classNames from "classnames";
import { FC, useState } from "react";
import Image from "next/image";
import BoxButton from "./BoxButton";

const Hero: FC = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <div className="container relative w-full">
      {[1, 2, 3].map((n) => (
        <div
          key={n}
          className={classNames({
            "absolute transition-opacity duration-500": true,
            "opacity-0": currentSlide !== n,
          })}
        >
          <Image objectFit="cover" width={1792} height={1024} priority={true} src={`/wielmi-${n}.png`} alt="hero" />
        </div>
      ))}
      <div className="absolute"></div>
      <ul className="absolute top-1/2 flex items-center justify-between w-64">
        {[1, 2, 3].map((n) => (
          <li key={n}>
            <BoxButton onClick={() => setCurrentSlide(n)} isActive={currentSlide === n} text={n.toString()} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
