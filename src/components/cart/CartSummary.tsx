import { useCart } from '@/contexts';
import { useCartSummary } from '@/hooks';
import React from 'react';

export const CartSummary: React.FC = () => {
  const { cartProducts } = useCart();
  const { shippingRate, subtotal, taxes, total } = useCartSummary(cartProducts);

  return (
    <div className="shadow-md rounded-lg bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold">Summary</h2>
      <div className="mb-2 flex justify-between text-md">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="mb-2 flex justify-between text-md">
        <span>Taxes</span>
        <span>${taxes.toFixed(2)}</span>
      </div>
      <div className="mb-2 flex justify-between text-md">
        <span>Shipping</span>
        <span>${shippingRate.toFixed(2)}</span>
      </div>
      <hr className="my-2" />
      <div className="mb-2 flex justify-between text-lg">
        <span className="font-semibold">Total</span>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
