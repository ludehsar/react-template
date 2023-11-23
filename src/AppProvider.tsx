import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export interface AppProviderProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
