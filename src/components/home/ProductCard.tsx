import React from 'react';
import { Button } from '..';
import { useCart } from '@/contexts';
import { ProductApiData } from '@/types';

export const ProductCard: React.FC<ProductApiData> = (product) => {
  const { addToCart, cartProducts } = useCart();

  return (
    <div className="mx-auto mt-11 h-full w-full transform overflow-hidden rounded-lg bg-white shadow-default duration-300 hover:scale-105">
      <img
        className="h-48 w-full object-cover object-center"
        src={product.image}
        alt={product.title}
      />
      <div className="p-4">
        <h2 className="text-gray-900 mb-2 text-lg font-medium dark:text-white">
          {product.title}
        </h2>
        <p className="text-base dark:text-gray-300 text-gray-700 mb-2">
          {product.description}
        </p>
        <div className="flex items-center">
          <p className="text-gray-900 mr-2 text-lg font-semibold dark:text-white">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
      {cartProducts.find((p) => p.product.id === product.id) ? (
        <Button
          variant="secondary"
          size="small"
          className="m-4 mt-auto"
          disabled
        >
          Added
        </Button>
      ) : (
        <Button
          variant="primary"
          size="small"
          className="m-4 mt-auto"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      )}
    </div>
  );
};
