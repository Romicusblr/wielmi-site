"use client";
import Image from "next/image";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";

interface BoxButtonProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
}

const BoxButton: FC<BoxButtonProps> = ({ isActive, text, onClick }) => {
  const buttonClass = classNames({
    "bg-white text-gray-800": isActive,
    "bg-transparent text-white": !isActive,
    "font-bold py-2 px-4 rounded-full transition ease-in-out duration-300 border border-white": true,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

export default function Page(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [nextSlide, setNextSlide] = useState<number | null>(null);

  useEffect(() => {
    if (nextSlide !== null) {
      const timer = setTimeout(() => {
        setCurrentSlide(nextSlide);
        setNextSlide(null);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [nextSlide]);

  const handleChangeSlide = (newSlide: number) => () => {
    setNextSlide(newSlide);
  };

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <ul className="flex items-center justify-between w-64">
        {[1, 2, 3].map((n) => (
          <li key={n}>
            <BoxButton onClick={handleChangeSlide(n)} isActive={currentSlide === n} text={n.toString()} />
          </li>
        ))}
      </ul>
      <div className="relative w-full h-full">
        <div
          className={classNames("absolute inset-0 transition-opacity duration-500", {
            "opacity-0": nextSlide !== null,
          })}
        >
          <Image width={1792} height={1024} priority={true} src={`/wielmi-${currentSlide}.png`} alt="hero" />
        </div>
        {nextSlide !== null && (
          <div className="absolute inset-0 transition-opacity duration-500 opacity-0">
            <Image
              width={1792}
              height={1024}
              priority={true}
              src={`/wielmi-${nextSlide}.png`}
              alt="hero"
            />
          </div>
        )}
      </div>
    </main>
  );
}
