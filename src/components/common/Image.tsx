// Image.tsx
import React from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-lg shadow-md ${className}`}
      style={{ maxWidth: "100%", height: "auto" }}
    />
  );
};

export default Image;
