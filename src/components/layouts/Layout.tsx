import React from 'react';
import { Nav } from './Nav';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col justify-start">
      <Nav />
      <main>{children}</main>
    </div>
  );
};
