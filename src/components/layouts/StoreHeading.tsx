import React from 'react';
import { PageTitle } from '.';

export const StoreHeading: React.FC = () => {
  return (
    <div className="">
      <PageTitle text="My Awesome Shop!" />
      <p className="mx-auto max-w-xl px-2 text-center text-md text-muted">
        Get great deals shopping with us!
      </p>
    </div>
  );
};
