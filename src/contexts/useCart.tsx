import { createContext, useContext, useState } from 'react';

export interface SingleCartProduct {
  productId: number;
  quantity: number;
}

export interface CartContextProps {
  addToCart: (productId: number) => void;
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

  const addToCart = (productId: number) => {
    if (cartProducts.find((product) => product.productId === productId)) {
      return;
    }
    setCartProducts((prevProducts) => [
      ...prevProducts,
      { productId, quantity: 1 },
    ]);
  };

  const increaseQuantity = (productId: number) => {
    const productInd = cartProducts.findIndex(
      (product) => product.productId === productId,
    );
    if (productInd >= 0) {
      setCartProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        newProducts[productInd].quantity++;
        return newProducts;
      });
    }
  };

  const decreaseQuantity = (productId: number) => {
    const productInd = cartProducts.findIndex(
      (product) => product.productId === productId,
    );
    if (productInd >= 0) {
      setCartProducts((prevProducts) => {
        const newProducts = [...prevProducts];
        newProducts[productInd].quantity--;
        if (newProducts[productInd].quantity <= 0) {
          return newProducts.filter(
            (product) => product.productId !== productId,
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
