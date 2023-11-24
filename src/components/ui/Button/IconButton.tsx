import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface IconButtonProps extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const buttonClasses = cva(
  'inline-flex items-center justify-between rounded-full transition-[shadow,text-shadow] active:opacity-70',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        'primary-dark': 'bg-primary-dark dark:bg-white dark:bg-opacity-[7%]',
        secondary: 'bg-secondary text-black',
        text: 'bg-transparent text-black-900 border-0',
        outlined:
          'border border-primary bg-transparent text-black-900 active:bg-stroke',
      },
      size: {
        small: 'p-1',
        medium: 'p-2',
        large: 'p-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);

export const IconButton: React.FC<IconButtonProps> = ({
  children,
  href,
  onClick,
  variant,
  size,
  className,
}) =>
  href ? (
    <Link
      className={classNames(buttonClasses({ variant, size }), className)}
      to={href}
    >
      {children}
    </Link>
  ) : onClick ? (
    <button
      className={classNames(buttonClasses({ variant, size }), className)}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <div
      className={classNames(buttonClasses({ variant, size }), className)}
      onClick={onClick}
    >
      {children}
    </div>
  );
