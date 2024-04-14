import * as React from "react";
// import Image from "next/image";
import classNames from "classnames";
import type { FC } from "react";
import { default as Image } from "../image/placeholder";

interface CardProps {
  src: string;
  alt?: string;
  topic: string;
  texts: string[];
  reverse: boolean;
}

const Card: FC<CardProps> = function ({ topic, texts, reverse }) {
  return (
    <div className={classNames("flex mt-16", { "flex-row-reverse": reverse })}>
      <article className="max-w-md p-4">
        <h3 className="font-bold">{topic}:</h3>
        {texts.map((t, i) => (
          <p className={classNames("mt-2", { "text-slate-500": i !== 0 })} key={t}>
            {t}
          </p>
        ))}
      </article>
      <article className="max-w-md flex items-center">
        <Image
          // alt={alt}
          className={classNames({
            "mr-10": reverse,
            "ml-10": !reverse,
          })}
          height="230 px"
          // placeholder="empty"
          // src={src}
          width="620 px"
        />
      </article>
    </div>
  );
};

export default Card;
