import * as React from 'react';
import Image from "next/image";
import classNames from "classnames";
import type { FC } from 'react';

interface CardProps {
  src: string;
  alt: string;
  topic: string;
  text: string;
  reverse: boolean;
}

const Card: FC<CardProps> = function ({ src, alt, topic, text, reverse }) {
  return (
    <div className={classNames("flex mt-16", { "flex-row-reverse": reverse })}>
      <div className="">
        <p className="mb-3">
          <b>{topic}:&nbsp;</b>
          {text}
        </p>
      </div>
      <Image
        alt={alt}
        className={classNames("object-cover w-48 rounded-tr-[4rem] rounded-bl-[4rem]", { "mr-4": reverse, "ml-4": !reverse })}
        height={400}
        placeholder="empty"
        src={src}
        width={600}
      />
    </div>
  );
};

export default Card;
