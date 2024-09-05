import classNames from "classnames";
import React, { ReactNode, type FC } from "react";

interface HeadingProps {
  title: ReactNode;
  titleClass?: string;
  subtitles?: string[];
  isMain?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

const Heading: FC<HeadingProps> = ({ title, titleClass, subtitles, tag }) => {
  const TitleTag = tag ?? "h1";
  return (
    <div>
      <TitleTag className={classNames("font-medium text-3xl sm:text-5xl text-left mb-8", titleClass)}>
        <span>{title}</span>
        <div className="bg-brand h-2 w-24 mt-2"></div>
      </TitleTag>
      {subtitles?.map((subtitle, index) => (
        <h2 key={index} className="text-2xl font-light">
          {subtitle}
        </h2>
      ))}
    </div>
  );
};

export default Heading;
