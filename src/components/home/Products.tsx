import React from 'react';
import { Container } from '..';
import { ProductCard } from './ProductCard';
import { useAxios } from '@/contexts';
import { useQuery } from 'react-query';
import { ApiEndpoints, queryKey } from '@/utils';
import { ProductApiData } from '@/types';

export const Products: React.FC = () => {
  const axios = useAxios();
  const { data: productsData } = useQuery(
    queryKey.products,
    () => axios?.get<ProductApiData[]>(ApiEndpoints.PRODUCTS),
  );
  return (
    <Container className="mx-auto mb-10 grid max-w-screen-lg grid-cols-4 gap-x-4 gap-y-4">
      {productsData?.data.map((product) => (
        <ProductCard
          key={product.id}
          description={product.description}
          imageSrc={product.image}
          price={product.price}
          title={product.title}
        />
      ))}
    </Container>
  );
};
