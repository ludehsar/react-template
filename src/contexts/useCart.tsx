import { ProductApiData } from '@/types';
import { createContext, useContext, useState } from 'react';

export interface SingleCartProduct {
  product: ProductApiData;
  quantity: number;
}

export interface CartContextProps {
  addToCart: (product: ProductApiData) => void;
  cartProducts: SingleCartProduct[];
  decreaseQuantity: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
}

const CartContext = createContext<CartContextProps>({
  addToCart: () => {},
  cartProducts: [],
  decreaseQuantity: () => {},
  increaseQuantity: () => {},
});

export function CartProvider({ children }: React.PropsWithChildren) {
  const cartProvider = useCartProvider();

  return (
    <CartContext.Provider value={cartProvider}>{children}</CartContext.Provider>
  );
}

const useCartProvider = () => {
  const [cartProducts, setCartProducts] = useState<SingleCartProduct[]>([]);

  const addToCart = (product: ProductApiData) => {
    if (cartProducts.find((p) => p.product.id === product.id)) {
      return;
    }
    setCartProducts((prevProducts) => [
      ...prevProducts,
      { product, quantity: 1 },
    ]);
  };

  const increaseQuantity = (productId: number) => {
    const productInd = cartProducts.findIndex(
      (product) => product.product.id === productId,
    );
    if (productInd >= 0) {
      const newQuantity = cartProducts[productInd].quantity + 1;
      setCartProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        newProducts[productInd].quantity = newQuantity;
        return newProducts;
      });
    }
  };

  const decreaseQuantity = (productId: number) => {
    const productInd = cartProducts.findIndex(
      (product) => product.product.id === productId,
    );
    if (productInd >= 0) {
      const newQuantity = cartProducts[productInd].quantity - 1;
      setCartProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        newProducts[productInd].quantity = newQuantity;
        if (newProducts[productInd].quantity <= 0) {
          return newProducts.filter(
            (product) => product.product.id !== productId,
          );
        }
        return newProducts;
      });
    }
  };

  return {
    cartProducts,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
  };
};

export const useCart = () => {
  return useContext(CartContext);
};
