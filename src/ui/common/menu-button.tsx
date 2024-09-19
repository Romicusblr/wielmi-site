import type { FC } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

interface MenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const MenuButton: FC<MenuButtonProps> = function ({ onClick, isOpen }) {
  return (
    <button onClick={onClick} type="button">
      <span className="sr-only">Open main menu</span>
      {isOpen ? <RxCross1 size={50} className="text-brand"/> : <RxHamburgerMenu size={50} />}
    </button>
  );
};

export default MenuButton;
