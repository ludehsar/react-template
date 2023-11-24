import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AxiosProvider, CartProvider } from './contexts';

export interface AppProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AxiosProvider>
        <CartProvider>{children}</CartProvider>
      </AxiosProvider>
    </QueryClientProvider>
  );
};
