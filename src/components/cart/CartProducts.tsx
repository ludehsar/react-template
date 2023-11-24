import { useCart } from '@/contexts';
import React from 'react';

export const CartProducts: React.FC = () => {
  const { cartProducts, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-left text-lg font-semibold">Product</th>
          <th className="text-left text-lg font-semibold">Price</th>
          <th className="text-left text-lg font-semibold">Quantity</th>
          <th className="text-left text-lg font-semibold">Total</th>
        </tr>
      </thead>
      <tbody>
        {cartProducts.map((product) => (
          <tr key={product.product.id}>
            <td className="py-4">
              <div className="flex items-center">
                <img
                  className="mr-4 h-16 w-16"
                  src={product.product.image}
                  alt={product.product.title}
                />
                <span className="text-md font-semibold">
                  {product.product.title}
                </span>
              </div>
            </td>
            <td className="py-4 text-md">
              ${product.product.price.toFixed(2)}
            </td>
            <td className="py-4">
              <div className="flex items-center">
                <button
                  className="mr-2 rounded-md border px-4 py-2 text-md"
                  onClick={() => decreaseQuantity(product.product.id)}
                >
                  -
                </button>
                <span className="w-8 text-center text-md">
                  {product.quantity}
                </span>
                <button
                  className="ml-2 rounded-md border px-4 py-2 text-md"
                  onClick={() => increaseQuantity(product.product.id)}
                >
                  +
                </button>
              </div>
            </td>
            <td className="py-4 text-md">
              ${(product.product.price * product.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
