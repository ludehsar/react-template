import React from 'react';
import { Link } from 'react-router-dom';

export const _404: React.FC = () => {
  return (
    <div className="lg:px-24 lg:py-24 md:px-44 py-24 md:gap-28 flex h-screen flex-col-reverse items-center justify-center gap-16 px-4 md:py-20 lg:flex-row">
      <div className="xl:pt-24 relative w-full pb-12 lg:pb-0 xl:w-1/2">
        <div className="relative">
          <div className="absolute">
            <div className="">
              <h1 className="my-2 text-2xl font-bold text-secondary-dark">
                Looks like you've found the doorway to the great nothing
              </h1>
              <p className="my-2 text-md text-muted">
                Sorry about that! Please visit our hompage to get where you need
                to go.
              </p>
              <button className="md my-2 rounded border bg-primary px-8 py-4 text-center text-md text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-90 sm:w-full lg:w-auto">
                <Link to="/">Take me there!</Link>
              </button>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  );
};
