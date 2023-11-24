import React from 'react';

export const CartSummary: React.FC = () => {
  return (
    <div className="shadow-md rounded-lg bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold">Summary</h2>
      <div className="mb-2 flex justify-between text-md">
        <span>Subtotal</span>
        <span>$19.99</span>
      </div>
      <div className="mb-2 flex justify-between text-md">
        <span>Taxes</span>
        <span>$1.99</span>
      </div>
      <div className="mb-2 flex justify-between text-md">
        <span>Shipping</span>
        <span>$0.00</span>
      </div>
      <hr className="my-2" />
      <div className="mb-2 flex justify-between text-lg">
        <span className="font-semibold">Total</span>
        <span className="font-bold">$21.98</span>
      </div>
      <button className="bg-blue-500 mt-4 w-full rounded-lg px-4 py-2 text-white">
        Checkout
      </button>
    </div>
  );
};
