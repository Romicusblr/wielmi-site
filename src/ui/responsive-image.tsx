import Image from "next/image";
import classNames from "classnames";
import type { FC } from "react";

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}
const ResponsiveImage: FC<ResponsiveImageProps> = ({ className, src, alt }) => {
  return (
    <div className={classNames("relative overflow-hidden", className)}>
      <Image
        className={classNames("object-cover", className)}
        src={src} // Replace with your image path
        alt={alt}
        fill
      />
    </div>
  );
};

export default ResponsiveImage;
