import { SingleCartProduct } from '@/contexts';
import { useEffect, useState } from 'react';

export const useCartSummary = (cartProducts: SingleCartProduct[]) => {
  const [subtotal, setSubtotal] = useState<number>(0);
  const [taxes, setTaxes] = useState<number>(0);
  const [shippingRate, setShippingRate] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    setSubtotal(
      cartProducts.reduce(
        (total, product) => total + product.product.price * product.quantity,
        0,
      ),
    );
    setTaxes(
      (cartProducts.reduce(
        (total, product) => total + product.product.price * product.quantity,
        0,
      ) *
        10.1) /
        100,
    );
    setShippingRate(5);
  }, [cartProducts]);

  useEffect(() => {
    setTotal(subtotal + taxes + shippingRate);
  }, [subtotal, taxes, shippingRate]);

  return {
    subtotal,
    taxes,
    shippingRate,
    total,
  };
};
