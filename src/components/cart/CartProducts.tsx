import React from 'react';

export const CartProducts: React.FC = () => {
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
        <tr>
          <td className="py-4">
            <div className="flex items-center">
              <img
                className="mr-4 h-16 w-16"
                src="https://via.placeholder.com/150"
                alt="Product image"
              />
              <span className="text-md font-semibold">Product name</span>
            </div>
          </td>
          <td className="py-4 text-md">$19.99</td>
          <td className="py-4">
            <div className="flex items-center">
              <button className="mr-2 rounded-md border px-4 py-2 text-md">
                -
              </button>
              <span className="w-8 text-center text-md">1</span>
              <button className="ml-2 rounded-md border px-4 py-2 text-md">
                +
              </button>
            </div>
          </td>
          <td className="py-4 text-md">$19.99</td>
        </tr>
      </tbody>
    </table>
  );
};
