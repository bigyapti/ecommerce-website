// Input.tsx
import React, { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ className, ...rest }) => {
  let inputClasses =
    "px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  if (className) {
    inputClasses += ` ${className}`;
  }

  return <input className={inputClasses} {...rest} />;
};

export default Input;
