import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { AppEndpoints } from '@/utils';
import { Badge } from '..';
import { useCart } from '@/contexts';

export const Nav: React.FC = () => {
  const { cartProducts } = useCart();

  return (
    <header className="sticky top-0 z-20 border-b border-primary-dark border-opacity-[7%] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-2 pt-4 md:pt-6">
        <Link to={AppEndpoints.HOME}>
          <h1 className="font-primary flex text-center text-2xl font-extrabold leading-relaxed text-primary-dark">
            My Awesome Shop
          </h1>
        </Link>
        <Link
          to={AppEndpoints.CART}
          className="relative flex items-center gap-2 text-md text-primary-dark"
        >
          <CiShoppingCart size={22} /> Cart
          {cartProducts.length > 0 && (
            <Badge
              size="small"
              position="top-right"
              className="p-2 text-md text-white"
            >
              {cartProducts.length}
            </Badge>
          )}
        </Link>
      </div>
    </header>
  );
};
