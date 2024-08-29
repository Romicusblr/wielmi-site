import Image from "next-export-optimize-images/image";
import classNames from "classnames";
import type { FC } from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  children?: React.ReactNode;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({ className, src, alt, imgClassName, children }) => {
  return (
    <div className={classNames("relative overflow-hidden", className)}>
      <Image
        className={classNames("object-cover", imgClassName)}
        src={src}
        placeholder="blur"
        alt={alt}
        sizes="100%"
        fill
      />
      {children}
    </div>
  );
};

export default ResponsiveImage;
