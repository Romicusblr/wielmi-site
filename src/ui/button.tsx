import type { ButtonHTMLAttributes } from "react";
import React from "react";
import classNames from "classnames";

interface BrandedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const BrandedButton: React.FC<BrandedButtonProps> = function ({ children, className, ...props }) {
  const defaultClasses = "rounded-lg text-xl text-center p-4 border-4 border-brand hover:bg-brand hover:text-dark-grey";
  const buttonClasses = classNames(defaultClasses, className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default BrandedButton;
