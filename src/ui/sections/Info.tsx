import classNames from "classnames";
import React, { type FC } from "react";
import ResponsiveImage from "@/ui/common/responsive-image";
import Heading from "@/ui/common/heading";

interface InfoProps {
  imageSrc: string;
  heading: string;
  article: JSX.Element;
  subtitles?: string[];
  reverse?: boolean;
}

const Info: FC<InfoProps> = function ({ imageSrc, heading, article, reverse, subtitles }) {
  const classImage = reverse ? "lg:col-start-3" : "";
  const classArticle = reverse ? "lg:col-start-2" : "lg:col-start-3";

  return (
    <>
      <ResponsiveImage
        className={classNames("lg:h-[48rem] h-[36rem] lg:col-span-2 col-span-full", classImage)}
        imgClassName="object-right-top"
        src={imageSrc}
        alt={heading}
      />
      <article className={classNames("px-12 py-20 lg:col-start-2 sm:col-start-2", classArticle)}>
        <Heading title={heading} subtitles={subtitles} />
        {article}
      </article>
    </>
  );
};

export default Info;
