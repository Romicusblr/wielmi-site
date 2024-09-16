import classNames from "classnames";
import React, { ReactNode, type FC } from "react";
import ResponsiveImage from "@/ui/common/responsive-image";
import Heading from "@/ui/common/heading";

interface InfoProps {
  imageSrc: string;
  heading: ReactNode;
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
        className={classNames("lg:h-auto h-[36rem] lg:col-span-2 col-span-full", classImage)}
        imgClassName="object-right-top"
        src={imageSrc}
        // TODO: add descriptive message
        alt={"image"}
      />
      <article className={classNames("section-padding content-padding sm:col-start-2 text-xl", classArticle)}>
        <Heading title={heading} subtitles={subtitles} titleClass="!text-3xl"/>
        {article}
      </article>
    </>
  );
};

export default Info;
