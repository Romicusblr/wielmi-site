import type { FC } from "react";

interface MenuButtonProps {
  onClick: () => void;
}

const MenuButton: FC<MenuButtonProps> = function ({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
    >
      <span className="sr-only">Open main menu</span>
      <svg className="w-8 h-8" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 1h15M1 7h15M1 13h15"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
