import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}
const Button = ({ onClick, className, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} relative overflow-hidden group px-5 bg-primary-100 py-2 rounded-md`}
    >
      <span className="relative z-10 font-semibold text-white group-hover:text-black duration-500 ease-in-out">
        {children}
      </span>
      <span className="absolute inset-0 bg-primary-200 text-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
    </button>
  );
};

export default Button;
