import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from 'react-icons/ci';
import { AppEndpoints } from '@/utils';

export const Nav: React.FC = () => {
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
          className="flex items-center gap-2 text-md text-primary-dark"
        >
          <CiShoppingCart size={22} /> Cart
        </Link>
      </div>
    </header>
  );
};
