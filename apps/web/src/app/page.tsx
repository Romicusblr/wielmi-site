"use client";
import classNames from "classnames";
import React, { FC, useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";


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
      <Hero />
    </main>
  );
}
