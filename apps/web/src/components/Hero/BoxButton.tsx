import classNames from "classnames";
import { FC } from "react";

interface BoxButtonProps {
  isActive: boolean;
  text: string;
  onClick: () => void;
  className?: string;
}

const BoxButton: FC<BoxButtonProps> = ({ isActive, text, onClick, className }) => {
  const buttonClass = classNames({
    className,
    "bg-white text-gray-800": isActive,
    "bg-transparent text-white": !isActive,
    "z-10 font-bold py-2 px-4 rounded-full transition ease-in-out duration-300 border border-white": true,
  });

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

export default BoxButton;
