import React from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export interface ButtonProps
  extends VariantProps<typeof buttonClasses>,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

const buttonClasses = cva(
  'relative inline-flex items-center justify-between rounded-md transition-[shadow,text-shadow] active:opacity-70',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        'primary-dark': 'bg-primary-dark',
        secondary: 'bg-secondary text-black',
        text: 'bg-transparent text-black-900 border-0',
        outlined:
          'border border-primary bg-transparent text-black-900 active:bg-stroke',
      },
      size: {
        medium: 'py-2 px-10 gap-4',
        large: 'h-15 px-12 gap-6',
        small: 'py-1 px-2 gap-2',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  },
);

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant,
  size,
  className,
  leftIcon,
  rightIcon,
  ...props
}) => {
  return href ? (
    <Link
      className={classNames(buttonClasses({ variant, size }), className)}
      to={href}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </Link>
  ) : (
    <button
      className={classNames(
        buttonClasses({ variant, size }),
        className,
        props.disabled && 'opacity-20 active:opacity-20',
      )}
      onClick={onClick}
      {...props}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};
