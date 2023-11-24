import React from 'react';
import { Button } from '..';

export interface ProductCardProps {
  imageSrc: string;
  title: string;
  description: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  price,
  title,
  description,
}) => {
  return (
    <div className="mx-auto mt-11 h-full w-full transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-default duration-300 hover:scale-105">
      <img
        className="h-48 w-full object-cover object-center"
        src={imageSrc}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-gray-900 mb-2 text-lg font-medium dark:text-white">
          {title}
        </h2>
        <p className="text-base dark:text-gray-300 text-gray-700 mb-2">
          {description}
        </p>
        <div className="flex items-center">
          <p className="text-gray-900 mr-2 text-lg font-semibold dark:text-white">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
      <Button variant="primary" size="small" className="m-4 mt-auto">
        Add to Cart
      </Button>
    </div>
  );
};
