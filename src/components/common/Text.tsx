// Text.tsx
import React from "react";

type TextProps = {
  text: string;
  className?: string;
};

const Text: React.FC<TextProps> = ({ text, className }) => {
  return <p className={className}>{text}</p>;
};

export default Text;
