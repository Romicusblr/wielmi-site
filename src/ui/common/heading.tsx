import React, { type FC } from "react";

interface HeadingProps {
  title: string;
  subtitles?: string[];
  isMain?: boolean;
  tag?: keyof JSX.IntrinsicElements;
}

const Heading: FC<HeadingProps> = ({ title, subtitles, tag }) => {
  const TitleTag = tag ?? "h1";
  return (
    <div>
      <TitleTag className="font-bold text-4xl text-left uppercase mb-8">
        <span>{title}</span>
        <div className="bg-brand h-2 w-40 mt-2"></div>
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
