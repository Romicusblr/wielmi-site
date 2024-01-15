import classNames from "classnames";
import type { FC } from "react";

interface CircleButtonProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
  className?: string;
}

const CircleButton: FC<CircleButtonProps> = ({ isActive, text, onClick, className }) => {
  const buttonClass = classNames({
    className,
    "bg-white text-gray-800": isActive,
    "bg-transparent text-white": !isActive,
    "font-bold py-2 px-4 rounded-full transition ease-in-out duration-300 border border-white": true,
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default CircleButton;
