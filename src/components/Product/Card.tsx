import React from "react";

type CardProps = {
  image: string;
  title: string;
  price: string;
  description: string;
  category: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  image,
  title,
  price,
  description,
  category,
  children,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={title} className="h-40" />
      <div className="p-4">
        <h2 className="text-gray-800 text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 font-bold mb-2">${price}</p>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600 mb-2">
          <strong>Category:</strong> {category}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Card;
