import { Layout, Products, StoreHeading } from '@/components';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <Layout>
      <StoreHeading />
      <Products />
    </Layout>
  );
};
