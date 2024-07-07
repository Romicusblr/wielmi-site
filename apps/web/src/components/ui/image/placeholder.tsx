import classNames from "classnames";
import type { FC } from "react";

interface ImagePlaceholderProps {
  width: string;
  height: string;
  className?: string;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = function ({ width, height, className }) {
  const cls = classNames(className, {
    "flex justify-items-center": true,
  });
  return (
    <div
      className={cls}
      style={{
        width,
        height,
        backgroundColor: "#e0e0e0",
      }}
    >
      <span>Placeholder</span>
    </div>
  );
};

export default ImagePlaceholder;
