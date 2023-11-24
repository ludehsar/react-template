import { CartProducts, CartSummary, Layout } from '@/components';
import React from 'react';

export const Cart: React.FC = () => {
  return (
    <Layout>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="md:w-3/4">
              <div className="shadow-md mb-4 rounded-lg bg-white p-6">
                <CartProducts />
              </div>
            </div>
            <div className="md:w-1/4">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
