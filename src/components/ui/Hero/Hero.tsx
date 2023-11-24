import React from 'react';
import classNames from 'classnames';

export interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        className,
        'flex flex-col items-center justify-center gap-4',
      )}
    >
      {children}
    </div>
  );
};

export const HeroTitle: React.FC<HeroProps> = ({ children, className }) => (
  <h1
    className={classNames(
      className,
      'mb-7 text-center font-serif text-4xl font-bold text-primary-dark dark:text-white md:text-6xl',
    )}
  >
    {children}
  </h1>
);

export const HeroSubtitle: React.FC<HeroProps> = ({ children, className }) => (
  <h3
    className={classNames(
      className,
      'mb-14 text-center text-xl leading-[2.8rem] text-primary-dark dark:text-secondary',
    )}
  >
    {children}
  </h3>
);

export default Hero;
