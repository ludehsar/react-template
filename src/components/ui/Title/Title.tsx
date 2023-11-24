import { VariantProps, cva } from 'class-variance-authority';
import classNames from 'classnames';
import React from 'react';

export interface TitleProps extends VariantProps<typeof titleClasses> {
  children?: React.ReactNode;
  className?: string;
}

const titleClasses = cva('font-serif leading-[130%]', {
  variants: {
    variant: {
      primary: 'text-primary',
      'primary-dark': 'text-primary-dark dark:text-white',
      'secondary-dark': 'text-secondary-dark dark:text-white',
      gradiant: 'text-gradiant',
    },
    size: {
      large: 'text-3xl sm:text-4xl md:text-5xl font-semibold',
      medium: 'text-2xl sm:text-3xl font-bold',
      small: 'text-lg font-bold leading-[-0.24px]',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  size,
  variant,
}) => {
  return (
    <h1 className={classNames(titleClasses({ size, variant }), className)}>
      {children}
    </h1>
  );
};
