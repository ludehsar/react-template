import React from 'react';

export interface PageTitleProps {
  text: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({ text }) => {
  return (
    <h1 className="font-primary mt-4 py-2 text-center text-4xl font-extrabold leading-relaxed text-primary sm:py-4">
      {text}
    </h1>
  );
};
